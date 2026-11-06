# 『아빠의 독일어 A1』 집필 가이드

이 책의 모든 장이 따르는 규칙입니다. 장을 쓰기 전에 이 문서, [`templates/language.html`](../../templates/language.html), 저장소의 [`CLAUDE.md`](../../CLAUDE.md)를 먼저 읽습니다. 기준 장(1장)이 쓰인 뒤에는 `chapters/ch01.html`도 읽습니다. 장 하나를 맡은 에이전트는 이 문서의 1~7절과 9절, 그리고 8절에서 **자기 장과 바로 앞 두 장의 항목**을 읽으면 됩니다.

## 1. 책의 성격과 독자

- **가장 먼저 지킬 원칙은 틀린 독일어를 싣지 않는 것입니다.** 외국어 책에서 틀린 성·복수·어미·예문은 학습자에게 그대로 굳습니다(CLAUDE.md 4-4절). 다른 규칙은 모두 이 원칙 아래에 둡니다. 확신이 없는 문장은 더 단순한 확실한 문장으로 바꿉니다.
- **독자는 이 책의 주인공 자신입니다.** 한국어가 모국어이고, 물리학을 전공했고, 영어를 잘 읽습니다. 독일어는 처음입니다. 문법 설명은 짧고 논리적으로 쓰고, 영어와 비교가 도움이 되는 곳에서는 영어를 씁니다(동족어, 거짓 친구, 어순 차이).
- **난이도**는 L1(입문)이고, 범위는 CEFR **A1**(Goethe-Zertifikat A1: Start Deutsch 1 수준)입니다. 모든 장이 L1입니다.
- **이야기 책입니다.** 모든 장은 한 가족의 실제 생활 장면에서 시작합니다. 문법은 그 장면에서 필요해지는 순서로 나오지만, **누적**되어야 합니다. 어떤 장도 뒤에서 가르칠 문법을 설명 없이 쓰지 않습니다(2-2절).
- **원칙**: 시중 교재(Menschen, Netzwerk, Schritte, Studio d, Begegnungen 등)와 한국 독일어 교재는 다루는 범위와 순서만 참고합니다. 대화, 예문, 연습문제, 그림은 모두 새로 씁니다. 교재의 대화를 이름만 바꿔 옮기지 않습니다.
- **문체**: 본문 설명은 **한다체**(예: "~이다", "~해 보자")로 씁니다. 서재의 다른 책과 같습니다. 이 문서는 합니다체로 씁니다. 대화 번역의 말투는 5-4절에 있습니다.

### 1-1. 이야기의 설정

모든 장이 같은 설정을 씁니다. 이름은 사용자가 나중에 찾아 바꾸기(search-and-replace)로 바꿀 수 있도록, **아래 표기 그대로** 씁니다. 별명이나 줄임말(예: "Leni", "Joni")을 만들지 않습니다.

| 인물 | 독일어 표기 | 한국어 표기 | 설정 |
|---|---|---|---|
| 나 (학습자) | `Minho` (성 `Kim`) | 민호 | 한국인 남편. 30대 중반. 서울의 회사에서 소프트웨어 개발자(`Softwareentwickler`)로 일한다. 대화에서는 화자 이름을 `나`로 쓴다 |
| 아내 | `Lena` (성 `Brandt`) | 레나 | 독일인. 하노버 출신. 결혼 뒤에도 성을 바꾸지 않았다. 번역가(`Übersetzerin`)로 집에서 일하다 지금은 육아휴직(`Elternzeit`) 중. 아기에게는 독일어만 쓴다 |
| 아들 | `Jonas` (성 `Kim`) | 요나스 | 2026년 10월 21일 서울에서 태어났다. 책이 끝날 때 첫돌을 맞는다 |
| 장모 | `Sabine` (`Oma`) | 자비네 | 레나의 어머니. 60대 초반. 하노버에 산다 |
| 장인 | `Thomas` (`Opa`) | 토마스 | 레나의 아버지. 60대 중반. 은퇴했다 |
| 처남 | `Felix` | 펠릭스 | 레나의 남동생. 20대 후반. 베를린에 산다 |
| 이웃 | `Frau Becker` | 베커 부인 | 하노버 처가의 옆집. 70대. 민호와 서로 `Sie`로 말한다 (19장) |
| 장인의 친구 | `Jürgen` | 위르겐 | 19장에서 민호에게 `du`를 제안한다 |

- 가족은 **서울의 아파트**에 산다. 약 10년 뒤 독일로 이사할 계획이다. 이 계획은 동기로만 가끔 언급하고, 이사 자체는 다루지 않는다.
- 레나는 한 부모 한 언어(one parent, one language) 원칙으로 요나스에게 독일어만 쓴다. 민호는 아들에게 한국어를 쓰지만, 아내가 아기에게 하는 말을 알아듣고, 아들과 처가 식구와 독일어로 말하고 싶어서 독일어를 배운다. **이것이 이 책의 동기입니다.** 리드 문단과 학습 목표는 이 동기와 이어지게 씁니다.
- 부부는 서로 `du`로 말한다. 민호와 처가 식구도 결혼할 때부터 서로 `du`로 말하고, 민호는 장인·장모를 `Sabine`, `Thomas`라고 이름으로 부른다(7장 문화 노트).
- 민호의 부모(요나스의 한국 할머니·할아버지)는 대전에 산다. 독일어 대화에서는 `meine Eltern`, `deine Eltern`, `Jonas' Großeltern in Daejeon`처럼 부르고, 이름은 짓지 않는다.
- 소아과, 상점, 관공서 같은 **한국 안의 장면은 한국어로 일어납니다.** 이 책은 그 일을 **아내와 처가에 독일어로 전하는 장면**을 대화로 씁니다(예: 14장에서 민호가 소아과 의사의 말을 레나에게 전한다). 한국 안에서 독일어 `Sie`가 자연스러운 곳은 주한 독일 대사관(8장)뿐입니다.
- **시간 흐름**: 1부는 출생 뒤 첫 6주(2026년 10~11월), 2부는 11~12월(처가 식구가 크리스마스에 서울을 방문), 3부는 2027년 1~6월, 4부는 2027년 7월 독일 여행과 10월 첫돌입니다. 장 안의 날짜, 요나스의 개월 수, 계절은 8절의 각 장 항목을 따릅니다.

### 1-2. 이 책에서 하지 않는 것

| 다루지 않는 것 | 이 책에서 하는 만큼 |
|---|---|
| 형용사 어미 변화 (`ein kleines Baby`, `warmes Wasser`) | 표현(고정 구)으로만 씀. 설명은 `callout deep`에 "A2에서 배운다"로 한 줄. 서술적 용법(`Er ist klein.`)은 1장부터 씀 |
| 2격(Genitiv) | 이름 + `s`(`Lenas Mutter`)만 7장에서. 그 밖에는 `von` + 3격으로 |
| 재귀 동사 (`sich freuen`, `sich drehen`) | 표현으로만 (`Er dreht sich.`, `Mach dir keine Sorgen!`) |
| 부문장 (`dass`, `weil`, `wenn`) | 쓰지 않음. 이유는 `denn`으로(11장). 간접 화법은 콜론으로 이음: `Die Ärztin sagt: Er soll viel trinken.` |
| 미래 시제 (`werden` + 부정사) | 15장의 `werden`은 "되다"만. 미래는 `callout deep` 한 줄 |
| 장소 이동의 4격 (`Wohin? in den Park`) | `zum`, `nach Hause`, `nach` + 도시만 가르침. `in den Park`, `ins Bett`, `ins Büro`는 표현으로 |
| 비교급·최상급 | `gern / lieber / am liebsten`만(11장) |
| 접속법 2식 | `Ich hätte gern …`, `Ich möchte …`만 표현으로(9장, 18장, 19장) |
| 과거(Präteritum) | `war`, `hatte`만(17장). 나머지 과거는 현재완료로 |

## 2. 목차

목차의 기준은 [`data/books.js`](../../data/books.js)의 `german-a1` 항목입니다. 4부 20장입니다.

| 부 | 장 | 시기 | 이 부가 하는 일 |
|---|---|---|---|
| 1부 갓난아기와 함께 | 01 집에 온 첫날 · 02 왜 울까? · 03 배고프니? · 04 기저귀 갈기 · 05 잘 자, 요나스 · 06 목욕하고 옷 입기 | 출생 후 0~6주 | 발음의 기본, `sein`·`haben`과 규칙 동사, 관사와 1·4격, 복수, 시각, 불규칙 동사, 분리 동사와 명령법. 매일 아기에게 하는 말 |
| 2부 가족과 이어지기 | 07 할머니 할아버지와 영상 통화 · 08 요나스의 여권 · 09 처가 식구가 온다 · 10 쪽쪽이는 어디 있지? · 11 할머니와 쿠키 굽기 · 12 메리 크리스마스 | 11~12월 | 소유 관사와 4격 대명사, 존칭 `Sie`와 날짜, 화법 조동사 1, 장소의 3격, 좋아하는 것과 `man`, 접속사, 3격 대명사 |
| 3부 자라는 아기 | 13 우리 가족의 한 주 · 14 열이 나요 · 15 유모차 산책 · 16 첫 이유식 · 17 처음 해낸 것들 | 1~6월 | 요일과 시간 전치사, 화법 조동사 2, 3격 전치사, `werden`, 현재완료(`haben`/`sein`), `war`/`hatte` |
| 4부 독일 여행과 첫돌 | 18 독일로 가는 길 · 19 하노버의 처가에서 · 20 첫돌 | 7월, 10월 | 낯선 사람과 `Sie`로 말하기, 공식 시각, 가게에서 사기, `du`/`ihr`/`Sie` 정리, `seit`/`vor`, 한 해를 돌아보며 이야기하기 |

목차를 짤 때 정한 것은 다음과 같습니다.

- **신생아 돌보기를 맨 앞에 둡니다**(사용자 요청). 1부의 여섯 장은 매일 반복되는 일(울음, 수유, 기저귀, 잠, 목욕, 옷)이라 같은 말이 계속 되풀이되고, 학습자가 바로 집에서 써 볼 수 있습니다.
- **1~4장의 문법은 A1의 뼈대입니다.** `sein`(1장) → 규칙 동사, `haben`, 의문문(2장) → 관사와 1격, `kein`(3장) → 4격, 복수, `es gibt`(4장). 아기를 돌보는 말이 이 순서와 잘 맞습니다: "Er ist müde." → "Er hat Hunger." → "Das ist ein Fläschchen." → "Wir brauchen einen Schnuller."
- **`Sie`는 8장에서 본격적으로 가르칩니다.** 가족 사이에서는 `Sie`를 쓸 일이 없어서, 한국에서 독일어 `Sie`가 자연스러운 장면(주한 독일 대사관에서 아기 여권 신청)을 만들었습니다. 1장에서는 `Sie`가 있다는 것만 알리고, 18~19장에서 낯선 사람과 쓰며 굳힙니다.
- **3격은 나누어 들어옵니다.** 장소(10장, `auf dem Tisch`) → 대명사(12장, `Das gefällt mir.`) → `zu`/`bei`(14장, `beim Kinderarzt`) → 나머지 3격 전치사(15장, `mit dem Kinderwagen`). A1에서 필요한 3격은 이 넷이 거의 전부입니다.
- **현재완료는 16~17장입니다.** 이유식과 첫걸음 같은 "오늘 처음 해냈어!"를 할머니에게 전하는 장면이 현재완료를 부릅니다. 그 전에 지난 일을 말해야 하면 현재형과 `schon`, `heute`로 돌려 말합니다.
- **크리스마스는 서울에서 보냅니다.** 요나스가 두 달이라 독일까지 가기 어렵기 때문에, 처가 식구가 서울에 옵니다(2부). 독일 여행은 요나스가 아홉 달일 때 여름에 갑니다(4부).

### 2-1. 다루는 것의 경계

- `data/books.js`의 `parts`에는 부 제목과 설명이 있습니다. 각 장은 `part`로 자기 부를 가리킵니다.
- 아직 쓰지 않은 장(`status: "slot"`)의 `desc`는 그 장의 계획을 한 문장으로 적은 것입니다. 장 파일의 절 제목(`<h2>`)은 8절의 절 목록을 그대로 옮깁니다.
- 장을 다 쓰면 메인 세션이 `desc`를 한두 문장 요약으로 바꾸고 `status`를 `"draft"`로 올립니다. `"done"`은 사용자만 바꿉니다.
- 절을 나누거나 합쳐야 하면 보고서에 제안으로 적습니다. 메인 세션이 이 문서의 8절과 `books.js`를 함께 고칩니다.

### 2-2. 문법 진도표

**어떤 장도 이 표에서 자기 장보다 뒤에 있는 문법을 설명 없이 쓰지 않습니다.** 장면에 꼭 필요하면 표현(`box expr`)으로 통째로 가르치고 "문법은 n장에서"라고 적습니다. 허용된 표현 목록은 2-3절에 있습니다.

| 장 | 새 문법 | 새로 쓸 수 있게 되는 것 | 발음 |
|---|---|---|---|
| 01 | `sein` 현재(전 인칭), 인칭대명사 1격, `Das ist …`, `sein` 의문문(`Bist du müde?`), 평서문의 동사 둘째 자리 | `ich bin`, `du bist`, `er ist` …, 서술 형용사 | 알파벳, 모음 장단, 움라우트 ä ö ü, ß |
| 02 | 규칙 동사 현재(어미 -e -st -t -en -t -en, 어간이 -t/-d로 끝나는 동사의 -e-), `haben` 현재, W-의문문(`was wer wo wie warum`), 예/아니요 의문문, 동사 2위(V2) | `Er hat Hunger.`, `Warum weint er?` | ch(ich/ach), sch, r |
| 03 | 명사의 성과 정관사 `der/die/das`(1격), 부정관사 `ein/eine`, `kein`(1격), `nicht`와 `kein`의 구별, 사물을 가리키는 `er/sie/es`, 숫자 0~100, `Wie viel?` | `Das ist kein Schnuller.`, `Er trinkt achtzig Milliliter.` | 어말 무성음화, s/z/ß/ss |
| 04 | 4격(정관사·부정관사·`kein`), 명사의 복수(유형표), `es gibt` + 4격, `ja/nein/doch` | `Wir brauchen einen Schnuller.`, `Gibt es noch Windeln?` | 이중모음 ei ie eu äu au |
| 05 | 어간 모음이 바뀌는 동사(a→ä, e→i, e→ie), 시각(공식·일상), `um`, `von … bis`, 시간 표현이 앞에 올 때의 도치 | `Er schläft.`, `Um drei Uhr ist er wach.` | 단어 강세, 문장 억양 |
| 06 | 분리 동사(문장 틀의 첫 형태), `du`/`ihr` 명령법, `zu` + 형용사, 색 | `Zieh Jonas an!`, `Wacht auf!`, `Der Body ist zu klein.` | st/sp, pf, w/v/f, qu |
| 07 | 소유 관사(1·4격, 전 인칭), 인칭대명사 4격, 이름 + s (`Lenas Mutter`) | `Hört ihr uns?`, `Er hat deine Augen.` | 강세 없는 e [ə], -er [ɐ], -en |
| 08 | 존칭 `Sie`(동사, `Ihr`), `Sie` 명령법, 철자 말하기, 서수와 날짜(`am einundzwanzigsten Oktober`), 달 이름, 큰 수와 연도, `Woher?` + `aus`, 나이 | `Wie heißen Sie?`, `Buchstabieren Sie bitte!` | 알파벳 이름, 철자 불러 주기 |
| 09 | 화법 조동사 1: `können`, `möchten`, `wollen`, 조동사 문장 틀 | `Kann ich Jonas halten?`, `Möchtet ihr Kaffee?` | ng, nk, -ig |
| 10 | `Wo?` + 장소 전치사 + 3격(정관사·부정관사), `im`/`am`, `liegen/stehen/hängen` | `Der Schnuller liegt unter dem Sofa.` | ü·ö와 i·e·u·o 구별 |
| 11 | `gern / lieber / am liebsten`, `mögen`, 일반 주어 `man`, 접속사 `und / aber / oder / denn` | `Ich esse lieber Bulgogi.`, `Man nimmt Mehl.` | 철자로 모음 장단 알기 |
| 12 | 인칭대명사 3격, 3격 동사(`gefallen, gehören, helfen, danken`), 3격 + 4격 목적어(`Wir schenken ihm ein Buch.`), `für`/`ohne` + 4격 | `Das ist für dich.`, `Gefällt es dir?` | 성문 파열음(Knacklaut)과 이어 읽기 |
| 13 | 요일·하루의 때, `am / im / um`, 빈도 부사, 화법 조동사 2: `müssen`, `dürfen` (`nicht müssen` ≠ must not) | `Am Montag muss ich arbeiten.` | 복합어 강세 |
| 14 | `sollen`(남의 말 전하기), 조동사 전체 정리, `zu`/`bei` + 3격(`zum`, `zur`, `beim`), `… tut weh`, 소수 | `Er soll viel trinken.`, `Wir sind beim Kinderarzt.` | l과 r |
| 15 | 비인칭 `es`(날씨), `werden` 현재(되다), 3격 전치사 `mit, nach, von, aus, seit`(목록), `Wohin?` + `zu`/`nach` | `Es wird warm.`, `Wir gehen mit dem Kinderwagen.` | 자음 겹침(모음 끼워 넣지 않기) |
| 16 | 현재완료 1: `haben` + 과거분사, 분사 만들기(ge-…-t, ge-…-en, -ieren, be-/ver-, 분리 동사의 -ge-), `schmecken` + 3격 | `Er hat Brei gegessen.`, `Hat es dir geschmeckt?` | ge-와 -iert의 강세 |
| 17 | 현재완료 2: `sein` + 과거분사(이동·상태 변화), `war`/`hatte`(과거), 지난 때 표현(`gestern`, `letzte Woche`, `vor zwei Wochen`) | `Er ist gekrabbelt.`, `Er hatte Fieber.` | 이야기하는 문장의 리듬 |
| 18 | 낯선 사람과의 `Sie`(복습과 확장), 정중한 부탁(`Können Sie …?`, `Ich hätte gern …`), 공식 시각(24시간), `von … nach` | `Von welchem Gleis fährt der Zug?`는 표현 | 구어의 줄임(`gibt's`, `hab`, `'n`) |
| 19 | `du / ihr / Sie` 한눈에(대명사·소유 관사·명령법·동사), 지시하는 `der/die/das`(`Den nehme ich.`), 값 말하기 | `Was kostet das?`, `Das macht vier Euro zwanzig.` | Euro, eu, 정중한 억양 |
| 20 | `seit` + 3격 + 현재, `vor` + 3격 + 현재완료, 초대장과 짧은 편지 쓰기, 1년 복습 | `Seit einem Jahr bin ich Papa.` | 복습(혀 꼬이는 말) |

### 2-3. 미리 쓰는 표현

다음 표현은 문법을 배우기 전에도 써도 됩니다. 처음 쓰는 장에서 `box expr`로 통째로 가르치고, 메모에 "문법은 n장"이라고 적습니다. 이 목록에 없는 표현을 미리 써야 하면 보고서에 적습니다.

| 표현 | 처음 쓰는 장 | 문법을 가르치는 장 |
|---|---|---|
| `Willkommen zu Hause!` · `zu Hause` | 01 | 15 (`zu`) |
| `Wie geht's?` · `Gut, danke.` · `Es geht.` · `Und dir?` | 01 | 12 (`es geht mir`, 3격 대명사) |
| `Das ist dein Papa.` · `Das ist mein Sohn.` · `Das ist meine Frau.` · `Das ist mein Mann.` | 01 | 07 (소유 관사) |
| `Ich heiße …` | 01 | 02 (규칙 동사) |
| `Schau mal!` | 01 | 06 (명령법) |
| `Gute Nacht!` · `Schlaf gut!` | 01 | 06 (명령법) |
| `Was ist los?` · `Was hast du denn?` | 02 | 02 (`haben`; `denn`은 표현) |
| `Braver Junge!` · `Mein Kleiner!` · `Mein Schatz!` | 03 (`Mein Schatz!`는 01) | 1-2절(형용사 어미는 다루지 않음), 07 (소유 관사) |
| `alle drei Stunden` | 03 | — |
| `im Schrank` · `im Bett` · `im Auto` | 04 | 10 |
| `im Flugzeug` · `im Zimmer` | 09 | 10 |
| `am Tag` · `in der Nacht` | 05 (`in der Nacht`는 02) | 13 (`am`), 10 (`in`) |
| `Ist ja gut.` | 02 | 범위 밖 (양태 불변화사) |
| `Zeit fürs Bett!` | 05 | 12 (`für`) |
| `Er schläft ein.` | 05 | 06 (분리 동사) |
| `Ich hab dich lieb.` | 07 | 18 (구어 `hab`) |
| `bei uns` · `bei euch` (= 우리 쪽, 너희 쪽) | 07 | 14 (`bei`) |
| `aus Korea` · `in Seoul` | 08 | 15 (`aus`), 10 (`in`) |
| `Ich möchte …` | 08 | 09 |
| `ins Büro` · `ins Bett` · `in den Park` | 13 | 범위 밖 (1-2절) |
| `zum Kinderarzt` | 13 | 14 |
| `Mach dir keine Sorgen!` · `Gute Besserung!` | 14 | 범위 밖 (재귀) |
| `Er dreht sich.` | 17 | 범위 밖 (재귀) |
| `Ich hätte gern …` | 18 | 범위 밖 (접속법 2식) |
| `Wollen wir uns duzen?` | 19 | 범위 밖 (재귀) |
| `ein bisschen` · `zum ersten Mal` | 16 | — |
| 형용사 어미가 붙은 고정 구(`warmes Wasser`, `Frohe Weihnachten!`, `Alles Gute!`) | 처음 필요한 장 | 범위 밖 |

- **4격 남성 명사(`den`, `einen`, `keinen`)는 4장 전에 쓰지 않습니다.** 1~3장에서 목적어가 필요하면 관사 없는 명사(`Hunger`, `Durst`), 여성·중성·복수 명사(`die Windel`, `das Fläschchen`), 이름(`Jonas`)을 씁니다. 1~3장의 4격 여성·중성은 1격과 꼴이 같으므로 설명 없이 써도 됩니다.
- **4격 대명사(`ihn`, `mich`, `uns`)는 7장 전에 쓰지 않습니다.** 대신 이름을 씁니다: `Ich nehme Jonas.`
- **3격(`dem`, `mir`, `mit`)은 10장 전에 2-3절의 표현 밖에서 쓰지 않습니다.**

## 3. 장 한 편의 구성

### 3-1. 뼈대

| 부분 | 내용 | 분량 기준 |
|---|---|---|
| 머리 | 리드 문단(2~3문장, 이 장의 장면과 동기), 학습 목표, 선수 지식 | 학습 목표 4~5개. "…을 말할 수 있다", "…을 구별할 수 있다", "…을 알아들을 수 있다" 꼴 (CEFR의 can-do 문장) |
| 장면 절 (2~3개) | 장면 소개 문단 → 대화(`box dia`) 1~2개 → 단어 표(`table.vocab`) → 표현(`box expr`) 1~3개 | 대화 하나에 6~14줄 |
| 문법 절 (1~2개) | 규칙 → 활용표(`table.conj`)나 정리 표 → 예문 목록(대화에서 가져온 문장 먼저) → 영어와 비교(`callout tip`) → 흔한 실수(`callout warn`) | 문법 상자 2~4개 |
| 발음 절 | 이 장의 발음 하나. 규칙 → 예 단어(`span.say`, IPA, 한글) → 최소 대립쌍이나 따라 읽기 줄 → 대화 속 단어로 연습 | 단어 10~20개 |
| 한국과 독일 절 | 장면과 이어지는 생활 비교 하나. `callout culture` 1~2개와 짧은 본문 | 1.5~3KB |
| 핵심 정리 | 이 장의 문법·표현 요점. 독일어 예문 하나씩 포함 | 5~8개 |
| 확인 퀴즈 | 객관식, 해설 포함. 문법 2개 이상, 단어(성·복수) 1개, 대화 이해 1개, 발음이나 문화 1개 | 5~6문항 |
| 연습문제 | ★1~3, 풀이는 접어 둠. 3-3절의 유형을 섞음 | 8~12문제 |

- **절의 순서는 장면 → 문법 → 장면 → 문법 → 발음 → 한국과 독일**이 기본입니다. 장마다의 정확한 절 제목은 8절에 있습니다. 대화를 먼저 듣고 읽은 뒤 그 대화에서 문법을 꺼내는 귀납식 흐름입니다. 문법 절의 첫 예문은 바로 앞 대화의 문장으로 시작합니다.
- **분량**: 장 하나의 HTML이 50~100KB입니다. 기준 장(1장)은 약 70KB를 목표로 합니다. 한국어는 UTF-8에서 글자당 3바이트이고, 대화와 단어 표의 마크업이 많아 KB가 커 보입니다. 100KB를 넘으면 연습문제나 세 번째 대화를 줄입니다.
- **새 단어**는 장당 **30~45개**입니다(1장 25~35개). 책 전체로 약 700개입니다. 숫자, 요일, 달 이름, 색처럼 묶음으로 배우는 단어는 하나의 표에 모으고 개수에 넣습니다.
- **대화**는 장당 2~4개, 모두 합쳐 25~45줄입니다. 대화 한 줄은 짧게(독일어 단어 3~10개) 씁니다. 이 수준에서 긴 문장은 기억에 남지 않습니다.
- 앞 장의 단어와 문법은 **일부러 다시 씁니다.** 대화의 단어 가운데 60% 이상은 앞 장에서 배운 단어여야 합니다. 앞 장 단어는 단어 표에 다시 넣지 않습니다.

### 3-2. 머리와 장면 절

- 리드 문단은 그날의 장면으로 시작합니다. 예: "병원과 조리원에서 보낸 2주가 끝나고, 오늘 요나스가 처음 집에 온다. 레나는 아기에게 독일어로 말을 건다. 나는 아직 한 마디도 알아듣지 못한다." 마지막 문장은 이 장에서 할 수 있게 될 것입니다.
- 장면 소개 문단(대화 상자 앞)은 2~4문장으로 때, 곳, 누가 무엇을 하는지 적습니다. 요나스가 몇 주(몇 달)인지 넣습니다.
- 대화 상자의 제목(`.box-h`)은 장면만 씁니다. 예: "새벽 세 시, 우는 아기". 엔진이 "대화 1.1"을 앞에 붙입니다. "대화:"를 쓰지 않습니다.
- 대화 밑에는 짧은 본문 1~3문장으로 대화에서 눈여겨볼 곳을 짚습니다(예: "`Er hat Hunger`는 '그는 배고픔을 가지고 있다'처럼 말한다").
- 단어 표는 그 장면에서 새로 나온 단어만 모읍니다. 표가 25줄을 넘으면 주제별로 나눕니다(예: "먹이기", "숫자").
- 표현 상자에는 통째로 외울 말 1~4개와 쓰는 상황을 적습니다. 비슷한 말이 여럿이면 차이를 적습니다(예: `Tschüss`와 `Auf Wiedersehen`).

### 3-3. 연습문제의 유형

장마다 아래 유형에서 고르되, ★1을 3~4개, ★2를 3~5개, ★3을 1~3개 둡니다.

| 유형 | 난이도 | 예 |
|---|---|---|
| 형태 채우기 (활용, 관사, 어미) | ★1 | `Jonas ___ (schlafen) jetzt.` |
| 성과 복수 고르기 | ★1 | `___ Windel` → der / die / das |
| 낱말 순서 맞추기 | ★1~2 | `um / er / drei Uhr / trinkt` → 시간이 앞에 오는 문장으로 |
| 한국어 → 독일어 한 문장 옮기기 | ★2 | "기저귀가 젖었어." |
| 대화 빈칸 채우기 / 대답 고르기 | ★2 | 레나의 말에 알맞은 대답 |
| 틀린 곳 찾아 고치기 | ★2 | `Ich brauche ein Schnuller.` |
| 상황 말하기 ("이럴 때 뭐라고 할까?") | ★2~3 | "요나스가 쪽쪽이를 떨어뜨렸다. 레나에게 쪽쪽이가 어디 있는지 묻자." |
| 짧게 쓰기 (3~5문장) | ★3 | 할머니에게 오늘 요나스가 한 일을 문자로 보내기 |

- **풀이**는 독일어 정답(`<span lang="de" class="say">`로 들을 수 있게)과 한국어 해설을 함께 씁니다. 정답이 여럿 가능하면 자연스러운 것 2~3개를 모두 적습니다.
- ★3의 짧게 쓰기는 모범 답안 하나와 "이런 말을 넣어도 좋다" 목록을 둡니다.
- 연습문제의 독일어 문장도 대화와 같은 인물과 설정을 씁니다.
- 확인 퀴즈의 보기에 독일어를 넣을 때는 `<button class="opt"><span lang="de">der</span></button>`처럼 감쌉니다.

## 4. 부품과 번호

번호는 엔진(`assets/js/book.js`)이 자동으로 붙이고, 외국어 부품은 `assets/js/lang.js`가 처리합니다. 손으로 번호를 쓰지 않습니다. 부품 목록은 [`templates/language.html`](../../templates/language.html) 머리의 주석에 있습니다.

| 부품 | HTML | 자동 번호·기능 |
|---|---|---|
| 절 | `<section id="s1"><h2>제목</h2>…</section>` | 1.1, 1.2 … |
| 대화 | `<div class="box dia" id="dia-…"><div class="box-h">장면</div><div class="dialog">…</div></div>` | 대화 1.1 … · 줄마다 소리 버튼, "전체 듣기", "번역 가리기" |
| 대화 한 줄 | `<div class="line" data-who="Lena"><p lang="de">…</p><p class="tr">…</p></div>` · 민호의 줄은 `class="line me"`, `data-who="나"` | |
| 문법 | `<div class="box gram" id="gram-…"><div class="box-h">이름</div>…</div>` | 문법 1.1 … |
| 표현 | `<div class="box expr" id="expr-…">…</div>` | 표현 1.1 … |
| 예제 | `<div class="box ex" id="ex-…">…</div>` | 예제 1.1 … (거의 쓰지 않음. 문법 상자 안의 예문 목록으로 충분) |
| 단어 표 | `<table class="vocab">` (5-2절) | 첫 칸에 소리 버튼. 복수 표기는 읽지 않음 |
| 활용표 | `<table class="conj">`, 어미는 `<b class="end">e</b>` | |
| 독일어 (본문 속) | `<span lang="de">…</span>`, 소리 버튼은 `<span lang="de" class="say">…</span>` | |
| 발음 | `<span class="ipa">[…]</span> <span class="hangul">[…]</span>` | 소리로 읽지 않음 |
| 성 색 | `<span class="g m">der</span>` · `g f` · `g n` · `g pl` | |
| 참조 | `<a class="ref" href="#gram-…"></a>` (비워 둠) | "문법 3.2", "대화 1.1", "문제 1.4"로 채워짐 |
| 콜아웃 | `<div class="callout tip\|warn\|deep\|culture"><strong>제목</strong><p>…</p></div>` | culture는 "독일 생활 · 제목" |
| 연습문제 | `<div class="prob" id="prob-…" data-level="1\|2\|3">…<details class="sol"><summary>풀이</summary>…</details></div>` | 문제 1.1 … |

- **참조 앞에 종류 이름을 쓰지 않습니다.** `<a class="ref" href="#gram-sein"></a>`는 "문법 1.1"로 채워지므로 "문법 <a…>"라고 쓰면 "문법 문법 1.1"이 됩니다. 참조 뒤의 조사는 채워질 번호의 끝소리에 맞춥니다(예: "문법 1.1을", "대화 1.2를").
- **다른 장 참조**는 번호가 자동으로 채워지지 않으므로 손으로 씁니다: `<a href="ch03.html#gram-articles">3장의 정관사</a>`. 그 장이 이미 쓰였으면 렌더링된 번호를 확인하고 `<a href="ch03.html#gram-articles">문법 3.1</a>`로 써도 됩니다.
- **대화의 규칙**
  - `data-who`는 가족은 독일어 이름(`Lena`, `Oma`, `Opa`, `Felix`, `Jürgen`, `Frau Becker`), 민호는 `나`, 이름 없는 사람은 한국어 역할명(`대사관 직원`, `승무원`, `역무원`, `점원`)으로 씁니다. 장모·장인은 대화에서 항상 `Oma`, `Opa`로 표시합니다(요나스 기준).
  - 줄 하나에는 `<p lang="de">` 하나와 `<p class="tr">` 하나만 둡니다.
  - 무대 지시("요나스가 운다")는 대화 줄에 넣지 않습니다. 필요하면 `.dialog`를 둘로 나누고 그 사이에 보통 `<p>`로 적습니다. 요나스는 말하는 줄을 갖지 않습니다(17장의 첫 말과 20장 제외. 그때도 `Mama`, `Papa`, `Ball`처럼 한 단어만).
  - 민호의 줄(`.me`)은 학습자가 따라 말할 줄입니다. 각 대화에서 민호의 줄은 그 장의 문법을 쓰는 문장으로 고릅니다.
- **`id` 규칙**: 내용을 따서 영어 소문자와 하이픈으로 짓습니다. 접두어는 `dia-`, `gram-`, `expr-`, `ex-`, `prob-`입니다. 단어 표, 콜아웃, 발음 단락에는 `id`를 달지 않습니다.
  - 8절에 장마다 **미리 정한 `id`**가 있습니다. 다른 장이 이 `id`로 링크를 걸기 때문에 **이름을 바꾸지 않고 모두 만듭니다.** 필요 없어지면 보고서에 적습니다.
  - 8절에 없는 `id`는 자유롭게 더하되, 책 전체에서 겹치지 않게 장의 주제를 넣어 짓습니다(`prob-translate-1` 대신 `prob-feeding-translate`).
- **소리 버튼(`class="say"`)을 다는 곳**: 문법 상자의 예문, 표현 상자의 표현, 발음 절의 예 단어, 연습문제 풀이의 정답. 본문 설명 속 짧은 단어 언급(예: "`kein`은 …")에는 `say` 없이 `<span lang="de">`만 씁니다.
- **수식(KaTeX)은 쓰지 않습니다.** 숫자는 그냥 씁니다.

## 5. 표기와 용어

### 5-1. 독일어

- **표준 독일어**(Hochdeutsch), **현행 정서법**(2006년 개정 이후, Duden 기준)을 씁니다. `ß`와 `ss`를 구별합니다(`Fuß`, `Kuss`, `Tschüss`). 스위스식 `ss` 대체를 쓰지 않습니다.
- 레나와 처가는 하노버 출신이므로 **북부 표준형**을 고릅니다: `Tschüss`, `Brötchen`, `Möhre`(16장, `Karotte`도 소개), `Schnuller`, `Sonnabend` 대신 `Samstag`(전국 공통형을 우선).
- 지역에 따라 다른 말은 메모나 `callout tip`에서 한 줄로만 소개합니다(예: `Brötchen` / 남부 `Semmel` / 베를린 `Schrippe`; `Schnuller` / `Nuckel`; `Tschüss` / `Servus`; `hat gesessen` / 남부 `ist gesessen`).
- **가족 대화는 자연스러운 구어 표준어입니다.** `Schau mal!`, `Na?`, `Komm!`, `So!`, `Ach so!`, `Na klar!` 같은 말과 `doch`, `mal`, `denn`, `ja` 같은 양태 불변화사를 씁니다. 양태 불변화사는 처음 나올 때 표현 상자나 메모에서 "뜻을 부드럽게 하는 말"로 짧게 설명하고, 문법으로 체계화하지 않습니다.
- **줄임은 18장 전까지 `geht's`, `gibt's`만** 씁니다(`Wie geht's?`, `Was gibt's?`). `ich hab`, `ich mach`, `'n`, `haste` 같은 구어 줄임은 18장 발음 절에서 소개하고, 그 전에는 쓰지 않습니다. 예외는 2-3절의 `Ich hab dich lieb.` 하나입니다.
- 아기말(`Heia machen`, `Pipi`, `Kacka`, `Wauwau`, `Mama`, `Papa`)은 실제 독일 부모가 쓰는 만큼 쓰고, 단어 표 메모에 "아기말"이라고 적습니다.
- 아기에게 하는 말에는 `wir`를 쓰는 습관이 있습니다(`Jetzt ziehen wir die Socken an.`). 6장에서 표현으로 설명하고 그 뒤로 자유롭게 씁니다.

### 5-2. 단어 표 쓰는 법

단어 표의 첫 칸(`td lang="de"`)에는 **소리로 읽을 말과 복수·변화 표시만** 넣습니다. 발음 표기, 영어, 설명은 셋째 칸(메모)에 넣습니다.

| 품사 | 첫 칸 표기 | 메모에 넣을 것 |
|---|---|---|
| 명사 | `<span class="g m">der</span> Schnuller, -` | 영어 동족어(`영 milk`), 지역형, 아기말 여부 |
| 복수형 표기 | `, -`(같음) · `, ¨-`(움라우트만) · `, -e` · `, ¨-e` · `, -er` · `, ¨-er` · `, -n` · `, -en` · `, -nen` · `, -s` | 복수형이 짐작하기 어려우면 메모에 통째로(`Pl. die Praxen`) |
| 복수가 거의 없는 명사 | `<span class="g f">die</span> Milch` (쉼표 없이) | "복수 없음" 또는 "보통 단수" |
| 복수로만 쓰는 명사 | `<span class="g pl">die</span> Eltern (Pl.)` | "복수로만" |
| 약변화 남성 명사 | `<span class="g m">der</span> Junge, -n` | "4격도 den Jungen" (`der Nachbar`, `der Name`도) |
| 남녀 짝 | 줄을 둘로: `<span class="g m">der</span> Arzt, ¨-e` / `<span class="g f">die</span> Ärztin, -nen` | |
| 동사 (규칙) | `weinen` | 영어 대응, 4장부터 `+ 4격` 표시 |
| 동사 (어간 변화) | `schlafen (schläft)` — 괄호에 3인칭 단수 | 5장 전에는 쓰지 않음 |
| 동사 (분리) | `auf\|wachen` — 분리 전철 뒤에 세로줄 | "분리 동사". 6장 전에는 단어 표에 넣지 않고 표현으로 |
| 동사 (분리 + 어간 변화) | `an\|rufen` · `aus\|sehen (sieht aus)` | |
| 동사 (16장부터) | 위와 같음 | 메모에 `hat geschlafen` / `ist eingeschlafen` (현재완료) |
| 형용사·부사 | `müde` | 반대말이 이미 나왔으면 "↔ wach" |
| 표현 | `Gute Nacht!` | 쓰는 때 |

- 명사의 성 색(`g m/f/n/pl`)은 단어 표뿐 아니라 문법 상자의 표에서도 씁니다. 대화와 본문 문장 속 관사에는 색을 칠하지 않습니다.
- 메모 칸에 발음을 적을 때는 `<span class="ipa">[ˈʃnʊlɐ]</span> <span class="hangul">[<b>슈</b>눌라]</span>` 순서입니다(5-3절).
- 단어의 뜻은 한국 부모가 실제로 쓰는 말로 씁니다: `der Schnuller` 쪽쪽이(공갈젖꼭지), `das Spucktuch` 손수건(트림 수건), `das Bäuerchen` 트림, `der Schlafsack` 아기 수면조끼(슬리핑백), `der Body` 바디슈트(보디), `der Strampler` 우주복(발 달린 내복), `der Kinderwagen` 유모차, `das Lätzchen` 턱받이.
- 영어 동족어는 기억을 돕는 곳에만 적습니다(`die Hand` – 영 hand, `trinken` – 영 drink). **거짓 친구**는 꼭 경고합니다: `bekommen` ≠ become(받다), `das Gift` ≠ gift(독), `brav` ≠ brave(착한, 말 잘 듣는), `also` ≠ also(그러니까), `wer` ≠ where(누구), `wo` = where, `bald` ≠ bald(곧), `fast` ≠ fast(거의).

### 5-3. 발음 표기

- **IPA**는 Duden 발음 사전 방식의 넓은 표기입니다. r은 `[ʁ]`, 모음화된 r은 `[ɐ]`, 장모음은 `ː`, 강세는 `ˈ`로 씁니다(예: `Windel [ˈvɪndl̩]`, `Kinder [ˈkɪndɐ]`, `Fläschchen [ˈflɛʃçən]`). 성문 파열음 `[ʔ]`는 12장 발음 절에서만 표기합니다.
- **한글 근사 표기**는 정확한 소리가 아니라 입문용 다리입니다. 1장 발음 절에서 그 한계를 한 번 밝힙니다. 규칙은 다음과 같습니다.

| 소리 | 한글 | 예 |
|---|---|---|
| 장모음 | 음절 뒤에 `ː` | `Name` [나ː메] |
| ä, e(짧은) | 에 | `Bett` [베트] |
| ö | 외 (입술 둥글게 한 '에', 이중모음 '웨'가 아님) | `schön` [쇤ː] |
| ü | 위 (입술 둥글게 한 '이', '우이'가 아님) | `müde` [뮈ː데] |
| ch (i, e, ä, ö, ü, 자음 뒤) | 히 | `ich` [이히] |
| ch (a, o, u, au 뒤) | 흐 | `acht` [아흐트] |
| 모음화된 r, 강세 없는 -er | 아 | `Vater` [파ː타], `wir` [비ː아] |
| 자음 앞·끝의 r | 생략하거나 '아'로 | `Wort` [보아트] |
| w | ㅂ (메모: 윗니를 아랫입술에 대는 v 소리) | `Windel` [빈들] |
| v (고유어) | ㅍ | `Vater` [파ː타] |
| s (모음 앞) | ㅈ | `Sabine` [자비ː네] |
| z | ㅊ | `Zimmer` [치마] |
| sch | 슈 / 모음 앞에서 쉬- 줄 | `Schnuller` [슈눌라], `schön` [쇤ː] |
| 끝의 b d g | 프 트 크 (어말 무성음화) | `Kind` [킨트], `Tag` [타ː크] |
| 끝의 l m n ng | 받침 ㄹ ㅁ ㄴ ㅇ | `Ball` [발], `lang` [랑] |

- 한글 표기 안에서 **강세 음절은 굵게** 씁니다: `<span class="hangul">[<b>빈</b>델]</span>`. 독일어 단어 자체에는 강세 부호를 넣지 않습니다.
- **표기 범위**
  - **1~3장**: 단어 표의 모든 단어에 IPA와 한글을 답니다.
  - **4~6장**: 모든 단어에 IPA, 한글은 첫 음절에 강세가 없는 단어, 철자와 소리가 어긋나는 단어, 그 장의 발음 항목이 들어 있는 단어에만.
  - **7장부터**: IPA와 한글 모두 다음 경우에만 답니다. (가) 첫 음절에 강세가 없는 단어(`Geschenk`, `Verspätung`, `probieren`), (나) 외래어(`Baby` [ˈbeːbi], `Restaurant`, `Ingenieur`), (다) 철자로 짐작하기 어려운 단어(`Vase`, `Chor`, `Orange`), (라) 그 장의 발음 항목 예.
  - 발음 절의 예 단어에는 장과 상관없이 모두 답니다.
- 독일어의 강세는 대부분 **첫 음절**입니다. 예외(`-ieren` 동사, 분리되지 않는 전철 `be- ge- ver- er- ent- zer-`, 외래어)는 메모에 "강세 둘째 음절"처럼 적습니다.

### 5-4. 번역과 말투

- **대화 번역(`p.tr`)은 직역이 아니라 자연스러운 한국어입니다.** 직역이 문법 이해에 도움이 되면 대화 밑 본문이나 문법 상자에 "(직역: 그는 배고픔을 가지고 있다)"로 따로 적습니다.
- 말투는 한국어의 실제 관계를 따릅니다. 독일어의 `du`/`Sie`는 독일어 쪽에서 보이고, 한국어 번역은 한국 가정에서 실제로 쓸 말투를 고릅니다. 이 차이는 7장 문화 노트에서 설명합니다.

| 화자 → 청자 | 독일어 | 한국어 번역 |
|---|---|---|
| 레나 ↔ 민호 | `du` | 반말 ("배고픈가 봐.") |
| 부모 → 요나스 | `du` | 아기에게 하는 말 ("우리 요나스, 배고파쪄?"는 지나치니 "배고파? 그래그래.") |
| Oma, Opa → 민호 | `du` | 다정한 반말 ("민호, 고마워.") |
| 민호 → Oma, Opa | `du`, 이름 `Sabine`, `Thomas` | 해요체, 부를 때는 "어머님", "아버님" |
| 레나 → 자기 부모 | `du`, 부를 때 `Mama`, `Papa` | 반말, "엄마", "아빠" |
| 펠릭스 ↔ 민호 | `du` | 반말 (동생과 매형) |
| 낯선 사람 ↔ 민호 | `Sie` | 해요체·합쇼체 |

- 한국어 번역에서 이름은 1-1절의 한국어 표기를 씁니다(레나, 요나스). `Oma`, `Opa`는 "할머니", "할아버지"로 옮깁니다.
- 문법 용어는 5-5절을 따릅니다.

### 5-5. 문법 용어

처음 나올 때 한국어 용어와 독일어 용어를 함께 쓰고, 그 뒤로는 한국어 용어만 씁니다.

| 한국어 | 독일어 | 처음 나오는 장 |
|---|---|---|
| 인칭대명사 | Personalpronomen | 01 |
| 동사 원형(부정사) | Infinitiv | 02 |
| 동사 어간, 어미 | Stamm, Endung | 02 |
| 동사 2위 (V2) | Verbzweitstellung | 01(맛보기), 02 |
| W-의문문, 예/아니요 의문문 | W-Frage, Ja/Nein-Frage | 02 |
| 남성, 여성, 중성 | maskulin, feminin, neutral | 03 |
| 정관사, 부정관사, 부정어 kein | bestimmter / unbestimmter Artikel | 03 |
| 1격(주격), 4격(목적격), 3격(여격), 2격(소유격) | Nominativ, Akkusativ, Dativ, Genitiv | 03, 04, 10, 07(이름+s) |
| 복수 | Plural | 04 |
| 어간 모음 변화 동사 | Verben mit Vokalwechsel | 05 |
| 분리 동사, 분리 전철 | trennbares Verb, Präfix | 06 |
| 문장 틀 | Satzklammer | 06 |
| 명령법 | Imperativ | 06 |
| 소유 관사 | Possessivartikel | 07 |
| 존칭 | Höflichkeitsform (Sie) | 08 |
| 서수 | Ordinalzahl | 08 |
| 화법 조동사 | Modalverb | 09 |
| 전치사 | Präposition | 05 |
| 접속사 | Konjunktion | 11 |
| 현재완료, 과거분사, 조동사 haben/sein | Perfekt, Partizip II, Hilfsverb | 16 |
| 과거 | Präteritum | 17 |
| 어말 무성음화 | Auslautverhärtung | 03 |
| 움라우트 | Umlaut | 01 |
| 단어 강세 | Wortakzent | 05 |

- 격은 "1격, 3격, 4격"으로 부릅니다(한국 독일어 교재의 관례). 처음 나올 때 "1격(주격, Nominativ)"으로 씁니다. 순서가 1·4·3인 이유(`Nominativ, Akkusativ, Dativ`를 배우는 순서)는 4장 `callout tip`에서 한 번 설명합니다.

### 5-6. 숫자와 날짜의 글꼴

- 본문과 단어 표에서 숫자는 아라비아 숫자로 씁니다. 날짜는 독일식 `21.10.2026`, 시각은 `14:35 Uhr`, 소수는 `38,5`(쉼표), 값은 `4,20 €`입니다.
- **소리로 읽는 곳(대화 줄, `span.say`)에서는 읽는 법이 숫자 꼴과 다른 것을 글자로 씁니다.** 예: `am einundzwanzigsten Oktober`, `um halb vier`, `vier Euro zwanzig`, `achtunddreißig Komma fünf`. 단순한 기수(`drei`, `100`)는 숫자로 써도 되지만, 숫자를 배우는 장(3장, 8장)의 대화에서는 모두 글자로 씁니다.

## 6. 소리로 읽기 (TTS)

브라우저의 독일어 음성(de-DE)이 `lang="de"`인 대화 줄, `span.say`, 단어 표의 첫 칸을 읽습니다. 이 글자들은 사람이 아니라 기계가 읽는다는 것을 기억합니다.

- 소리로 읽는 요소 안에는 **독일어 한 덩이만** 넣습니다. 한국어, 한글 발음, 괄호 설명, 빗금(`/`), 대괄호, 말줄임표(`…`)를 넣지 않습니다.
  - 나쁜 예: `<span lang="de" class="say">der/die/das</span>`, `<span lang="de" class="say">Ich bin (sehr) müde.</span>`
  - 좋은 예: `<span lang="de" class="say">der</span> · <span lang="de" class="say">die</span> · <span lang="de" class="say">das</span>`, `<span lang="de" class="say">Ich bin müde.</span> (더 강하게: <span lang="de" class="say">Ich bin sehr müde.</span>)`
- 빈칸 문제의 `___`는 소리 요소에 넣지 않습니다. 빈칸이 있는 문장은 `<span lang="de">`(say 없이)로 쓰고, 풀이의 완성된 문장에만 `say`를 붙입니다.
- 단어 표 첫 칸의 복수 표기(`, -n`), `(Pl.)`, 분리 동사의 세로줄(`auf|wachen`), 괄호 속 보충(`schlafen (schläft)`)은 엔진이 빼고 읽습니다.
- 약어를 쓰지 않습니다: `ml` 대신 `Milliliter`, `z. B.`, `usw.`는 본문(한국어 설명)에서도 피합니다.
- 활용표의 `b.end`는 소리에 영향이 없습니다.
- 기계 음성은 억양과 강세가 어색할 수 있습니다. 발음 절에서 "버튼의 소리는 기계 음성이라 문장 억양이 실제와 다를 수 있다"를 1장에서 한 번 밝힙니다.

## 7. 그림

- 이 책은 그림이 거의 필요 없습니다. 꼭 필요한 곳(1장의 입 모양 비교, 10장의 방 배치와 전치사)에만 간단한 SVG를 `figure.diagram`으로 넣습니다. 장당 0~1개입니다.
- SVG는 테마 클래스(`t`, `t-dim`, `s-line`, `s-acc`, `f-surface`, `f-acc-soft`)를 써서 다크 모드에서도 보이게 합니다. 그림 속 독일어 글자는 `<text>`에 쓰고, 크기는 `viewBox` 너비 480 기준 16px 이상입니다.
- 사진, 시중 교재의 그림, 외부 이미지는 쓰지 않습니다.
- 실험 위젯(`data-sim`)은 쓰지 않습니다.

## 8. 장별 정보

장을 병렬로 쓰기 위한 정보입니다. 장을 맡은 에이전트는 자기 장의 항목과 앞 장들의 항목(적어도 문법과 단어 주제)을 읽습니다.

- **때**: 장면의 시기와 요나스의 나이.
- **절**: 장 파일의 `<h2>` 제목입니다. 그대로 씁니다.
- **대화**: 계획한 대화와 `id`, 꼭 들어갈 핵심 문장. 핵심 문장은 고쳐도 되지만, 그 문법 항목은 빼지 않습니다.
- **문법**: 이 장의 문법 상자와 `id`.
- **단어**: 새 단어의 주제와 꼭 넣을 단어. 여기 적힌 단어는 이 장에서 처음 가르칩니다. **다른 장의 "꼭 넣을 단어"를 미리 단어 표에 넣지 않습니다.** 대화에 꼭 필요하면 대화 밑 본문에서 뜻만 알려 주고, 단어 표에는 넣지 않습니다.
- **표현**: 표현 상자와 `id`.
- **발음**, **한국과 독일**: 발음 절과 문화 노트의 주제.
- **연습문제 `id`**: 미리 정한 것. 더 만들어도 됩니다.
- **선수 장**: 굵게 쓴 장은 결과에 크게 기대는 장입니다(CLAUDE.md 5-1절 4항). 그 장이 끝난 뒤에 씁니다. 굵지 않은 장은 진도표(2-2절)의 계획만 보고 써도 됩니다.
- **경계**: 이 장에서 하지 않는 것.

모든 장이 1장 다음에 씁니다(1장이 기준 장). 아래 "선수 장"에서는 1장을 따로 적지 않습니다.

### 1부 갓난아기와 함께

#### 01 집에 온 첫날 — Hallo, Jonas!

- **때**: 2026년 11월 초. 요나스 생후 2주. 조리원에서 집으로 온 날과 다음 날 아침.
- **절**: 집에 온 날 · sein 동사와 인칭대명사 · 아침 인사 · 소개하기와 묻기 · 발음: 알파벳과 모음 · 한국과 독일: 산후조리원과 Wochenbett
- **대화**:
  - `dia-welcome-home` 현관에서. 레나가 요나스에게 집을 보여 주고, 민호가 처음으로 독일어로 아기에게 말을 건다. 핵심: `Willkommen zu Hause, Jonas!` · `Das ist dein Papa.` · `Hallo, Jonas! Ich bin Papa.` · `Er ist so klein!` · `Ja, und so süß.`
  - `dia-first-morning` 첫날 밤을 보낸 아침. 핵심: `Guten Morgen, Schatz!` · `Bist du müde?` · `Ja, ich bin sehr müde. Und du?` · `Ich bin auch müde. Aber Jonas ist wach!`
  - `dia-hello-oma` (짧게, 6줄 안팎) 레나가 하노버의 엄마에게 전화로 집에 왔다고 알린다. 민호가 옆에서 인사한다. 핵심: `Hallo, Mama! Wir sind zu Hause.` · `Hallo, Sabine!` · `Wie geht's?` · `Gut, danke!`
- **문법**: `gram-sein` (sein 현재 전 인칭, 표), `gram-personal-pronouns` (인칭대명사 1격 `ich du er sie es wir ihr sie Sie`; `Sie`는 "존칭, 8장에서"로 한 줄), `gram-das-ist` (`Das ist …` 소개, 사람과 사물에 모두), `gram-verb-second` (평서문은 동사가 둘째 자리, `sein` 의문문은 동사가 첫자리 — `Er ist müde.` / `Ist er müde?`; 맛보기 수준, 2장에서 넓힘)
- **단어** (25~35개): 인사(`Hallo`, `Guten Morgen`, `Guten Tag`, `Guten Abend`, `Gute Nacht`, `Tschüss`), `ja`, `nein`, `danke`, `bitte`, 가족(`das Baby, -s`, `der Sohn, ¨-e`, `die Frau, -en`, `der Mann, ¨-er`, `die Mama, -s`, `der Papa, -s`), 상태(`klein`, `groß`, `süß`, `müde`, `wach`, `schön`, `gut`), 작은 말(`und`, `aber`(표현처럼), `auch`, `sehr`, `so`, `hier`, `jetzt`), 부르는 말(`der Schatz`)
- **표현**: `expr-welcome-home` (`Willkommen zu Hause!`), `expr-greetings` (때에 따른 인사와 `Tschüss`/`Auf Wiedersehen`의 차이), `expr-how-are-you` (`Wie geht's?` — `Gut, danke.` / `Es geht.` / `Super!`; 문법은 12장), `expr-endearments` (`Schatz`, `mein Schatz`)
- **발음**: 알파벳 26자와 ä ö ü ß를 한 번 소리 내어 읽기(이름 읽기는 8장에서 다시), 모음 a e i o u의 장단(`Name`/`Mann`), 움라우트 ä ö ü의 입 모양, ß. 이 책의 IPA·한글 표기를 읽는 법(5-3절 표를 줄여서)과 한글 표기의 한계, 기계 음성의 한계를 여기서 밝힌다.
- **한국과 독일**: 산후조리원과 독일의 산욕기(`das Wochenbett`) — 독일은 출산 뒤 집에서 지내고 조산사(`die Hebamme`)가 집으로 찾아온다. 한 부모 한 언어 원칙을 짧게 소개하고, 이 책의 이야기와 이어 준다.
- **연습문제 `id`**: `prob-sein-forms`, `prob-pronoun-choice`, `prob-greeting-time`, `prob-das-ist-family`, `prob-question-sein`, `prob-vowel-length`, `prob-umlaut-read`, `prob-introduce-jonas`(★3: 요나스를 소개하는 3문장)
- **선수 장**: 없음
- **경계**: `sein` 밖의 동사 활용은 2장(`Ich heiße …`는 표현). 관사와 성은 3장 — 단어 표의 성 색에 대해서는 `callout tip` 한 줄("색은 명사의 성. 3장에서 자세히. 지금은 관사와 함께 소리 내어 외운다"). 복수 표기는 "쉼표 뒤는 복수형, 4장에서"로 한 줄. W-의문문은 2장(`Wie geht's?`는 표현). **이 장이 책의 기준 장입니다(10절).** 문체, 분량(약 70KB), 대화 길이, 단어 표, 발음 표기의 기준이 되므로 다른 장보다 공들여 씁니다.

#### 02 왜 울까? — Warum weint er?

- **때**: 생후 3주. 밤.
- **절**: 새벽의 울음 · 규칙 동사와 haben · 아기에게 묻기 · 질문 만들기 · 발음: ch, sch, r · 한국과 독일: 속싸개와 Pucken
- **대화**:
  - `dia-night-crying` 새벽 세 시, 요나스가 운다. 둘이 이유를 짐작한다. 핵심: `Warum weint er?` · `Vielleicht hat er Hunger.` · `Nein, er trinkt nicht.` · `Ich glaube, er hat Bauchweh.` · `Was machen wir jetzt?`
  - `dia-asking-jonas` 레나가 잠든 사이, 민호가 혼자 요나스를 달래며 묻는다(민호의 줄이 대부분). 핵심: `Was ist los, Jonas?` · `Hast du Hunger?` · `Bist du müde?` · `Was brauchst du?` · `Psst, ganz ruhig.`
  - `dia-morning-after` 아침에 둘이 밤을 돌아본다(현재형으로만). 핵심: `Er weint oft in der Nacht.`(`in der Nacht`는 표현) · `Und jetzt? Jetzt lacht er!` · `Er hört Musik und ist ganz ruhig.`
- **문법**: `gram-regular-verbs` (현재 어미 표, `machen`, `weinen`, `brauchen`, `hören`, `sagen`; 어간이 -t/-d로 끝나는 `arbeiten`, `finden`의 `du arbeitest`; `heißen`의 `du heißt`), `gram-haben` (`haben` 현재 — `du hast`, `er hat`의 불규칙), `gram-w-questions` (`was, wer, wo, wie, warum`, 동사 둘째 자리), `gram-yes-no-questions` (동사가 첫자리, 억양은 5장에서)
- **단어** (30~40개): 동사(`weinen`, `schreien`, `lachen`, `machen`, `brauchen`, `hören`, `sagen`, `kommen`, `spielen`, `singen`, `glauben`, `suchen`, `wohnen`, `heißen`, `arbeiten`), 몸 상태(`der Hunger`, `der Durst`, `das Bauchweh`, `die Nacht, ¨-e`, `die Musik`), 묻는 말(`was`, `wer`, `wo`, `wie`, `warum`), 작은 말(`vielleicht`, `oft`, `wieder`, `noch`, `schon`, `nicht`(뜻만, 구별은 3장), `laut`, `leise`, `ruhig`, `ganz`)
- **표현**: `expr-calming` (`Psst!` · `Ganz ruhig.` · `Alles ist gut.` · `Ich bin da.`), `expr-whats-wrong` (`Was ist los?` · `Was hast du denn?` — `denn`의 부드러운 느낌), `expr-guessing` (`Vielleicht …` · `Ich glaube, …` — `Ich glaube, er ist müde.`는 쉼표 뒤가 그대로 주문장임을 메모)
- **발음**: ch의 두 소리 `[ç]`(`ich`, `nicht`, `vielleicht`)와 `[x]`(`acht`, `Bauch`, `Nacht`), sch(`schreien`, `schön`), 독일어 r(목젖 r `[ʁ]`, 모음화 `[ɐ]`: `Vater`, `wir`, `er`). 한국어 화자가 ich를 [이크]나 [이시]로 읽는 실수.
- **한국과 독일**: 신생아를 감싸는 한국의 속싸개와 독일의 `Pucken`(요즘 독일 조산사들은 조심스럽게 권하거나 권하지 않는다), 울음을 대하는 태도. 의학적 조언처럼 쓰지 않는다.
- **연습문제 `id`**: `prob-verb-endings`, `prob-haben-sein`, `prob-w-question-word`, `prob-make-yes-no`, `prob-crying-translate`, `prob-ch-sound`, `prob-ask-jonas`(★3)
- **선수 장**: 01
- **경계**: 관사의 성과 `ein`/`kein`은 3장. 목적어로 남성 명사를 쓰지 않는다(2-3절). 어간 모음이 바뀌는 동사(`schläft`, `nimmt`)는 5장. `in der Nacht`는 표현.

#### 03 배고프니? — Hast du Hunger?

- **때**: 생후 4주. 낮과 밤의 수유.
- **절**: 수유 시간 · 명사의 성과 관사 · 몇 밀리리터? · 숫자와 kein · 발음: 끝소리와 s, z, ß · 한국과 독일: 모유 수유와 수유실
- **대화**:
  - `dia-feeding-time` 레나가 모유를 먹이고, 밤에는 민호가 분유를 탄다. 핵심: `Er hat Hunger.` · `Machst du das Fläschchen?` · `Ist die Milch zu heiß?` · `Nein, sie ist gut.` · `Das ist kein Fläschchen, das ist der Schnuller!`
  - `dia-how-much` 수유 기록 앱을 보며 양과 간격을 확인한다. 숫자는 모두 글자로. 핵심: `Wie viel trinkt er?` · `Er trinkt neunzig Milliliter.` · `Und wann?` 대신 `Alle drei Stunden.` · `Heute trinkt er viel!`
  - `dia-baeuerchen` 트림시키기. 핵심: `Macht er ein Bäuerchen?` · `Noch nicht.` · `Da! Ein Bäuerchen!` · `Braver Junge!` · `Wo ist das Spucktuch?`
- **문법**: `gram-noun-gender` (`der/die/das`, 성 색의 뜻, 외우는 요령: `-chen`/`-lein`은 중성 — `das Fläschchen`, `das Mädchen`; `-ung`, `-heit`, `-keit`은 여성; 사람은 대개 자연의 성), `gram-indefinite-article` (`ein/eine/ein`, 1격), `gram-pronoun-reference` (사물도 성에 따라 `er/sie/es`: `Die Milch ist heiß. — Sie ist zu heiß.` 영어 it과 다름), `gram-kein-nicht` (`kein`은 관사 자리의 부정, `nicht`는 그 밖: `Das ist kein Schnuller.` / `Er trinkt nicht.`), `gram-numbers-100` (0~100, `einundzwanzig`처럼 일의 자리를 먼저 — 영어의 four-and-twenty)
- **단어** (35~45개): 수유(`die Milch`, `die Muttermilch`, `das Milchpulver`, `das Fläschchen, -`, `der Sauger, -`, `das Wasser`, `stillen`, `trinken`, `satt`, `heiß`, `warm`, `kalt`, `zu`(너무)), 트림(`das Bäuerchen, -`, `das Spucktuch, ¨-er`, `der Schnuller, -`), 시간과 양(`der Milliliter, -`, `die Stunde, -n`, `die Minute, -n`, `heute`, `viel`, `wenig`, `wie viel`, `wann`), 숫자 0~100, `das Mädchen, -`, `der Junge, -n`
- **표현**: `expr-every-three-hours` (`alle drei Stunden`), `expr-burp` (`ein Bäuerchen machen`), `expr-praise` (`Braver Junge!` · `Gut gemacht!` · `Super!` — 형용사 어미는 설명하지 않음)
- **발음**: 어말 무성음화(`Kind`, `Bad`, `gib`, `Tag`; 복수에서 소리가 돌아옴 `Kinder`), 모음 앞의 s `[z]`(`Sabine`, `Sauger`), z `[ts]`(`zu`, `zwei`, `zehn`), ß와 ss `[s]`(`heiß`, `Wasser`).
- **한국과 독일**: 독일에서 공공장소의 모유 수유(법적으로 막지 않고 흔한 일)와 한국 쇼핑몰의 수유실(독일보다 잘 되어 있다). 독일 분유의 단계 이름(`Pre`, `1`, `2`)을 한 줄.
- **연습문제 `id`**: `prob-gender-sort`, `prob-ein-eine`, `prob-er-sie-es`, `prob-kein-or-nicht`, `prob-numbers-write`, `prob-numbers-read`, `prob-feeding-translate`, `prob-feeding-log`(★3: 하루 수유 기록을 독일어 문장으로)
- **선수 장**: 02
- **경계**: 4격(`einen`, `den`)은 4장 — 이 장의 목적어는 여성·중성 명사만. 복수의 규칙은 4장(이 장은 `Stunden`, `Minuten`처럼 숫자 뒤에서 보이는 정도). 시각은 5장(`wann` 대답은 `alle drei Stunden`, `jetzt`, `heute`로).

#### 04 기저귀 갈기 — Die Windel ist voll!

- **때**: 생후 5주.
- **절**: 기저귀 갈이대에서 · 4격 · 장보기 목록 · 복수와 es gibt · 발음: 이중모음 · 한국과 독일: 드럭스토어와 기저귀
- **대화**:
  - `dia-full-diaper` 핵심: `Die Windel ist voll!` · `Ich mache das.` · `Hast du eine Windel?` · `Hier ist keine Windel.` · `Gibt es noch Windeln?` · `Ja, im Schrank.` · `So, jetzt bist du sauber!`
  - `dia-shopping-list` 둘이 온라인 장보기 목록을 만든다. 핵심: `Wir brauchen Windeln und Feuchttücher.` · `Brauchen wir einen Windeleimer?` · `Haben wir keine Creme mehr?` · `Doch, aber nur noch eine Tube.` · `Und einen Schnuller. Jonas hat nur einen.`
- **문법**: `gram-accusative` (4격: 남성만 `den/einen/keinen`으로 바뀌고 나머지는 1격과 같다, 표), `gram-plural` (복수형 유형표: `-, ¨-, -e, ¨-e, -er, ¨-er, -n, -en, -s`; 복수 관사는 모두 `die`, 부정은 `keine`, 부정관사 복수 없음), `gram-es-gibt` (`es gibt` + 4격: `Es gibt keinen Schnuller.`), `gram-doch` (부정 의문에 대한 긍정 대답 `doch`)
- **단어** (30~40개): `die Windel, -n`, `das Feuchttuch, ¨-er`, `der Wickeltisch, -e`, `die Wickelunterlage, -n`, `die Creme, -s`, `die Tube, -n`, `der Windeleimer, -`, `der Body, -s`(6장에서 옷으로 다시), `der Popo, -s`(아기말), `das Pipi`, `die Kacka`(아기말), `der Schrank, ¨-e`, `die Liste, -n`, `voll`, `nass`, `trocken`, `sauber`, `frisch`, `neu`, `leer`, `wechseln`, `holen`, `kaufen`, `bestellen`, `riechen`, `mehr`, `nur`, `noch`, `alle`(다 떨어진), `Igitt!`, `Puh!`
- **표현**: `expr-no-more` (`keine … mehr`, `nur noch`), `expr-yuck` (`Igitt!` · `Puh!` · `Das riecht!`), `expr-there-you-go` (`So!` · `Fertig!` · `Jetzt bist du sauber.`)
- **발음**: 이중모음 `ei [aɪ̯]`(`Windeleimer`, `nein`), `ie [iː]`(`die`, `vier`, `riechen`), `eu/äu [ɔʏ̯]`(`neu`, `Feuchttuch`, `Bäuerchen`), `au [aʊ̯]`(`kaufen`, `Bauch`). ei와 ie를 헷갈리는 실수(`Wein`/`Wien` 대신 이 책의 단어로).
- **한국과 독일**: 독일에서 아기 용품은 드럭스토어(`die Drogerie`)에서 산다. 기저귀 크기를 몸무게 단계로 부르는 법. 공중화장실의 기저귀 갈이대. 상표 이름은 쓰지 않는다.
- **연습문제 `id`**: `prob-accusative-fill`, `prob-den-einen-keinen`, `prob-plural-form`, `prob-es-gibt`, `prob-doch-answer`, `prob-diaper-translate`, `prob-fix-errors-acc`, `prob-my-shopping-list`(★3)
- **선수 장**: 03
- **경계**: 4격 대명사(`ihn`)는 7장. `im Schrank`는 표현(3격은 10장). 옷 이름과 입히기는 6장. 장소 이동 표현 없음.

#### 05 잘 자, 요나스 — Schlaf gut, Jonas!

- **때**: 생후 6주.
- **절**: 잠잘 시간 · 모음이 바뀌는 동사 · 몇 시야? · 시각과 어순 · 발음: 단어 강세와 문장 억양 · 한국과 독일: 아기의 잠자리
- **대화**:
  - `dia-bedtime` 저녁 의식. 핵심: `Es ist acht Uhr. Zeit fürs Bett!` · `Lena liest ein Buch.` · `Ich singe ein Lied.` · `Er schläft ein.`(표현) · `Schlaf gut, mein Schatz!`
  - `dia-night-shift` 새벽 교대. 시각은 글자로. 핵심: `Wie spät ist es?` · `Halb vier.` · `Schläft er?` · `Nein, er ist wach.` · `Ich nehme Jonas. Du schläfst jetzt.`
  - `dia-sleep-log` 하루의 잠을 정리한다. 핵심: `Er schläft von zehn bis zwei.` · `Um drei Uhr trinkt er.` · `Am Tag schläft er viel, in der Nacht wenig.`(표현) · `Du bist so müde.` (`Du siehst müde aus.`는 분리 동사라 쓰지 않음)
- **문법**: `gram-stem-change` (a→ä `schlafen, tragen, waschen`; e→i `nehmen, geben, essen, helfen, sprechen`; e→ie `sehen, lesen`; `du`와 `er/sie/es`에서만, `nehmen → nimmt`, `essen → isst`의 철자), `gram-clock-time` (공식 시각 `drei Uhr zwanzig`과 일상 시각 `zwanzig nach drei`, `Viertel`, `halb vier` = 3시 반 — 영어·한국어와 다른 점을 `callout warn`), `gram-time-prepositions` (`um`, `von … bis`, `gegen`은 빼고, `ab`은 메모), `gram-inversion` (시간 표현이 앞에 오면 주어가 동사 뒤로: `Um drei Uhr trinkt er.` — 영어 At three he drinks와 다름)
- **단어** (30~40개): 동사(`schlafen (schläft)`, `tragen (trägt)`, `waschen (wäscht)`, `nehmen (nimmt)`, `geben (gibt)`, `essen (isst)`, `helfen (hilft)`, `sprechen (spricht)`, `sehen (sieht)`, `lesen (liest)`), 잠(`das Bett, -en`, `das Beistellbett, -en`, `der Schlafsack, ¨-e`, `die Spieluhr, -en`, `das Lied, -er`, `das Buch, ¨-er`, `das Licht, -er`, `dunkel`, `hell`, `lange`, `kurz`), 시각(`die Uhr, -en`, `Uhr`, `halb`, `das Viertel, -`, `vor`, `nach`, `morgens`, `abends`, `nachts`, `früh`, `spät`, `gleich`, `bald`), 아기말 `Heia machen`
- **표현**: `expr-bedtime` (`Zeit fürs Bett!` · `Schlaf gut!` · `Gute Nacht!` · `Träum was Schönes!`), `expr-what-time` (`Wie spät ist es?` · `Wie viel Uhr ist es?` · `Um wie viel Uhr …?`), `expr-falls-asleep` (`Er schläft ein.` — 분리 동사는 6장)
- **발음**: 단어 강세는 대개 첫 음절(`Schlafsack`, `Spieluhr`, `Bäuerchen`), 예외는 `vielleicht`, `Milliliter`처럼 따로 외운다. 문장 억양: 평서문과 W-의문문은 내려가고, 예/아니요 의문문은 올라간다. 기계 음성이 이것을 잘 못 낸다는 점을 밝히고, 손짓 표시(↗ ↘)를 본문에 쓴다(소리 요소 밖에서).
- **한국과 독일**: 독일의 안전한 잠자리 권고(바로 눕히기, 이불 대신 수면조끼, 아기 침대나 부모 침대 옆 `Beistellbett`)와 한국의 바닥 잠·함께 자기. 전래 자장가 `Schlaf, Kindlein, schlaf`(작자 미상, 공유 저작물)의 첫 두 줄만 인용할 수 있다. 의학적 조언처럼 쓰지 않는다.
- **연습문제 `id`**: `prob-stem-change-fill`, `prob-clock-read`, `prob-clock-write`, `prob-inversion-reorder`, `prob-sleep-log`, `prob-halb-trap`, `prob-night-translate`, `prob-bedtime-routine`(★3)
- **선수 장**: 04
- **경계**: 분리 동사(`einschlafen`, `aufwachen`)는 6장 — 이 장에서는 `Er schläft ein.`만 표현으로. 명령법은 6장(`Schlaf gut!`은 표현). 요일과 `am`은 13장(`am Tag`는 표현). 4격 대명사는 7장 — `Ich nehme Jonas.`처럼 이름을 쓴다.

#### 06 목욕하고 옷 입기 — Baden und Anziehen

- **때**: 생후 6주 무렵 저녁과 아침.
- **절**: 목욕 시간 · 분리 동사 · 무엇을 입힐까? · 명령법 · 발음: st, sp, pf, w, v, f · 한국과 독일: 목욕과 아기 옷 크기
- **대화**:
  - `dia-bath-time` 핵심: `Ist das Wasser warm genug?` · `Ja, siebenunddreißig Grad.` · `Zieh Jonas bitte aus.` · `Wo ist das Handtuch? — Hier!` · `Jetzt trocknen wir Jonas ab.` (`Gib mir …`, `Wasch ihm …`은 3격이라 쓰지 않음)
  - `dia-getting-dressed` 아기에게 말하며 옷 입히기(민호의 줄 대부분). 핵심: `So, jetzt ziehen wir den Body an.` · `Der Body ist rot. Der Strampler ist blau.` (`der rote`는 형용사 어미라 쓰지 않음) · `Die Socke ist zu klein!` · `Fertig! Du bist so schön.`
  - `dia-wake-up` 아침. 레나가 늦잠 자는 민호를 깨운다. 핵심: `Minho, wach auf! Jonas ist wach.` · `Steh auf, Papa!` · `Mach bitte das Licht an.` · `ihr` 명령은 레나가 둘에게: `Wacht auf, ihr zwei!`
- **문법**: `gram-separable-verbs` (분리 전철, 현재형에서 전철이 문장 끝으로 — 문장 틀의 첫 모습. `an|ziehen, aus|ziehen, auf|wachen, ein|schlafen, ab|trocknen, auf|stehen, auf|machen, zu|machen, an|machen, aus|machen, an|rufen`. 강세는 전철에), `gram-imperative` (`du`: 어간만 — `Komm! Mach! Schlaf!`; e→i 동사는 바뀐 어간 `Nimm! Gib! Lies! Iss!`; a→ä는 바뀌지 않음 `Schlaf!`; `sein → Sei ruhig!`; `ihr`: 현재형 그대로 주어 없이 `Kommt! Wacht auf!`; 분리 전철은 끝으로 `Zieh … an!`; `Sie` 명령법은 8장), `gram-too-adjective` (`zu klein`, `zu groß`, `zu warm`, 서술 형용사와 색)
- **단어** (35~45개): 목욕(`baden`, `die Badewanne, -n`, `das Handtuch, ¨-er`, `das Shampoo, -s`, `die Haare (Pl.)`, `der Kopf, ¨-e`, `die Hand, ¨-e`, `der Fuß, ¨-e`, `der Bauch, ¨-e`, `der Arm, -e`, `das Bein, -e`, `das Grad`, `genug`), 옷(`die Kleidung`, `der Body, -s`(4장 단어를 옷으로 다시 — 표에 넣지 않음), `der Strampler, -`, `die Mütze, -n`, `die Socke, -n`, `der Schlafanzug, ¨-e`, `die Größe, -n`), 색(`rot`, `blau`, `gelb`, `grün`, `weiß`, `schwarz`, `grau`, `rosa`, `bunt`), 분리 동사(위 목록), `das Fenster, -`, `fertig`
- **표현**: `expr-baby-we` (아기에게 `wir`로 말하기: `Jetzt baden wir.` · `Jetzt ziehen wir die Socken an.`), `expr-done` (`Fertig!` · `Geschafft!`), `expr-careful` (`Vorsicht!` · `Langsam!`)
- **발음**: 단어 첫머리의 `st`, `sp`는 `[ʃt]`, `[ʃp]`(`Strampler`, `aufstehen`, `spielen`), 단어 안에서는 `[st]`(`Fenster`). `pf [pf]`(`Kopf`), `w [v]`, `v [f]`(`viel`, `vier`), `f`, `qu [kv]`. 한국어 화자의 w를 '우'로 읽는 실수.
- **한국과 독일**: 독일 조산사들은 신생아를 매일 씻기기보다 일주일에 한두 번 목욕을 권하는 경우가 많고, 한국은 매일 씻기는 집이 많다. 아기 옷 크기를 키(cm, `Größe 56`, `62`)로 부르는 독일과 개월 수로 부르는 한국.
- **연습문제 `id`**: `prob-separable-split`, `prob-separable-fill`, `prob-imperative-du`, `prob-imperative-ihr`, `prob-zu-adjective`, `prob-colors`, `prob-bath-translate`, `prob-dressing-talk`(★3: 요나스에게 옷을 입히며 할 말 5문장)
- **선수 장**: 05
- **경계**: 3격(`Gib mir …`, `Zieh ihm …`)은 12장 — 이 장에서 쓰지 않는다. 4격 대명사는 7장. `Sie` 명령법은 8장. 형용사 어미(`der rote Body`)는 쓰지 않는다. 몸의 아픈 곳은 14장.

### 2부 가족과 이어지기

#### 07 할머니 할아버지와 영상 통화 — Videoanruf mit Oma und Opa

- **때**: 11월 중순, 요나스 생후 4주 남짓(1부 끝과 겹쳐도 됨). 서울 저녁 8시 = 하노버 낮 12시.
- **절**: 들려요? 보여요? · 4격 인칭대명사 · 누구를 닮았을까? · 소유 관사 · 발음: 약한 e와 -er · 한국과 독일: 장인 장모를 이름으로 부르기
- **대화**:
  - `dia-video-hello` 핵심: `Hallo! Hört ihr uns?` · `Wir hören euch, aber wir sehen euch nicht.` · `Und jetzt?` · `Ja! Jetzt sehen wir euch. Da ist Jonas!` · `Hallo, Sabine! Hallo, Thomas!`
  - `dia-who-he-looks-like` 핵심: `Er hat deine Augen, Lena.` · `Und die Nase? Das ist Minhos Nase!` · `Sein Mund ist klein, aber seine Hände sind groß!` · `Er sieht aus wie Opa.`(분리 동사 + `wie`)
  - `dia-time-difference` 핵심: `Wie spät ist es bei euch?` · `Hier ist es acht Uhr abends.` · `Bei uns ist es zwölf Uhr mittags.` · `Wir rufen morgen wieder an.` · `Ich hab dich lieb, Jonas!`
- **문법**: `gram-accusative-pronouns` (`mich dich ihn sie es uns euch sie Sie`, 1격과 나란히 표), `gram-possessive` (소유 관사 `mein dein sein ihr unser euer ihr Ihr`, 어미는 `ein`/`kein`과 같음, 1·4격 표; `sein`(그의)과 동사 `sein`의 구별; `ihr`의 세 뜻), `gram-name-s` (`Lenas Mutter`, `Minhos Nase`; s로 끝나는 이름은 `Jonas' Opa`; 말할 때는 `der Opa von Jonas`도 — `von`은 표현)
- **단어** (35~45개): 가족(`die Familie, -n`, `die Eltern (Pl.)`, `die Mutter, ¨-`, `der Vater, ¨-`, `die Großeltern (Pl.)`, `die Oma, -s`, `der Opa, -s`, `der Bruder, ¨-`, `die Schwester, -n`, `der Onkel, -`, `die Tante, -n`, `der Enkel, -`, `die Enkelin, -nen`, `die Schwiegermutter, ¨-`, `der Schwiegervater, ¨-`, `die Schwiegereltern (Pl.)`), 얼굴(`das Gesicht, -er`, `das Auge, -n`, `die Nase, -n`, `der Mund, ¨-er`, `das Ohr, -en`, `die Haare`는 6장), 통화(`der Videoanruf, -e`, `das Handy, -s`, `an|rufen`(6장 단어 — 표에 넣지 않음), `zeigen`, `winken`, `vermissen`, `aus|sehen (sieht aus)`), `mittags`, `wie`(~처럼), `alt`, `jung`, `lieb`
- **표현**: `expr-can-you-hear` (`Hörst du mich?` · `Ich sehe dich nicht.` · `Das Bild ist weg.` · `Das Internet ist schlecht.`), `expr-love-you` (`Ich hab dich lieb.` · `Wir vermissen euch.` · `Küsschen!`), `expr-time-here-there` (`bei uns`, `bei euch` — 표현)
- **발음**: 강세 없는 e `[ə]`(`Tante`, `bitte`, `Nase`), -er `[ɐ]`(`Mutter`, `Vater`, `Bruder`, `Schwester`), -en `[ən]`/`[n̩]`(`haben`, `sehen`). 한국어 화자가 끝의 e를 '에'로 또렷이 읽거나 -er을 '어르'로 읽는 실수.
- **한국과 독일**: 독일에서는 사위·며느리가 장인·장모를 이름으로 부르고 `du`로 말하는 일이 흔하다(결혼 무렵 장인 장모가 먼저 제안). 한국어 번역에서 "어머님/아버님"으로 옮기는 까닭(5-4절). 한국과 독일의 시차(겨울 8시간, 여름 7시간)와 서머타임.
- **연습문제 `id`**: `prob-acc-pronoun-fill`, `prob-possessive-fill`, `prob-sein-ihr`, `prob-name-s`, `prob-family-tree`, `prob-time-difference`, `prob-call-translate`, `prob-describe-jonas`(★3: 요나스가 누구를 닮았는지 4문장)
- **선수 장**: 06
- **경계**: 3격 대명사(`Wie geht es dir?`의 `dir`)는 12장 — 이 장에서는 표현으로만. `Sie`는 8장. 몸의 아픈 곳은 14장. 소유 관사의 3격(`mit meiner Mutter`)은 다루지 않는다.

#### 08 요나스의 여권 — Ein Pass für Jonas

- **때**: 11월 말. 주한 독일 대사관에 요나스의 여권을 신청하러 간다(레나는 서류를 챙기고, 대화는 민호가 한다).
- **절**: 대사관 창구에서 · 존칭 Sie · 이름과 생일 말하기 · 서수와 날짜 · 발음: 철자를 불러 주기 · 한국과 독일: 이름과 주소를 쓰는 순서
- **대화**:
  - `dia-embassy-counter` 대사관 직원과. 핵심: `Guten Tag. Ich habe um zehn Uhr einen Termin.` · `Wie ist Ihr Name, bitte?` · `Kim. Minho Kim.` · `Buchstabieren Sie bitte.` · `K, I, M.` · `Woher kommen Sie?` · `Ich komme aus Korea. Meine Frau ist Deutsche.`
  - `dia-baby-data` 서류를 채운다. 날짜는 글자로. 핵심: `Wie heißt das Kind?` · `Jonas. J, O, N, A, S.` · `Wann ist er geboren?` · `Am einundzwanzigsten Oktober zweitausendsechsundzwanzig.` · `Wo wohnen Sie?` · `Wie ist Ihre Telefonnummer?` · `Unterschreiben Sie hier, bitte.`
  - `dia-after-embassy` 나와서 레나와. 핵심: `Du sprichst schon gut Deutsch!` · `Danke! Aber Sie und Ihr und Ihre, das ist schwer!` · `Wie alt ist Jonas jetzt? — Fünf Wochen.`
- **문법**: `gram-sie-formal` (존칭 `Sie`: 동사는 3인칭 복수와 같은 꼴, 항상 대문자; `Ihr/Ihre`; 의문문; `du`와 `Sie`를 고르는 기준 맛보기 — 정리는 19장), `gram-sie-imperative` (`Kommen Sie! Buchstabieren Sie bitte!` 동사 + `Sie`), `gram-ordinals-dates` (서수 `erste, zweite, dritte, siebte, achte`, 20 이상 `-ste`; `der einundzwanzigste Oktober`, `am einundzwanzigsten Oktober`(표현처럼 "am …-ten/-sten"), 날짜 쓰기 `21.10.2026`), `gram-big-numbers` (100~10 000, 연도 `neunzehnhundertneunzig` / `zweitausendsechsundzwanzig`, 전화번호를 두 자리씩 읽는 습관)
- **단어** (35~45개): 서류(`die Botschaft, -en`, `der Pass, ¨-e`, `der Reisepass, ¨-e`, `der Termin, -e`, `das Formular, -e`, `der Name, -n`, `der Vorname, -n`, `der Familienname, -n`, `das Geburtsdatum`, `der Geburtsort, -e`, `die Adresse, -n`, `die Straße, -n`, `die Telefonnummer, -n`, `die E-Mail, -s`, `das Foto, -s`, `die Unterschrift, -en`, `das Kind, -er`), 동사(`buchstabieren`, `unterschreiben`, `aus|füllen`), 나라와 말(`Korea`, `Deutschland`, `der Koreaner, -` / `die Koreanerin, -nen`, `Deutscher` / `Deutsche`(메모: 형용사처럼 변함, 표현으로), `Koreanisch`, `Deutsch`, `Englisch`, `das Land, ¨-er`, `die Sprache, -n`, `woher`), 날짜(`das Jahr, -e`, `der Monat, -e`, `die Woche, -n`, `der Tag, -e`, 달 이름 12개, `geboren`, `alt`)
- **표현**: `expr-formal-greetings` (`Guten Tag.` · `Auf Wiedersehen.` · `Entschuldigung.` · `Vielen Dank.`), `expr-age` (`Wie alt ist …? — Er ist fünf Wochen alt.`), `expr-i-would-like` (`Ich möchte einen Pass für meinen Sohn.` — `möchte`는 9장), `expr-repeat` (`Wie bitte?` · `Noch einmal, bitte.` · `Langsam, bitte.`)
- **발음**: 알파벳 이름(`a [aː]`, `e [eː]`, `i [iː]`, `j [jɔt]`, `v [faʊ̯]`, `w [veː]`, `y [ˈʏpsilɔn]`, `z [tsɛt]`, `ä`, `ö`, `ü`, `ß [ɛsˈtsɛt]`)과 헷갈리는 쌍(e/i, j/y, v/w). 철자 말하기 표: 전통 표(`A wie Anton …`)와 2022년 DIN 5009의 도시 이름 표(`A wie Aachen …`)가 함께 쓰인다는 점 — **표의 내용은 DIN 5009 원문이나 믿을 만한 자료로 확인한 뒤 싣는다.** 확인하지 못하면 `Anton`, `Berta`처럼 확실한 몇 개만 예로 든다.
- **한국과 독일**: 성과 이름의 순서(`Minho Kim` / 김민호), `Herr Kim`, `Frau Brandt` 부르기(남편 성을 따르지 않은 부부도 흔하다), 주소 쓰는 순서(독일은 거리 → 번지 → 우편번호 → 도시, 한국은 큰 단위부터). 대사관 업무 절차는 "실제 절차는 대사관 안내를 확인한다"로만 쓰고 구체 규정은 쓰지 않는다.
- **연습문제 `id`**: `prob-du-or-sie`, `prob-sie-conjugate`, `prob-spell-name`, `prob-ordinal-date`, `prob-year-read`, `prob-form-fill`(★2: 독일어 서류 칸을 채우기), `prob-embassy-translate`, `prob-introduce-formal`(★3)
- **선수 장**: 07
- **경계**: 화법 조동사는 9장(`Können Sie das buchstabieren?` 대신 `Buchstabieren Sie bitte.`). 시간 전치사 `am Montag`, `im Oktober`는 13장(날짜의 `am`은 표현). `aus Korea`, `in Seoul`의 3격은 설명하지 않는다.

#### 09 처가 식구가 온다 — Oma und Opa kommen!

- **때**: 12월 중순. 요나스 생후 8주. 장인 장모가 크리스마스를 보내러 서울에 온다(3주 머묾).
- **절**: 공항에서 · 할 수 있다, 하고 싶다 · 집에 온 손님 · 조동사와 문장 틀 · 발음: ng, nk, -ig · 한국과 독일: 손님 맞이와 신발
- **대화**:
  - `dia-airport-pickup` 인천공항 도착장. 핵심: `Herzlich willkommen in Seoul!` · `Endlich! Wo ist mein Enkel?` · `Er schläft im Auto.` · `Seid ihr müde?` · `Ja, sehr! Zwölf Stunden im Flugzeug!` · `Kann ich den Koffer nehmen?` (`Wie war der Flug?`는 과거라 쓰지 않음)
  - `dia-offering-drinks` 집에서. 핵심: `Möchtet ihr Kaffee oder Tee?` · `Ich möchte einen Kaffee, bitte.` · `Kann ich Jonas halten?` · `Natürlich! Möchtest du ihn halten, Thomas?` · `Er will schlafen, nicht spielen.`
  - `dia-opa-helps` 장인이 돕겠다고 한다. 핵심: `Kann ich helfen?` · `Willst du das Fläschchen machen?` · `Ich kann das! Ich habe zwei Kinder.` · `Ihr könnt jetzt schlafen. Wir sind ja da.`
- **문법**: `gram-modal-koennen` (`können` 활용, 능력·가능·허락 구하기), `gram-modal-moechten-wollen` (`möchten` 정중한 바람, `wollen` 강한 뜻; 아이에게 `Willst du …?`가 자연스러움; `ich will`이 영어 I will이 아님 — 거짓 친구), `gram-modal-bracket` (조동사는 둘째 자리, 본동사 원형은 문장 끝: `Ich kann Jonas halten.`; 분리 동사와 함께면 붙여서 끝에: `Ich will ihn anziehen.`; 영어 I can hold Jonas와 비교)
- **단어** (35~45개): 여행(`der Flughafen, ¨-`, `der Flug, ¨-e`, `der Koffer, -`, `das Gepäck`, `das Auto, -s`, `der Jetlag`, `an|kommen`, `ab|holen`, `fliegen`, `endlich`), 손님(`der Gast, ¨-e`, `das Geschenk, -e`, `das Mitbringsel, -`, `die Wohnung, -en`, `das Zimmer, -`, `das Gästezimmer, -`, `der Hausschuh, -e`, `der Schuh, -e`), 마실 것(`der Kaffee`, `der Tee, -s`, `der Saft, ¨-e`, `die Milch`는 3장, `die Tasse, -n`, `das Glas, ¨-er`), 동사(`können`, `möchten`, `wollen`, `halten (hält)`, `bleiben`, `zeigen`은 7장), `natürlich`, `gern`(부탁에 대한 대답 `Gern!`만 — 좋아함의 `gern`은 11장), `schwer`, `leicht`, `etwas`
- **표현**: `expr-welcome` (`Herzlich willkommen!` · `Endlich seid ihr da!`; `Schön, dass ihr da seid!`는 부문장이라 쓰지 않음), `expr-offering` (`Möchtest du …?` · `Ja, gern.` · `Nein, danke.` · `Gern!`), `expr-make-yourself-home` (`Fühlt euch wie zu Hause!`는 재귀 — 표현으로 소개만 하고 단어 표에는 넣지 않음)
- **발음**: `ng [ŋ]`(`Wohnung`, `lang`, `Jetlag`은 영어식), `nk [ŋk]`(`danke`, `trinken`), 끝의 `-ig [ɪç]`(`richtig`, `wenig`, `fertig` — 6장 단어를 다시). 한국어 화자가 ng 뒤에 g를 따로 읽는 실수.
- **한국과 독일**: 독일 집에서도 신발을 벗고 실내화(`Hausschuhe`)를 신는 집이 많다. 독일 손님이 가져오는 작은 선물(`Mitbringsel`)과 한국의 방문 선물. 장거리 비행 뒤의 시차.
- **연습문제 `id`**: `prob-modal-forms`, `prob-modal-bracket`, `prob-moechten-wollen`, `prob-kann-ich`, `prob-offering-dialog`, `prob-airport-translate`, `prob-separable-modal`, `prob-host-talk`(★3: 처가 식구에게 집을 소개하고 마실 것을 권하기)
- **선수 장**: 08
- **경계**: `müssen`, `dürfen`은 13장, `sollen`은 14장. 집 안의 위치(`auf dem Tisch`)는 10장(`im Auto`, `im Zimmer`는 표현). 3격 대명사(`Kann ich dir helfen?`)는 12장 — `Kann ich helfen?`으로 쓴다.

#### 10 쪽쪽이는 어디 있지? — Wo ist der Schnuller?

- **때**: 12월 중순, 처가 식구가 온 둘째 날.
- **절**: 우리 집 구경 · 어디에? 장소의 3격 · 쪽쪽이 찾기 · liegen, stehen, hängen · 발음: ü와 ö · 한국과 독일: 온돌과 환기
- **대화**:
  - `dia-apartment-tour` 레나가 장모에게 집을 보여 준다. 핵심: `Hier ist das Wohnzimmer.` · `Das Kinderzimmer ist klein, aber schön.` · `Das Bett steht neben dem Fenster.` · `Und wo schläft Jonas? — Im Schlafzimmer.` (소유 관사의 3격 `in seinem Bett`은 쓰지 않음)
  - `dia-where-is-pacifier` 장인이 쪽쪽이를 찾는다. 핵심: `Wo ist der Schnuller?` · `Auf dem Tisch?` · `Nein, da ist er nicht.` · `Vielleicht unter dem Sofa.` · `Ah, hier! Er liegt zwischen den Kissen.` · `Und wo ist die Spieluhr? — Sie hängt am Bett.`
  - `dia-floor-heating` 핵심: `Warum ist der Boden so warm?` · `Das ist eine Fußbodenheizung. Auf Koreanisch heißt das Ondol.` · `Toll! Jonas kann auf dem Boden liegen.`
- **문법**: `gram-dative-location` (`Wo?`에 대답하는 `in, an, auf, unter, über, neben, hinter, vor, zwischen` + 3격; 3격 관사표 `dem / der / dem / den …-n`, `einem / einer / einem`; 복수 3격의 -n), `gram-im-am` (`in dem → im`, `an dem → am`), `gram-position-verbs` (`liegen`(누워 있다), `stehen`(서 있다), `hängen`(걸려 있다) — 한국어 "있다" 하나로 옮겨지는 말; `sein`으로 말해도 됨)
- **단어** (35~45개): 방(`das Wohnzimmer, -`, `das Schlafzimmer, -`, `das Kinderzimmer, -`, `die Küche, -n`, `das Bad, ¨-er`, `der Flur, -e`, `der Balkon, -e`), 가구(`das Sofa, -s`, `der Tisch, -e`, `der Stuhl, ¨-e`, `das Regal, -e`, `die Kommode, -n`, `die Lampe, -n`, `der Teppich, -e`, `das Kissen, -`, `die Decke, -n`, `die Wand, ¨-e`, `die Tür, -en`, `der Boden, ¨-`, `die Fußbodenheizung, -en`), 장난감(`das Spielzeug`, `das Kuscheltier, -e`, `die Rassel, -n`), 동사(`liegen`, `stehen`, `hängen`, `finden`, `suchen`은 2장), 위치(`in, an, auf, unter, über, neben, hinter, vor, zwischen`, `da`, `dort`, `oben`, `unten`, `links`, `rechts`, `weg`(사라진))
- **표현**: `expr-searching` (`Wo ist …?` · `Ich finde … nicht.` · `Da ist er ja!` · `Er ist weg!`), `expr-in-korean` (`Auf Koreanisch heißt das …` · `Wie heißt das auf Deutsch?`)
- **발음**: ü `[yː]/[ʏ]`와 i·u(`Tür`/`Tier`, `Küche`/`Kuchen`(11장 단어로 예고 없이 발음 예만)), ö `[øː]/[œ]`와 e·o(`schön`/`schon`). 입 모양 그림(그림 1개 허용, 7절).
- **한국과 독일**: 한국의 온돌과 바닥 생활, 독일의 라디에이터(`der Heizkörper`)와 하루 몇 번 창을 활짝 여는 환기(`Stoßlüften`), 실내 온도에 대한 생각 차이.
- **연습문제 `id`**: `prob-dative-article`, `prob-where-is`, `prob-im-am`, `prob-liegen-stehen`, `prob-room-describe`, `prob-picture-prepositions`(그림이 없으면 글로 된 방 배치), `prob-tour-translate`, `prob-my-apartment`(★3)
- **선수 장**: 09
- **경계**: 방향의 4격(`Leg den Schnuller auf den Tisch!`)은 다루지 않는다(1-2절) — 놓는 말이 필요하면 `Der Schnuller muss auf den Tisch.`도 쓰지 않고, `Hier ist der Schnuller.`처럼 돌려 말한다. 3격 대명사는 12장. 소유 관사의 3격은 다루지 않는다.

#### 11 할머니와 쿠키 굽기 — Plätzchen backen mit Oma

- **때**: 12월 셋째 주. 장모가 독일식 크리스마스 쿠키를 굽고, 민호는 장인 장모에게 한국 음식을 대접한다.
- **절**: 크리스마스 쿠키 · man과 양 · 한국 음식 대접 · 좋아하는 것과 접속사 · 발음: 철자로 아는 모음의 길이 · 한국과 독일: 세 끼의 모양
- **대화**:
  - `dia-baking-cookies` 핵심: `Wie viel Mehl braucht man?` · `Man nimmt dreihundert Gramm Mehl und zweihundert Gramm Butter.` · `Und Eier? — Ein Ei.` · `Der Teig ist fertig. Jetzt kommen die Plätzchen in den Ofen.`(표현) · `Hm, die riechen gut!`
  - `dia-korean-dinner` 핵심: `Isst du gern Kimchi, Thomas?` · `Ja, aber nicht so scharf!` · `Ich esse lieber Bulgogi.` · `Was isst du am liebsten?` · `Ich mag Japchae. Das ist süß und salzig.`
  - `dia-what-jonas-eats` 핵심: `Und was isst Jonas?` · `Er isst noch nichts. Er trinkt nur Milch, denn er ist erst zwei Monate alt.`
- **문법**: `gram-gern-lieber` (`gern` + 동사 = 좋아서 하다, `lieber`, `am liebsten`, `nicht gern`; 위치), `gram-moegen` (`mögen` 활용 `ich mag, du magst, er mag` — 명사와 함께; `möchte`와의 관계), `gram-man` (일반 주어 `man` + 3인칭 단수, 요리법·규칙에서), `gram-conjunctions` (`und`, `aber`, `oder`, `denn` — 어순에 영향을 주지 않는 0번 자리; `denn` + 이유. 영어 because와 달리 `weil`은 A2)
- **단어** (40~45개): 굽기(`backen`, `das Plätzchen, -`, `der Teig, -e`, `das Mehl`, `der Zucker`, `die Butter`, `das Ei, -er`, `die Schokolade, -n`, `der Ofen, ¨-`, `die Schüssel, -n`, `das Gramm`, `das Kilo, -s`, `die Packung, -en`), 음식(`das Essen, -`, `kochen`, `der Reis`, `das Brot, -e`, `das Brötchen, -`, `der Käse`, `die Wurst, ¨-e`, `das Fleisch`, `der Fisch, -e`, `das Gemüse`, `das Obst`, `der Apfel, ¨-`, `die Kartoffel, -n`, `die Suppe, -n`), 식기(`der Löffel, -`, `die Gabel, -n`, `das Messer, -`, `die Stäbchen (Pl.)`), 맛(`scharf`, `salzig`, `süß`는 1장, `lecker`, `gesund`), 끼니(`das Frühstück, -e`, `das Mittagessen, -`, `das Abendessen, -`, `das Abendbrot`), `mögen (mag)`, `gern`, `lieber`, `am liebsten`, `erst`, `nichts`
- **표현**: `expr-at-table` (`Guten Appetit!` · `Lass es dir schmecken!`(3격, 소개만) · `Prost!` · `Das schmeckt gut!`), `expr-recipe` (`Man nimmt …` · `Zuerst …, dann …`), `expr-not-so-spicy` (`nicht so scharf, bitte` · `ein bisschen`)
- **발음**: 모음 장단을 철자로 아는 법 — 겹자음 앞은 짧다(`Butter`, `essen`, `Suppe`), 모음 뒤 `h`와 겹모음은 길다(`Mehl`, `Tee`), `ie`는 길다. 한 음절 단어의 예외(`mit`, `das`).
- **한국과 독일**: 크리스마스 쿠키(`Weihnachtsplätzchen`) 굽기, 독일의 오후 커피와 케이크(`Kaffee und Kuchen`), 따뜻한 점심과 빵 위주의 차가운 저녁(`Abendbrot`), 한국의 밥 중심 세 끼.
- **연습문제 `id`**: `prob-gern-lieber`, `prob-moegen-forms`, `prob-man-recipe`, `prob-conjunction-choice`, `prob-denn-reason`, `prob-food-gender`, `prob-dinner-translate`, `prob-my-favorite-food`(★3)
- **선수 장**: 10
- **경계**: `schmecken` + 3격(`Es schmeckt mir.`)은 16장 — 이 장은 `Das schmeckt gut!`만. 비교급은 `lieber`만. `in den Ofen`은 표현.

#### 12 메리 크리스마스 — Frohe Weihnachten!

- **때**: 12월 24~25일, 서울. 요나스의 첫 크리스마스(생후 9주).
- **절**: 선물 풀기 · 3격 인칭대명사 · 민호의 선물 · 3격 동사와 für · 발음: 성문 파열음과 이어 읽기 · 한국과 독일: 크리스마스이브의 선물
- **대화**:
  - `dia-unwrapping` 24일 저녁. 핵심: `Das ist für dich, Jonas!` · `Was ist das? Ein Bilderbuch!` · `Gefällt es dir?` · `Er lacht. Es gefällt ihm!` · `Wir schenken ihm ein Kuscheltier.`
  - `dia-gift-for-minho` 핵심: `Für dich, Minho.` · `Für mich? Vielen Dank!` · `Der Schal gefällt mir sehr.` · `Und das hier ist für euch, Sabine und Thomas.` · `Wem gehört die Mütze? — Sie gehört Jonas.`
  - `dia-christmas-song` (짧게) 함께 캐럴을 부르고 레나가 설명한다. 핵심: `In Deutschland singen wir am Heiligabend.` · `Wie geht es dir, Opa? — Mir geht es sehr gut!` 전래 캐럴 `O Tannenbaum`(작자 미상 전래 가사, 공유 저작물)의 첫 줄만 인용할 수 있다.
- **문법**: `gram-dative-pronouns` (`mir dir ihm ihr ihm uns euch ihnen Ihnen`, 1·4·3격 대명사를 한 표에; `Wie geht es dir?`를 이제 풀어 설명), `gram-dative-verbs` (3격을 받는 동사 `gefallen (gefällt)`, `gehören`, `helfen`, `danken`; 영어 It pleases me와 같은 구조), `gram-two-objects` (`geben`, `schenken`, `zeigen` + 3격(사람) + 4격(물건): `Wir schenken ihm ein Buch.`; 둘 다 명사면 3격이 먼저 `Oma schenkt Jonas ein Buch.`; 4격이 대명사면 4격이 먼저 `Wir schenken es ihm.`은 `callout deep`으로만), `gram-fuer-ohne` (`für`, `ohne` + 4격)
- **단어** (35~45개): 크리스마스(`Weihnachten`, `der Heiligabend`, `der Advent`, `der Adventskranz, ¨-e`, `der Adventskalender, -`, `die Kerze, -n`, `der Weihnachtsbaum, ¨-e`, `der Stern, -e`, `der Weihnachtsmann, ¨-er`, `das Christkind`, `der Nikolaus`, `das Geschenk`은 9장, `das Päckchen, -`, `der Stollen, -`, `der Glühwein`, `die Kirche, -n`), 선물(`das Bilderbuch, ¨-er`, `das Kuscheltier`은 10장, `der Schal, -s`, `die Handschuhe (Pl.)`), 동사(`schenken`, `aus|packen`, `gefallen (gefällt)`, `gehören`, `danken`, `feiern`, `wünschen`), `für`, `ohne`, `wem`, `toll`, `schön`은 1장
- **표현**: `expr-christmas-wishes` (`Frohe Weihnachten!` · `Schöne Feiertage!` · `Einen guten Rutsch!`), `expr-thanks-gift` (`Vielen Dank!` · `Das ist aber nett!` · `Das ist so lieb von euch!`), `expr-how-are-you-dative` (`Wie geht es dir / Ihnen?` · `Mir geht es gut.`)
- **발음**: 성문 파열음 `[ʔ]` — 모음으로 시작하는 단어 앞에서 소리를 끊는다(`ein | Apfel`, `aus | packen`, `Ad | vent`); 한국어처럼 앞 자음을 이어 읽지 않는다(`[아이나펠]`이 아니라). 소원·인사의 억양.
- **한국과 독일**: 독일은 크리스마스이브 저녁(`Heiligabend`)에 가족이 선물을 푼다(`die Bescherung`). 지역에 따라 선물을 가져오는 이가 `Christkind`(남부·서부) 또는 `Weihnachtsmann`(북부·동부). 대림절 화환과 달력. 한국의 크리스마스는 연인과 친구의 날에 가깝다.
- **연습문제 `id`**: `prob-dative-pronoun-fill`, `prob-pronoun-table`, `prob-gefallen`, `prob-two-objects-order`, `prob-fuer-ohne`, `prob-gift-translate`, `prob-who-gets-what`, `prob-christmas-card`(★3: 장인 장모에게 짧은 크리스마스 카드)
- **선수 장**: 10, 11
- **경계**: 3격 전치사 `mit`, `zu`, `bei`는 14~15장. `schmecken`은 16장. 4격 대명사와 3격 대명사가 함께 나오는 어순은 `callout deep` 한 줄.

### 3부 자라는 아기

#### 13 우리 가족의 한 주 — Unsere Woche

- **때**: 2027년 1월 중순. 처가 식구는 돌아갔다. 요나스 3개월. 민호는 회사로 돌아가고 레나는 육아휴직 중. 처남 펠릭스가 처음 나온다.
- **절**: 이번 주 계획 · 요일과 시간 전치사 · 펠릭스와 통화 · 해야 한다, 해도 된다 · 발음: 복합어의 강세 · 한국과 독일: 육아휴직과 일요일
- **대화**:
  - `dia-weekly-plan` 핵심: `Am Montag muss ich arbeiten.` · `Am Dienstag haben wir den Babykurs.` · `Am Mittwoch muss Jonas zum Kinderarzt.`(표현) · `Und am Wochenende? — Am Samstag machen wir nichts!`
  - `dia-call-felix` 베를린의 펠릭스와 영상 통화. 핵심: `Arbeitest du wieder, Minho?` · `Ja. Ich bin Softwareentwickler, und jetzt arbeite ich wieder viel.` · `Und du, Lena? — Ich bin in Elternzeit.` · `Ich darf zweimal pro Woche von zu Hause arbeiten.` · `Du musst uns besuchen!`
  - `dia-sunday` 핵심: `Am Sonntag schlafen wir lange. Jonas nicht!` · `Man darf am Sonntag nicht laut sein.`(독일 처가 이야기) · `Du musst nicht kochen. Wir essen heute Abend Pizza.`
- **문법**: `gram-days-times` (요일, 하루의 때 `der Morgen, der Vormittag, der Mittag, der Nachmittag, der Abend, die Nacht`, `heute Abend`, `morgen früh`, 반복 `montags`, `abends`), `gram-am-im-um` (`am` + 요일·하루의 때·날짜, `im` + 달·계절, `um` + 시각; `in der Nacht`는 예외), `gram-frequency` (`immer, meistens, oft, manchmal, selten, nie`, `einmal, zweimal pro Woche`), `gram-muessen-duerfen` (`müssen`, `dürfen` 활용; `nicht müssen`(안 해도 된다) ≠ `nicht dürfen`(하면 안 된다) — 영어 must not이 `nicht dürfen`임을 `callout warn`)
- **단어** (35~45개): 요일 7개, `die Woche`는 8장, `das Wochenende, -n`, 하루의 때(위), `morgen`, `übermorgen`, 일(`die Arbeit`, `arbeiten`은 2장, `das Büro, -s`, `der Beruf, -e`, `der Softwareentwickler, -` / `die Softwareentwicklerin, -nen`, `der Übersetzer, -` / `die Übersetzerin, -nen`, `der Lehrer, -` / `die Lehrerin, -nen`, `der Arzt`는 14장, `die Elternzeit`, `das Homeoffice`), 생활(`der Kurs, -e`, `der Babykurs, -e`, `das Babyschwimmen`, `ein|kaufen`, `auf|räumen`, `putzen`, `besuchen`, `frei haben`, `die Zeit`, `zusammen`, `leider`), `müssen (muss)`, `dürfen (darf)`, 빈도 부사(위)
- **표현**: `expr-job` (`Was bist du von Beruf?` · `Ich bin …`(관사 없음) · `Ich arbeite als …`), `expr-no-time` (`Ich habe keine Zeit.` · `Leider nicht.` · `Vielleicht am Freitag?`), `expr-going-places` (`zum Kinderarzt`, `ins Büro`, `nach Hause` — 표현, 문법은 14~15장)
- **발음**: 복합어의 강세는 앞 단어에(`Wochenende`, `Kinderzimmer`, `Elternzeit`, `Babykurs`). 직업명의 여성형 -in의 강세 그대로(`Lehrerin`).
- **한국과 독일**: 독일의 부모 휴직(`Elternzeit`)과 부모 수당(`Elterngeld`)을 한국의 육아휴직과 큰 틀에서만 비교한다(제도는 자주 바뀌므로 숫자를 쓰지 않는다). 독일의 일요일 휴식(`Sonntagsruhe`) — 상점이 닫고 시끄러운 일을 삼간다. 한국의 24시간 편의점과 대비.
- **연습문제 `id`**: `prob-weekdays`, `prob-am-im-um`, `prob-frequency-position`, `prob-muessen-duerfen`, `prob-must-not-trap`, `prob-job-gender`, `prob-week-translate`, `prob-my-week`(★3: 우리 가족의 한 주를 6문장으로)
- **선수 장**: 09
- **경계**: `sollen`은 14장. `zum`, `zur`, `beim`의 문법은 14장(이 장은 표현). 과거 이야기 없음. 이 장이 3부의 첫 장입니다.

#### 14 열이 나요 — Jonas hat Fieber

- **때**: 2월. 요나스 4개월. 예방접종 뒤 열이 난다. 민호가 한국 소아과에 다녀와서 의사의 말을 레나와 장모에게 독일어로 전한다.
- **절**: 밤에 열이 날 때 · 소아과에서 들은 말 전하기 · sollen과 조동사 정리 · zu와 bei · 발음: l과 r · 한국과 독일: 소아과와 영유아 검진
- **대화**:
  - `dia-fever-night` 핵심: `Er ist so warm. Hat er Fieber?` · `Ich messe mal.` · `Achtunddreißig Komma fünf.` · `Das ist die Impfung, glaube ich.` · `Er muss viel trinken.` (지난 일 `Er hat … bekommen`, `war`는 16~17장이라 쓰지 않음)
  - `dia-after-doctor` 민호가 소아과에서 돌아와 전한다. 핵심: `Was sagt die Ärztin?` · `Sie sagt: Er hat eine Erkältung.` · `Er soll viel trinken und schlafen.` · `Wir dürfen ihn heute nicht baden.` · `Wir sollen am Freitag wieder zum Arzt gehen.`
  - `dia-calling-oma-sick` 핵심: `Wie geht es ihm?` · `Besser. Das Fieber ist weg.` · `Bist du beim Kinderarzt? — Nein, wir sind zu Hause.` · `Gute Besserung, mein Kleiner!` · `Mach dir keine Sorgen, Sabine.`
- **문법**: `gram-modal-sollen` (`sollen` 활용, 남의 지시를 전하기: `Die Ärztin sagt: Er soll …`; 질문 `Soll ich …?`(제안)), `gram-modal-overview` (`können, müssen, dürfen, sollen, wollen, möchten` 한 표, 뜻 비교), `gram-zu-bei` (`zu` + 3격 = ~에게로, `bei` + 3격 = ~의 곳에서: `zum Arzt`, `zur Apotheke`, `beim Arzt`, `bei Oma`; 줄임 `zum`, `zur`, `beim`), `gram-it-hurts` (`… tut weh` / `… tun weh`, `Er hat Bauchweh / Ohrenschmerzen`; 아기에게 `Tut das weh?`)
- **단어** (35~45개): 아픔(`das Fieber`, `die Temperatur, -en`, `das Thermometer, -`, `messen (misst)`, `krank`, `gesund`은 11장, `die Erkältung, -en`, `der Husten`, `der Schnupfen`, `die Schmerzen (Pl.)`, `wehtun (tut weh)`, `husten`, `besser`, `schlimm`), 의료(`der Arzt, ¨-e`, `die Ärztin, -nen`, `der Kinderarzt, ¨-e`, `die Kinderärztin, -nen`, `die Praxis, Praxen`, `die Apotheke, -n`, `die Impfung, -en`, `das Medikament, -e`, `der Fiebersaft, ¨-e`, `die Tropfen (Pl.)`, `das Rezept, -e`), 몸(`der Rücken, -`, `der Hals, ¨-e`, `die Brust, ¨-e`, `der Zahn, ¨-e`(17장에서 이 이 나는 이야기, 여기서 처음), 7장의 얼굴 단어는 다시 넣지 않음), `das Komma`, `das Grad`는 6장, `sollen (soll)`, `zu`, `bei`
- **표현**: `expr-get-well` (`Gute Besserung!`), `expr-dont-worry` (`Mach dir keine Sorgen!` · `Keine Sorge!` — 재귀는 범위 밖), `expr-at-doctor` (`Was fehlt ihm?` — 의사가 묻는 관용 표현, 소개만 · `Er hustet viel.` · `Er schläft schlecht.`)
- **발음**: l `[l]`과 r `[ʁ]` — 한국어 'ㄹ' 하나로 합쳐지는 두 소리(`Lied`/`riechen`, `Glas`/`Gras`, `hell`/`Herr`). 단어 끝 l을 받침처럼 끊는 것.
- **한국과 독일**: 독일의 정해진 영유아 검진(`U-Untersuchungen`, 노란 수첩 `das gelbe Heft`)과 한국의 영유아 건강검진, 예방접종 수첩. 독일에서는 소아과 진료에 예약이 필요한 경우가 많다. **의학적 조언처럼 쓰지 않는다.** 열과 약에 대한 문장은 "의사의 말을 전하는" 꼴로만 쓴다.
- **연습문제 `id`**: `prob-sollen-relay`, `prob-modal-choice`, `prob-zum-zur-beim`, `prob-tut-weh`, `prob-fever-numbers`, `prob-doctor-translate`, `prob-body-parts`, `prob-tell-oma`(★3: 장모에게 아기 상태를 전하는 문자)
- **선수 장**: 13
- **경계**: 현재완료와 `war/hatte`는 16~17장 — 지난 일은 현재형으로 돌려 말한다. `seit`는 20장. 3격 전치사의 나머지(`mit`, `nach`, `von`, `aus`)는 15장.

#### 15 유모차 산책 — Spaziergang mit dem Kinderwagen

- **때**: 3~4월. 요나스 5~6개월. 봄, 미세먼지, 벚꽃.
- **절**: 오늘 날씨는? · 날씨의 es와 werden · 공원에서 · 3격 전치사 · 발음: 자음이 겹칠 때 · 한국과 독일: 미세먼지와 날씨를 대하는 태도
- **대화**:
  - `dia-weather-check` 핵심: `Wie ist das Wetter heute?` · `Die Sonne scheint, aber es ist windig.` · `Zieh ihm die Jacke an!` · `Es wird warm. Wir brauchen keine Mütze.` · `Gehen wir in den Park?`(표현)
  - `dia-in-the-park` 아기에게 말하기(민호의 줄 대부분). 핵심: `Schau mal, ein Hund!` · `Der Hund macht Wauwau.` · `Da sind Enten. Die Enten schwimmen.` · `Wir gehen mit dem Kinderwagen zum Spielplatz.` · `Jetzt gehen wir nach Hause.`
  - `dia-feinstaub` 장인과 통화. 핵심: `Geht ihr heute spazieren?` · `Nein, heute nicht. Heute gibt es viel Feinstaub.` · `Was ist Feinstaub?` · `Wir bleiben zu Hause und spielen mit Jonas.`
- **문법**: `gram-weather-es` (비인칭 `es`: `es regnet, es schneit, es ist kalt, es ist windig`), `gram-werden` (`werden` 활용 `ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden`; 뜻은 "되다": `Es wird warm. Jonas wird groß.`; 미래는 `callout deep` 한 줄), `gram-dative-prepositions` (언제나 3격을 받는 전치사 `aus, bei, mit, nach, seit, von, zu`를 한 번에; 14장의 `zu`, `bei`를 넓힘; `seit`는 뜻만, 쓰임은 20장), `gram-wohin-zu-nach` (`Wohin?` — 사람·장소에 `zu`(`zum Spielplatz`, `zu Oma`), 도시·나라·집에 `nach`(`nach Hannover`, `nach Hause`); `in den Park`는 표현으로 두고 1-2절의 경계를 `callout deep`으로)
- **단어** (35~45개): 날씨(`das Wetter`, `die Sonne, -n`, `der Regen`, `der Wind, -e`, `der Schnee`, `die Wolke, -n`, `regnen`, `schneien`, `scheinen`, `windig`, `sonnig`, `bewölkt`, `kühl`, `heiß`는 3장, `der Feinstaub`, `die Maske, -n`), 계절(`der Frühling`, `der Sommer`, `der Herbst`, `der Winter`, `die Jahreszeit, -en`), 산책(`der Spaziergang, ¨-e`, `spazieren gehen`, `der Kinderwagen, -`, `die Babytrage, -n`, `der Park, -s`, `der Spielplatz, ¨-e`, `der Baum, ¨-e`, `die Blume, -n`, `die Kirschblüte, -n`, `der Hund, -e`, `die Katze, -n`, `der Vogel, ¨-`, `die Ente, -n`, `schwimmen`, `die Jacke, -n`), `draußen`, `drinnen`, `werden (wird)`, 전치사(위)
- **표현**: `expr-weather-talk` (`Was für ein Wetter!` · `Schönes Wetter heute!` · `Es ist so schön draußen.`), `expr-animal-sounds` (`Wauwau`, `Miau`, `Quak quak`, `Piep piep` — 아기에게), `expr-lets-go` (`Gehen wir!` · `Los geht's!`)
- **발음**: 자음이 겹칠 때 사이에 '으'를 넣지 않기(`Herbst` [헤릅스트]가 아니라 한 음절, `Strampler`, `schwimmen`, `Spielplatz`). 한국어 화자의 모음 끼워 넣기를 한글 표기와 IPA로 대비해 보여 준다.
- **한국과 독일**: "나쁜 날씨는 없다, 옷을 잘못 입었을 뿐"이라는 독일 속담(`Es gibt kein schlechtes Wetter, nur falsche Kleidung.` — 형용사 어미가 있으므로 통째로 인용)과 날씨에 상관없이 산책하는 습관, 유모차에서 낮잠 재우기. 한국의 미세먼지 예보와 실내 놀이.
- **연습문제 `id`**: `prob-weather-describe`, `prob-werden-forms`, `prob-dative-prep-fill`, `prob-zu-or-nach`, `prob-seasons`, `prob-park-translate`, `prob-mit-dem`, `prob-walk-report`(★3: 산책에서 본 것을 장인에게 문자로)
- **선수 장**: 14
- **경계**: 방향의 4격 일반(`in den Park`, `auf den Spielplatz`)은 가르치지 않는다. 비교급(`wärmer`)은 쓰지 않는다. 지난 산책 이야기는 16장 이후.

#### 16 첫 이유식 — Der erste Brei

- **때**: 5월. 요나스 6~7개월. 첫 이유식과 할머니에게 보고하기.
- **절**: 첫 숟가락 · 현재완료 1: haben · 할머니에게 보고하기 · 과거분사 만들기 · 발음: ge-와 -iert · 한국과 독일: 쌀미음과 채소죽
- **대화**:
  - `dia-first-spoon` 핵심: `Heute probiert Jonas zum ersten Mal Brei.` · `Möhrenbrei! Lecker!` · `Er macht den Mund nicht auf.` · `Und? Hat er gegessen?` · `Ein bisschen. Den Rest hat er ausgespuckt!`
  - `dia-report-oma` 영상 통화. 핵심: `Was habt ihr heute gemacht?` · `Wir haben Möhrenbrei gekocht.` · `Jonas hat drei Löffel gegessen!` · `Hat es ihm geschmeckt?` · `Ich glaube, ja! Aber das Lätzchen hat auch viel gegessen.`
  - `dia-mess` (짧게) 핵심: `Wer hat das gemacht?` · `Jonas! Er hat mit dem Löffel gespielt.` · `Sein Gesicht ist ganz orange!`
- **문법**: `gram-perfekt-haben` (현재완료 = `haben` 현재 + 과거분사, 분사는 문장 끝 — 문장 틀; 일상 대화에서 지난 일을 말하는 기본 시제; 영어 have eaten과 꼴은 닮았지만 쓰임은 영어 과거와 같다), `gram-partizip` (규칙 `ge-…-t`(`gemacht, gekocht, gespielt, gesagt`), 불규칙 `ge-…-en`(`gegessen, getrunken, geschlafen, gesehen, gegeben, genommen, gelesen, gesungen, geschrien`); `-ieren`은 ge- 없음(`probiert, püriert, buchstabiert`); `be-, ver-, er-, ge-`도 ge- 없음(`bekommen, besucht, vergessen, gehört`); 분리 동사는 가운데 `-ge-`(`ausgespuckt, eingekauft, angerufen, aufgeräumt`); 1~15장 동사의 분사 표를 이 장에 둔다), `gram-schmecken` (`schmecken` + 3격: `Es schmeckt mir. Hat es dir geschmeckt?`; 11장의 `Das schmeckt gut.`과 연결)
- **단어** (30~40개): 이유식(`der Brei, -e`, `die Beikost`, `der Möhrenbrei`, `die Möhre, -n`, `die Karotte, -n`(지역 차 메모), `der Kürbis, -se`, `die Banane, -n`, `die Birne, -n`, `der Reisbrei`, `das Gläschen, -`, `das Lätzchen, -`, `der Hochstuhl, ¨-e`, `der Rest, -e`), 동사(`probieren`, `füttern`, `pürieren`, `schmecken`, `aus|spucken`, `vergessen (vergisst)`, `bekommen`(거짓 친구 경고 — 5-2절), `auf|machen`은 6장), `orange`, `ganz`, `alles`, `zum ersten Mal`, `ein bisschen`
- **표현**: `expr-first-time` (`zum ersten Mal`), `expr-tasty` (`Schmeckt's?` · `Lecker!` · `Mmh!` · `Igitt!`은 4장), `expr-open-wide` (`Mund auf!` · `Noch ein Löffel?` · `Ein Löffel für Mama, ein Löffel für Papa!`)
- **발음**: 과거분사의 `ge-`는 약하게 `[ɡə]`(강세 없음), `-iert`는 강세 `[ˈiːɐ̯t]`(`probiert`). 분리 동사 분사는 전철에 강세(`ˈausgespuckt`).
- **한국과 독일**: 독일의 첫 이유식은 흔히 당근이나 호박 같은 채소 퓌레로 시작하고 병에 든 이유식(`Gläschen`)을 많이 쓴다. 한국은 쌀미음부터. 둘 다 "지역마다, 집마다 다르다"로 맺는다. 의학적 권고처럼 쓰지 않는다.
- **연습문제 `id`**: `prob-partizip-form`, `prob-perfekt-build`, `prob-perfekt-position`, `prob-no-ge`, `prob-separable-partizip`, `prob-schmecken-dative`, `prob-brei-translate`, `prob-report-day`(★3: 오늘 한 일을 할머니에게 현재완료 5문장으로)
- **선수 장**: 15, **(1~15장 동사 목록)** — 분사 표를 만들려면 앞 장들의 실제 단어가 필요합니다. 앞 장이 다 쓰였으면 그 단어 표에서 동사를 모으고, 아니면 8절의 "꼭 넣을 단어"에서 모읍니다.
- **경계**: `sein` 현재완료는 17장 — 이 장의 문장은 모두 `haben`. `war/hatte`는 17장. 이동 동사(`gehen`, `kommen`, `fahren`)의 현재완료를 쓰지 않는다.

#### 17 처음 해낸 것들 — Er krabbelt!

- **때**: 6월. 요나스 8개월. 뒤집기(4~5개월), 앉기, 첫 이, 기기, 첫 말을 돌아본다.
- **절**: 첫 이 · 현재완료 2: sein · 기기 시작했어 · war와 hatte · 발음: 이야기하는 문장의 리듬 · 한국과 독일: 백일과 아기의 두 언어
- **대화**:
  - `dia-first-tooth` 핵심: `Schau mal! Jonas hat einen Zahn!` · `Wirklich? Ach, darum war er so unruhig!` · `Er hatte auch ein bisschen Fieber.` · `Ich habe ein Foto gemacht.`
  - `dia-crawling` 민호가 퇴근하자 레나가 알려 준다. 핵심: `Heute ist er zum ersten Mal gekrabbelt!` · `Was? Wohin ist er gekrabbelt?` · `Zum Sofa. Dann ist er hingefallen und hat geweint.` · `Und dann ist er eingeschlafen.`
  - `dia-first-word` 핵심: `Hast du das gehört? Er hat Mama gesagt!` · `Nein, er hat Papa gesagt!` · `Gestern war er so müde, aber heute ist er so fröhlich.` · 요나스의 한 단어 줄: `Mama!`
- **문법**: `gram-perfekt-sein` (`sein` + 과거분사: 장소 이동(`gehen, kommen, fahren, fliegen, laufen, krabbeln, schwimmen`), 상태 변화(`einschlafen, aufwachen, aufstehen, hinfallen, werden`), 그리고 `sein → ist gewesen`, `bleiben → ist geblieben`; `sitzen`, `stehen`, `liegen`은 표준어에서 `haben`이고 남부에서는 `sein`이라는 메모), `gram-praeteritum-sein-haben` (`war`, `hatte` 전 인칭 표; `sein`, `haben`은 대화에서도 현재완료보다 과거를 쓴다 — `Er war krank.`가 `Er ist krank gewesen.`보다 흔함; 화법 조동사의 과거는 `callout deep` 한 줄), `gram-past-time` (`gestern`, `vorgestern`, `letzte Woche`, `letzten Monat`(표현), `vor zwei Wochen`(`vor` + 3격, 표현처럼 — 20장에서 정리), `heute Morgen`, `damals`)
- **단어** (30~40개): 발달(`krabbeln`, `sitzen`, `laufen (läuft)`, `fallen (fällt)`, `hin|fallen`, `lächeln`, `greifen`, `der Zahn`은 14장, `das Wort, ¨-er`, `der Schritt, -e`(20장에서 다시), `das Foto`은 8장, `das Video, -s`), 감정(`stolz`, `fröhlich`, `unruhig`, `traurig`, `glücklich`), 때(`gestern`, `vorgestern`, `letzte Woche`, `damals`), `wirklich`, `darum`, `plötzlich`, `zuerst`, `dann`(11장 표현을 단어로), `sich drehen`(표현)
- **표현**: `expr-wow` (`Wirklich?` · `Wahnsinn!` · `Echt?` · `Ich bin so stolz!`), `expr-rolls-over` (`Er dreht sich.` · `Er dreht sich auf den Bauch.` — 재귀, 통째로), `expr-storytelling` (`Zuerst …, dann …, und dann …`)
- **발음**: 이야기할 때 새 정보에 문장 강세가 온다(`Er ist zum ersten Mal ge**krab**belt!`). 분리 동사 분사의 강세(`ˈeingeschlafen`, `ˈhingefallen`). 기계 음성의 리듬과 실제 리듬이 다를 수 있음을 다시 밝힌다.
- **한국과 독일**: 한국의 백일 잔치(1월에 있었던 일을 현재완료로 돌아보기: `Im Januar haben wir Baek-il gefeiert.`), 독일에는 비슷한 날이 없고 세례(`die Taufe`)를 하는 집이 있다. 두 언어로 자라는 아기는 첫 말이 늦거나 섞일 수 있다는 흔한 이야기를 일반론으로만 짧게.
- **연습문제 `id`**: `prob-haben-or-sein`, `prob-perfekt-sein-fill`, `prob-war-hatte`, `prob-past-time-expr`, `prob-milestone-story`, `prob-milestone-translate`, `prob-separable-sein`, `prob-diary`(★3: 요나스의 성장 일기 5문장)
- **선수 장**: **16** (과거분사 표와 `haben` 현재완료를 그대로 이어 씀)
- **경계**: 다른 동사의 과거(`ging`, `kam`)는 쓰지 않는다. `seit`의 쓰임은 20장. 부문장(`als er …`) 없음.

### 4부 독일 여행과 첫돌

#### 18 독일로 가는 길 — Wir fliegen nach Deutschland!

- **때**: 2027년 7월. 요나스 9개월. 인천 → 프랑크푸르트 비행기, 프랑크푸르트 공항역 → 하노버 고속열차(ICE).
- **절**: 비행기 안에서 · 낯선 사람에게 Sie로 부탁하기 · 기차역에서 · 공식 시각과 안내 방송 · 발음: 빠른 말과 줄임 · 한국과 독일: 기차와 지연
- **대화**:
  - `dia-on-the-plane` 승무원과. 핵심: `Möchten Sie etwas trinken?` · `Ein Wasser, bitte.` · `Haben Sie warmes Wasser für das Fläschchen?`(형용사 어미는 표현) · `Natürlich. Einen Moment, bitte.` · `Können Sie mir bitte helfen? Der Koffer ist so schwer.`
  - `dia-at-the-station` 역무원과. 핵심: `Entschuldigung, wo fährt der Zug nach Hannover ab?` · `Von Gleis sieben.` · `Ist der Zug pünktlich?` · `Nein, er hat zwanzig Minuten Verspätung.` · `Typisch!`(레나)
  - `dia-train-family` 기차 안. 핵심: `Wir haben Plätze im Kleinkindabteil.` · `Die Fahrkarten, bitte!` · `Hier, bitte.` · `Wann kommen wir in Hannover an? — Um vierzehn Uhr fünfunddreißig.` · `Oma und Opa holen uns ab!`
  - 안내 방송 한 단락을 `span.say`로(대화 상자 밖, 본문): 열차 지연과 승강장 변경. 실제 철도회사의 문구를 옮기지 않고 새로 쓴다.
- **문법**: `gram-polite-requests` (`Können Sie mir bitte helfen?` · `Haben Sie …?` · `Ich hätte gern …`(표현) · `Ich möchte …`; `bitte`의 위치; 9장 조동사와 12장 3격 대명사를 `Sie`와 묶기), `gram-official-time` (24시간제 공식 시각 `vierzehn Uhr fünfunddreißig`, 일상 시각과 대조; 출발·도착), `gram-from-to` (`von … nach …`, `aus` + 나라, 15장의 `nach`를 넓힘; `Von welchem Gleis …?`의 `welchem`은 표현)
- **단어** (35~45개): 비행(`das Flugzeug, -e`, `die Bordkarte, -n`, `der Platz, ¨-e`, `der Gang, ¨-e`, `der Fensterplatz, ¨-e`, `die Passkontrolle, -n`, `der Ausgang, ¨-e`, `landen`, `starten`), 기차(`der Bahnhof, ¨-e`, `der Hauptbahnhof, ¨-e`, `der Zug, ¨-e`, `das Gleis, -e`, `die Fahrkarte, -n`, `das Ticket, -s`, `die Verspätung, -en`, `die Abfahrt, -en`, `die Ankunft, ¨-e`, `das Kleinkindabteil, -e`, `die Durchsage, -n`, `um|steigen`, `ein|steigen`, `aus|steigen`, `fahren (fährt)`), 시설(`der Aufzug, ¨-e`, `die Toilette, -n`, `der Wickelraum, ¨-e`), `pünktlich`, `typisch`, `die Entschuldigung`, `der Moment`
- **표현**: `expr-excuse-me` (`Entschuldigung, …` · `Verzeihung.` · `Kein Problem.` · `Bitte schön.` · `Danke schön.`), `expr-i-would-like-formal` (`Ich hätte gern …` · `Ich möchte …` · `Für mich bitte …`), `expr-announcement-words` (안내 방송에서 자주 듣는 말: `Achtung`, `Gleiswechsel`, `voraussichtlich` — 뜻만)
- **발음**: 구어에서 줄여 말하는 꼴 — `Wie geht's?`, `Gibt's …?`, `Ich hab …`, `Hast du 'n …?`, `Haste …?`(듣기만). 이 장부터 대화에 `ich hab`를 쓸 수 있다(5-1절). 안내 방송의 숫자 듣기(`zwo` = `zwei`, 헷갈림을 피하려고 쓰는 말).
- **한국과 독일**: 독일 철도의 지연과 승강장 변경, 아이 동반 칸(`Kleinkindabteil`)과 가족 구역. 낯선 사람에게는 `Sie`, 젊은 사람끼리나 일부 가게에서는 `du`가 늘고 있다는 점(19장 예고). 구체적인 요금과 규정은 쓰지 않는다.
- **연습문제 `id`**: `prob-polite-request`, `prob-official-time`, `prob-timetable-read`, `prob-von-nach`, `prob-station-dialog`, `prob-plane-translate`, `prob-announcement`(★2: 안내 방송을 읽고 질문에 답하기), `prob-ask-stranger`(★3)
- **선수 장**: 17 (여행 이야기 중 지난 일을 현재완료로 말하므로)
- **경계**: 가게에서 사기와 값은 19장. 방향 안내(`links`, `rechts`, `geradeaus`)는 표현 몇 개만. 이 장이 4부의 첫 장입니다.

#### 19 하노버의 처가에서 — Bei Oma und Opa in Hannover

- **때**: 7월, 하노버에서 2주. 빵집과 드럭스토어, 옆집 베커 부인, 장인의 친구 위르겐.
- **절**: 빵집에서 · 값 말하기와 지시하는 der · 이웃과 인사 · du, ihr, Sie 정리 · 발음: Euro와 정중한 억양 · 한국과 독일: 일요일, 현금, 빈 병 보증금
- **대화**:
  - `dia-bakery` 핵심: `Guten Morgen! Ich hätte gern sechs Brötchen und eine Brezel.` · `Sonst noch etwas?` · `Nein, danke. Was macht das?` · `Vier Euro zwanzig.` · `Kann ich mit Karte zahlen?` · `Ja, natürlich.`
  - `dia-drugstore` 핵심: `Entschuldigung, wo finde ich Windeln?` · `In Gang drei.` · `Welche Größe? — Größe vier.` · `Die hier oder die da?` · `Die da kosten nur acht Euro.` · `Gut, die nehme ich.`
  - `dia-neighbor` 베커 부인(`Sie`)과 위르겐(`du` 제안). 핵심: `Guten Tag! Sie sind bestimmt Lenas Mann.` · `Ja, ich bin Minho. Freut mich!` · `Wie gefällt Ihnen Hannover?` · `Sehr gut!` · (위르겐) `Ich bin Jürgen. Wollen wir uns duzen?` · `Gern!`
- **문법**: `gram-du-ihr-sie` (한 표: 인칭대명사 1·4·3격, 소유 관사, 동사 어미, 명령법 — `du`, `ihr`, `Sie`; 고르는 기준과 `du`로 바꾸는 순간), `gram-demonstrative-der` (정관사가 대명사처럼: `Der ist schön.` `Den nehme ich.` `Die da.` — 앞에 놓여 강조), `gram-prices` (값 읽기 `4,20 €` = `vier Euro zwanzig`, `Was kostet …? Was kosten …?`, `Euro`와 `Cent`는 숫자 뒤에서 복수형이 없음)
- **단어** (35~45개): 가게(`die Bäckerei, -en`, `die Drogerie, -n`, `der Supermarkt, ¨-e`, `der Markt, ¨-e`, `das Geschäft, -e`, `die Kasse, -n`, `die Tüte, -n`, `die Flasche, -n`, `das Pfand`, `die Brezel, -n`, `das Brötchen`은 11장, `der Kuchen, -`, `die Sonnencreme, -s`), 값(`der Euro, -s`, `der Cent, -s`, `der Preis, -e`, `kosten`, `bezahlen`, `zahlen`, `bar`, `die Karte, -n`, `teuer`, `billig`, `günstig`, `das Angebot, -e`), 이웃(`der Nachbar, -n`(약변화) / `die Nachbarin, -nen`, `der Garten, ¨-`, `das Haus, ¨-er`, `der Freund, -e` / `die Freundin, -nen`), `geöffnet`, `geschlossen`, `sonst`, `bestimmt`
- **표현**: `expr-shopping` (`Ich hätte gern …` · `Sonst noch etwas?` · `Das ist alles.` · `Was macht das?` · `Stimmt so.`), `expr-nice-to-meet` (`Freut mich!` · `Sehr erfreut.`(격식) · `Schön, Sie kennenzulernen.`은 소개만), `expr-duzen` (`Wollen wir uns duzen?` · `Sag doch du!` · `Wir können uns gern duzen.` — 재귀는 범위 밖, 통째로)
- **발음**: `Euro [ˈɔʏ̯ʁo]`(이중모음 eu를 다시), 값 읽기의 리듬, `Sie`로 부탁할 때의 부드러운 억양과 `bitte`.
- **한국과 독일**: 독일의 일요일과 공휴일 영업 제한, 아직 흔한 현금 결제, 병과 캔의 보증금(`Pfand`)과 반납 기계, 하노버가 "표준 독일어의 도시"로 불린다는 이야기(그런 평판이 있다는 정도로만).
- **연습문제 `id`**: `prob-du-ihr-sie-table`, `prob-choose-address`, `prob-demonstrative`, `prob-price-read`, `prob-price-write`, `prob-bakery-order`, `prob-neighbor-translate`, `prob-shopping-role`(★3: 빵집에서 주문부터 계산까지)
- **선수 장**: **18** (여행 이야기가 이어지고, `Sie` 부탁 표현을 그대로 씀)
- **경계**: 형용사 어미와 비교급은 쓰지 않는다. 옷 가게, 반품 같은 복잡한 상황은 다루지 않는다.

#### 20 첫돌 — Alles Gute zum Geburtstag, Jonas!

- **때**: 2027년 10월 21일, 서울. 첫돌. 장인 장모는 영상 통화로 함께한다. 요나스가 첫걸음을 뗀다.
- **절**: 첫걸음 · seit와 vor · 돌잡이를 설명하기 · 초대장과 편지 쓰기 · 한 해 돌아보기 · 발음: 한 해의 복습 · 한국과 독일: 돌잔치와 독일의 생일
- **대화**:
  - `dia-first-steps` 핵심: `Schau! Er läuft!` · `Seine ersten Schritte! Und das an seinem Geburtstag!`(3격 소유 관사 → 표현) · `Jonas, komm zu Papa!` · `Er ist drei Schritte gelaufen!`
  - `dia-doljabi` 영상 통화로 장모에게 돌잡이를 설명한다. 핵심: `Auf dem Tisch liegen ein Stift, Geld und ein Mikrofon.` · `Jonas nimmt eine Sache. Das zeigt seine Zukunft.` · `Was nimmt er?` · `Das Mikrofon! Er wird Sänger!`(웃으며)
  - `dia-looking-back` 밤, 둘이서. 핵심: `Seit einem Jahr bin ich Papa.` · `Vor einem Jahr habe ich nur Hallo gesagt.` · `Und jetzt sprichst du mit Jonas Deutsch.` · `Ein bisschen. Ich lerne weiter.` · (민호가 요나스에게) `Ich hab dich lieb, mein Sohn.`
- **문법**: `gram-seit-vor` (`seit` + 3격 + **현재**: 지금까지 계속 — `Seit einem Jahr bin ich Papa.`(영어 I have been … for a year와 시제가 다름); `vor` + 3격 + 현재완료·과거: ~ 전에 — `Vor einem Jahr ist Jonas auf die Welt gekommen.`; 3격 `einem Jahr`, `einer Woche`, `zwei Monaten`), `gram-invitation` (초대장·편지 꼴: `Liebe Oma, lieber Opa,` · 본문 · `Viele Grüße` / `Liebe Grüße`; `ein|laden (lädt ein)`; 날짜·시각·장소를 넣는 법), `gram-review-tenses` (한 해를 이야기하며 현재·현재완료·`war/hatte`를 고르는 법 정리, 진도표의 요약)
- **단어** (25~35개): 생일(`der Geburtstag, -e`, `die Party, -s`, `die Feier, -n`, `die Einladung, -en`, `ein|laden (lädt ein)`, `die Torte, -n`, `der Luftballon, -s`, `gratulieren`, `der Gast`은 9장), 돌잡이(`der Stift, -e`, `das Geld`, `das Mikrofon, -e`, `die Sache, -n`, `die Zukunft`, `der Sänger, -`), 돌아보기(`lernen`, `weiter`, `seit`, `vor`, `wie schnell`, `das erste Jahr`), 편지(`Liebe`, `Lieber`, `Viele Grüße`, `Liebe Grüße`, `Bis bald!`)
- **표현**: `expr-birthday-wishes` (`Alles Gute zum Geburtstag!` · `Herzlichen Glückwunsch!` · `Happy Birthday`도 흔함), `expr-turning-one` (`Jonas wird eins.` · `Er ist ein Jahr alt.`), `expr-letter-closings` (`Viele Grüße` · `Liebe Grüße` · `Bis bald` · `Dein Minho` / `Euer Minho`)
- **발음**: 한 해의 발음 항목을 한 장의 표로 다시 모으고(장마다 링크), 전래 말놀이 `Fischers Fritz fischt frische Fische`(작자 미상, 공유 저작물)로 sch와 f, r을 연습한다. 생일 노래는 `Zum Geburtstag viel Glück`의 첫 줄만.
- **한국과 독일**: 한국의 돌잔치와 돌잡이, 독일의 아이 생일(케이크의 초, 생일 화환 `Geburtstagskranz`, 친구를 부르는 생일 파티). 독일에서는 **생일 전에 미리 축하하지 않는다**(불운을 부른다는 믿음) — 그래서 장인 장모는 21일 아침이 되기를 기다렸다가 전화한다.
- **연습문제 `id`**: `prob-seit-or-vor`, `prob-seit-tense`, `prob-dative-time`, `prob-invitation-write`(★3: 장인 장모에게 돌잔치 초대장), `prob-birthday-translate`, `prob-tense-choice`, `prob-year-review`(★3: 지난 한 해를 8문장으로), `prob-letter-to-jonas`(★3: 열 살이 된 요나스에게 쓰는 짧은 편지 — 독일로 이사하는 계획과 연결)
- **선수 장**: **16, 17** (현재완료와 `war/hatte`를 복습함), 19
- **경계**: 부문장과 미래 시제는 쓰지 않는다. 이 장은 책의 마무리이므로 새 문법은 `seit/vor`와 편지 꼴만 둔다.

## 9. 검증

외국어 책의 검증은 "문장이 맞고 자연스러운가"가 전부입니다. 검토는 고치지 않고 지적만 합니다(CLAUDE.md 5-1절 5항).

### 9-1. 집필자가 확인할 것

- **모든 독일어 문장**을 한 번 더 읽으며 확인합니다.
  - 동사 활용(인칭 어미, 어간 변화, 분리 전철의 자리, 조동사·현재완료의 문장 틀).
  - 명사의 성, 복수, 격 어미(관사, 소유 관사, 복수 3격의 -n, 약변화 남성 명사).
  - 대명사가 가리키는 명사의 성과 맞는지(`die Milch → sie`).
  - 어순: 동사 2위, 도치, 문장 틀, `nicht`의 위치.
  - 정서법: 명사 대문자, `ß`/`ss`, 움라우트, 쉼표(`Ich glaube, …`), 존칭 `Sie`, `Ihr`의 대문자.
- **단어 표의 모든 명사는 성과 복수를 사전으로 확인합니다.** 웹을 쓸 수 있으면 Duden(`duden.de`)이나 독일어 위키낱말사전(`de.wiktionary.org`)에서 확인합니다. 확인하지 못한 단어는 보고서에 목록으로 적습니다. 기억에 기대지 않습니다.
- **IPA**도 같은 사전으로 확인합니다. 한글 표기는 5-3절 표를 따릅니다.
- **진도표(2-2절)를 넘는 문법이 없는지** 확인합니다. 특히 1~3장의 4격 남성, 1~6장의 4격 대명사, 1~9장의 3격, 1~15장의 현재완료, 형용사 어미(2-3절 밖), 부문장.
- **자연스러움**: 독일 부모가 실제로 그렇게 말하는지 스스로 묻습니다. 교과서식 문장(`Das Baby ist hungrig.`)보다 실제 말(`Er hat Hunger.`)을 고릅니다. 자신이 없는 표현은 더 평범한 표현으로 바꾸고, 보고서에 적습니다.
- **한국어 번역**이 독일어의 뜻을 빼거나 더하지 않는지, 말투가 5-4절과 맞는지 확인합니다.
- **소리 요소(6절)**: `lang="de"`인 대화 줄과 `span.say` 안에 한국어, 빗금, 괄호, 빈칸이 없는지 확인합니다.
- **설정(1-1절)**: 이름 표기, 요나스의 나이, 계절, 시차(겨울 8시간·여름 7시간), 날짜가 8절과 맞는지 확인합니다.
- **문화 노트의 사실**: 제도·숫자·규정은 바뀌므로 쓰지 않거나 "흔히", "많은 집에서"처럼 일반론으로 씁니다. 의학 내용은 조언처럼 쓰지 않습니다.
- **원본성**: 시중 교재의 대화, 예문, 연습문제를 옮기지 않았는지 확인합니다. 노래와 시는 작자 미상의 전래 가사만, 한두 줄만 씁니다.

### 9-2. 검토자가 확인할 것

검토자(4단계 opus/high, 10절)는 장 파일과 이 문서의 1~6절, 8절의 해당 장 항목을 읽고, 아래 순서로 **줄마다** 확인합니다.

1. **틀린 독일어**: 대화의 모든 줄, 문법 상자의 모든 예문, 단어 표의 모든 줄, 퀴즈 보기, 연습문제와 풀이. 성·복수·격·활용·어순·철자 하나라도 틀리면 지적합니다. 지적에는 위치(절과 상자 번호), 틀린 꼴, 맞는 꼴, 이유를 씁니다.
2. **부자연스러운 독일어**: 문법은 맞지만 독일 사람이 그렇게 말하지 않는 문장. 대안을 함께 씁니다.
3. **진도 위반**: 2-2절과 2-3절에 없는 앞선 문법.
4. **설명의 오류**: 규칙이 틀렸거나, 예외를 빠뜨려 오해를 부르는 설명(예: "모든 -e 명사는 여성이다").
5. **번역의 오류**와 말투.
6. **발음 표기**: IPA와 한글 표기의 오류, 강세 위치.
7. **풀이의 오류**: 정답이 하나뿐이라고 했는데 다른 답도 맞는 경우.
8. **원본성과 문화 노트의 사실 오류.**

- 검토자는 확신이 없는 지적에 "확인 필요"를 붙이고, 원어민 확인이 필요한 곳을 따로 모읍니다. 메인 세션은 이 목록을 사용자에게 보여 줍니다(사용자의 아내가 원어민입니다).

### 9-3. 페이지 점검

CLAUDE.md 7절을 따릅니다. 메인 세션이 로컬 서버(`python3 -m http.server 8000`)로 확인합니다.

- 콘솔 오류가 0개입니다.
- `(참조 오류: …)`가 없습니다.
- 가로 넘침이 없습니다. 단어 표와 활용표가 375px에서 넘치지 않는지 봅니다(활용표는 열 4개 이하).
- 데스크톱, 모바일(375px), 다크 모드 화면을 모두 확인합니다. 성 색과 대화의 `.me` 줄이 다크 모드에서 보이는지 확인합니다.
- **ä ö ü ß Ä Ö Ü**와 IPA 기호(`ʁ ɐ ç ʏ ø œ ŋ ː ˈ`)가 깨지지 않습니다.
- 소리 버튼: 대화 하나의 "전체 듣기", 단어 표의 몇 줄, `span.say` 몇 개를 눌러 들어 봅니다. 복수 표기가 읽히지 않는지, 세로줄(`auf|wachen`)과 괄호(`schlafen (schläft)`)가 어떻게 읽히는지 확인합니다.
- "번역 가리기"가 모든 대화에서 작동합니다.

## 10. 진행 방식

CLAUDE.md 5절의 병렬 집필 절차를 따릅니다.

### 10-1. 모델과 effort

이 책은 L1이고 외국어 책입니다. CLAUDE.md 4-3절의 L1 배정(기획 3, 집필 1, 검토 2)에 4-4절의 외국어 보정(집필 최소 2, 검토 최소 4)을 적용합니다.

| 작업 | 단계 | model / effort |
|---|---|---|
| 기획 (이 문서, 목차) | 3 | opus / medium |
| 집필 (모든 장) | 2 | sonnet / high |
| 검토 (모든 장) | 4 | opus / high |
| 책 홈 `index.html` 만들기 | 2 | sonnet / high |
| 링크·`id`·슬롯 점검, 단어 중복 점검, `books.js` 형식 정리 | 0 | haiku / low |

- 집필 서브에이전트는 동시에 최대 4개입니다.
- `Agent`를 부를 때마다 `model`과 `effort`를 위 표대로 지정합니다.

### 10-2. 시작하기 전에 (메인 세션)

1. `data/books.js`의 `german-a1` 항목에 `parts`와 20개 장(`status: "slot"`)을 넣습니다(기획 단계의 제안 파일을 씀).
2. 책 홈 `books/german-a1/index.html`을 만듭니다. `books/math-phys/index.html`의 구성을 참고하고, 1-1절의 인물 표, 2-2절의 문법 진도표, 5-3절의 발음 표기 규칙을 옮깁니다.
3. 장 파일은 `templates/language.html`을 `books/german-a1/chapters/chNN.html`로 복사해 만들고, `<body>`의 `data-book="german-a1" data-field="lang" data-chapter="chNN"`을 채웁니다. `<title>`은 `NN 장 제목 · 지식따개`입니다(엔진도 이 꼴로 바꿉니다).

### 10-3. 순서

- **기준 장은 1장입니다.** 단독으로 쓰고 검토한 뒤, 사용자가 문체·분량·대화의 자연스러움·발음 표기를 확인한 다음에 넘어갑니다. 1장에서 확정된 것(예: 단어 표의 메모 쓰는 법, 대화 밑 설명의 길이)은 이 문서 11절에 적은 뒤 병렬 집필을 시작합니다.
- 각 부의 첫 장(07, 13, 18)은 그 묶음의 다른 장보다 먼저 검토를 마칩니다. 사용자가 원하면 부의 첫 장을 확인받고 다음 묶음으로 넘어갑니다.
- 선수 장(8절의 굵은 장)이 끝난 순서로 묶어 병렬로 씁니다. 굵지 않은 선수 장은 진도표와 8절의 계획만으로 충분하지만, **같은 묶음 안에서도 장 번호 순서로 시작**해서, 앞 장이 먼저 끝나면 그 단어 표를 뒤 장 집필자에게 넘길 수 있게 합니다.

| 묶음 | 장 | 반드시 먼저 끝날 것 |
|---|---|---|
| 0 (기준) | 01 | — |
| 1 | 02, 03, 04, 05 | 01 |
| 2 | 06, 07, 08, 09 | 01 (묶음 1의 단어 표를 넘김) |
| 3 | 10, 11, 12, 13 | 01 (묶음 2의 단어 표를 넘김) |
| 4 | 14, 15, 16, 18 | 01 (16은 1~15장의 동사 목록이 필요 — 묶음 3까지 끝난 뒤) |
| 5 | 17, 19 | 16 → 17, 18 → 19 |
| 6 | 20 | 16, 17, 19 |

- 장마다 검토 서브에이전트를 띄웁니다(4단계 opus/high). 지적은 메인 세션이 반영하거나, 그 장을 쓴 서브에이전트에게 이어서 보냅니다.
- 한 묶음이 끝날 때마다 메인 세션이 0단계(haiku/low) 점검을 돌립니다: 8절의 `id`가 모두 있는지, 다른 장으로 거는 링크가 살아 있는지, **같은 단어가 두 장의 단어 표에 새 단어로 들어가지 않았는지**.
- 한 묶음의 검토와 반영이 끝나면 `books.js`의 `desc`를 한두 문장 요약으로 바꾸고 `status`를 `"draft"`로 올린 뒤 페이지를 점검합니다(9-3절).

### 10-4. 집필 에이전트에게 줄 것

CLAUDE.md 5-2절의 항목에 더해 다음을 프롬프트에 넣습니다.

- 이 문서의 경로와 읽을 곳(1~7절, 9절, 8절의 자기 장과 앞 장들), `templates/language.html`, `chapters/ch01.html`(기준 장).
- 앞 장들이 이미 쓰였으면 **그 장들의 단어 표에 실제로 들어간 단어 목록**(메인 세션이 0단계로 뽑음)과 실제로 만든 `id`. 아직 쓰이지 않은 장은 8절의 계획만 씁니다.
- 고칠 수 있는 파일은 맡은 장의 HTML 하나뿐이라는 것, 보고 형식(CLAUDE.md 5-2절)에 다음 두 항목을 더한다는 것:
  6. 사전으로 확인하지 못한 단어·문장 목록
  7. 원어민 확인이 필요하다고 생각하는 표현

### 10-5. 장을 더하거나 바꿀 때

- 장 번호와 `id`가 바뀌지 않도록, 새 장은 끼우지 않고 **21장부터 이어 붙입니다.** 후보는 "A1 시험 연습"(Goethe A1 형식의 듣기·읽기·쓰기·말하기 모의 과제)과 "독일어 동요와 놀이"입니다.
- 장을 더할 때는 `books.js`, 이 문서의 2절 표·2-2절·8절, 책 홈의 표를 함께 고칩니다.
- 이 책 다음은 같은 가족의 A2 책으로 이어집니다(요나스가 두세 살, 형용사 어미·부문장·과거). 이 책의 1-2절 "하지 않는 것"이 A2 책의 출발점입니다.
- 커밋, 푸시, 브랜치 만들기는 사용자가 요청할 때만 합니다(CLAUDE.md 1절).

## 11. 집필하며 정한 것

1장 검토(2026-11-07)에서 정한 것입니다. 사용자가 1장을 확인한 뒤 더 적습니다.

- **분량**: 1장은 발음 표기 읽는 법(IPA 표, 알파벳)을 한 번 다 실어서 길다. 2장부터는 장 하나를 **60~85KB**로, 발음 절은 **8~12KB**로 잡는다. 발음 표기 읽는 법은 1장에만 두고, 뒤 장은 1장의 절(`s5-read` 등)로 링크한다.
- **대화**: 대화 하나는 8~11줄, 한 줄은 1~8단어. 대화마다 밑에 "눈여겨볼 곳"을 짧게 붙인다.
- **단어 표 메모**: 순서는 IPA → 한글 → 한 줄 메모. 어원 잡담은 넣지 않는다. 한글 괄호 안의 굵은 글씨(강세)는 두 음절 이상인 단어에만 쓴다.
- **표현 상자**: 비슷한 표현은 한 상자로 묶는다(1장은 `expr-and-you`를 `expr-how-are-you`에 합침).
- **연습문제**: "밑줄 친"이라고 쓰면 실제로 `<u>`를 쓴다. 학습 목표마다 퀴즈나 연습문제 하나 이상.
- **사실 확인**: 대문자 ẞ는 2017년부터 공식 철자다. 긴 ä [ɛː]와 긴 e [eː]는 표준 발음에서 다른 소리다(많은 화자가 합쳐 발음한다).
- **1장에 이미 나온 것**: `Super!`(3장 `expr-praise`는 새 표현으로 내세우지 않는다), `Das ist mein Sohn.` 같은 소개 표현(`expr-family-intro`), `Hier, bitte.`·`So, jetzt du!`(`expr-schau-mal`).
- **7장**: 1장에 짧은 영상 통화(`dia-hello-oma`)와 시차가 이미 나온다. 7장은 "첫 영상 통화"가 아니라 처가와 자주 하는 통화로 쓴다.
- **eu/äu의 IPA는 [ɔʏ̯]**로 책 전체에서 통일한다(Wiktionary의 [ɔɪ̯]를 쓰지 않는다). 한글 표기는 [오이]이고, 어말 -er는 [아]로 쓴다(`Bäuerchen` [보이아헨]).
- **격 지배 표시(`+ 4격`, `+ 3격`)는 단어 표의 메모 칸에 쓴다.** 첫 칸은 소리로 읽히므로 독일어 낱말만 둔다.
- 2장 검토: `Ist ja gut.`(달랠 때)를 `expr-calming`에 넣었다. 핵심 문장 `Er hört Musik und ist ganz ruhig.`(생후 3주에 `spielen`은 어색).
- 4장: `das Kacka`(Duden: das/der, 유아어). `Fertig!`은 4장 `expr-there-you-go`에서 먼저 나온다 — 6장 `expr-done`은 정리로 다룬다.
- 5장: `morgens`, `abends`, `nachts`, `die Zeit`, `die Uhr`, `halb`, `das Viertel`, `vor`, `nach`, `spät`, `früh`, `bald`는 5장의 새 단어다 — 13장은 다시 새 단어로 내세우지 않는다. `Milliliter`는 첫 음절 강세(Duden)라 강세 예외가 아니다.
- 3장: `zu`(너무) + 형용사는 3장 단어, 문법 설명은 6장. `da`는 2장 단어.
- **소리 버튼**: 엔진이 단어 표의 복수 표기, `|`, 괄호 속 보충을 빼고 읽는다(2026-11-07 수정). 소리 요소 안에 괄호를 넣지 않는 규칙(6절)은 그대로 지킨다.

### 11-2. 병렬 집필과 검토에서 정한 것 (2~19장, 2026-11-07~08)

**표기**
- 한글 표기: 강세 없는 -en은 1장처럼 [-은/-ㄴ]으로 쓴다(`Guten` [구ː튼], `Kinderwagen` [킨다바ː근], `draußen` [드라우슨]). -el도 같은 방식이다(`Löffel` [뢰플], `Apfel` [압플]).
- 장음 표시 ː는 굵은 글씨 **밖**에 둔다(`<b>구</b>ː튼`). 2026-11-08에 1~19장을 한꺼번에 맞췄다.
- IPA의 파찰음은 [ts]로 쓰고 [t͡s]는 쓰지 않는다. 성문 파열음 [ʔ]는 12장 발음 절에서만 다룬다. 한글 괄호 안에서만 `|`로 끊김을 표시하고, 독일어 철자 안에는 `|`를 쓰지 않는다(분리 동사 표시와 겹친다).
- 단어 표에는 거의 모든 줄에 IPA를 단다(5-3절보다 넉넉하게 — 학습자에게 도움이 되어 그대로 두었다).
- 용어: "예/아니요 의문문"(표준어 `아니요`).
- 철자 불러 주기 표는 DIN 5009:2022 도시 표를 기본으로 하고, 전통 이름 표는 한 줄로만 소개한다(8장).

**문법 설명**
- du 명령법: 어간을 쓴다. e→i(e)로 바뀌는 동사는 명령법에서도 바뀐다(`Nimm!`, `Lies!`, `Iss!`). a→ä 동사는 바뀌지 않는다(`Schlaf!`, `Fahr!`). -t·-d나 자음+n 뒤에는 -e를 붙인다(`Trockne!`). `nicht`는 분리 전철 앞이다(`Mach das Licht nicht aus!`).
- st/sp가 [ʃt]/[ʃp]인 것은 낱말이나 **어간**의 첫머리일 때다(`bestellen`, `verstehen` 포함).
- stehen/liegen/sitzen/hängen의 현재완료는 표준어(북부·중부)에서 `haben`이다. 남부의 `sein`은 16장 메모에만 둔다.
- `nicht`는 장소구 앞에 온다(`Er ist nicht auf dem Tisch.`, 10장).
- 모음의 길이를 철자로 알 때 ch·sch는 자음 하나로 센다(`Kuchen`은 길고, `Küche`는 예외로 짧다, 10·11장).

**장 사이에서 옮겨 간 낱말** (§8 목록과 다른 것)
- `da` 2장 · `noch` 2장 · `das Kacka`(das/der) 4장 · `der Body` 4장 · `alt` 7장 · `die Tochter` 7장 · `weg` 7장 · `schwer`/`leicht` 8장(9장 아님) · `gehen`/`fahren`/`morgen` 13장 · `das Foto` 16장(8장 아님) · `der Zahn`/`das Fieber` 14장(17장 아님) · `lernen`/`der Schritt`/`sitzen` 17장 · `der Reisepass` 18장 · `die Straße`는 어느 장 단어 표에도 없다.
- 8장에서 뺀 단어: `Reisepass`(18장), `Koreanerin`·`Land`·`Sprache`·`E-Mail`·`Foto`(표에서 뺌).
- 12장의 크리스마스 문화 낱말(Adventskranz, Christkind, Stollen …)은 "읽기용" 목록이다. 외울 단어 표에 넣지 않는다.

**미리 쓰는 표현** (2-3절에 더한 것)
- `Ist ja gut.`(2) · `Super!`(1) · `am Tag`(5) · `im Flugzeug`/`im Zimmer`(9) · `ein bisschen`(11, 16장 아님) · `Ich esse mit Stäbchen.`(11) · `Lass es dir schmecken!`(11/16) · `Gern geschehen!`(12) · `Was kann ich für Sie tun?`(8, 듣기용) · `von zu Hause`·`zum Babykurs`·`jeden Montag`·`Welcher Tag ist heute?`(13) · `Schmeckt's?`(16) · `in den Park`(13, `der Park`는 15장).

**이야기**
- 2부(7·8장, 11월 18일·25일)는 1부의 마지막 몇 주와 겹친다. 7장 머리말에 밝혔다.
- 손주를 부를 때는 `mein Kleiner`를 쓴다(`mein Enkel`은 어색하다). `Oma`/`Opa`는 아기말이 아니라 친근한 일상어다.
- 레나는 육아휴직(Elternzeit) 중이다. 레나가 한국어를 알아듣는지는 정하지 않았다(쓰지 않는다).
- 18장: 인천에서 밤 비행기(13시간 넘게) → 프랑크푸르트 이른 아침 → 11:45 ICE(20분 지연, 12:05 출발) → 하노버 14:35.
- 백일은 2027년 1월 28일이다(17장).

**엔진** (assets, 2026-11-08)
- `lang` 분야 색을 진하게 했다(`--accent` #0369a1, `--accent-2` #b45309) — 밝은 화면의 링크·표 머리 대비 AA.
- 활용표 어미 강조색은 글자색과 섞어 대비를 높였다.
- 표 안의 독일어 낱말은 중간에서 끊지 않는다(`table [lang="de"]`). 단어 표의 뜻 칸은 최소 5em이다.
- 소리 버튼은 `|`와 괄호 속 보충을 빼고 읽는다.

**원어민(레나) 확인 목록**: 장마다 검토 파일 끝에 있다(scratchpad `reviews/de-chNN.md`, 저장소 밖). 대표적인 것은 책 홈 또는 PLAN에 따로 모은다.
