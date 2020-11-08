export const initialCards = [
    {
        name: 'Солнечные противоположности',
        link: './images/solar-opposites.png'
    },
    {
        name: 'Стар против сил зла',
        link: './images/star-vs-the-forces-of-evil.png'
    },
    {
        name: 'Пираты-бездельники',
        link: './images/the-pirates-in-an-adventure-with-scientists.png'
    },
    {
        name: 'PONY.MOV',
        link: './images/pony.mov.png'
    },
    {
        name: 'Гравити Фолз',
        link: './images/gravity-falls.png'
    },
    {
        name: 'Рик и Морти',
        link: './images/rick&morty.png'
    }
];

export const config = {
    templateElement: document.querySelector('.card-element').content,
    elementsList: document.querySelector('.elements__list'),

    openEditFormButton: document.querySelector('.profile__edit-button'),
    openAddFormButton: document.querySelector('.profile__add-button'),

    popup: document.querySelector('.popup'),
    popupImg: document.querySelector('.popup_img'),
    popupAdd: document.querySelector('.popup_add'),
    popupEdit: document.querySelector('.popup_edit'),
    popupContainer: document.querySelector('.popup_container'),

    closeAddFormButton: document.querySelector('.popup__close-button_add'),
    closeEditFormButton: document.querySelector('.popup__close-button_edit'),
    closeImgButton: document.querySelector('.popup__close-button_img'),

    popupForm: document.querySelector('.popup__form'),
    popupFormAdd: document.querySelector('.popup__form_add'),
    popupFormEdit: document.querySelector('.popup__form_edit'),
    popupPic: document.querySelector('.popup__pic'),
    popupText: document.querySelector('.popup__text'),

    nameInputEdit: document.querySelector('.popup__input_name_edit'),
    infoInputEdit: document.querySelector('.popup__input_info_edit'),
    profileNameEdit: document.querySelector('.profile__title'),
    profileInfoEdit: document.querySelector('.profile__subtitle'),
    nameInputAdd: document.querySelector('.popup__input_name_add'), 
    infoInputAdd: document.querySelector('.popup__input_info_add'),

    add:  'add',
    edit: 'edit',
    img:  'img',

    formSelector: '.popup__form', //выбранная форма
    inputSelector: '.popup__input', //выбранный инпут
    submitButtonSelector: '.popup__save-button', //выбранная кнопка на форме
    inactiveButtonClass: 'popup__save-button_disabled', //неактивная кнопка на форме
    inputErrorClassStyle: 'popup__input_error', //внешний вид невалидных полей
    inputErrorClass: '.popup__error', //текст ошибки
    errorClass: 'popup__error_visible',  //флаг на текст ошибки 
    formEditSelector: '.popup_edit',
    formAddSelector: '.popup_add'
}