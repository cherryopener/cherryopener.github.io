# 지식따개 (가제)

매일 하나씩, 재미있게 따 보는 지식. 물리학에서 AI, 프로그래밍, 외국어, 작곡, 필름 사진까지 배운 것과 배울 것을 책 형태로 정리하는 서재와 사진 앨범입니다.

- 주소: <https://cherryopener.github.io/>
- 사진은 별도 저장소 [`cherryopener/photos`](https://github.com/cherryopener/photos)에 있고, `/photos/` 경로로 불러옵니다.
- 작업 규칙은 [CLAUDE.md](CLAUDE.md), 결정 사항은 [docs/DECISIONS.md](docs/DECISIONS.md), 구축 계획은 [docs/PLAN.md](docs/PLAN.md)에 있습니다.

> 이 사이트의 엔진(레이아웃, 책 페이지, 자동 번호, 실험 틀, 실험 모음)은 친구의 [`yhlee52/bookshelf`](https://github.com/yhlee52/bookshelf)에서 허락을 받아 가져왔습니다.

---

## 1. 내 컴퓨터에서 보기

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

수식(KaTeX), 3D(three.js), 글꼴은 CDN에서 받아 오므로 인터넷 연결이 필요합니다.

## 2. 배포

`main` 브랜치에 push하면 GitHub Pages가 1~2분 뒤 자동으로 다시 배포합니다. 저장소 Settings → Pages는 `Deploy from a branch`, `main`, `/ (root)`입니다.

- 사용자 사이트(`cherryopener.github.io`)이므로 `404.html`의 `FORCE_BASE`는 `"/"`입니다.
- `.nojekyll`은 Jekyll 변환을 끕니다. 지우지 마세요.
- GitHub Pages는 대소문자를 구분합니다. `Ch01.html`과 `ch01.html`을 섞어 쓰지 마세요.

## 3. 폴더 구조

```
index.html              홈
library/index.html      전체 책장 (분야·상태 필터, 검색)
lab/index.html          실험실 — 모든 실험 목록
lab/view.html?id=…      실험 하나를 크게 보기
404.html                없는 주소용 페이지
data/
  site.js               사이트 이름·소개 문구·사진 주소(photoBase)
  books.js              ★ 분야·책·챕터 목록과 난이도(level) — 사이트 전체의 목차
books/<책 id>/          책 홈(index.html), chapters/, GUIDE.md(집필 가이드)
templates/              장 틀: textbook(이론서) · chapter(실험 중심) · paper(논문 리뷰)
assets/css/             공통·서재·책 디자인
assets/js/              경로·테마·검색, 책 레이아웃, 표지, 차트, 3D 첫 화면
assets/sims/            실험 모음 (dl·ts → AI 분야, phys·math → 물리 분야)
docs/                   결정 사항과 구축 계획
```

## 사이트 이름 바꾸기

이름은 아직 가제입니다. 확정하면 두 곳을 바꿉니다.

1. `data/site.js`의 `name` — 상단바, 꼬리말, 홈
2. HTML `<title>`과 설명에 직접 적힌 이름

```bash
grep -rl "지식따개" --include="*.html" . | xargs sed -i '' 's/지식따개/새이름/g'
```

---

## 4. 내용 채우기

### 4-1. 슬롯 채우기

점선 상자로 보이는 곳이 **슬롯**(빈자리)입니다. HTML에서 `class="slot"`이 붙은 요소입니다.

```html
<!-- 지금 -->
<p class="slot" data-slot="본문">도입 문단 — …</p>
<!-- 채운 뒤: class와 data-slot을 지우고 내용을 쓴다 -->
<p>시계열이란 시간 순서로 관측한 값의 나열이다. …</p>
```

### 4-2. 챕터 제목 바꾸기

제목·설명은 `data/books.js`에서만 바꾸면 됩니다. 챕터 페이지, 책 홈의 카드, 서랍 목차, 이전/다음 링크, 검색에 자동 반영됩니다.

```js
{ slug: "ch01", num: "01", status: "draft", title: "시계열 데이터의 모양", desc: "추세·계절성·잡음", sims: ["ts-decompose"] },
```

- `status`: `"slot"`(빈 틀) → `"draft"`(작성 중) → `"done"`(완성). 카드의 배지가 바뀝니다.
- 논문 리뷰는 `paper: { year: 2017, venue: "NeurIPS", tags: ["Transformer"] }`를 채우면 책 홈의 **논문 연대표**와 **표**에 나타납니다.

### 4-3. 새 챕터 추가

1. `templates/chapter.html`(논문이면 `templates/paper.html`)을 `books/<책>/chapters/<slug>.html`로 복사
2. 파일 안 `<body ...>`의 `data-book`, `data-field`, `data-chapter`를 고침
   (예: `data-book="physics" data-field="phys" data-chapter="ch14"`)
3. `data/books.js`의 그 책 `chapters` 배열에 한 줄 추가

### 4-4. 새 책 추가

1. `data/books.js`의 `books`에 항목 추가 (`status: "planned"`면 표지만 보이고 페이지는 없어도 됨)
2. 페이지를 만들 때는 이미 있는 책 폴더를 통째로 복사해 이름을 바꾸고, `index.html`과 챕터의 `data-book`을 새 id로 고칩니다. 첫 책의 홈(`index.html`)은 [`yhlee52/bookshelf`](https://github.com/yhlee52/bookshelf)의 `books/*/index.html` 구성을 참고해 새로 씁니다.
3. 새 분야가 필요하면 `fields`에 추가하고, 강조색은 `assets/css/base.css`의 `body[data-field="…"]` 규칙을 하나 더 만듭니다.

### 4-5. 본문에 쓸 수 있는 부품

| 하고 싶은 것 | HTML |
|---|---|
| 실험 넣기 | `<div data-sim="optimizers"></div>` (id는 실험실 페이지의 각 실험 하단에 표시) |
| 실험 제목·안내 바꾸기 | `<div data-sim="fft" data-title="새 제목" data-note="해볼 것: …"></div>` |
| 수식 | 인라인 `\( E = mc^2 \)`, 블록 `<div class="formula">\[ … \]</div>` |
| 결과 막대 차트 | `<div data-chart='{"type":"bar","labels":["A","B"],"series":[{"name":"기준선","data":[60,70]},{"name":"제안","data":[65,78]}],"highlight":"제안"}'></div>` |
| 꺾은선 차트 | 위와 같고 `"type":"line"` |
| 리뷰 평가 레이더 | `<div data-radar='{"신규성":4,"명확성":3,"재현성":2}' data-max="5"></div>` |
| 강조 상자 | `<div class="callout tip"><strong>제목</strong><p>…</p></div>` (`tip` · `warn` · `deep` · `ml`) |
| 정의·정리·예제·수학 상자 (이론서) | `<div class="box def" id="def-…"><div class="box-h">이름</div>…</div>` (`def` · `thm` · `ex` · `math`, 번호 자동) |
| 번호 식과 참조 (이론서) | `<div class="formula" id="eq-…">\[ … \]</div>`, 참조는 `<a class="ref" href="#eq-…"></a>` |
| 증명·풀이 접기, 연습문제 | `<details class="proof">`, `<div class="prob" data-level="2">…<details class="sol">…</details></div>` — `templates/textbook.html` 참고 |
| 퀴즈 | 챕터 맨 아래 예시 참고 — 정답 보기에 `data-correct` |
| 그림 | `<figure class="diagram"><svg viewBox="0 0 800 300">…</svg><figcaption>…</figcaption></figure>` |

SVG 그림 안에서는 테마를 따라 색이 바뀌는 클래스를 쓸 수 있습니다:
`t`(글자) `t-dim` `t-mono` `t-acc` · `s-line`(선) `s-acc` · `f-surface`(면) `f-acc` `f-acc-soft` · `flow-dash`(흐르는 점선)

---

## 5. 새 실험 만들기

`assets/sims/` 아래 파일(또는 새 파일)에 `Lab.register`를 추가합니다. 새 파일을 만들면 각 HTML의 `<script defer src=".../assets/sims/...">` 목록에도 추가하세요.

```js
Lab.register({
  id: "my-sim",                    // data-sim="my-sim"으로 부름
  field: "phys",                   // phys | ai | prog | lang | music | photo | misc
  title: "내 실험 — 부제",
  desc: "실험실 카드에 보일 한 줄 설명",
  tags: ["태그"],
  thumb: "curve",                  // 썸네일 모양: curve bars heat scatter network orbit wave field surface arcs windows particles pendulum grid
  note: "해볼 것: …",
  mount(S) {
    const st = { k: 1 };
    const cv = S.canvas({ aspect: 0.5 }, (ctx, w, h) => {
      const P = VZ.palette();      // 테마 색
      VZ.chart(ctx, null, {
        x: [0, 10], y: [-1, 1],
        series: [{ data: VZ.linspace(0, 10, 200).map((x) => [x, Math.sin(st.k * x)]), color: P.accent }],
      });
    });
    S.range({ label: "진동수 k", min: 0.5, max: 5, step: 0.1, value: st.k, onInput: (v) => { st.k = v; cv.redraw(); } });
  },
});
```

`S`가 제공하는 것: `canvas` · `split` · `panel` · `range` · `select` · `seg` · `check` · `text` · `button` · `stats` · `legend` · `note` · `loop`(애니메이션) · `three`(3D).
기존 실험들의 코드가 모두 예제입니다.

---

## 6. 꾸미기

- 사이트 이름·소개·저자·GitHub 주소: `data/site.js`
- 분야 색: `data/books.js`의 `fields[].color` (표지·칩) + `assets/css/base.css`의 `body[data-field]` (책 페이지 강조색)
- 표지 그림: `data/books.js`의 `motif` (`attention` · `waves` · `orbit` · `field` · `network` · `loop` · `levels` · `bell` · `lattice` · `blank`), 새 그림은 `assets/js/covers.js`에 추가
- 서재 색(종이·책장): `assets/css/shelf.css` 맨 위
