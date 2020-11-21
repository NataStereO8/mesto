import Popup from './Popup.js';
export default class PopupWithAvatar extends Popup {
    constructor(popup, popupForm, handleFormSubmit) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = popupForm;      
    }

    _getInputValue() {
        const inputInfo = this._popupForm.querySelector('.popup__input_info');
        this._formValue = {
            link: inputInfo.value
        };
        return this._formValue;
    }

    open(){
        super.open();
    }
    close(){
        this._popupForm.reset();
        super.close();
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValue());
            this.close();
        }); 
    }
}