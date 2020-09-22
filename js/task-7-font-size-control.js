//github.com/goitacademy/javascript-homework/tree/master/homework-07
// Task 7

const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputFontSizeControl);

// console.log(refs.text.style.fontSize);

function onInputFontSizeControl(event) {
    // console.log(event.currentTarget.value + 'px');

    refs.text.style.fontSize = event.currentTarget.value + 'px';
}
