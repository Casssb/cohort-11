const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const displayName = document.querySelector('#name');
const displayFocus = document.querySelector('#focus');
const LOCAL_STORAGE_KEY = 'landing.page';
const greetData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
  name: '[Enter Name]',
  focus: '[Enter Focus]',
};

const showAmPm = false;

const showTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();
  const amPm = hour >= 12 ? 'PM' : 'AM';
  const formatHour = hour % 12 || 12;

  time.innerHTML = `${formatHour}<span>:</span>${formatTime(
    minute
  )}<span>:</span>${formatTime(seconds)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
};

const formatTime = (num) => {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
};

const setBackgroundGreet = () => {
  const today = new Date();
  const hour = today.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage = 'url(../img/morning.jpg)';
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url(../img/afternoon.jpg)';
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = 'url(../img/night.jpg)';
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
};

const displayStoredData = () => {
  displayName.textContent = greetData.name;
  displayFocus.textContent = greetData.focus;
};

const updateStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(greetData));
};

const setName = (e) => {
  if (e.type === 'keypress') {
    if (e.keyCode === 13) {
      greetData.name = e.target.textContent;
      updateStorage();
      displayName.blur();
    }
  } else {
    greetData.name = e.target.textContent;
    updateStorage();
  }
};
const setFocus = (e) => {
  if (e.type === 'keypress') {
    if (e.keyCode === 13) {
      greetData.focus = e.target.textContent;
      updateStorage();
      displayFocus.blur();
    }
  } else {
    greetData.focus = e.target.textContent;
    updateStorage();
  }
};

showTime();
setBackgroundGreet();
displayStoredData();

displayName.addEventListener('keypress', setName);
displayName.addEventListener('blur', setName);
displayFocus.addEventListener('keypress', setFocus);
displayFocus.addEventListener('blur', setFocus);
