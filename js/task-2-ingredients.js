//github.com/goitacademy/javascript-homework/tree/master/homework-07
// Task 2

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// Создание разметки ингридиентов
// const elements = ingredients.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = ingredient;
//     return itemEl;
// });
// console.log(elements);

// const ingredientsEl = document.querySelector('#ingredients');
// ingredientsEl.append(...elements);
// console.log(ingredientsEl);

// Функция для создания разметки ингридиентов
const makeIngredients = ingredients => {
    return ingredients.map(ingredient => {
        const itemEl = document.createElement('li');
        itemEl.classList.add('item');
        itemEl.textContent = ingredient;
        return itemEl;
    });
};

const elements = makeIngredients(ingredients);

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...elements);
// console.log(ingredientsEl);
