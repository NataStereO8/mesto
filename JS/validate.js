const docValid = {
    formSelector: '.popup__form', //выбранная форма
    inputSelector: '.popup__input', //выбранный инпут
    submitButtonSelector: '.popup__save-button', //выбранная кнопка на форме
    inactiveButtonClass: 'popup__save-button_disabled', //неактивная кнопка на форме
    inputErrorClassStyle: 'popup__input_error', //внешний вид невалидных полей
    inputErrorClass: '.popup__error', //текст ошибки
    errorClass: 'popup__error_visible'  //флаг на текст ошибки 
    // errorLabel: '.popup__label'
}

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(`#${inputElement.id}-error`);
    inputElement.classList.add(docValid.inputErrorClassStyle);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(docValid.errorClass);
};

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(docValid.inputErrorClassStyle);
    errorElement.classList.remove(docValid.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(docValid.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(docValid.inactiveButtonClass);
    }
    console.log(buttonElement);
}; 

function setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(docValid.inputSelector));
    const buttonElement = formElement.querySelector(docValid.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
    // console.log(inputList, buttonElement);
}; 

function enableValidation(docValid){
    const formList = Array.from(document.querySelectorAll(docValid.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();          
        });
    });
    // console.log(formList);
}

enableValidation(docValid); 
