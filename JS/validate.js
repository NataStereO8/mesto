const params = {
    formSelector: '.popup__form', //выбранная форма
    inputSelector: '.popup__input', //выбранный инпут
    submitButtonSelector: '.popup__save-button', //выбранная кнопка на форме
    inactiveButtonClass: 'popup__save-button_disabled', //неактивная кнопка на форме
    inputErrorClassStyle: 'popup__input_error', //внешний вид невалидных полей
    errorClass: 'popup__error_visible'  //флаг на текст ошибки 
    // errorLabel: '.popup__label'
}

function showInputError(formElement, inputElement, errorMessage, params) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(params.inputErrorClassStyle);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(params.errorClass);
};

function hideInputError(formElement, inputElement, params) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(params.inputErrorClassStyle);
    errorElement.classList.remove(params.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, params) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, params);
    } else {
        hideInputError(formElement, inputElement, params);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement, params){
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(params.inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    } else {
        buttonElement.classList.remove(params.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
}; 

function setEventListeners(formElement, params){
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, params);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, params);
            toggleButtonState(inputList, buttonElement, params);
        });
    });
    // console.log(inputList, buttonElement);
}; 

function enableValidation(params){
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, params);
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();          
        });
    });
    // console.log(formList);
}

enableValidation(params); 
