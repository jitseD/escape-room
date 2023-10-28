
let currentDPR = window.devicePixelRatio;

const $inputs = document.querySelectorAll(`input`);
const $buttons = document.querySelectorAll(`.number__pad button`);

const buttonClickHandle = e => {
    const emptyInput = Array.from($inputs).find((input) => input.value === ``);

    if (emptyInput) {
        emptyInput.value = e.target.textContent;
    }

    checkInputs();
}

const inputsHandle = e => {
    checkInputs();
}

const checkInputs = () => {
    const allInputsValid = Array.from($inputs).every((input) => input.checkValidity());

    if (allInputsValid) {
        window.location.href = `https://www.google.com`;
    }
}

const init = () => {
    setInterval(() => {
        const newDPR = window.devicePixelRatio;
        if (newDPR !== currentDPR) {
            location.reload();
        }
        currentDPR = newDPR;
    }, 1000);

    $buttons.forEach($button => {
        $button.addEventListener(`click`, buttonClickHandle)
    });

    $inputs.forEach($input => {
        $input.addEventListener(`input`, inputsHandle)
    });
}

init();
