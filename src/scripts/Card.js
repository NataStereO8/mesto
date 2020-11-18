
export default class Card {
    constructor(data, selector, owner, handleImageClick, handleDeleteCard ) {
        this._selector = selector;
        this._card = data;
        this._name = data.name;
        this._link = data.link;
        this.cardId = data._id;
        this.likes = data.likes;
        this.ownerId = owner._id;
        this._handleImageClick = handleImageClick; 
        this._handleDeleteCard = handleDeleteCard;

    } 
    _getTemplate(){
        return document.querySelector(this._selector).content.cloneNode(true).children[0];
    }
    _deleteElem() {
        this._this._handleDeleteCard(this._card);
    }
    _like(){
        this._element.querySelector('.element__like-icon').classList.toggle('element__like-icon_active');
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
        // this._element = document.querySelector('.element__trash-button');
        if (this.ownerId === this.cardId) { 
            this._element.querySelector('.element__trash-button').classList.add('element__trash-button_visible');
        }
        this._setEventListeners();
        return this._element;
    }
}
