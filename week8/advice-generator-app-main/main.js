const adviceTitle = document.querySelector('#advice-title');
const adviceDescription = document.querySelector('#advice-description');
const button = document.querySelector('#btn');

//endpoint https://api.adviceslip.com/advice

const clearDom = () => {
  adviceTitle.textContent = '';
  adviceDescription.textContent = '';
};

const appendToDom = (data) => {
  console.log(data);
  adviceTitle.textContent = `ADVICE #${data.id}`;
  adviceDescription.textContent = `"${data.advice}"`;
};

const fetchQuote = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((responce) => responce.json())
    .then((data) => appendToDom(data.slip));
};

button.addEventListener('click', () => {
  clearDom();
  fetchQuote();
});
