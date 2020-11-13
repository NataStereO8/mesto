
import {initialCards, config} from './config.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

console.log(initialCards);

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

const cardsList = new Section( {
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.card-element', handleImageClick);
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
        }
    }, config.elementsList);

cardsList.renderItems();


const userInfo = new UserInfo(config.profileNameEdit, config.profileInfoEdit);
console.log(userInfo.getUserInfo());


const popupWithAddForm = new PopupWithForm( 
    config.popupAdd, 
    config.popupFormAdd,
    (item) => {
        const card = new Card(item, '.card-element', handleImageClick);
        const cardElement = card.generateCard();
        cardsList.addNewItem(cardElement);
    });

const popupWithEditForm = new PopupWithForm( 
    config.popupEdit, 
    config.popupFormEdit,
    () => {
        userInfo.setUserInfo(name, info);

    });


function handleImageClick( name, link) {
    const popupImg = document.querySelector('.popup_img');
    const imagePopup = new PopupWithImage( popupImg, name, link );
    imagePopup.setEventListeners();
    imagePopup.open();
}

// function handleFormAddSubmit(evt) {
//     evt.preventDefault();
//     renderer: (item) => {
//         const card = new Card(item, '.card-element', handleImageClick);
//         const cardElement = card.generateCard();
//         cardsList.prepend(cardElement);
//         };
// }

// function handleFormEditSubmit(evt) {
//     evt.preventDefault(); 
//     userInfo.setUserInfo( {
//         name: config.nameInputEdit,
//         info: config.infoInputEdit
//     });
//     console.log(name, info);
// }



// setListnersToCloseByOverlay();


// config.popupFormEdit.addEventListener('submit', handleFormEditSubmit);
// config.popupFormAdd.addEventListener('submit', handleFormAddSubmit);


config.openAddFormButton.addEventListener('click', () => {
    popupWithAddForm.setEventListeners();
    popupWithAddForm.open();
});

config.openEditFormButton.addEventListener('click', () => {
    popupWithEditForm.setEventListeners();
    popupWithEditForm.open();
});










//Созданеи карточки и добавление на старницу
// function createCard(item) {
//     const card = new Card(item, '.card-element', handleImageClick);
//     const cardElement = card.generateCard();
//     return cardElement;
// }

// function render(){
//     initialCards.forEach((item) => {
//         config.elementsList.append(createCard(item));
//     });
// }

// render();


// const closeOnEsc = (event) => {
//     if (event.key === "Escape") {
//         const openedPopup = document.querySelector('.popup_opened')
//         closePopup(openedPopup)
//     };
// }

// function openPopup(popupElement) {
//     popupElement.classList.add('popup_opened');
//     document.addEventListener('keydown', closeOnEsc);
// }

// function closePopup(popupElement) {
//     popupElement.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeOnEsc);
// }

// function closeOnOverlay(evt,popups) {
//     if (evt.target.classList.contains('popup_opened')) {
//         closePopup(popups);
//     }; 
// }


// function setListnersToCloseByOverlay() {
//     const popupList = Array.from(config.popups);
//     popupList.forEach((element) => {
//         element.addEventListener('mousedown', function(evt) {
//             closeOnOverlay(evt,element);
//             });
//         });
// }




