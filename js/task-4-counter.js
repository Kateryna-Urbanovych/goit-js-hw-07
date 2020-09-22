//github.com/goitacademy/javascript-homework/tree/master/homework-07
// Task 4

const refs = {
    counterValueEl: document.querySelector('#value'),
    decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('button[data-action="increment"]'),
};

let counterValue = Number(refs.counterValueEl.textContent);
// console.log(counterValue);

refs.decrementBtnEl.addEventListener('click', makeDecrementBtn);
refs.incrementBtnEl.addEventListener('click', makeIncrementBtn);

function makeDecrementBtn() {
    // console.log('Клик по декременту');
    // console.log(counterValue);
    refs.counterValueEl.textContent = counterValue -= 1;
}

function makeIncrementBtn() {
    // console.log('Клик по инкременту');
    // console.log(counterValue);
    refs.counterValueEl.textContent = counterValue += 1;
}
