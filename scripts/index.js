
import {initialCards, config} from './config.js';
import Card from './card.js';
import FormValidator from './formValidator.js';

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);

function openPopupForm(popupElement) {
    popupElement.classList.add('popup_opened');}

function closePopupForm(popupElement) {
    popupElement.classList.remove('popup_opened');}

function closeOnEsc(evt, popup) {
    if (evt.keyCode === 27) {
        closePopupForm(popup);};}

function closeOnOverlay(evt,popup,suf) {
    if (evt.target.className === `popup popup_${suf} popup_opened`) {
        closePopupForm(popup);} 
}

function cleanInputs(form) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.value = '';
    });
};

function handleFormAddSubmit(evt) {
    evt.preventDefault();
    const item = [{
        name: config.nameInputAdd.value,
        link: config.infoInputAdd.value,
    }];
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




document.addEventListener('keydown', function(evt) {
    closeOnEsc(evt, config.popupAdd);
    closeOnEsc(evt, config.popupEdit);
    closeOnEsc(evt, config.popupImg)
})
document.addEventListener('click', function(evt) {
    closeOnOverlay(evt,config.popupAdd, config.add);
    closeOnOverlay(evt,config.popupEdit, config.edit);
    closeOnOverlay(evt,config.popupImg, config.img);
});