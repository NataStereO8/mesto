

import { config} from './scripts/config.js';
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Api from './scripts/Api.js';
import './index.css';

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);

const api = new Api({
    headers: {"Content-Type" : "application/json",
    authorization: 'd4a20ab5-6a24-4061-8e1d-6f5e8bc9d229'},
    url: 'https://mesto.nomoreparties.co/v1/cohort-17/cards'
})


api.getInitialCards().then((data) => {
    const items = data.map(card => {
        return {
            name: card.name,
            link: card.link
        }
    });
    const cardsList = new Section( {
        data: items,
        renderer: (item) => {
            const card = new Card(item, '.card-element', 
                (name, link) => {
                const imagePopup = new PopupWithImage( config.popupImg, name, link );
                imagePopup.setEventListeners();
                imagePopup.open();
            });
            const cardElement = card.generateCard();
            cardsList.addNewItem(cardElement);
            }
    }, config.elementsList);
    cardsList.renderItems();
})

const userInfo = new UserInfo(config.profileNameEdit, config.profileInfoEdit, config.profileAvatar);

// api.createCard(name,link).then((data) => {

// });
    const popupWithAddForm = new PopupWithForm( 
        config.popupAdd, 
        config.popupFormAdd,
        (item) => {
            const card = new Card(item, '.card-element', 
                    (name, link) => {
                    const imagePopup = new PopupWithImage( config.popupImg, name, link );
                    imagePopup.setEventListeners();
                    imagePopup.open();
                });
                const cardElement = card.generateCard();
                cardsList.addNewItem(cardElement);
        });

        
// const popupWithAddForm = new PopupWithForm( 
//     config.popupAdd, 
//     config.popupFormAdd,
//     (item) => {
//         const card = new Card(item, '.card-element', 
//                 (name, link) => {
//                 const imagePopup = new PopupWithImage( config.popupImg, name, link );
//                 imagePopup.setEventListeners();
//                 imagePopup.open();
//             });
//             const cardElement = card.generateCard();
//             cardsList.addNewItem(cardElement);
//     });

const popupWithEditForm = new PopupWithForm( 
    config.popupEdit, 
    config.popupFormEdit,
    () => {
        userInfo.setUserInfo(config.nameInputEdit, config.infoInputEdit);
    });


// function createCard(item) {
//     const card = new Card(item, '.card-element', 
//         (name, link) => {
//             const imagePopup = new PopupWithImage( config.popupImg, name, link );
//             imagePopup.setEventListeners();
//             imagePopup.open();
//         });
//         const cardElement = card.generateCard();
//         cardsList.addNewItem(cardElement);
// }


formEditValidator.enableValidation();
formAddValidator.enableValidation();


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







