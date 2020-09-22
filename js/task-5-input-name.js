//github.com/goitacademy/javascript-homework/tree/master/homework-07
// Task 5

const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    // console.log(refs.outputName.textContent);

    return event.currentTarget.value.length > 0
        ? (refs.outputName.textContent = event.currentTarget.value)
        : (refs.outputName.textContent = 'незнакомец');
}

// if (event.currentTarget.value.length > 0) {
//     refs.outputName.textContent = event.currentTarget.value;
// } else {
//     refs.outputName.textContent = 'незнакомец';
// }
