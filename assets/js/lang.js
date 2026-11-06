/* ==========================================================================
   외국어 책 부품 — 발음 듣기 버튼, 대화 도구, 표 감싸기
   - 버튼이 붙는 곳: span.say · .dialog .line > p[lang="de"] · table.vocab 본문 줄의 첫 칸
   - 읽기: Web Speech API(speechSynthesis), 독일어 음성(de-DE 우선), 속도 0.9
   - speechSynthesis가 없으면 버튼과 대화 도구 중 '듣기' 쪽은 만들지 않는다
     (번역 가리기/보이기는 소리와 무관하므로 그대로 둔다)
   - 마크업 규칙과 예시는 templates/language.html 참고
   ========================================================================== */
(function () {
  "use strict";
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const synth = window.speechSynthesis;
  const canSpeak = !!(synth && window.SpeechSynthesisUtterance);
  const LANG = "de-DE", RATE = 0.9;

  const ICON = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4 9.5v5h3.5L12 19V5L7.5 9.5H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  /* ------------------------------------------------------------ 음성 고르기 */
  // 음성 목록은 늦게 도착할 수 있다(voiceschanged). 쓸 때마다 읽되, 도착하면 캐시를 비운다
  let voiceCache = null;
  function germanVoices() {
    if (voiceCache && voiceCache.length) return voiceCache;
    const score = (v) => (/^de[-_]DE$/i.test(v.lang) ? 4 : 0) + (/premium|enhanced|natural|neural|google/i.test(v.name) ? 2 : 0) + (v.default ? 1 : 0);
    const list = (synth.getVoices() || []).filter((v) => /^de([-_]|$)/i.test(v.lang));
    voiceCache = list.map((v, i) => ({ v, i })).sort((a, b) => score(b.v) - score(a.v) || a.i - b.i).map((x) => x.v);
    // 같은 음성이 중복 등록된 경우를 거른다
    const seen = new Set();
    voiceCache = voiceCache.filter((v) => { const k = v.voiceURI || v.name; if (seen.has(k)) return false; seen.add(k); return true; });
    return voiceCache;
  }

  /* ------------------------------------------------------------ 읽을 글자 뽑기 */
  // 버튼, 발음 표기(.ipa/.hangul)는 빼고 읽는다. 관사(.g)는 단어의 일부이므로 읽는다
  function speakText(el) {
    const c = el.cloneNode(true);
    c.querySelectorAll(".say-btn, .ipa, .hangul, .katex, script, style").forEach((n) => n.remove());
    let t = c.textContent.replace(/\s+/g, " ").trim();
    // 단어장의 복수형 표기(", -", ", -n", ", ¨-er", ", =e")는 소리 내어 읽지 않는다
    t = t.replace(/,\s*[¨"=\-–]+\p{L}*(\s*\/.*)?$/u, "").replace(/\s*\((Pl|pl)\.?\)\s*$/, " ");
    // 분리 동사 표시(auf|wachen)와 괄호 속 보충(schlafen (schläft))도 읽지 않는다
    t = t.replace(/\|/g, "").replace(/\s*\([^)]*\)/g, "");
    return t.trim();
  }

  /* ------------------------------------------------------------ 재생기: 한 번에 하나만 */
  let token = 0;       // 바뀌면 이전 재생의 콜백은 무시한다
  let cleanup = null;  // 현재 재생의 표시(버튼 색, 줄 강조)를 되돌리는 함수

  function stop() {
    token++;
    if (cleanup) { const f = cleanup; cleanup = null; f(); }
    if (canSpeak) synth.cancel();
  }

  /**
   * items: [{ text, voice, mark(on) }] 를 차례로 읽는다. ui(on): 시작/끝 표시.
   * 이미 말하는 중이면 cancel 직후 speak가 씹히는 브라우저(Chrome)가 있어 잠깐 뒤에 시작한다.
   */
  function play(items, ui) {
    const busy = synth.speaking || synth.pending;
    stop();
    const my = token;
    cleanup = () => { ui(false); items.forEach((it) => it.mark && it.mark(false)); };
    ui(true);
    const next = (i) => {
      if (my !== token) return;
      if (i >= items.length) { if (cleanup) { const f = cleanup; cleanup = null; f(); } return; }
      const it = items[i];
      items.forEach((x, j) => x.mark && x.mark(j === i));
      const u = new SpeechSynthesisUtterance(it.text);
      u.lang = LANG; u.rate = RATE;
      const v = it.voice || germanVoices()[0];
      if (v) { u.voice = v; u.lang = v.lang || LANG; }
      const done = () => next(i + 1);
      u.onend = done;
      u.onerror = (e) => { if (my !== token) return; if (e && (e.error === "not-allowed" || e.error === "synthesis-unavailable")) { stop(); return; } done(); };
      try { synth.speak(u); } catch (err) { stop(); }
    };
    if (busy) setTimeout(() => next(0), 60); else next(0);
  }

  /* ------------------------------------------------------------ 발음 듣기 버튼 */
  function makeBtn() {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "say-btn";
    b.setAttribute("aria-label", "발음 듣기");
    b.title = "발음 듣기";
    b.innerHTML = ICON;
    return b;
  }

  function addSayButtons() {
    // 앞에서 버튼을 단 요소 안팎의 .say는 건너뛴다(중복 방지). 대화 줄·단어장 칸을 먼저 처리한다
    const hosts = [
      ...$$(".dialog .line > p[lang]"),
      ...$$("table.vocab tbody tr > td:first-child"),
      ...$$(".say"),
    ];
    const done = new Set();
    hosts.forEach((el) => {
      if (done.has(el) || el.closest("[data-say-host]") || el.querySelector("[data-say-host]")) return;
      if (!speakText(el)) return;
      el.setAttribute("data-say-host", "");
      done.add(el);
      const btn = makeBtn();
      // 한 줄 글(.say)은 바로 뒤에, 문단·칸은 그 안의 끝에 둔다
      if (el.matches(".say")) el.after(btn); else el.append(btn);
      btn.addEventListener("click", (e) => {
        e.preventDefault(); e.stopPropagation();
        if (btn.getAttribute("aria-pressed") === "true") { stop(); return; }
        play([{ text: speakText(el), mark: (on) => el.classList.toggle("say-on", on) }], (on) => {
          btn.setAttribute("aria-pressed", on ? "true" : "false");
          btn.classList.toggle("playing", on);
        });
      });
    });
  }

  /* ------------------------------------------------------------ 대화 */
  function setupDialogs() {
    $$(".dialog").forEach((dlg) => {
      const lines = $$(":scope > .line", dlg);
      if (!lines.length) return;
      const bar = document.createElement("div");
      bar.className = "dialog-bar";
      const hasTr = !!dlg.querySelector(".tr");

      let playBtn = null;
      if (canSpeak) {
        playBtn = document.createElement("button");
        playBtn.type = "button";
        playBtn.className = "dlg-btn dlg-play";
        playBtn.textContent = "▶ 전체 듣기";
        bar.append(playBtn);
        playBtn.addEventListener("click", () => {
          if (playBtn.classList.contains("playing")) { stop(); return; }
          const voices = germanVoices();
          const who = [];
          const items = lines.map((ln) => {
            const p = ln.querySelector("p[lang]");
            if (!p || !speakText(p)) return null;
            const name = ln.dataset.who || "";
            if (!who.includes(name)) who.push(name);
            // 음성이 둘 이상이면 화자마다 다른 음성, 아니면 기본 음성 하나
            const voice = voices.length >= 2 ? voices[who.indexOf(name) % voices.length] : voices[0];
            return { text: speakText(p), voice, mark: (on) => ln.classList.toggle("speaking", on) };
          }).filter(Boolean);
          if (!items.length) return;
          play(items, (on) => {
            playBtn.classList.toggle("playing", on);
            playBtn.textContent = on ? "■ 멈추기" : "▶ 전체 듣기";
          });
        });
      }

      if (hasTr) {
        const trBtn = document.createElement("button");
        trBtn.type = "button";
        trBtn.className = "dlg-btn dlg-tr";
        trBtn.textContent = "번역 가리기";
        trBtn.setAttribute("aria-pressed", "false");
        bar.append(trBtn);
        trBtn.addEventListener("click", () => {
          const hide = !dlg.classList.contains("tr-hidden");
          dlg.classList.toggle("tr-hidden", hide);
          trBtn.textContent = hide ? "번역 보이기" : "번역 가리기";
          trBtn.setAttribute("aria-pressed", hide ? "true" : "false");
          $$(".tr.show", dlg).forEach((t) => t.classList.remove("show"));
        });
        // 가린 상태에서 한 줄의 번역만 눌러서 확인할 수 있다
        dlg.addEventListener("click", (e) => {
          const t = e.target.closest(".tr");
          if (t && dlg.classList.contains("tr-hidden")) t.classList.toggle("show");
        });
      }
      if (bar.children.length) dlg.prepend(bar);
    });
  }

  /* ------------------------------------------------------------ 표: 좁은 화면에서 가로로 넘치면 표 안에서만 스크롤 */
  function wrapTables() {
    $$("table.vocab, table.conj").forEach((t) => {
      if (t.parentElement && t.parentElement.classList.contains("table-wrap")) return;
      const w = document.createElement("div");
      w.className = "table-wrap";
      t.before(w);
      w.append(t);
    });
  }

  function init() {
    wrapTables();
    setupDialogs();
    if (canSpeak) {
      addSayButtons();
      if (synth.addEventListener) synth.addEventListener("voiceschanged", () => { voiceCache = null; });
      else synth.onvoiceschanged = () => { voiceCache = null; };
      synth.getVoices(); // 일부 브라우저는 처음 호출해야 목록을 불러오기 시작한다
      addEventListener("pagehide", () => synth.cancel());
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
