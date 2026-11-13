// 현재 카운트 값 (초기값 0)
let count = 0;

// 숫자를 화면에 반영하고, 부호에 따라 색상 클래스 변경
// (0이면 두 클래스가 모두 빠져 기본색으로 표시됨)
function render(countEl) {
  countEl.textContent = count;
  countEl.classList.toggle('positive', count > 0); // 양수 → 초록
  countEl.classList.toggle('negative', count < 0); // 음수 → 빨강
}

// 페이지 초기화: 버튼에 클릭 이벤트 연결
function initApp() {
  const countEl = document.getElementById('count');

  // 증가 버튼: 1 증가
  document.getElementById('increase').addEventListener('click', () => {
    count += 1;
    render(countEl);
  });

  // 감소 버튼: 1 감소
  document.getElementById('decrease').addEventListener('click', () => {
    count -= 1;
    render(countEl);
  });

  // 리셋 버튼: 0으로 초기화
  document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    render(countEl);
  });

  render(countEl);
}

// HTML 로드가 끝나면 initApp 실행
document.addEventListener('DOMContentLoaded', initApp);
