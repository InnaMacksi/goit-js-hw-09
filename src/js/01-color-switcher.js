const body = document.querySelector('body');
const button = document.querySelectorAll('button');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button[0].addEventListener('click', onBtnColorChange);

function onBtnColorChange() {
  button[0].setAttribute('disabled', true);
  button[1].removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnActive() {
  body.style.backgroundColor = getRandomHexColor();
}

button[1].addEventListener('click', () => {
  button[0].removeAttribute('disabled');
  button[1].setAttribute('disabled', true);

  clearInterval(timerId);
});
