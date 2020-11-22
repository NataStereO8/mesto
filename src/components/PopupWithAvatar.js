import PopupWithForm from './PopupWithForm.js';
export default class PopupWithAvatar extends PopupWithForm {
    
    _getInputValues() {
        const inputInfo = this._popupForm.querySelector('.popup__input_info');
        this._formValue = {
            link: inputInfo.value
        };
        return this._formValue;
    }
}