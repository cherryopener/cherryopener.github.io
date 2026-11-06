# 구축 계획

친구의 [`yhlee52/bookshelf`](https://github.com/yhlee52/bookshelf) 엔진을 바탕으로 서재와 사진 앨범을 만드는 순서입니다. 근거가 되는 결정은 [DECISIONS.md](DECISIONS.md)에 있습니다.

- 작성: 2026-11-05
- 현재 단계: **4단계** — 『수리물리학』 22장 초안 완성(2026-11-06, 모두 "작성 중"). 2·3단계 일부(난이도 배지 표시, 앨범)는 아직입니다.

각 단계는 끝나면 체크하고, 위의 "현재 단계"를 고칩니다.

---

## 0단계. 준비

- [x] 친구에게 `bookshelf` 코드 사용 허락을 받았습니다. 출처는 README에 밝혔습니다.
- [x] 사이트 이름(가제 `지식따개`), 한 줄 소개, 저자 표기(없음)를 정했습니다. 이름은 확정되면 바꿉니다.
- [ ] 첫 책을 고릅니다. 후보는 수리물리학, 전자기학, 양자역학(모두 학부, L3)입니다.

## 1단계. 엔진 가져오기

친구 저장소의 **과거 기록은 가져오지 않고**, 현재 파일만 복사합니다. 친구의 커밋 기록과 용량을 끌고 오지 않기 위해서입니다.

```bash
gh repo clone yhlee52/bookshelf /tmp/bookshelf -- --depth 1
rsync -a --exclude .git /tmp/bookshelf/ ./
```

### 남기는 것 (엔진)

- `assets/css/*`, `assets/js/*`: 레이아웃, 테마, 검색, 책 페이지, 자동 번호, 차트, 3D, 표지
- `assets/sims/*`: 실험 모음. AI·수학 책에서 다시 쓸 수 있습니다.
- `templates/*`: 장 틀 (`chapter`, `textbook`, `paper`)
- `index.html`, `library/`, `lab/`, `404.html`, `.nojekyll`, `.gitignore`

### 비우는 것 (친구의 내용)

- `books/*`: 친구의 책 7권. 폴더 구조 참고용으로 한 권만 남겼다가 2단계에서 지웁니다.
- `data/books.js`: `fields`와 `books`를 비웁니다.
- `data/site.js`: 내 사이트 정보로 바꿉니다.
- `README.md`: 내 사이트 설명으로 새로 씁니다.

### 고칠 것

- [x] `404.html`의 `FORCE_BASE`를 `"/"`로 바꿉니다. 사용자 사이트이기 때문입니다.
- [x] `data/site.js`에 `photoBase`를 추가합니다. 값은 [DECISIONS.md](DECISIONS.md) 3-4절을 따릅니다.
- [x] 로컬 서버(`python3 -m http.server 8000`)로 띄워서 빈 서재가 오류 없이 뜨는지 확인합니다.

### 배포

- [x] `git init`을 하고, `cherryopener/cherryopener.github.io` 저장소를 Public으로 만들어 push합니다.
- [x] 저장소의 Settings → Pages에서 `Deploy from a branch`, `main`, `/ (root)`를 고릅니다.
- [x] `https://cherryopener.github.io/`가 뜨는지 확인합니다. 없는 주소에서는 404 페이지가 뜹니다.

## 2단계. 서재를 내 분야에 맞게 고치기

- [x] `data/books.js`의 `fields`에 7개 분야를 넣었습니다: `phys` `ai` `prog` `lang` `music` `photo` `misc`.
  - [x] 분야마다 강조색을 정하고 `assets/css/base.css`에 `body[data-field="…"]` 규칙을 넣었습니다.
- [ ] 책과 장에 **`level` 필드(1~5)**를 추가합니다. (`books.js`에 값은 넣었고, 화면 표시는 아직입니다)
  - 장의 `level`이 없으면 책의 `level`을 따릅니다.
  - 책 홈과 책장 카드에 난이도 배지를 보여 줍니다.
  - 등급의 뜻은 [CLAUDE.md](../CLAUDE.md) 4-1절에 있습니다.
- [ ] 분야별로 필요한 부품을 추가합니다. 각 부품은 처음 쓰는 책이 생길 때 만듭니다.

| 분야 | 부품 | 후보 |
|---|---|---|
| 외국어 | 어휘표, 격변화·활용표, 예문 상자(원문, 직역, 의역), 발음 듣기 | 표는 CSS로 직접 만들고, 발음은 브라우저 내장 음성(Web Speech API)을 씁니다 |
| 외국어 (러시아어) | 강세 표시(ударение), 키릴 문자 글꼴 | 결합 문자 U+0301, Google Fonts |
| 음악 | 악보 표시와 재생 | abcjs (CDN, 버전 고정) |
| 사진 | 노출(조리개, 셔터, 감도) 실험, 히스토그램, 커브 | 기존 `Lab.register` 방식 |
| 프로그래밍 | 코드 블록 강조와 복사 | 이미 있는 `widgets.js`의 코드 복사 기능, 필요하면 Prism |

- [ ] 표지 그림(`motif`)을 분야에 맞게 몇 개 추가합니다. 예: 악보, 필름, 키릴 문자.
- [x] 친구의 책 폴더를 지웠습니다. 책 홈을 새로 쓸 때는 친구 저장소의 `books/*/index.html`을 참고합니다.

## 3단계. 사진 저장소와 앨범

### 3-1. `photos` 저장소

```
photos/
  .nojekyll
  index.html          비워 두거나 블로그 앨범으로 보내는 링크
  albums.js           앨범·사진 목록 (블로그가 읽음)
  img/2026/jeju/001.webp
  img/2026/jeju/001_t.webp
```

- [ ] `cherryopener/photos` 저장소를 Public으로 만들고 Pages를 켭니다.
- [ ] 변환 스크립트를 만듭니다. 스크립트는 원본 폴더를 입력으로 받아 다음을 합니다.
  1. 긴 변 2000px WebP(품질 80)와 긴 변 400px 썸네일을 만듭니다.
  2. EXIF 메타데이터를 전부 지웁니다. GPS가 남았는지 다시 확인해서, 남아 있으면 실패로 처리합니다.
  3. 카메라, 렌즈, 필름, 노출, 촬영일은 지우기 전에 읽어 두었다가 `albums.js` 항목으로 출력합니다.
  4. 한 장이 600KB를 넘으면 경고합니다.
  - 도구 후보는 Node + `sharp`, 또는 macOS 기본 `sips`와 `exiftool`입니다.
  - 스크립트는 `photos` 저장소의 `tools/`에 둡니다. 원본 폴더 경로는 `.gitignore`로 막습니다.
- [ ] `albums.js` 형식을 정합니다.

```js
window.ALBUMS = [
  { id: "2026-jeju", title: "제주, 11월", date: "2026-11", cover: "img/2026/jeju/001",
    camera: "Nikon FM2", film: "Kodak Portra 400",
    photos: [ { src: "img/2026/jeju/001", caption: "협재 바다", exif: "f/8 · 1/250s" } ] },
];
```

### 3-2. 블로그의 앨범 페이지

- [ ] `album/index.html`: 앨범 목록 (표지 썸네일 격자)
- [ ] `album/view.html?id=…`: 앨범 하나. 썸네일 격자와 크게 보기(라이트박스)를 넣고, 키보드와 스와이프로 넘기게 합니다.
- [ ] `<script src="${photoBase}albums.js">`를 동적으로 불러옵니다. 실패하면 "사진을 불러오지 못했습니다"를 보여 줍니다.
- [ ] 이미지에 `loading="lazy"`, `width`/`height`를 넣어 레이아웃이 밀리지 않게 합니다.
- [ ] 홈과 상단바에 앨범 링크를 추가합니다.
- [ ] 사진 책(`photo` 분야)의 장에서 앨범 사진을 예시로 쓸 수 있는 부품을 만듭니다: `<figure data-photo="2026-jeju/001">`.

## 4단계. 첫 책

- [x] 첫 책을 하나 고르고 `level`을 정합니다. (수리물리학, L3) 처음에는 L2~L3이 좋습니다. 엔진과 절차를 검증하기에 비용이 적당합니다.
- [ ] [CLAUDE.md](../CLAUDE.md) 5절 절차대로 진행합니다.
  1. 기획: `GUIDE.md`와 목차를 만듭니다.
  2. 1장을 단독으로 씁니다.
  3. 사용자가 확인합니다.
  4. 나머지 장은 병렬로 쓰고 검토합니다.
- [ ] 첫 책을 쓰면서 바뀐 규칙은 CLAUDE.md에 반영합니다.

## 5단계. 운영

- [ ] 사진을 올릴 때마다 `photos` 저장소의 용량을 확인합니다. 800MB를 넘으면 DECISIONS.md 3-2절의 방법 중 하나를 고릅니다.

```bash
gh repo view cherryopener/photos --json diskUsage
```

- [ ] 책이 늘어나면 `data/books.js`가 커집니다. 300KB를 넘으면 책마다 파일을 나누는 것을 검토합니다.
- [ ] 개인 도메인을 쓰고 싶어지면 `CNAME`을 추가합니다. 이 경우에도 `/photos/` 경로는 그대로 동작합니다.
