    import Popup from './Popup.js';

    export default class PopupWithForm extends Popup {
    constructor(popup, popupForm, handleFormSubmit) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = popupForm;
        this._submitButton = this._popup.querySelector('.popup__save-button');
        this._submitButtonDefault = this._submitButton.textContent;
    }

    _getInputValues() {
        const inputName = this._popupForm.querySelector('.popup__input_name');
        const inputInfo = this._popupForm.querySelector('.popup__input_info');
        this._formValues = {
            name: inputName.value,
            link: inputInfo.value
        };
        return this._formValues;
    }

    open() {
        super.open();
    }

    close(){
        this._popupForm.reset();
        super.close();      
    }

    changeButton(flag){
        this._submitButton.innerText = flag ? 'Пара минут и готово!' : this._submitButtonDefault;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        }); 
    }
}