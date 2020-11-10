
import {initialCards, config} from './config.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);

const closeOnEsc = (event) => {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    };
}

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEsc);
}

function closeOnOverlay(evt,popups) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popups);
    }; 
}

function createCard(item) {
    const card = new Card(item, '.card-element', handleImageClick);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleImageClick(name, link) {
    config.popupPic.setAttribute("src", link);
    config.popupText.textContent = name;
    openPopup(config.popupImg);
}

function setListnersToCloseByOverlay() {
    const popupList = Array.from(config.popups);
    popupList.forEach((element) => {
        element.addEventListener('mousedown', function(evt) {
            closeOnOverlay(evt,element);
            });
        });
}

function handleFormAddSubmit(evt) {
    evt.preventDefault();
    const item = {
        name: config.nameInputAdd.value,
        link: config.infoInputAdd.value
    };
    config.elementsList.prepend(createCard(item));
    closePopup(config.popupAdd);
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();  
    config.profileNameEdit.textContent = config.nameInputEdit.value;
    config.profileInfoEdit.textContent = config.infoInputEdit.value;
    closePopup(config.popupEdit);
}

function render(){
    initialCards.forEach((item) => {
        config.elementsList.append(createCard(item));
    });
}

render();

setListnersToCloseByOverlay();

formEditValidator.enableValidation();
formAddValidator.enableValidation();

config.popupFormEdit.addEventListener('submit', handleFormEditSubmit);
config.popupFormAdd.addEventListener('submit', handleFormAddSubmit);


config.openAddFormButton.addEventListener('click', function () {
    config.popupFormAdd.reset();
    openPopup(config.popupAdd);});

config.openEditFormButton.addEventListener('click', function () {
    openPopup(config.popupEdit);});

config.closeAddFormButton.addEventListener('click', function () {
    closePopup(config.popupAdd);});
    
config.closeEditFormButton.addEventListener('click', function () {
    closePopup(config.popupEdit);});

config.closeImgButton.addEventListener('click', function () {
    closePopup(config.popupImg);});




