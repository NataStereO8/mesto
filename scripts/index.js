
import {initialCards, config} from './config.js';
import Card from './card.js';
import FormValidator from './formValidator.js';

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);

const closeOnEsc = (event) => {
    if (event.key === "Escape") {
        const popupList = Array.from(document.querySelectorAll('.popup'));
        popupList.forEach((element) => {
            if (element.classList.contains('popup_opened')) {
                closePopupForm(element);
            };
        });
    };
}

function openPopupForm(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
}

function closePopupForm(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEsc);
}

function closeOnOverlay(evt,popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopupForm(popup);
    }; 
}

function cleanInputs(form) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.value = '';
    });
};

function setListnersToCloseByOverlay() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach((element) => {
        element.addEventListener('mousedown', function(evt) {
            closeOnOverlay(evt,element);
            });
        });
}

function handleFormAddSubmit(evt) {
    evt.preventDefault();
    const item = [{
        name: config.nameInputAdd.value,
        link: config.infoInputAdd.value
    }];
    console.log(item);
    item.name = config.nameInputAdd.value;
    item.link = config.infoInputAdd.value;
    const card = new Card(item, '.card-element');
    const cardElement = card.generateCard();
    config.elementsList.prepend(cardElement);
    closePopupForm(config.popupAdd);
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();  
    config.profileNameEdit.textContent = config.nameInputEdit.value;
    config.profileInfoEdit.textContent = config.infoInputEdit.value;
    console.log(config.profileNameEdit.textContent);
    closePopupForm(config.popupEdit);
}

function render(){
    initialCards.forEach((item) => {
        const card = new Card(item, '.card-element');
        const cardElement = card.generateCard();
        config.elementsList.append(cardElement);
    });
}
render();

setListnersToCloseByOverlay();

formEditValidator.enableValidation();
formAddValidator.enableValidation();

config.popupFormEdit.addEventListener('submit', handleFormEditSubmit);
config.popupFormAdd.addEventListener('submit', handleFormAddSubmit);


config.openAddFormButton.addEventListener('click', function open() {
    cleanInputs(config.popupFormAdd);
    openPopupForm(config.popupAdd);});

config.openEditFormButton.addEventListener('click', function open() {
    openPopupForm(config.popupEdit);});

config.closeAddFormButton.addEventListener('click', function close() {
    closePopupForm(config.popupAdd);});
    
config.closeEditFormButton.addEventListener('click', function close() {
    closePopupForm(config.popupEdit);});


