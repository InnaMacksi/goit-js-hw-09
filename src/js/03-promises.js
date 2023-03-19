import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const stepEl = document.querySelector('input[name="step"]');

formEl.addEventListener('submit', addPromises);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
  }

  }, delay);
  })
promise
  .then(({ position, delay }) => {
    Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

function addPromises(e) {
  e.preventDefault();
  let count = 0;
  const { elements: { amount, delay, step } } = e.currentTarget;
  for (let i = 1; i <= amount.value; i += 1) {
    let valueDelay = parseInt(delay.value);
    let valueStep = parseInt(step.value);
    let formulaDelay = valueDelay + count * valueStep;
    createPromise(i, formulaDelay);
    count += 1;
  }
  formEl.reset();
}
