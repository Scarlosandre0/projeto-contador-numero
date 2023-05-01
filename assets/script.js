const decEl = document.querySelector('.dec');
const resetEl = document.querySelector('.reset');
const incEl = document.querySelector('.inc');
const countEl = document.querySelector('.count');

var count = 0;

decEl.addEventListener("click", decrease);
resetEl.addEventListener("click", reset);
incEl.addEventListener("click", increase);

function decrease() {
  count--;
  countEl.innerHTML = count;
  if(count < 0) {
    countEl.style.color = 'red';
  }
  if(count == 0) {
    countEl.style.color = 'black';
  }
}

function increase() {
  count++;
  countEl.innerHTML = count;
  if(count > 0) {
    countEl.style.color = 'green'
  }
  if(count == 0) {
    countEl.style.color = 'black'
  }
}

function reset() {
  count = 0;
  countEl.innerHTML = count;
  countEl.style.color = "black";
}