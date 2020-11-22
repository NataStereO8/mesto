
export default class Card {
    constructor(data, selector, owner, userId, handleImageClick, handleDeleteClick, handleLikeClick ) {
        this._selector = selector;
        this._card = data;
        this._name = data.name;
        this._link = data.link;
        this.userId = userId;
        this.cardId = data._id;
        this.likes = data.likes;
        this.owner = owner; 
        this.handleImageClick = handleImageClick; 
        this.handleDeleteClick = handleDeleteClick;
        this.handleLikeClick = handleLikeClick;
    } 
    _getTemplate(){
        return document.querySelector(this._selector).content.cloneNode(true).children[0];
    }

    delete() {
        this._element.remove();
        this._element = null;
    }

    isLiked() {
        return !!(this.likes.find((like) => like._id === this.userId));
    }
    

    _like() {
        this._element.querySelector('.element__like-counter').textContent = this.likes.length;
        if (this.isLiked()) {
            this._element.querySelector('.element__like-icon').classList.add('element__like-icon_active');
        }
        else 
            {this._element.querySelector('.element__like-icon').classList.remove('element__like-icon_active');
        };
    }

    updateLikes(data){
        this.likes = data.likes;
        this._like();
    }

    _openImg(){
        this.handleImageClick(this._name, this._link);
    }

    _setEventListeners() {
        this._element.querySelector('.element__trash-button').addEventListener('click', ()=> this.handleDeleteClick(this));
        this._element.querySelector('.element__like-button').addEventListener('click', ()=> this.handleLikeClick(this.cardId));
        this._element.querySelector('.element__photo').addEventListener('click', ()=>this._openImg());

    }

    id() {
        return this.cardId;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.element__photo')
        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.id = this.cardId;
        if (this.userId === this.owner._id) { 
            this._element.querySelector('.element__trash-button').classList.add('element__trash-button_visible');
        };
        // console.log(this.userId, this.owner._id);
        this._setEventListeners();
        this._like();
        return this._element;
    }
}
