# my-todo-app

HTML, CSS, JavaScript만으로 만든 정적 웹 페이지 연습 프로젝트입니다.
빌드 도구나 패키지 설치 없이 브라우저에서 바로 실행할 수 있습니다.

## 구성

| 경로 | 설명 |
| --- | --- |
| `hello-world/index.html` | "Hello World"를 표시하는 첫 웹 페이지 |
| `hello-world/profile/` | 이름, 직업, 취미를 보여주는 자기소개 카드 페이지 |
| `hello-world/Counter/` | 증가(+), 감소(−), 리셋 버튼이 있는 카운터 앱 |

### 카운터 앱

- `+` / `−` 버튼으로 숫자를 1씩 바꾸고, `리셋` 버튼으로 0으로 되돌립니다.
- 숫자가 양수면 초록색, 음수면 빨간색으로 표시됩니다.
- 숫자가 바뀌면 스크린 리더가 읽어 주도록 `aria-live`를 적용했습니다.

### 자기소개 페이지

- 색상 테마는 `style.css`의 `:root` CSS 변수(기본 색상 `#667eea`)로 관리합니다.
  이 변수만 바꾸면 페이지 전체 색상을 바꿀 수 있습니다.

## 실행 방법

1. 저장소를 내려받습니다.
   ```bash
   git clone https://github.com/mikebyun/my-todo-app.git
   ```
2. 보고 싶은 페이지의 `index.html` 파일을 브라우저로 엽니다.
   - 예: `hello-world/Counter/index.html`

## 기술 스택

- HTML5
- CSS3 (CSS 변수, Flexbox)
- JavaScript (바닐라 JS, 라이브러리 없음)
