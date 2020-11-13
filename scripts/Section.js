export default class Section {
    constructor({data, renderer}, containerSelector ) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    } 
    
    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(cardElement) {
        this._containerSelector.append(cardElement);
    }

    addNewItem(cardElement) {
        this._containerSelector.prepend(cardElement);
    }
}
