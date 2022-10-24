const form = document.querySelector('#bmi-form');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const resultContainer = document.querySelector('#result');
const resultValue = document.querySelector('#result-number');
let colour = undefined;

const appendBackgroundColour = (number) => {
  colour && resultContainer.classList.remove(`bg-${colour}`);
  if (number < 18.5) {
    colour = 'primary';
  } else if (number < 25) {
    colour = 'success';
  } else if (number < 30) {
    colour = 'warning';
  } else {
    colour = 'danger';
  }
  resultContainer.classList.add(`bg-${colour}`);
};

const calculateBmi = (height, weight) => {
  const result = Math.round((weight / (height / 100) ** 2) * 10) / 10;
  appendBackgroundColour(result);
  return result;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  resultValue.textContent = calculateBmi(height.value, weight.value);
});
