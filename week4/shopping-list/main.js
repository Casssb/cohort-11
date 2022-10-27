const form = document.querySelector('#form');
const searchText = document.querySelector('#text');
const resultText = document.querySelector('#result');
const listText = document.querySelector('#list');

const shoppingList = [
  'milk',
  'butter',
  'steak',
  'orange juice',
  'bread',
  'eggs',
  'bananas',
  'apples',
  'spinach',
];

const displayListMessage = () => {
  const listLength = shoppingList.length - 1;
  const entry = searchText.value.toLowerCase();
  for (let i = 0; i <= listLength; i++) {
    if (entry === shoppingList[i]) {
      resultText.textContent = "it's on the list!";
      return;
    }
    resultText.textContent = "it's been added to the list";
  }
  listText.innerHTML = '';
};

const checkIfOnList = () => {
  if (!shoppingList.includes(searchText.value)) {
    shoppingList.push(searchText.value);
  }
};

const displayList = () => {
  listText.innerHTML = '';
  shoppingList.forEach((item) => {
    listText.textContent += `${item}, `;
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  displayListMessage();
  checkIfOnList();
  displayList();
});
