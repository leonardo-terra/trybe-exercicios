let ingredientItems = [
  "Meio copo de pipoca",
  "1/4 de copo de açúcar",
  "1/4 de copo de água",
  "1/8 de copo de óleo",
];

let ingredientList = document.querySelector(".ingredients-list");

for (let i = 0; i < ingredientItems.length; i++) {
  let ingredientListItem = document.createElement('li');

  ingredientListItem.innerText = ingredientItems[i];
  ingredientListItem.className = 'ingredients-list-item';

  ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll('.ingredients-list-item');

for (let i =0; i<ingredientListItems.length; i++){
    let element = ingredientListItems[i];

    if (element.innerText.includes('óleo')){
        ingredientList.removeChild(element);
    }
}