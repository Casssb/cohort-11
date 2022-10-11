const firstNameEntry = document.querySelector('#first-name');
const secondNameEntry = document.querySelector('#second-name');
const firstNameDisplay = document.querySelector('#name-one');
const secondNameDisplay = document.querySelector('#name-two');
const formButton = document.querySelector('#form-submit');

const updateDeviceDisplayName = () => {
    const deviceDisplay = document.querySelector('#device');
    const devices = ['fridge', 'toaster', 'scooter', 'phone', 'tablet', 'microwave'];
    const random = Math.floor(Math.random() * devices.length);
    deviceDisplay.textContent = devices[random];
}

window.addEventListener('load', () => {
    updateDeviceDisplayName();
})

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    firstNameDisplay.textContent = firstNameEntry.value;
    secondNameDisplay.textContent = secondNameEntry.value;
    firstNameEntry.value = '';
    secondNameEntry.value = '';
})