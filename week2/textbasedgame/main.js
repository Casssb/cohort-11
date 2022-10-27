const firstNameEntry = document.querySelector('#first-name');
const secondNameEntry = document.querySelector('#second-name');
const firstNameDisplay = document.querySelector('#name-one');
const secondNameDisplay = document.querySelector('#name-two');
const formButton = document.querySelector('#form-submit');

const LOCAL_STORAGE_KEY = 'text.game';
const playerName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
  firstName: 'Random',
  secondName: 'Person',
};

const updateStoredName = (first, second) => {
  playerName.firstName = first;
  playerName.secondName = second;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(playerName));
};

const updatePlayerDisplayName = () => {
  firstNameDisplay.textContent = playerName.firstName;
  secondNameDisplay.textContent = playerName.secondName;
};

const updateDeviceDisplayName = () => {
  const deviceDisplay = document.querySelector('#device');
  const devices = [
    'fridge',
    'toaster',
    'scooter',
    'phone',
    'tablet',
    'microwave',
  ];
  const random = Math.floor(Math.random() * devices.length);
  deviceDisplay.textContent = devices[random];
};

window.addEventListener('load', () => {
  updateDeviceDisplayName();
  updatePlayerDisplayName();
});

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  updateStoredName(firstNameEntry.value, secondNameEntry.value);
  updatePlayerDisplayName();
  firstNameEntry.value = '';
  secondNameEntry.value = '';
});

