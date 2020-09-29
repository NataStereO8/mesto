const initialCards = [
    {
        name: 'Солнечные противоположности',
        link: './images/solar-opposites.png'
    },
    {
        name: 'Стар против сил зла',
        link: './images/star-vs-the-forces-of-evil.png'
    },
    {
        name: 'Пираты-бездельники',
        link: './images/the-pirates-in-an-adventure-with-scientists.png'
    },
    {
        name: 'PONY.MOV',
        link: './images/pony.mov.png'
    },
    {
        name: 'Гравити Фолз',
        link: './images/gravity-falls.png'
    },
    {
        name: 'Рик и Морти',
        link: './images/rick&morty.png'
    }
];

let card = [{
    name: '',
    link: ''
}]

const templateElement = document.querySelector('.element_item').content;
const elementsList = document.querySelector('.elements__list'); 

const openEditButton = document.querySelector('.profile__edit-button');
const openAddButton = document.querySelector('.profile__add-button');

const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup_img');
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');

const closeAddButton = document.querySelector('.popup__cross-button_add');
const closeEditButton = document.querySelector('.popup__cross-button_edit');
const closeImgButton = document.querySelector('.popup__cross-button_img');

const saveAddButton = document.querySelector('.popup__save-button_add');
const saveEditButton = document.querySelector('.popup__save-button_edit');

const popupForm = document.querySelector('.popup__form');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupFormEdit = document.querySelector('.popup__form_edit');
const popupPic = document.querySelector('.popup__pic');
const popupText = document.querySelector('.popup__text');

const nameInputEdit = popupFormEdit.querySelector('.popup__input_name_edit');
const infoInputEdit = popupFormEdit.querySelector('.popup__input_info_edit');
const profileNameEdit = document.querySelector('.profile__title');
const profileInfoEdit = document.querySelector('.profile__subtitle');
const nameInputAdd = popupFormAdd.querySelector('.popup__input_name_add'); 
const infoInputAdd = popupFormAdd.querySelector('.popup__input_info_add');




function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

function render(){
    elementsList.innerHTML = '';
    initialCards.forEach(renderCard);
}

function createCard(card){
    const cardElement = templateElement.cloneNode(true);
    cardElement.querySelector('.element__photo').src = card.link;
    cardElement.querySelector('.element__title').textContent = card.name;
    cardElement.querySelector('.element__photo').alt = card.name;
    const element = cardElement.querySelector('.element');
    const elementPhoto = element.querySelector('.element__photo');
    const elementLike = element.querySelector('.element__like-button');
    const trashButton = element.querySelector('.element__trash-button');
    elementPhoto.addEventListener('click', function openImg() {
        popupPic.setAttribute("src", card.link);
        popupText.textContent = card.name;
        openPopup(popupImg)});
    closeImgButton.addEventListener('click', function close() {
        closePopup(popupImg);});
    elementLike.addEventListener('click', function liked() {
        elementLike.classList.toggle('element__like-button_active')});
    trashButton.addEventListener('click', function deleteElem(evt){
        evt.target.parentNode.parentNode.remove(evt)});
    return cardElement;
}

function renderCard(card){
    elementsList.append(createCard(card));
}

function AddCard(card){
    elementsList.prepend(createCard(card));
}

render();


function handlFormEditSubmit(evt) {
    evt.preventDefault();  
    profileNameEdit.textContent = nameInputEdit.value;
    profileInfoEdit.textContent = infoInputEdit.value;
    closePopup(popupEdit);
}

function handlFormAddSubmit(evt) {
    evt.preventDefault();
    card.name = nameInputAdd.value;
    card.link = infoInputAdd.value;
    createCard(card);
    AddCard(card);
    closePopup(popupAdd);
}


popupFormEdit.addEventListener('submit', handlFormEditSubmit);
popupFormAdd.addEventListener('submit', handlFormAddSubmit);


openAddButton.addEventListener('click', function open() {
    openPopup(popupAdd);});

openEditButton.addEventListener('click', function open() {
    openPopup(popupEdit);});

closeAddButton.addEventListener('click', function close() {
    closePopup(popupAdd);});
    
closeEditButton.addEventListener('click', function close() {
    closePopup(popupEdit);});

