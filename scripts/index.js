
import {initialCards, config} from './config.js';
import Card from './card.js';
import FormValidator from './formValidator.js';

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

function closeOnOverlay(evt,popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
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
    const popupList = Array.from(document.querySelectorAll('.popup'));
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
    item.name = config.nameInputAdd.value;
    item.link = config.infoInputAdd.value;
    const card = new Card(item, '.card-element', handleImageClick);
    const cardElement = card.generateCard();
    config.elementsList.prepend(cardElement);
    closePopup(config.popupAdd);
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();  
    config.profileNameEdit.textContent = config.nameInputEdit.value;
    config.profileInfoEdit.textContent = config.infoInputEdit.value;
    console.log(config.profileNameEdit.textContent);
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




