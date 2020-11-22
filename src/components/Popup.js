export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._closeBtn = popup.querySelector('.popup__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
    } 
    
    _handleEscClose(event){
        if (event.key === "Escape") {
            this.close();
        };
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        };
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {

        this._closeBtn.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('mousedown', (event) => {
            this._handleOverlayClose(event);
        });

    }
}
