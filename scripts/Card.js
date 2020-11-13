
export default class Card {
    constructor(data, selector, handleImageClick ) {
        this._selector = selector;
        this._name = data.name;
        this._link = data.link;
        this._handleImageClick = handleImageClick; 
    } 
    _getTemplate(){
        return document.querySelector(this._selector).content.cloneNode(true).children[0];
    }
    _deleteElem() {
        this._element.remove();
    }
    _like(){
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }
    
    _openImg(){
        this._handleImageClick(this._name, this._link);
    }

    _setEventListeners() {
        this._element.querySelector('.element__trash-button').addEventListener('click', ()=>this._deleteElem());
        this._element.querySelector('.element__like-button').addEventListener('click', ()=>this._like());
        this._element.querySelector('.element__photo').addEventListener('click', ()=>this._openImg());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.element__photo')
        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
}
