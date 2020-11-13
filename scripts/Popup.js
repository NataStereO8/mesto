export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._popups = document.querySelectorAll('.popup');
        this._closeBtns = document.querySelectorAll('.popup__close-button');
    } 
    
    _handleEscClose(event){
        if (event.key === "Escape") {
            this.close();
        };
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
            // if (event.target.classList !== event.currentTarget) {
            //     this.close();
        };
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }

    setEventListeners() {
        const closeBtnList = Array.from(this._closeBtns);
        closeBtnList.forEach((element) => {
            element.addEventListener('click', () => this.close());
        });

        const popupList = Array.from(this._popups);
        popupList.forEach((element) => {
            element.addEventListener('mousedown', function(evt) {
            this._handleOverlayClose(evt);
            });
        });
    }
}
