//github.com/goitacademy/javascript-homework/tree/master/homework-07
// Task 1

const itemsOfCategoriesEl = document.querySelectorAll('#categories > .item');
// console.log(itemsOfCategoriesEl);
console.log(`В списке ${itemsOfCategoriesEl.length} категории.`);

itemsOfCategoriesEl.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
