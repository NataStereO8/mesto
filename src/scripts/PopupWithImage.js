import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
constructor( popup, name, link) {
    super(popup);
    this._name = name;
    this._link = link;
}

    open() {
        super.open();
        this._popup.querySelector('.popup__pic').src = this._link;
        this._popup.querySelector('.popup__pic').alt = this._name;
        this._popup.querySelector('.popup__text').textContent = this._name;
    }
    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}