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
      id: "math-phys", field: "phys", status: "writing", level: 3, kind: "textbook", motif: "waves",
      series: "Physics", title: "수리물리학", en: "Mathematical Methods for Physics",
      tagline: "물리가 쓰는 수학, 처음부터",
      desc: "보아스의 순서를 뼈대로, 급수와 복소수에서 출발해 벡터 해석, 선형대수, 상미분방정식과 특수 함수, 푸리에 해석과 편미분방정식, 복소해석과 그린 함수, 변분법과 텐서까지 — 학부 물리 전체가 기대는 수학 도구를 물리 예제와 함께 유도하고, 서재의 전자기학·양자역학과 대학원 책들이 돌아와 참조하는 기준이 되는 이론서입니다.",
      path: "books/math-phys/",
      parts: [
        { title: "기초 도구", desc: "급수, 복소수, 다변수 미적분 — 뒤의 모든 장이 쓰는 계산 도구를 물리의 근사, 페이저, 열역학 관계식으로 다시 세웁니다." },
        { title: "벡터 해석", desc: "기울기·발산·회전, 적분 정리, 곡선 좌표계와 디랙 델타. 전자기학의 언어입니다." },
        { title: "선형대수", desc: "행렬과 회전, 고유값 문제와 스펙트럼 정리에서 복소 내적 공간과 함수 공간까지. 양자역학의 언어입니다." },
        { title: "미분방정식과 특수 함수", desc: "진동과 회로의 상미분방정식을 풀고, 감마 함수와 급수 풀이에서 르장드르·베셀·에르미트·라게르 함수를 얻습니다." },
        { title: "푸리에 해석과 편미분방정식", desc: "푸리에 급수와 변환, 스투름-리우빌 이론으로 고유함수 전개를 한 틀로 묶고, 변수 분리로 라플라스·확산·파동 방정식을 풉니다." },
        { title: "복소해석과 그린 함수", desc: "해석 함수와 유수 정리로 실적분을 계산하고, 점 원천의 응답인 그린 함수로 비동차 방정식을 풉니다." },
        { title: "변분법과 텐서", desc: "해밀턴 원리와 계량 텐서·4-벡터로 대학원 역학, 장론, 상대성이론에 다리를 놓습니다." },
      ],
      chapters: [
        { slug: "ch01", num: "01", part: 1, status: "draft", title: "급수와 근사", desc: "급수의 수렴을 부분합의 극한으로 정의하고 판정법, 멱급수의 수렴 반경, 테일러 전개와 나머지 항을 세운다. 이것으로 고도에 따른 중력, 상대론적 운동 에너지, 쌍극자 퍼텐셜, 플랑크 진동자의 평균 에너지, 큰 진폭 진자의 주기를 작은 매개변수 전개로 끝까지 계산한다." },
        { slug: "ch02", num: "02", part: 1, status: "draft", title: "복소수", desc: "복소평면과 극형식, 오일러 공식, 거듭제곱근·복소 로그·복소 거듭제곱의 주값을 세운다. 이것으로 페이저와 e^{−iωt} 관례, 감쇠 진동, 회절격자의 세기, 교류 회로의 임피던스, 쌍곡선 함수(현수선, 빠르기)를 다룬다." },
        { slug: "ch03", num: "03", part: 1, status: "draft", title: "다변수 미적분 다시 보기", desc: "편미분과 전미분, 고정 변수와 순환 관계, 르장드르 변환, 헤세 행렬과 라그랑주 승수, 야코비 행렬식, 적분 기호 안의 미분을 열역학과 역학 위에서 다시 세운다. 맥스웰 관계식과 C_p − C_V, 헬륨의 F·H·G, 볼츠만 분포, 가우스 적분을 숫자까지 계산한다." },
        { slug: "ch04", num: "04", part: 2, status: "draft", title: "벡터 대수와 벡터 미분", desc: "내적·외적·삼중곱을 합 규약과 크로네커 델타, 레비치비타 기호로 다시 세우고 ε-δ 항등식으로 벡터 항등식을 증명한다. 기울기·발산·회전·라플라시안과 곱의 미분 법칙을 유도하고, 진공의 맥스웰 방정식에서 빛의 파동 방정식과 c = 1/√(μ₀ε₀)를 얻는다.", sims: ["efield"] },
        { slug: "ch05", num: "05", part: 2, status: "draft", title: "선적분, 면적분과 적분 정리", desc: "선적분과 면적분을 정의하고, 작은 상자와 작은 고리의 합으로 발산 정리와 스토크스(그린) 정리를 유도한다. 단순 연결 조건을 붙인 보존장의 동치 조건, 직선 전류 자기장의 순환, 맥스웰 방정식의 적분형과 미분형, 연속 방정식과 변위 전류, 헬름홀츠 정리를 다룬다." },
        { slug: "ch06", num: "06", part: 2, status: "slot", title: "곡선 좌표계와 디랙 델타", desc: "원통 좌표와 구면 좌표 · 척도 인자와 선·넓이·부피 요소 · 곡선 좌표의 기울기, 발산, 회전 · 라플라시안 · 디랙 델타 함수 · 3차원 델타와 점 원천" },
        { slug: "ch07", num: "07", part: 3, status: "draft", title: "행렬과 선형 변환", desc: "연립 일차 방정식을 소거와 행렬식(레비치비타 기호로 정의)으로 풀고, 역행렬과 랭크로 해의 존재와 개수를 판정한다. 선형 사상과 닮음 변환, 직교 행렬과 로드리게스 공식을 거쳐 회전의 생성자와 교환 관계 [L_i, L_j] = ε_ijk L_k까지 세운다." },
        { slug: "ch08", num: "08", part: 3, status: "slot", title: "고유값 문제", desc: "고유값과 고유벡터 · 대각화 · 에르미트 행렬과 유니타리 행렬 · 스펙트럼 정리 · 결합 진동자의 정규 모드 · 이차 형식과 관성 텐서의 주축 · 교환하는 행렬과 행렬 지수", sims: ["coupled"] },
        { slug: "ch09", num: "09", part: 3, status: "slot", title: "벡터 공간과 함수 공간", desc: "벡터 공간 · 복소 내적과 노름 · 정규직교 기저와 그람-슈미트 · 디랙 표기와 완비성 관계 · 함수 공간과 함수의 내적 · 선형 연산자와 수반" },
        { slug: "ch10", num: "10", part: 4, status: "draft", title: "상미분방정식", desc: "1계 방정식의 변수 분리와 적분 인자에서 출발해 특성 방정식과 론스키안, 감쇠·강제 진동의 공명과 품질 인자, 매개변수 변화법과 충격 응답의 합성곱, 위상 공간의 평형점 분류, 라플라스 변환을 세운다. 종단 속도, RLC 대응, 진자의 두 평형점, Mo-99→Tc-99m 붕괴 사슬을 숫자까지 푼다.", sims: ["damped-spring", "oscillator"] },
        { slug: "ch11", num: "11", part: 4, status: "slot", title: "감마 함수와 특수 적분", desc: "가우스 적분과 그 모멘트 · 감마 함수 · 베타 함수와 n차원 구의 부피 · 스털링 공식과 라플라스 방법 · 오차 함수 · 타원 적분과 큰 진폭의 진자", sims: ["pendulum"] },
        { slug: "ch12", num: "12", part: 4, status: "slot", title: "급수 풀이와 르장드르 함수", desc: "멱급수 풀이 · 르장드르 방정식과 르장드르 다항식 · 로드리게스 공식, 생성 함수, 점화식 · 직교성과 르장드르 급수 · 연관 르장드르 함수와 구면 조화 함수 · 정칙 특이점과 프로베니우스 방법" },
        { slug: "ch13", num: "13", part: 4, status: "slot", title: "베셀 함수와 직교 다항식", desc: "베셀 방정식과 제1종 베셀 함수 · 제2종 베셀 함수와 한켈 함수 · 점화식, 영점, 점근 형태 · 구면 베셀 함수 · 에르미트 다항식과 조화 진동자 · 라게르 다항식과 수소 원자 · 직교 다항식의 공통 구조" },
        { slug: "ch14", num: "14", part: 5, status: "slot", title: "푸리에 급수", desc: "주기 함수와 삼각 급수 · 직교성과 푸리에 계수 · 복소 푸리에 급수 · 수렴과 깁스 현상 · 반구간 급수 · 파르스발 정리 · 주기적인 힘을 받는 진동자", sims: ["waves"] },
        { slug: "ch15", num: "15", part: 5, status: "slot", title: "푸리에 변환", desc: "급수에서 변환으로 · 변환의 기본 성질 · 디랙 델타와 평면파 · 합성곱 정리와 플랑슈렐 정리 · 폭과 대역폭 · 3차원 푸리에 변환 · 회절, 스펙트럼, 이산 푸리에 변환", sims: ["fft", "double-slit"] },
        { slug: "ch16", num: "16", part: 5, status: "slot", title: "스투름-리우빌 이론", desc: "경계값 문제와 고유값 · 스투름-리우빌 형태와 가중 함수 · 자기수반성과 경계 조건 · 고유값의 실수성과 고유함수의 직교성 · 완비성과 고유함수 전개 · 레일리 몫과 변분 추정 · 특수 함수를 한 틀로" },
        { slug: "ch17", num: "17", part: 5, status: "slot", title: "편미분방정식과 변수 분리", desc: "물리의 편미분방정식과 경계 조건 · 직교 좌표에서의 변수 분리 · 파동 방정식: 진동하는 현과 달랑베르 해 · 확산 방정식 · 원통 좌표: 원형 막과 원기둥 · 구면 좌표: 라플라스 방정식과 르장드르 급수 · 해의 유일성과 평균값 성질", sims: ["heat", "random-walk", "waves"] },
        { slug: "ch18", num: "18", part: 6, status: "slot", title: "해석 함수", desc: "복소 함수와 극한 · 코시-리만 방정식 · 조화 함수와 2차원 퍼텐셜 · 초등 함수의 해석성 · 다가 함수와 분지 절단 · 등각 사상" },
        { slug: "ch19", num: "19", part: 6, status: "slot", title: "복소 적분과 유수 정리", desc: "복소 선적분 · 코시 정리 · 코시 적분 공식과 그 결과 · 테일러 급수, 로랑 급수, 특이점 · 유수 정리 · 실적분 계산 · 주값과 분지 절단을 낀 적분" },
        { slug: "ch20", num: "20", part: 6, status: "slot", title: "그린 함수", desc: "점 원천과 중첩 · 상미분방정식의 그린 함수 · 고유함수 전개로 만드는 그린 함수 · 푸아송 방정식과 영상법 · 헬름홀츠 방정식과 확산 방정식 · 지연 그린 함수, 인과율, 분산 관계" },
        { slug: "ch21", num: "21", part: 7, status: "draft", title: "변분법", desc: "범함수의 변분에서 오일러-라그랑주 방정식을 유도하고, 벨트라미 항등식과 순환 좌표로 첫 적분을 얻는다. 최속 강하선, 측지선, 페르마 원리, 현수선과 등주 문제를 풀고, 해밀턴 원리와 줄의 라그랑지안 밀도에서 운동 방정식과 파동 방정식을 얻는다." },
        { slug: "ch22", num: "22", part: 7, status: "slot", title: "텐서", desc: "회전 아래의 변환과 카르테시안 텐서 · 텐서 대수: 축약, 곱, 대칭성, 몫 정리 · 물리의 텐서: 관성, 응력, 전도도 · 유사 텐서와 레비치비타 기호 · 비직교 좌표: 쌍대 기저와 계량 텐서 · 곡선 좌표의 미분과 크리스토펠 기호 · 민코프스키 공간과 4-벡터" },
      ],
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
      id: "math-phys-grad", field: "phys", status: "planned", level: 4, kind: "textbook", motif: "lattice",
      series: "Physics · Graduate", title: "수리물리학 (대학원)", en: "Advanced Mathematical Physics",
      tagline: "학부 도구 너머의 구조",
      desc: "군과 표현론, 리 군과 리 대수, 다양체와 미분 형식, 함수 해석학과 연산자의 스펙트럼, 적분 방정식, 점근 해석과 안장점 방법, 초기하 함수 — 대학원 물리 책들이 공통으로 기대는 수학을 학부 『수리물리학』 위에 쌓습니다.",
      path: "books/math-phys-grad/", chapters: [],
    },
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
