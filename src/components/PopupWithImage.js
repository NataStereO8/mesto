import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
constructor( popup ) {
    super(popup);
    this._popupPic = this._popup.querySelector('.popup__pic');
    this._popupText = this._popup.querySelector('.popup__text'); 
}

    open(name, link) {
        super.open();
        this._popupPic.src = link;
        this._popupPic.alt = name;
        this._popupText.textContent = name;
    }
    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}