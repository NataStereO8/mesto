
import {initialCards, config} from './config.js';

class FormValidator {
    constructor(formSelector, config) {
        this._formSelector = formSelector;
        this._formElement = document.querySelector(formSelector);
        this._inputSelector = config.inputSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClassStyle = config.inputErrorClassStyle;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClas;        
        this._submitButtonSelector = config.submitButtonSelector;
}

_showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClassStyle);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
};

_hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClassStyle);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
};

_getErrorMessage(inputElement){
    return inputElement.validationMessage;
};

_checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = this._getErrorMessage(inputElement);
        this._showInputError(inputElement, errorMessage);
    } else {
        this._hideInputError(inputElement);
    }
};


_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

_toggleButtonState(inputList, buttonElement){
    if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
    } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
    }
}; 

_setEventListeners(){
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        });
    });
    this._toggleButtonState(inputList, buttonElement);
}; 


enableValidation = () => {
    const submitFormHandler = (event) => {
        event.preventDefault();
    };
    this._formElement.addEventListener("submit", submitFormHandler);
    this._setEventListeners();
    };
}

export default FormValidator;

