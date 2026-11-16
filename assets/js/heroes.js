/* ==========================================================================
   히어로 장면 — 책 홈과 서재 홈의 첫 화면 그림
     <div class="hero-stage" data-hero="network"></div>   3D 신경망 + 신호 펄스 (논문 리뷰)
     <div class="hero-stage" data-hero="loop"></div>      3D 모델·도구의 행동·관찰 루프와 바깥 장기 실행 루프 (LLM 에이전트)
     <div class="hero-stage" data-hero="ribbons"></div>   3D 시계열 폭포 (시계열)
     <div class="hero-stage" data-hero="orbits"></div>    3D 행성 궤도 (물리)
     <div class="hero-stage" data-hero="orbital"></div>   3D 수소 오비탈 전자 구름 (양자역학)
     <div class="hero-stage" data-hero="gauss"></div>     3D 2변량 정규 분포 곡면과 쌓이는 표본 (통계)
     <div class="hero-stage" data-hero="svd"></div>       3D 단위 구가 회전·늘이기·회전을 거쳐 타원체가 되는 특잇값 분해 (선형대수)
     <canvas class="bg" data-hero="qfield"></canvas>       2D 양자장: 출렁이는 점 격자 + 쌍생성·쌍소멸 (서재 홈 배경)
   three.js를 못 불러오면 조용히 안내 문구만 남긴다.
   ========================================================================== */
(function () {
  "use strict";
  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hexOf = (name) => new THREE.Color(VZ.color(name) || "#888");

  function fail(el) {
    const p = document.createElement("span");
    p.className = "hint";
    p.textContent = "3D 장면을 불러오지 못했습니다 (인터넷 연결 확인)";
    el.appendChild(p);
  }

  /* ------------------------------------------------------------ 신경망 */
  function network(el) {
    VZ.three(el, { camera: [8.5, 4.2, 9.5], target: [0, 0, 0], fov: 38, autoRotate: !reduced, autoRotateSpeed: 0.7, pan: false, minDistance: 7, maxDistance: 24 }).then((T) => {
      const { THREE, scene } = T;
      const shape = [[3, 3], [4, 4], [4, 4], [3, 3], [2, 1]];
      const layers = shape.map(([a, b], li) => {
        const out = [];
        for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) out.push(new THREE.Vector3((li - 2) * 2.4, (i - (a - 1) / 2) * 1.05, (j - (b - 1) / 2) * 1.05));
        return out;
      });
      const nodeMat = () => new THREE.MeshStandardMaterial({ color: hexOf("accent"), emissive: hexOf("accent"), emissiveIntensity: 0.15, roughness: 0.35 });
      const nodes = layers.map((L) => L.map((p) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 14), nodeMat()); m.position.copy(p); scene.add(m); return m; }));
      const pos = [];
      layers.slice(0, -1).forEach((L, li) => L.forEach((a) => layers[li + 1].forEach((b) => pos.push(a.x, a.y, a.z, b.x, b.y, b.z))));
      const eg = new THREE.BufferGeometry();
      eg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      const edgeMat = new THREE.LineBasicMaterial({ color: hexOf("text-dim"), transparent: true, opacity: 0.16 });
      scene.add(new THREE.LineSegments(eg, edgeMat));
      const pulseMat = new THREE.MeshBasicMaterial({ color: hexOf("accent-2") });
      const pulses = Array.from({ length: 36 }, () => {
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), pulseMat);
        scene.add(m);
        const p = { m, li: 0, a: 0, b: 0, t: Math.random() };
        p.li = Math.floor(Math.random() * (layers.length - 1));
        p.a = Math.floor(Math.random() * layers[p.li].length);
        p.b = Math.floor(Math.random() * layers[p.li + 1].length);
        return p;
      });
      T.onFrame((dt) => {
        pulses.forEach((p) => {
          p.t += dt * 1.1;
          if (p.t >= 1) {
            const hit = nodes[p.li + 1][p.b];
            hit.material.emissiveIntensity = 1.1;
            p.t = 0; p.li++; p.a = p.b;
            if (p.li >= layers.length - 1) { p.li = 0; p.a = Math.floor(Math.random() * layers[0].length); }
            p.b = Math.floor(Math.random() * layers[p.li + 1].length);
          }
          p.m.position.lerpVectors(layers[p.li][p.a], layers[p.li + 1][p.b], p.t);
        });
        nodes.flat().forEach((n) => (n.material.emissiveIntensity = Math.max(0.15, n.material.emissiveIntensity * Math.pow(0.08, dt))));
      });
      window.addEventListener("ls:theme", () => requestAnimationFrame(() => {
        nodes.flat().forEach((n) => { n.material.color = hexOf("accent"); n.material.emissive = hexOf("accent"); });
        edgeMat.color = hexOf("text-dim"); pulseMat.color = hexOf("accent-2");
      }));
      T.label("입력", [-4.8, 2.1, 0]); T.label("은닉층", [0, 2.6, 0]); T.label("출력", [4.8, 1.2, 0]);
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 에이전트 루프 */
  // 가운데 모델이 둘레의 도구를 부르고(행동, accent-2) 결과를 돌려받는다(관찰, accent).
  // 기울어진 바깥 고리는 체크포인트를 지나며 세션을 넘어 이어지는 장기 실행 루프
  function loop(el) {
    VZ.three(el, { camera: [7.8, 5.2, 9.6], target: [0, -0.2, 0], fov: 38, autoRotate: !reduced, autoRotateSpeed: 0.6, pan: false, minDistance: 7, maxDistance: 22 }).then((T) => {
      const { THREE, scene } = T;
      const R = 2.8, RO = 4.1, NT = 6, NC = 4;
      const glow = (name, base) => { const m = new THREE.MeshStandardMaterial({ color: hexOf(name), emissive: hexOf(name), emissiveIntensity: base, roughness: 0.35 }); m.userData = { name, base }; return m; };
      const circle = (r, n = 128) => { const a = []; for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2; a.push(r * Math.cos(t), 0, r * Math.sin(t)); } const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(a, 3)); return g; };

      const model = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 22), glow("accent", 0.2));
      scene.add(model);
      const toolPos = Array.from({ length: NT }, (_, k) => { const a = (k / NT) * Math.PI * 2; return new THREE.Vector3(R * Math.cos(a), 0, R * Math.sin(a)); });
      const tools = toolPos.map((p) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.44, 0.44), glow("accent", 0.12)); m.position.copy(p); scene.add(m); return m; });
      const spokes = [];
      toolPos.forEach((p) => spokes.push(0, 0, 0, p.x, p.y, p.z));
      const sg = new THREE.BufferGeometry();
      sg.setAttribute("position", new THREE.Float32BufferAttribute(spokes, 3));
      const lineMat = new THREE.LineBasicMaterial({ color: hexOf("text-dim"), transparent: true, opacity: 0.2 });
      scene.add(new THREE.LineSegments(sg, lineMat));
      scene.add(new THREE.LineLoop(circle(R), lineMat));

      const outer = new THREE.Group();
      outer.rotation.x = -0.24;
      scene.add(outer);
      const outerMat = new THREE.LineBasicMaterial({ color: hexOf("accent-2"), transparent: true, opacity: 0.35 });
      outer.add(new THREE.LineLoop(circle(RO), outerMat));
      const checkAt = Array.from({ length: NC }, (_, k) => ((k + 0.5) / NC) * Math.PI * 2);
      const checks = checkAt.map((a) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), glow("accent-2", 0.15)); m.position.set(RO * Math.cos(a), 0, RO * Math.sin(a)); outer.add(m); return m; });
      const runner = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshBasicMaterial({ color: hexOf("accent-2") }));
      outer.add(runner);

      const actMat = new THREE.MeshBasicMaterial({ color: hexOf("accent-2") });
      const obsMat = new THREE.MeshBasicMaterial({ color: hexOf("accent") });
      const O = new THREE.Vector3();
      const pulses = [0, 1, 2].map((i) => {
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), actMat);
        scene.add(m);
        return { m, k: i * 2, t: i / 3, out: true };
      });
      const place = (p) => { p.m.material = p.out ? actMat : obsMat; p.m.position.lerpVectors(O, toolPos[p.k], p.t); };
      pulses.forEach(place);
      let ang = 0;
      runner.position.set(RO, 0, 0);

      T.onFrame((dt) => {
        if (reduced) return;
        pulses.forEach((p) => {
          p.t += (p.out ? 1 : -1) * dt * 0.85;
          if (p.out && p.t >= 1) { p.t = 1; p.out = false; tools[p.k].material.emissiveIntensity = 1.1; }
          else if (!p.out && p.t <= 0) {
            p.t = 0; p.out = true; model.material.emissiveIntensity = 0.9;
            p.k = (p.k + 1 + Math.floor(Math.random() * (NT - 1))) % NT;
          }
          place(p);
        });
        const prev = ang;
        ang = (ang + dt * 0.42) % (Math.PI * 2);
        runner.position.set(RO * Math.cos(ang), 0, RO * Math.sin(ang));
        checkAt.forEach((a, i) => { if ((prev < a && ang >= a) || (ang < prev && (a > prev || a <= ang))) checks[i].material.emissiveIntensity = 1.3; });
        [model, ...tools, ...checks].forEach((n) => (n.material.emissiveIntensity = Math.max(n.material.userData.base, n.material.emissiveIntensity * Math.pow(0.08, dt))));
      });
      window.addEventListener("ls:theme", () => requestAnimationFrame(() => {
        [model, ...tools, ...checks].forEach((n) => { const c = hexOf(n.material.userData.name); n.material.color = c; n.material.emissive = c.clone(); });
        lineMat.color = hexOf("text-dim"); outerMat.color = hexOf("accent-2");
        actMat.color = hexOf("accent-2"); obsMat.color = hexOf("accent"); runner.material.color = hexOf("accent-2");
      }));
      T.label("모델", [0, 1.1, 0]); T.label("도구", [R, 0.75, 0]);
      T.label("장기 실행 루프", [-RO, 0.5, 0]);
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 시계열 폭포 */
  function ribbons(el) {
    VZ.three(el, { camera: [7, 4.6, 8.5], target: [0, 0, 0], fov: 38, autoRotate: !reduced, autoRotateSpeed: 0.45, pan: false, minDistance: 6, maxDistance: 22 }).then((T) => {
      const { THREE, scene } = T;
      const NS = 14, NP = 160, W = 9;
      const lines = [];
      const paint = () => {
        const a = hexOf("accent"), b = hexOf("accent-2");
        lines.forEach((l, k) => l.material.color.copy(a).lerp(b, k / (NS - 1)));
      };
      for (let k = 0; k < NS; k++) {
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(NP * 3), 3));
        const l = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 + 0.6 * (k / NS) }));
        scene.add(l); lines.push(l);
      }
      paint();
      const box = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.8, NS * 0.42), new THREE.MeshBasicMaterial({ color: hexOf("accent-2"), transparent: true, opacity: 0.07, depthWrite: false }));
      box.position.set(W / 2 - 1.1, 0.2, 0); scene.add(box);
      const grid = new THREE.GridHelper(10, 20, 0x888888, 0x888888);
      grid.material.transparent = true; grid.material.opacity = 0.12; grid.position.y = -1.4; scene.add(grid);
      let t = 0;
      T.onFrame((dt) => {
        if (!reduced) t += dt;
        lines.forEach((l, k) => {
          const arr = l.geometry.attributes.position.array, z = (k - (NS - 1) / 2) * 0.42, f = 1 + k * 0.08;
          for (let i = 0; i < NP; i++) {
            const x = -W / 2 + (W * i) / (NP - 1), s = x * 1.3 + t * 1.6;
            arr[i * 3] = x;
            arr[i * 3 + 1] = 0.55 * Math.sin(s * f + k) + 0.3 * Math.sin(s * 2.7 * f + k * 0.7) + 0.18 * Math.sin(s * 6.1 + k * 1.3) + 0.12 * Math.sin(x * 0.6 + k);
            arr[i * 3 + 2] = z;
          }
          l.geometry.attributes.position.needsUpdate = true;
        });
      });
      window.addEventListener("ls:theme", () => requestAnimationFrame(() => { paint(); box.material.color = hexOf("accent-2"); }));
      T.label("과거 →", [-3.8, 1.5, -3]); T.label("예측 구간", [W / 2 - 1.1, 1.9, 0]);
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 행성 궤도 */
  function orbits(el) {
    VZ.three(el, { camera: [0, 6.5, 11], target: [0, 0, 0], fov: 40, autoRotate: !reduced, autoRotateSpeed: 0.35, pan: false, minDistance: 6, maxDistance: 30 }).then((T) => {
      const { THREE, scene } = T;
      const sun = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 20), new THREE.MeshBasicMaterial({ color: 0xffc547 }));
      scene.add(sun);
      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.85, 32, 20), new THREE.MeshBasicMaterial({ color: 0xffb020, transparent: true, opacity: 0.18 }));
      scene.add(glow);
      scene.add(new THREE.PointLight(0xfff1c8, 1.2, 60));
      const sp = [];
      for (let i = 0; i < 700; i++) { const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, r = 40; sp.push(r * Math.sqrt(1 - u * u) * Math.cos(a), r * u, r * Math.sqrt(1 - u * u) * Math.sin(a)); }
      const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
      const starMat = new THREE.PointsMaterial({ color: hexOf("text-dim"), size: 0.12, transparent: true, opacity: 0.6 });
      scene.add(new THREE.Points(sg, starMat));
      const P = [[1.6, 0.06, 0.1, 0x9aa5b1, 0.12], [2.5, 0.02, 0.05, 0xe8b86a, 0.2], [3.5, 0.03, 0.12, 0x4f8ef7, 0.22], [4.8, 0.09, -0.08, 0xe0634a, 0.17], [6.6, 0.05, 0.2, 0xd9a066, 0.42]];
      const planets = P.map(([a, e, inc, color, r], k) => {
        const m = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 16), new THREE.MeshStandardMaterial({ color, roughness: 0.6 }));
        scene.add(m);
        const b = a * Math.sqrt(1 - e * e), pts = [];
        for (let i = 0; i <= 160; i++) { const th = (i / 160) * Math.PI * 2; pts.push(new THREE.Vector3(a * Math.cos(th) - a * e, 0, b * Math.sin(th)).applyAxisAngle(new THREE.Vector3(1, 0, 0), inc)); }
        const ring = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: hexOf("text-dim"), transparent: true, opacity: 0.25 }));
        scene.add(ring);
        return { m, a, e, b, inc, M: k * 1.7, n: Math.pow(a, -1.5) * 2.2, ring };
      });
      const axis = new THREE.Vector3(1, 0, 0);
      T.onFrame((dt) => {
        planets.forEach((p) => {
          if (!reduced) p.M += p.n * dt;
          let E = p.M; for (let i = 0; i < 5; i++) E = E - (E - p.e * Math.sin(E) - p.M) / (1 - p.e * Math.cos(E));
          p.m.position.set(p.a * (Math.cos(E) - p.e), 0, p.b * Math.sin(E)).applyAxisAngle(axis, p.inc);
        });
      });
      window.addEventListener("ls:theme", () => requestAnimationFrame(() => { starMat.color = hexOf("text-dim"); planets.forEach((p) => (p.ring.material.color = hexOf("text-dim"))); }));
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 수소 오비탈 (양자역학) */
  // 3d_z² 오비탈 ψ ∝ e^{-r/3}(2z² − x² − y²) (보어 반지름 단위)의 |ψ|²에서 기각 표집한 점 구름. 색은 ψ의 부호
  function orbital(el) {
    VZ.three(el, { camera: [7, 4.5, 8], target: [0, 0, 0], fov: 40, autoRotate: !reduced, autoRotateSpeed: 0.5, pan: false, minDistance: 5, maxDistance: 24 }).then((T) => {
      const { THREE, scene } = T;
      const psi = (x, y, z) => Math.exp(-Math.hypot(x, y, z) / 3) * (2 * z * z - x * x - y * y);
      const L = 22, N = 6000, S = 0.16;  // 표집 상자 [-L, L]³, 점 개수, 장면 축척
      let max = 0;
      for (let i = 0; i < 40000; i++) { const z = (Math.random() * 2 - 1) * L, v = psi(0, 0, z); max = Math.max(max, v * v); }
      const pos = [], sign = [];
      while (pos.length < N * 3) {
        const x = (Math.random() * 2 - 1) * L, y = (Math.random() * 2 - 1) * L, z = (Math.random() * 2 - 1) * L, v = psi(x, y, z);
        if (Math.random() * max < v * v) { pos.push(x * S, z * S, y * S); sign.push(v > 0); }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      const col = new Float32Array(N * 3);
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.75, depthWrite: false });
      scene.add(new THREE.Points(geo, mat));
      const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), new THREE.MeshBasicMaterial({ color: hexOf("text") }));
      scene.add(nucleus);
      const paint = () => {
        const a = hexOf("accent"), b = hexOf("accent-2");
        sign.forEach((s, i) => (s ? a : b).toArray(col, i * 3));
        geo.attributes.color.needsUpdate = true;
        nucleus.material.color = hexOf("text");
      };
      paint();
      window.addEventListener("ls:theme", () => requestAnimationFrame(paint));
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 2변량 정규 분포 (통계) */
  // 상관계수 R인 표준 2변량 정규 분포의 밀도 곡면과, 같은 분포에서 뽑혀 바닥에 쌓이는 표본.
  // 뒤쪽 두 벽에는 주변 분포 N(0, 1)의 곡선과 지금까지 뽑은 표본의 히스토그램(밀도 단위)을 그린다
  function gauss(el) {
    const far = el.clientWidth < 520 ? 1.4 : 1;   // 좁은 화면에서는 벽까지 들어오도록 카메라를 물린다
    VZ.three(el, { camera: [7.5 * far, 5.2 * far, 7.5 * far], target: [0, 0.7, 0], fov: 40, autoRotate: !reduced, autoRotateSpeed: 0.45, pan: false, minDistance: 6, maxDistance: 22 }).then((T) => {
      const { THREE, scene } = T;
      const R = 0.6, L = 3.2, HS = 11, HM = 5.5, N = 1500, BINS = 20;  // 상관계수, 그리는 범위 [-L, L], 곡면·주변 분포의 높이 배율, 표본 수, 히스토그램 칸 수
      const c = 1 - R * R;
      const pdf2 = (x, y) => Math.exp(-(x * x - 2 * R * x * y + y * y) / (2 * c)) / (2 * Math.PI * Math.sqrt(c));
      const pdf1 = (x) => Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI);
      const peak = pdf2(0, 0);
      // 장면 좌표: 데이터 x → X, 데이터 y → Z, 밀도 → 높이 Y
      // 곡면: x를 고정한 선과 y를 고정한 선으로 엮은 격자. 색은 높이를 따라 흐린 색에서 강조색으로
      const G = 28, K = 80, seg = [], hts = [];
      const at = (x, y) => { seg.push(x, pdf2(x, y) * HS, y); hts.push(pdf2(x, y) / peak); };
      for (let i = 0; i <= G; i++) {
        const u = -L + (2 * L * i) / G;
        for (let j = 0; j < K; j++) {
          const a = -L + (2 * L * j) / K, b = -L + (2 * L * (j + 1)) / K;
          at(u, a); at(u, b);
          at(a, u); at(b, u);
        }
      }
      const sg = new THREE.BufferGeometry();
      sg.setAttribute("position", new THREE.Float32BufferAttribute(seg, 3));
      const col = new Float32Array(hts.length * 3);
      sg.setAttribute("color", new THREE.BufferAttribute(col, 3));
      scene.add(new THREE.LineSegments(sg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.75 })));

      // 표본: 상자-뮐러로 뽑은 z1, z2에서 x = z1, y = R z1 + √(1 − R²) z2
      const gauss01 = () => { let u = 0; while (!u) u = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random()); };
      const xs = new Float32Array(N), ys = new Float32Array(N), pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const z1 = gauss01(), z2 = gauss01();
        xs[i] = z1; ys[i] = R * z1 + Math.sqrt(c) * z2;
        pos.set([xs[i], 0.02, ys[i]], i * 3);
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const ptMat = new THREE.PointsMaterial({ color: hexOf("accent-2"), size: 0.08, transparent: true, opacity: 0.85, depthWrite: false });
      scene.add(new THREE.Points(pg, ptMat));

      // 벽: p(x)는 z = −L, p(y)는 x = −L. 테두리, 주변 분포 곡선, 표본 히스토그램
      const HW = 2.6, frame = [], curve = [];
      [[-L, 0, -L], [L, 0, -L], [L, HW, -L], [-L, HW, -L], [-L, HW, L], [-L, 0, L]].forEach((p, i, A) => { if (i) frame.push(...A[i - 1], ...p); });
      frame.push(-L, 0, -L, -L, HW, -L);
      const frameMat = new THREE.LineBasicMaterial({ color: hexOf("text-dim"), transparent: true, opacity: 0.25 });
      scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(frame, 3)), frameMat));
      for (let j = 0; j < K; j++) {
        const a = -L + (2 * L * j) / K, b = -L + (2 * L * (j + 1)) / K;
        curve.push(a, pdf1(a) * HM, -L, b, pdf1(b) * HM, -L);
        curve.push(-L, pdf1(a) * HM, a, -L, pdf1(b) * HM, b);
      }
      const curveMat = new THREE.LineBasicMaterial({ color: hexOf("accent") });
      scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(curve, 3)), curveMat));
      const hpos = new Float32Array(BINS * 2 * 6 * 3);   // 칸마다 벽 두 개, 선분 세 개(꼭짓점 여섯 개)
      const hg = new THREE.BufferGeometry();
      hg.setAttribute("position", new THREE.BufferAttribute(hpos, 3));
      const histMat = new THREE.LineBasicMaterial({ color: hexOf("accent-2"), transparent: true, opacity: 0.7 });
      scene.add(new THREE.LineSegments(hg, histMat));
      const bw = (2 * L) / BINS;
      function hist(n) {
        const cx = new Array(BINS).fill(0), cy = new Array(BINS).fill(0);
        for (let i = 0; i < n; i++) {
          const a = Math.floor((xs[i] + L) / bw), b = Math.floor((ys[i] + L) / bw);
          if (a >= 0 && a < BINS) cx[a]++;
          if (b >= 0 && b < BINS) cy[b]++;
        }
        let k = 0;
        const put = (...p) => p.forEach((v) => (hpos[k++] = v));
        for (let i = 0; i < BINS; i++) {
          const u0 = -L + i * bw, u1 = u0 + bw, hx = n ? (cx[i] / (n * bw)) * HM : 0, hy = n ? (cy[i] / (n * bw)) * HM : 0;
          put(u0, 0, -L, u0, hx, -L, u0, hx, -L, u1, hx, -L, u1, hx, -L, u1, 0, -L);
          put(-L, 0, u0, -L, hy, u0, -L, hy, u0, -L, hy, u1, -L, hy, u1, -L, 0, u1);
        }
        hg.attributes.position.needsUpdate = true;
        pg.setDrawRange(0, n);
      }

      const paint = () => {
        const lo = hexOf("text-faint"), hi = hexOf("accent"), tmp = new THREE.Color();
        hts.forEach((h, i) => tmp.copy(lo).lerp(hi, Math.sqrt(h)).toArray(col, i * 3));
        sg.attributes.color.needsUpdate = true;
        ptMat.color = hexOf("accent-2"); histMat.color = hexOf("accent-2"); curveMat.color = hexOf("accent"); frameMat.color = hexOf("text-dim");
      };
      paint();
      window.addEventListener("ls:theme", () => requestAnimationFrame(paint));

      // 7초에 걸쳐 표본을 하나씩 뽑아 쌓는다 (움직임을 줄인 설정이면 처음부터 모두 보인다)
      let shown = reduced ? N : 0, acc = shown;
      hist(shown);
      T.onFrame((dt) => {
        if (shown >= N) return;
        acc = Math.min(N, acc + (N / 7) * dt);
        if (Math.floor(acc) !== shown) { shown = Math.floor(acc); hist(shown); }
      });
      T.label("p(x, y)", [0, peak * HS + 0.45, 0]); T.label("p(x)", [2.4, 1.1, -L]); T.label("p(y)", [-L, 1.1, 2.4]);
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 특잇값 분해 (선형대수) */
  // 3×3 행렬 A = UΣVᵀ가 단위 구를 타원체로 바꾸는 세 단계: 회전 Vᵀ → 축을 따라 늘이기 Σ → 회전 U.
  // 구에 내접한 정육면체는 평행육면체가 되고(부피는 |det A| = σ₁σ₂σ₃배), 화살표는 오른쪽 특이 벡터 vᵢ가 옮겨 가는 곳이다
  function svd(el) {
    const far = el.clientWidth < 520 ? 1.35 : 1;
    VZ.three(el, { camera: [6.2 * far, 4.4 * far, 7.4 * far], target: [0, 0, 0], fov: 40, autoRotate: !reduced, autoRotateSpeed: 0.4, pan: false, minDistance: 5, maxDistance: 22 }).then((T) => {
      const { THREE, scene } = T;
      const SIG = [2.1, 1.15, 0.5], S = 1.45, K = 72;   // 특잇값, 장면 축척, 원 하나의 선분 수
      // U는 e₁을 처음 카메라에서 보아 비스듬히 오른쪽 위로 가로지르는 방향으로 보낸다 (긴 축이 화면을 가로지르도록)
      const qU = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.7, 0.41, -0.58).normalize());
      const qVt = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0.4, -0.6).normalize(), -0.8);

      // 단계 a, b, c ∈ [0, 1]의 행렬 M = R_U(c) · diag(1 + b(σᵢ − 1)) · R_Vᵀ(a). 회전은 단위 쿼터니언에서 구면 보간
      const I = new THREE.Quaternion(), qa = new THREE.Quaternion(), qc = new THREE.Quaternion();
      const Ra = new THREE.Matrix4(), D = new THREE.Matrix4(), Rc = new THREE.Matrix4(), M = new THREE.Matrix4();
      function setM(a, b, c) {
        qa.copy(I).slerp(qVt, a); qc.copy(I).slerp(qU, c);
        Ra.makeRotationFromQuaternion(qa); Rc.makeRotationFromQuaternion(qc);
        D.makeScale(...SIG.map((s) => 1 + b * (s - 1)));
        M.multiplyMatrices(Rc, D).multiply(Ra);
      }

      // 단위 구의 위선 7개와 경선 12개, 구에 내접한 정육면체(반변 1/√3)의 모서리 12개
      const P = (th, ph) => [Math.cos(ph) * Math.cos(th), Math.sin(ph), Math.cos(ph) * Math.sin(th)];
      const sph = [], cube = [], ghost = [];
      for (let i = 1; i < 8; i++) {
        const ph = -Math.PI / 2 + (i * Math.PI) / 8;
        for (let j = 0; j < K; j++) sph.push(...P((2 * Math.PI * j) / K, ph), ...P((2 * Math.PI * (j + 1)) / K, ph));
      }
      for (let i = 0; i < 12; i++) {
        const th = (i * Math.PI) / 6;
        for (let j = 0; j < K / 2; j++) sph.push(...P(th, -Math.PI / 2 + (2 * Math.PI * j) / K), ...P(th, -Math.PI / 2 + (2 * Math.PI * (j + 1)) / K));
      }
      const h = 1 / Math.sqrt(3);
      for (let d = 0; d < 3; d++) for (const a of [-h, h]) for (const b of [-h, h]) {
        const p = [0, 0, 0], q = [0, 0, 0], [o1, o2] = [0, 1, 2].filter((k) => k !== d);
        p[d] = -h; q[d] = h; p[o1] = q[o1] = a; p[o2] = q[o2] = b;
        cube.push(...p, ...q);
      }
      // 제자리에 남는 것: 원래 단위 구의 대원 세 개와 좌표축
      [[0, 1], [1, 2], [2, 0]].forEach(([i, k]) => {
        for (let j = 0; j < K; j++) [j, j + 1].forEach((m) => { const p = [0, 0, 0], t = (2 * Math.PI * m) / K; p[i] = Math.cos(t) * S; p[k] = Math.sin(t) * S; ghost.push(...p); });
      });
      [0, 1, 2].forEach((i) => { const p = [0, 0, 0], q = [0, 0, 0]; p[i] = -SIG[0] * S - 0.4; q[i] = SIG[0] * S + 0.4; ghost.push(...p, ...q); });
      const ghostMat = new THREE.LineBasicMaterial({ color: hexOf("text-faint"), transparent: true, opacity: 0.35 });
      scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(ghost, 3)), ghostMat));

      const moving = (base, mat) => {
        const g = new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(new Float32Array(base.length), 3));
        scene.add(new THREE.LineSegments(g, mat));
        return g.attributes.position;
      };
      const sphMat = new THREE.LineBasicMaterial({ color: hexOf("accent"), transparent: true, opacity: 0.6 });
      const cubeMat = new THREE.LineBasicMaterial({ color: hexOf("text-dim"), transparent: true, opacity: 0.75 });
      const sphPos = moving(sph, sphMat), cubePos = moving(cube, cubeMat);

      // 오른쪽 특이 벡터 vᵢ = V eᵢ. Vᵀ 다음에는 eᵢ, Σ 다음에는 σᵢeᵢ, U 다음에는 σᵢuᵢ에 놓인다
      const V = qVt.clone().invert();
      const vs = [0, 1, 2].map((i) => new THREE.Vector3(+(i === 0), +(i === 1), +(i === 2)).applyQuaternion(V));
      const arrows = vs.map(() => { const a = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(), 1, hexOf("accent-2"), 0.24, 0.13); scene.add(a); return a; });

      const v = new THREE.Vector3();
      function place(base, attr) {
        const p = attr.array;
        for (let i = 0; i < base.length; i += 3) {
          v.set(base[i], base[i + 1], base[i + 2]).applyMatrix4(M).multiplyScalar(S);
          p[i] = v.x; p[i + 1] = v.y; p[i + 2] = v.z;
        }
        attr.needsUpdate = true;
      }
      function draw() {
        place(sph, sphPos); place(cube, cubePos);
        vs.forEach((vi, i) => {
          v.copy(vi).applyMatrix4(M).multiplyScalar(S);
          const L = v.length();
          arrows[i].setDirection(v.normalize());
          arrows[i].setLength(L, 0.24, 0.13);
        });
      }

      // 지금 단계의 이름은 왼쪽 위에 고정해 둔다
      const stage = document.createElement("div");
      stage.className = "overlay-label";
      Object.assign(stage.style, { left: "14px", top: "14px", transform: "none" });
      el.appendChild(stage);
      const say = (s) => { if (stage.textContent !== s) stage.textContent = s; };

      const paint = () => {
        sphMat.color = hexOf("accent"); cubeMat.color = hexOf("text-dim"); ghostMat.color = hexOf("text-faint");
        arrows.forEach((a) => a.setColor(hexOf("accent-2")));
      };
      paint();
      window.addEventListener("ls:theme", () => requestAnimationFrame(paint));

      // 한 주기 13초: 멈춤 1 → Vᵀ 2 → 멈춤 0.6 → Σ 2 → 멈춤 0.6 → U 2 → 멈춤 2.6 → 처음으로 2.2
      // (움직임을 줄인 설정이면 A를 다 적용한 모양에서 멈춘다)
      const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
      if (reduced) { setM(1, 1, 1); draw(); say("A = UΣVᵀ"); return; }
      T.onFrame((dt, t) => {
        t %= 13;
        if (t > 10.8) {
          const r = 1 - ease((t - 10.8) / 2.2);
          setM(r, r, r); say("단위 구로");
        } else {
          setM(ease((t - 1) / 2), ease((t - 3.6) / 2), ease((t - 6.2) / 2));
          say(t < 1 ? "단위 구" : t < 3.6 ? "Vᵀ: 회전" : t < 6.2 ? "Σ: 축을 따라 늘이기" : t < 8.2 ? "U: 회전" : "A = UΣVᵀ");
        }
        draw();
      });
    }).catch(() => fail(el));
  }

  /* ------------------------------------------------------------ 2D 양자장 (서재 홈 배경)
     · 점 격자 = 시공간. 잔잔한 파동이 늘 출렁이고, 쌍소멸 자리에서 둥근 물결(중력파처럼)이 퍼진다.
       마우스(손가락)는 무거운 질량처럼 격자를 살짝 끌어당긴다.
     · 쌍생성: 한 점에서 입자(주황 --accent-2)·반입자(보라 --qf-anti)가 반대 방향으로 튀어나와 거울처럼 휘는 원을 그리고,
       한 바퀴 돌아 같은 자리에서 다시 만나 쌍소멸 → 번쩍 + 광자 두 개 + 격자 물결.
     화면 밖이거나 탭이 숨으면 멈추고(VZ.loop), '동작 줄이기' 설정이면 한 장면만 그린다. */
  function qfield(cv) {
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const GAP = 30, TAU = Math.PI * 2;
    let W = 0, H = 0, dpr = 1;
    let col = { dot: "#9aa6bf", p: "#fdba74", a: "#c4b5fd", flash: "#fff" };
    const readColors = () => {
      const v = (n, d) => VZ.color(n) || d;
      col = { dot: v("text-dim", col.dot), p: v("accent-2", col.p), a: v("qf-anti", col.a), flash: v("text", col.flash) };
    };
    readColors();
    window.addEventListener("ls:theme", () => requestAnimationFrame(() => { readColors(); if (reduced) draw(); }));

    const resize = () => {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // 마우스 = 질량. 캔버스는 글자 아래에 깔려 있으니 창에서 받는다
    const mouse = { x: -1e4, y: -1e4, m: 0 };
    window.addEventListener("pointermove", (e) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -1e4; });

    const pairs = [], ripples = [], photons = [];
    const rnd = (a, b) => a + Math.random() * (b - a);
    const spawn = (t0 = 0) => {
      const r = rnd(18, Math.min(70, H * 0.18));
      const T = rnd(3.2, 6.5); // 한 바퀴 시간(초)
      pairs.push({ x: rnd(20, W - 20), y: rnd(20, H * 0.85), dir: rnd(0, TAU), r, w: Math.random() < 0.5 ? 1 : -1, t: t0, T });
    };
    const maxPairs = () => Math.max(3, Math.round(W / 160));

    // 입자 위치: 처음 속도 방향 dir, 원 중심은 옆으로 r. 반입자는 거울상 → 한 바퀴 뒤 출발점에서 다시 만남
    const pos = (p, ph, anti) => {
      const ux = Math.cos(p.dir), uy = Math.sin(p.dir);
      const nx = -uy * p.w, ny = ux * p.w;
      const along = p.r * Math.sin(ph), side = p.r * (1 - Math.cos(ph));
      const s = anti ? -1 : 1;
      return [p.x + s * along * ux + side * nx, p.y + s * along * uy + side * ny];
    };

    // 격자 점이 밀려난 양: 잔잔한 파동 + 물결 + 마우스 질량
    const displace = (x, y, t) => {
      let dx = 3 * Math.sin(x * 0.011 + t * 0.7) * Math.cos(y * 0.017 - t * 0.5);
      let dy = 3 * Math.cos(x * 0.009 - t * 0.6 + y * 0.006) * Math.sin(y * 0.013 + t * 0.4);
      let e = 0;
      for (const r of ripples) {
        const ddx = x - r.x, ddy = y - r.y, d = Math.hypot(ddx, ddy) || 1;
        const k = d - r.t * 140; // 물결 앞머리까지의 거리
        if (k > 40 || k < -160) continue;
        const env = Math.exp(-(k * k) / 2600) * r.a * Math.exp(-r.t * 0.9);
        const amp = 9 * env * Math.sin(k * 0.12);
        dx += (amp * ddx) / d; dy += (amp * ddy) / d;
        e += env;
      }
      if (mouse.m > 0.01) {
        const ddx = mouse.x - x, ddy = mouse.y - y, d2 = ddx * ddx + ddy * ddy;
        const pull = (mouse.m * 900) / (d2 + 2500); // 가까울수록 세게, 최대 약 9px
        dx += ddx * pull; dy += ddy * pull;
        e += (mouse.m * 1500) / (d2 + 2500);
      }
      return [dx, dy, e];
    };

    const drawGrid = (t) => {
      ctx.fillStyle = col.dot;
      const ox = (W % GAP) / 2, oy = (H % GAP) / 2;
      for (let y = oy; y <= H; y += GAP) {
        for (let x = ox; x <= W; x += GAP) {
          const [dx, dy, e] = displace(x, y, t);
          ctx.globalAlpha = Math.min(0.8, 0.28 + e * 0.5);
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, 1.1 + Math.min(1.4, e * 1.2), 0, TAU);
          ctx.fill();
        }
      }
    };

    const drawPair = (p) => {
      const ph = Math.min(1, p.t / p.T) * TAU;
      const trail = 2.4; // 꼬리 길이(라디안)
      ctx.lineCap = "round";
      for (const anti of [false, true]) {
        const c = anti ? col.a : col.p;
        ctx.strokeStyle = c;
        const N = 22, from = Math.max(0, ph - trail);
        let [px, py] = pos(p, from, anti);
        for (let i = 1; i <= N; i++) {
          const [qx, qy] = pos(p, from + ((ph - from) * i) / N, anti);
          ctx.globalAlpha = 0.75 * Math.pow(i / N, 1.6);
          ctx.lineWidth = 0.6 + 1.2 * (i / N);
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(qx, qy); ctx.stroke();
          px = qx; py = qy;
        }
        // 머리 (빛나는 점)
        ctx.fillStyle = c;
        ctx.globalAlpha = 0.25;
        ctx.beginPath(); ctx.arc(px, py, 5, 0, TAU); ctx.fill();
        ctx.globalAlpha = 0.95;
        ctx.beginPath(); ctx.arc(px, py, 2, 0, TAU); ctx.fill();
      }
      // 막 태어난 순간 작은 빛
      if (p.t < 0.35) {
        ctx.globalAlpha = 0.5 * (1 - p.t / 0.35);
        ctx.fillStyle = col.flash;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2 + p.t * 12, 0, TAU); ctx.fill();
      }
    };

    const drawEffects = () => {
      // 소멸 빛
      for (const r of ripples) {
        if (r.t > 0.5) continue;
        const k = r.t / 0.5;
        ctx.globalAlpha = 0.7 * (1 - k);
        ctx.strokeStyle = col.flash; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(r.x, r.y, 3 + k * 26, 0, TAU); ctx.stroke();
        ctx.globalAlpha = 0.9 * (1 - k) * (1 - k);
        ctx.fillStyle = col.flash;
        ctx.beginPath(); ctx.arc(r.x, r.y, 4 * (1 - k) + 1, 0, TAU); ctx.fill();
      }
      // 광자: 물결선으로 날아가는 짧은 조각
      ctx.strokeStyle = col.flash; ctx.lineWidth = 1.2;
      for (const ph of photons) {
        const L = 46, n = 18, px = -ph.dy, py = ph.dx;
        ctx.globalAlpha = 0.6 * Math.max(0, 1 - ph.t / 1.6);
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const s = (i / n) * L, w = 3.2 * Math.sin(s * 0.45 - ph.t * 30) * Math.sin((Math.PI * i) / n);
          const x = ph.x - ph.dx * s + px * w, y = ph.y - ph.dy * s + py * w;
          if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
        }
        ctx.stroke();
      }
    };

    let t = 0, spawnIn = 0.3;
    const step = (dt) => {
      t += dt;
      mouse.m += ((mouse.x > -1e3 ? 1 : 0) - mouse.m) * Math.min(1, dt * 3);
      for (const p of pairs) p.t += dt;
      for (let i = pairs.length - 1; i >= 0; i--) {
        const p = pairs[i];
        if (p.t >= p.T) {
          pairs.splice(i, 1);
          ripples.push({ x: p.x, y: p.y, t: 0, a: 1 });
          const a = rnd(0, TAU);
          for (const s of [1, -1]) photons.push({ x: p.x, y: p.y, dx: s * Math.cos(a), dy: s * Math.sin(a), t: 0 });
        }
      }
      for (const r of ripples) r.t += dt;
      while (ripples.length && ripples[0].t > 4) ripples.shift();
      for (const ph of photons) { ph.t += dt; ph.x += ph.dx * 260 * dt; ph.y += ph.dy * 260 * dt; }
      while (photons.length && photons[0].t > 1.6) photons.shift();
      spawnIn -= dt;
      if (spawnIn <= 0 && pairs.length < maxPairs()) { spawn(); spawnIn = rnd(0.4, 1.4); }
    };
    function draw() {
      ctx.clearRect(0, 0, W, H);
      drawGrid(t);
      for (const p of pairs) drawPair(p);
      drawEffects();
      ctx.globalAlpha = 1;
    }

    // 처음부터 몇 쌍이 돌고 있게
    for (let i = 0; i < Math.ceil(maxPairs() / 2); i++) spawn();
    for (const p of pairs) p.t = rnd(0.1, 0.7) * p.T;

    if (reduced) {
      // 한 장면: 여러 단계의 쌍과 막 퍼지는 물결 하나
      while (pairs.length < maxPairs()) { spawn(); const p = pairs[pairs.length - 1]; p.t = rnd(0.2, 0.85) * p.T; }
      ripples.push({ x: W * 0.7, y: H * 0.4, t: 0.9, a: 1 });
      draw();
      if (window.ResizeObserver) new ResizeObserver(() => { resize(); draw(); }).observe(cv);
      return;
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(cv);
    VZ.loop(cv, (dt) => { step(dt); draw(); });
  }

  const HEROES = { network, loop, ribbons, orbits, orbital, gauss, svd, qfield };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-hero]").forEach((el) => {
      const fn = HEROES[el.dataset.hero];
      if (fn) fn(el);
    });
  });
})();
