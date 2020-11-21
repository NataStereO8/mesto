

import {config} from './scripts/config.js';
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithConfirm from './scripts/PopupWithConfirm.js';
import PopupWithAvatar from './scripts/PopupWithAvatar.js';
import Api from './scripts/Api.js';
import './index.css';

const formEditValidator = new FormValidator(config.formEditSelector, config);
const formAddValidator = new FormValidator(config.formAddSelector, config);
const formAvatarValidator = new FormValidator(config.formAvatarSelector, config);

const api = new Api({
    headers: {"Content-Type" : "application/json",
    authorization: 'd4a20ab5-6a24-4061-8e1d-6f5e8bc9d229'},
    url: 'https://mesto.nomoreparties.co/v1/cohort-17'
})



const popupWithConfirm = new PopupWithConfirm(config.popupConfirm, config.popupFormConfirm);
popupWithConfirm.setEventListeners();

const createCard = (item, userId) => {
        const card = new Card(item, '.card-element', item.owner, userId,
            () => {
                const imagePopup = new PopupWithImage( config.popupImg, item.name, item.link);
                imagePopup.setEventListeners();
                imagePopup.open();
            },
            (card) => {
                popupWithConfirm.open();
                popupWithConfirm.setSubmit(() =>{
                    const cardId = card.id();
                    api.deleteCard(cardId)
                    .then(() => {
                        card.delete();
                        popupWithConfirm.close();
                    })
                    .catch((error) => console.log(error))
                });
            },
            (cardId) => {
                api.checkLikes(cardId, !card.isLiked())
                .then(data => {
                    console.log(data);
                    card.updateLikes(data);
                    console.log(card);
                })
                .catch((err) => console.log(err))
            });
        return card.generateCard();
};

const cardList = new Section({ renderer: (data) => { cardList.addItem(createCard(data, userId));}}, config.elementsList);

const userInfo = new UserInfo(config.profileNameEdit, config.profileInfoEdit, config.profileAvatar);

const popupWithAddForm = new PopupWithForm( 
    config.popupAdd, 
    config.popupFormAdd,
    (data) => {
        api.createCard(data)
        .then((cardData) => {
            cardList.addNewItem(createCard(cardData, userId));
        })
        .catch((err) => console.log(err));
    });

const popupWithEditForm = new PopupWithForm( 
    config.popupEdit, 
    config.popupFormEdit,
    (data) => {
        api.setPersonalInfo({
            name: data.name, 
            about: data.link
        })
        .then((userData) => {
            userInfo.setUserInfo(userData.name, userData.about);
        })
        .catch((err) => console.log(err));
    });

const popupWithAvatar = new PopupWithAvatar(
    config.popupAvatar,
    config.popupFormAvatar,
    (data) => {
        api.setAvatarInfo({
            avatar: data.link
        })
        .then((userData) => {
            userInfo.setUserAvatar(userData.avatar);
            console.log(userData.avatar);
        })
        .catch((err) => console.log(err));
    });



formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();

popupWithAddForm.setEventListeners();

config.openAddFormButton.addEventListener('click', () => {
    popupWithAddForm.open();
});

config.openEditFormButton.addEventListener('click', () => {
    popupWithEditForm.setEventListeners();
    config.nameInputEdit.value = userInfo.getUserInfo().name;
    config.infoInputEdit.value = userInfo.getUserInfo().info;
    popupWithEditForm.open();
});


config.openAvatarFormButton.addEventListener('click', () => {
    popupWithAvatar.setEventListeners();
    popupWithAvatar.open();
});

let userId = null;

Promise.all([api.getInitialCards(), api.getPersonalInfo()])
    .then(([cards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo( userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    cardList.renderItems(cards);
    console.log(cards);
    })
    .catch(err => console.log(`Ошибка загрузки данных тут: ${err}`))









