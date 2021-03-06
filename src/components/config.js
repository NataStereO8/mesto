export const items = [{}];
export const config = {
    templateElement: document.querySelector('.card-element').content,
    elementsList: document.querySelector('.elements__list'),

    openEditFormButton: document.querySelector('.profile__edit-button'),
    openAddFormButton: document.querySelector('.profile__add-button'),
    openAvatarFormButton: document.querySelector('.profile__avatar-box'),

    popups: document.querySelectorAll('.popup'),
    popupImg: document.querySelector('.popup_img'),
    popupAdd: document.querySelector('.popup_add'),
    popupEdit: document.querySelector('.popup_edit'),
    popupAvatar: document.querySelector('.popup_avatar'),
    popupConfirm: document.querySelector('.popup_confirm'),

    popupContainers: document.querySelectorAll('.popup_container'),
    closeAddFormButton: document.querySelector('.popup__close-button_add'),
    closeEditFormButton: document.querySelector('.popup__close-button_edit'),
    closeImgButton: document.querySelector('.popup__close-button_img'),

    popupForms: document.querySelectorAll('.popup__form'),
    popupFormAdd: document.querySelector('.popup__form_add'),
    popupFormEdit: document.querySelector('.popup__form_edit'),
    popupFormAvatar: document.querySelector('.popup__form_avatar'),
    popupFormConfirm: document.querySelector('.popup__form_confirm'),
    popupPic: document.querySelector('.popup__pic'),
    popupText: document.querySelector('.popup__text'),

    nameInputEdit: document.querySelector('.popup__input_name_edit'),
    infoInputEdit: document.querySelector('.popup__input_info_edit'),
    profileNameEdit: document.querySelector('.profile__title'),
    profileInfoEdit: document.querySelector('.profile__subtitle'),
    profileAvatar: document.querySelector('.profile__avatar'),
    nameInputAdd: document.querySelector('.popup__input_name_add'), 
    infoInputAdd: document.querySelector('.popup__input_info_add'),
    infoInputAvatar: document.querySelector('.popup__input_info_avatar'),

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
    formAddSelector: '.popup_add',
    formAvatarSelector: '.popup_avatar'
}
