import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
constructor( popup, name, link) {
    super(popup);
    this._popup.querySelector('.popup__pic').src = link;
    this._popup.querySelector('.popup__pic').alt = name;
    this._popup.querySelector('.popup__text').textContent = name;
}

    open() {
        super.open();
    }
    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}