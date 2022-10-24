const onButton = document.querySelector('#onButton');
const offButton = document.querySelector('#offButton');
const lightbulb = document.querySelector('#lightbulb');

const turnOn = () => {
  lightbulb.src = 'img/pic_bulbon.gif';
};

const turnOff = () => {
    lightbulb.src = 'img/pic_bulboff.gif';
}

onButton.addEventListener('click', turnOn);
offButton.addEventListener('click', turnOff);
