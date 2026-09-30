# 🎨 Studio &middot; Archive — Web Frontend Portfolio

> **Editorial UX Case Study Layout & Aurora UI Showcase**  
> 모던 인터랙티브 웹 디자인과 프론트엔드 엔지니어링 역량을 담은 3대 프로젝트 쇼케이스 포트폴리오입니다.

---

## 🌟 프로젝트 개요 (Overview)

본 포트폴리오는 **"Find Your Calm & Mindful Craft"**를 테마로, 감각적인 **오로라(Aurora) UI** 스타일과 잡지 형태의 정갈한 **에디토리얼(Editorial) UX 레이아웃**을 적용하여 구현된 프론트엔드 프로젝트 아카이브입니다.

포트폴리오 내 3개의 핵심 프로젝트를 클린 화이트 카드와 고해상도 디자인 목업으로 소개하며, 각 카드를 클릭하여 해당 프로젝트로 즉시 이동하거나 **포트폴리오 페이지 내에서 앱을 직접 조작해볼 수 있는 '빠른 미리보기(Live Preview)' 모달**을 제공합니다.

---

## 🚀 수록 프로젝트 (Featured Projects)

| 프로젝트 | 카테고리 | 핵심 기술 | 특징 및 설명 |
| :--- | :--- | :--- | :--- |
| **[Todo App (할 일 목록)](../To%20do/index.html)** | Productivity &middot; UX System | `HTML5`, `CSS3`, `JS (ES6+)`, `LocalStorage` | 실시간 통계 카운터, 필터(전체/진행/완료), 영구 로컬 저장 지원 |
| **[환율 변환기 (FX Converter)](../fxconveter/index.html)** | FinTech &middot; Real-Time FX | `HTML5`, `CSS3`, `Async JS`, `Number Formatting` | 실시간 환율 계산, 원클릭 통화 맞교환(Swap), 다중 통화 지원(USD, EUR, KRW, JPY) |
| **[스네이크 게임 (Snake Game)](../Snake%20game/index.html)** | Interactive &middot; Game Engine | `HTML5 Canvas`, `Game Loop`, `Collision Detection` | 60FPS 캔버스 루프, 신스웨이브 레트로 감성, 최고 점수 기록 시스템 |

---

## ✨ 핵심 디자인 & 인터랙션 특징

### 1. Ethereal Aurora UI & Noise Texture
* **오로라 애니메이션**: 은은한 핑크(`Pink`), 소프트 블루(`Blue`), 상쾌한 민트 그린(`Mint Green`), 라벤더 컬러가 천천히 회전하고 유영하는 CSS 메시 그라디언트 배경.
* **필름 그레인 노이즈**: 미세한 SVG `feTurbulence` 프랙탈 노이즈 텍스처를 오버레이하여 고급스러운 지면 인쇄물 느낌의 텍스처 구현.

### 2. Editorial Typography & Layout
* **대형 세리프 타이틀**: *Playfair Display*, *Cormorant Garamond*를 사용하여 에디토리얼 잡지 스타일의 우아함 연출.
* **정갈한 산세리프 텍스트**: 중앙 핵심 문구인 `"Find Your Calm"` 및 본문 텍스트에 *Plus Jakarta Sans* 적용.
* **글래스모피즘(Frosted Glass)**: 반투명 블러 효과의 상단 네비게이션 및 히어로 하단 액션 버튼.

### 3. 클린 화이트 UI 카드 & 마이크로 인터랙션
* **3D 카드 틸트(Tilt Physics)**: 마우스 커서의 위치에 따라 카드가 입체적으로 기울어지는 물리 효과.
* **카테고리 필터 시스템**: All / Productivity / FinTech / Interactive Canvas 필터링.
* **인앱 빠른 미리보기(Quick Preview Modal)**:
  * 포트폴리오를 벗어나지 않고 모달 창에서 실제 프로젝트 작동 확인 가능.
  * 데스크톱 뷰(100%) 및 모바일 뷰(480px) 뷰포트 토글 지원.
  * 리로드 및 새 창 열기 툴바 제공.

---

## 📂 파일 구조 (Directory Structure)

```text
My-Portfolio/
├── assets/
│   ├── todo_app.jpg        # Todo App 에디토리얼 목업 이미지
│   ├── fx_converter.jpg    # FX 환율 변환기 에디토리얼 목업 이미지
│   └── snake_game.jpg      # 스네이크 게임 에디토리얼 목업 이미지
├── index.html              # 시맨틱 구조, 히어로, 3개 카드 및 모달 팝업
├── style.css               # 오로라 애니메이션, 노이즈 텍스처, 에디토리얼 스타일
├── main.js                 # 모달 제어, 카드 틸트, 필터링, 네비게이션 로직
└── README.md               # 프로젝트 안내 문서
```

---

## 💻 실행 방법 (Getting Started)

외부 라이브러리 설치 없이 순수 웹 표준(Vanilla Web) 기술로 제작되어 브라우저에서 즉시 실행할 수 있습니다.

1. 본 저장소를 클론(Clone)합니다:
   ```bash
   git clone https://github.com/jsh1223/my-portfolio.git
   ```
2. `index.html` 파일을 브라우저로 엽니다:
   * 탐색기에서 `index.html` 더블 클릭
   * 또는 VSCode `Live Server` 확장을 통해 로컬 서버 실행

---

## 🛠️ 기술 스택 (Tech Stack)

* **Markup**: Semantic HTML5
* **Styles**: Vanilla CSS3 (Custom Properties, Keyframe Animations, Backdrop Filter, Grid & Flexbox)
* **Script**: Vanilla JavaScript (ES6+, DOM Manipulation, Event Delegation, Canvas)
* **Design & Assets**: Custom High-Res Editorial UX Mockups, Google Fonts, Font Awesome 6
