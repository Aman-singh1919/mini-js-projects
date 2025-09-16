let count = 0; // shuru me 0

const result = document.querySelector('#stp');
const btnBasic = document.querySelector('.btn-basic');
const btnPill = document.querySelector('.btn-pill');
const btnGhost = document.querySelector('.btn-ghost');

// shuru me text dikhado
result.innerText = `Your result is ${count}`;

// Add +1
btnBasic.addEventListener('click', () => {
  count = count + 1; // ya count++
  result.innerText = `Your result is ${count}`;
});

// Remove -1
btnPill.addEventListener('click', () => {
  count = count - 1;
  result.innerText = `Your result is ${count}`;
});

// Add +2
btnGhost.addEventListener('click', () => {
  count = count + 2;
  result.innerText = `Your result is ${count}`;
});

