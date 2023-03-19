import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const chooseDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

chooseDate.addEventListener('input', handleTimerInputDate);
btnStart.addEventListener('click', updateTimer);

let countdownIntervalId;
let selectedDateTime = 0;

btnStart.disabled = true; //вимикаю кнопку на початку

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      btnStart.disabled = true; //вимикаю кнопку на початку
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      btnStart.disabled = false; //вмикаю кнопку, якщо дата вірна
    }
    selectedDateTime = selectedDates[0].getTime(); //зберігаю обраний час
  },
};

function handleTimerInputDate(e) {
  let currentTime = new Date();
  let timeDifference = selectedDateTime - currentTime.getTime();
  if (timeDifference <= 0) {
    resetTimer();
    return;
  }
  updateTimerDisplay(timeDifference);
  return timeDifference;
}
  

function updateTimer() {
  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
  }
  countdownIntervalId = setInterval(() => {
    timeDifference = handleTimerInputDate();
    if (timeDifference <= 0) {
      resetTimer();
      Notiflix.Notify.success('Timer has ended!');
      return;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function updateTimerDisplay(timeDifference) {
  const timeObj = convertMs(timeDifference);
  daysValue.textContent = addLeadingZero(timeObj.days);
  hoursValue.textContent = addLeadingZero(timeObj.hours);
  minutesValue.textContent = addLeadingZero(timeObj.minutes);
  secondsValue.textContent = addLeadingZero(timeObj.seconds);
}

function resetTimer() {
  clearInterval(countdownIntervalId);
  timeDifference = 0;
  daysValue.textContent = '00';
  hoursValue.textContent = '00';
  minutesValue.textContent = '00';
  secondsValue.textContent = '00';
}

flatpickr(chooseDate, options);

// оформлення
const divEl = document.querySelector('.timer');
const divSpan = document.querySelectorAll('.field');

divEl.style.display = 'flex';
divEl.style.gap = '15px';

divSpan.forEach(element => {
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.fontSize = '24px';
  element.style.fontWeight = '600';
  element.style.color = `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`;
});
