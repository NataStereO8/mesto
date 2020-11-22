

import {config} from '../components/config.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithAvatar from '../components/PopupWithAvatar.js';
import Api from '../components/Api.js';
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
                const imagePopup = new PopupWithImage(config.popupImg);
                imagePopup.setEventListeners();
                imagePopup.open(item.name, item.link);
                console.log(imagePopup);
            },
            (card) => {
                popupWithConfirm.open();
                popupWithConfirm.setSubmit(() => {
                    const cardId = card.id();
                    popupWithConfirm.changeButton(true);
                    api.deleteCard(cardId)
                    .then(() => {
                        card.delete();
                        popupWithConfirm.close();
                    })
                    .catch((error) => console.log(error))
                    .finally(() => popupWithConfirm.changeButton(false));
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
        popupWithAddForm.changeButton(true);
        api.createCard(data)
        .then((cardData) => {
            cardList.addNewItem(createCard(cardData, userId));
            popupWithAddForm.close();
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithAddForm.changeButton(false))
    });

const popupWithEditForm = new PopupWithForm( 
    config.popupEdit, 
    config.popupFormEdit,
    (data) => {
        popupWithEditForm.changeButton(true);
        api.setPersonalInfo({
            name: data.name, 
            about: data.link
        })
        .then((userData) => {
            userInfo.setUserInfo(userData.name, userData.about);
            popupWithEditForm.close();
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithEditForm.changeButton(false))
    });

const popupWithAvatar = new PopupWithAvatar(
    config.popupAvatar,
    config.popupFormAvatar,
    (data) => {
        popupWithAvatar.changeButton(true);
        api.setAvatarInfo({
            avatar: data.link
        })
        .then((userData) => {
            userInfo.setUserAvatar(userData.avatar);
            popupWithAvatar.close();
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithAvatar.changeButton(false));
    });



formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();

popupWithAddForm.setEventListeners();
popupWithAvatar.setEventListeners();
popupWithEditForm.setEventListeners();

config.openAddFormButton.addEventListener('click', () => {
    popupWithAddForm.open();
});

config.openEditFormButton.addEventListener('click', () => {
    config.nameInputEdit.value = userInfo.getUserInfo().name;
    config.infoInputEdit.value = userInfo.getUserInfo().info;
    popupWithEditForm.open();
});


config.openAvatarFormButton.addEventListener('click', () => {
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









