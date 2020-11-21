import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
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