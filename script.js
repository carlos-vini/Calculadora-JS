const numbersBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');
const absBtn = document.querySelector('[data-abs]')
const display = document.querySelector('#display')

numbersBtn.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerHTML += button.innerHTML;
    });
});

operationBtn.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerHTML += button.innerHTML;
    });
});

equalsBtn.addEventListener('click', () => {
    display.innerHTML = eval( display.innerHTML);
})

clearBtn.addEventListener("click", () => {
    display.innerHTML = '';
});

absBtn.addEventListener("click", () => {
    display.innerHTML = Math.abs(display.innerHTML);
});