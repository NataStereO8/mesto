import {initialCards, config} from './config.js';

class Card {
    constructor(data, selector) {
        this._selector = selector;
        this._name = data.name;
        this._link = data.link;
    }   
    _getTemplate(){
        return document.querySelector(this._selector).content.cloneNode(true).children[0];
    }
    _deleteElem() {
        this._element.remove();
    }
    _liked(){
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    _closeOnEsc(event) {
        if (event.key === "Escape") {
            config.popupImg.classList.remove('popup_opened');
        }
    }
    

    _openImg(){
        config.popupPic.setAttribute("src", this._link);
        config.popupText.textContent = this._name;
        document.querySelector('.popup_img').classList.add('popup_opened');
        document.addEventListener('keydown', this._closeOnEsc);
    }
    _closeImg(){
        config.popupImg.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeOnEsc);
    }

    _setEventListeners() {
        this._element.querySelector('.element__trash-button').addEventListener('click', ()=>this._deleteElem());
        this._element.querySelector('.element__like-button').addEventListener('click', ()=>this._liked());
        this._element.querySelector('.element__photo').addEventListener('click', ()=>this._openImg());
        config.popupImg.querySelector('.popup__close-button_img').addEventListener('click', ()=>this._closeImg());
        
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').alt = this._name;
        return this._element;
        }
}

export default Card;