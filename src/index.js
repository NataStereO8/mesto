
import {initialCards, config} from './scripts/config.js';
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import './index.css';

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);

const cardsList = new Section( {
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.card-element', 
        (name, link) => {
            const popupImg = document.querySelector('.popup_img');
            const imagePopup = new PopupWithImage( popupImg, name, link );
            imagePopup.setEventListeners();
            imagePopup.open();
        });
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
        }
    }, config.elementsList);

const userInfo = new UserInfo(config.profileNameEdit, config.profileInfoEdit);

const popupWithAddForm = new PopupWithForm( 
    config.popupAdd, 
    config.popupFormAdd,
    (item) => {
        const card = new Card(item, '.card-element', 
        (name, link) => {
            const popupImg = document.querySelector('.popup_img');
            const imagePopup = new PopupWithImage( popupImg, name, link );
            imagePopup.setEventListeners();
            imagePopup.open();
        });
        const cardElement = card.generateCard();
        cardsList.addNewItem(cardElement);
    });

const popupWithEditForm = new PopupWithForm( 
    config.popupEdit, 
    config.popupFormEdit,
    () => {
        userInfo.setUserInfo(config.nameInputEdit, config.infoInputEdit);
    });


// function handleImageClick( name, link) {
//     const popupImg = document.querySelector('.popup_img');
//     const imagePopup = new PopupWithImage( popupImg, name, link );
//     imagePopup.setEventListeners();
//     imagePopup.open();
// }


formEditValidator.enableValidation();
formAddValidator.enableValidation();

cardsList.renderItems();

popupWithAddForm.setEventListeners();
config.openAddFormButton.addEventListener('click', () => {
    popupWithAddForm.open();
});

config.openEditFormButton.addEventListener('click', () => {
    popupWithEditForm.setEventListeners();
    config.nameInputEdit.value = userInfo.getUserInfo().name;
    config.infoInputEdit.value = userInfo.getUserInfo().info;
    console.log(config.nameInputEdit.value, config.infoInputEdit.value);
    popupWithEditForm.open();
});







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




