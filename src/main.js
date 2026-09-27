import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="counter-container">
    <h1>カウンターアプリ</h1>
    <p id="count">0</p>
    <div class="btn-group">
      <button id="increase-btn">増やす</button>
      <button id="decrease-btn">減らす</button>
      <button id="reset-btn">リセット</button>
    </div>
  </div>
`;

const countEl = document.querySelector('#count');
const increaseBtn = document.querySelector('#increase-btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#reset-btn');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});