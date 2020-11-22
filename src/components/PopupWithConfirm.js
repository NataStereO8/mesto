import PopupWithForm from './PopupWithForm.js';
export default class PopupWithConfirm extends PopupWithForm {
    constructor(popup, popupForm) {
        super(popup);
        this._popupForm = popupForm;
    }
    setSubmit(deleteCard){
        this.handleFormSubmit = deleteCard;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.querySelector('.popup__save-button_confirm').addEventListener("click", (evt) => {
            evt.preventDefault();
            this.handleFormSubmit();
        }); 
    }
}