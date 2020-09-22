//github.com/goitacademy/javascript-homework/tree/master/homework-07
// Task 6

const inputEL = document.querySelector('#validation-input');

const validLengthInput = Number(inputEL.dataset.length);
// console.log(typeof inputLength);

inputEL.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const currentLengthInput = event.currentTarget.value.length;

    // console.log(validLengthInput);
    // console.log(typeof validLengthInput);
    // console.log(currentLengthInput);
    // console.log(typeof currentLengthInput);

    if (currentLengthInput === validLengthInput) {
        inputEL.classList.add('valid');
        inputEL.classList.remove('invalid');
    } else {
        inputEL.classList.add('invalid');
        inputEL.classList.remove('valid');
    }
}
