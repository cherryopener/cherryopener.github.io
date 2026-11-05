/* ==========================================================================
   서재 데이터 — 분야(fields)와 책(books), 각 책의 챕터 목록
   이 파일이 사이트 전체의 목차입니다. 책·챕터를 추가하면 홈, 전체 책장,
   책 홈의 챕터 카드, 챕터 서랍, 이전/다음 링크, 검색이 자동으로 갱신됩니다.

   책 status:     "published"(집필 완료) | "writing"(집필 중) | "planned"(집필 예정 — 페이지 없음)
   챕터 status:   "slot"(빈 템플릿) | "draft"(작성 중) | "done"(완성 — 사용자만 바꾼다)
   level:         난이도 1~5 (CLAUDE.md 4절). 책에 두고, 다른 장만 chapter.level로 덮어쓴다.
                  이 값이 집필·검토를 맡을 모델과 effort를 정한다.
   chapter.sims:  그 챕터에 들어 있는 실험 id (assets/sims/*.js의 id). 카드에 칩으로 표시됨
   book.parts:    (선택) 부 목록 [{title, desc}]. chapter.part(1부터)로 묶어 책 홈과 서랍에 부 제목을 단다
   motif:         표지 그림 (assets/js/covers.js): attention · waves · orbit · field · network · loop · levels · bell · lattice · blank
   ========================================================================== */
window.SHELF_DATA = {
  statusLabels: { published: "집필 완료", writing: "집필 중", planned: "집필 예정" },
  chapterStatusLabels: { slot: "빈 슬롯", draft: "작성 중", done: "완성" },
  levelLabels: { 1: "입문", 2: "기초", 3: "중급", 4: "고급", 5: "전문" },

  fields: [
    { id: "phys", name: "물리학", en: "Physics", color: "#ea580c", colorDark: "#fdba74",
      desc: "수리물리에서 출발해 전자기학·양자역학을 거쳐 장론, 상대성이론, 블랙홀까지." },
    { id: "ai", name: "AI", en: "Artificial Intelligence", color: "#4f46e5", colorDark: "#a5b4fc",
      desc: "신경망의 원리부터 최신 모델과 논문까지, 직접 돌려 보며 이해합니다." },
    { id: "prog", name: "프로그래밍", en: "Programming", color: "#0d9488", colorDark: "#5eead4",
      desc: "언어, 자료구조, 시스템 — 코드가 실제로 어떻게 돌아가는지." },
    { id: "lang", name: "외국어", en: "Languages", color: "#0284c7", colorDark: "#7dd3fc",
      desc: "독일어와 러시아어를 배우며 쓰는 문법·어휘·읽기 노트." },
    { id: "music", name: "음악", en: "Music", color: "#c026d3", colorDark: "#f0abfc",
      desc: "음악을 하나도 모르는 데서 시작하는 작곡과 화성학." },
    { id: "photo", name: "사진", en: "Photography", color: "#b45309", colorDark: "#fcd34d",
      desc: "필름과 디지털 — 노출, 현상, 색, 그리고 찍은 사진들." },
    { id: "misc", name: "기타", en: "Miscellany", color: "#64748b", colorDark: "#cbd5e1",
      desc: "어디에도 넣기 애매하지만 알고 싶은 것들." },
  ],

  books: [
    /* ------------------------------------------------------------ 물리학 · 학부 */
    {
      id: "math-phys", field: "phys", status: "planned", level: 3, kind: "textbook", motif: "waves",
      series: "Physics", title: "수리물리학", en: "Mathematical Methods for Physics",
      tagline: "물리가 쓰는 수학, 처음부터",
      desc: "벡터 해석, 선형대수, 복소함수, 미분방정식, 푸리에 해석, 특수함수, 그린 함수 — 학부 물리 전체가 기대는 수학 도구를 물리 예제와 함께 익힙니다.",
      path: "books/math-phys/", chapters: [],
    },
    {
      id: "em", field: "phys", status: "planned", level: 3, kind: "textbook", motif: "field",
      series: "Physics", title: "전자기학", en: "Electromagnetism",
      tagline: "장(field)으로 보는 세계",
      desc: "정전기학에서 맥스웰 방정식과 전자기파까지, 학부 전자기학을 장의 관점에서 유도하고 시뮬레이션으로 확인합니다.",
      path: "books/em/", chapters: [],
    },
    {
      id: "qm", field: "phys", status: "planned", level: 3, kind: "textbook", motif: "levels",
      series: "Physics", title: "양자역학", en: "Quantum Mechanics",
      tagline: "상태, 측정, 그리고 확률",
      desc: "디랙 표기와 힐베르트 공간에서 출발해 조화 진동자, 각운동량, 수소 원자, 섭동론까지 학부 양자역학을 다룹니다.",
      path: "books/qm/", chapters: [],
    },

    /* ------------------------------------------------------------ 물리학 · 대학원 */
    {
      id: "cm-grad", field: "phys", status: "planned", level: 4, kind: "textbook", motif: "orbit",
      series: "Physics · Graduate", title: "고전역학 (대학원)", en: "Classical Mechanics",
      tagline: "라그랑지안에서 해밀턴-야코비까지",
      desc: "변분 원리, 대칭과 보존량, 강체, 해밀턴 역학, 정준 변환, 작용-각 변수, 혼돈.",
      path: "books/cm-grad/", chapters: [],
    },
    {
      id: "em-grad", field: "phys", status: "planned", level: 4, kind: "textbook", motif: "field",
      series: "Physics · Graduate", title: "전자기학 (대학원)", en: "Classical Electrodynamics",
      tagline: "경계값 문제에서 복사까지",
      desc: "경계값 문제, 다중극 전개, 도파관, 복사, 특수상대론적 전기역학.",
      path: "books/em-grad/", chapters: [],
    },
    {
      id: "qm-grad", field: "phys", status: "planned", level: 4, kind: "textbook", motif: "levels",
      series: "Physics · Graduate", title: "양자역학 (대학원)", en: "Advanced Quantum Mechanics",
      tagline: "대칭, 산란, 그리고 다체계",
      desc: "대칭과 군론, 각운동량 합성, 산란 이론, 동일 입자와 2차 양자화, 경로 적분.",
      path: "books/qm-grad/", chapters: [],
    },
    {
      id: "relativity", field: "phys", status: "planned", level: 4, kind: "textbook", motif: "orbit",
      series: "Physics · Graduate", title: "상대성이론", en: "Special & General Relativity",
      tagline: "휘어진 시공간의 기하",
      desc: "특수상대론의 4-벡터에서 출발해 미분기하, 아인슈타인 방정식, 슈바르츠실트 해, 중력파까지.",
      path: "books/relativity/", chapters: [],
    },
    {
      id: "qft", field: "phys", status: "planned", level: 4, kind: "textbook", motif: "lattice",
      series: "Physics · Graduate", title: "양자장론", en: "Quantum Field Theory",
      tagline: "입자는 장의 들뜸이다",
      desc: "고전장론, 정준 양자화, 파인만 도형, QED, 재규격화.",
      path: "books/qft/", chapters: [],
    },
    {
      id: "black-holes", field: "phys", status: "planned", level: 5, kind: "textbook", motif: "orbit",
      series: "Physics · Graduate", title: "블랙홀", en: "Black Holes",
      tagline: "사건의 지평선 너머",
      desc: "커-뉴먼 해, 인과 구조와 펜로즈 도형, 블랙홀 열역학, 호킹 복사와 정보 역설.",
      path: "books/black-holes/", chapters: [],
    },

    /* ------------------------------------------------------------ 취미 */
    {
      id: "composition", field: "music", status: "planned", level: 1, kind: "textbook", motif: "waves",
      series: "Music", title: "작곡 첫걸음 (가제)", en: "Composition from Zero",
      tagline: "악보를 몰라도 시작하는 작곡",
      desc: "음, 박자, 음계, 화음부터 짧은 곡 하나를 완성하기까지. 악보를 보고 듣고 직접 바꿔 봅니다.",
      path: "books/composition/", chapters: [],
    },
    {
      id: "film-photo", field: "photo", status: "planned", level: 2, kind: "textbook", motif: "blank",
      series: "Photography", title: "필름 사진 (가제)", en: "Film Photography",
      tagline: "소형 카메라에서 한 걸음 더",
      desc: "노출의 세 요소, 필름의 종류와 감도, 측광, 현상과 스캔. 직접 찍은 사진을 예시로 씁니다.",
      path: "books/film-photo/", chapters: [],
    },
  ],
};
