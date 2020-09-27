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

let templateElement = document.querySelector('.element_item').content; //переменная для шаблона
let elementsList = document.querySelector('.elements__list'); //инициализируем список с карточками
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup-add');
let popupEdit = document.querySelector('.popup-edit');
let popupImg = document.querySelector('.popup-img');
let crossButtonImg = document.querySelector('.popup-img__cross-button');
let crossButtonAdd = document.querySelector('.popup-add__cross-button');
let saveButtonAdd = document.querySelector('.popup-add__save-button');
let popupFormAdd = document.querySelector('.popup-add__form');
let crossButtonEdit = document.querySelector('.popup-edit__cross-button');
let saveButtonEdit= document.querySelector('.popup-edit__save-button');
let popupFormEdit = document.querySelector('.popup-edit__form');
let popupImgPhoto = document.querySelector('.popup-img__img');
let popupImgText = document.querySelector('.popup-img__text');



function openPopupAdd() {
    popupAdd.classList.add('popup-add_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup-add_opened');
}

function openPopupEdit() {
    popupEdit.classList.add('popup-edit_opened');
}

function closePopupEdit() {
    popupEdit.classList.remove('popup-edit_opened');
}

function openPopupImg() {
    popupImg.classList.add('popup-img_opened');
}

function closePopupImg() {
    popupImg.classList.remove('popup-img_opened');
}


function render(){
    elementsList.innerHTML = '';
    initialCards.forEach(renderItem);
}

function renderItem(card){
    const htmlElement = templateElement.cloneNode(true);
    htmlElement.querySelector('.element__photo').src = card.link;
    htmlElement.querySelector('.element__title').textContent = card.name;
    htmlElement.querySelector('.element__photo').alt = card.name;
    const element = htmlElement.querySelector('.element');
    const elementPhoto = element.querySelector('.element__photo');
    elementPhoto.addEventListener('click', function openPopupImg() {
        popupImgPhoto.setAttribute("src", card.link);
        popupImgText.textContent = card.name;
        popupImg.classList.add('popup-img_opened')});
    crossButtonImg.addEventListener('click', function closePopupImg() {
        popupImg.classList.remove('popup-img_opened')});
    const elementLike = element.querySelector('.element__like-button');
    elementLike.addEventListener('click', function liked() {
        elementLike.classList.toggle('element__like-button_active')});
    elementsList.prepend(htmlElement);
    const trashButton = element.querySelector('.element__trash-button');
    trashButton.addEventListener('click', function deleteElem(evt){
        evt.target.parentNode.parentNode.remove(evt);
    })
}

render();


function openImg(){
    const htmlElement = templateElement.cloneNode(true);
    const element = htmlElement.querySelector('.element');
    const elementPhoto = element.querySelector('.element__photo');
    const elementText = element.querySelector('.element__title');
    crossButtonImg.addEventListener('click', function closePopupImg() {
        popupImg.classList.remove('popup-img_opened')});
}

openImg();

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerEdit (evt) {
    evt.preventDefault();
    // Находим поля формы в DOM
    let nameInput = popupFormEdit.querySelector('.popup-edit__input_name'); // Воспользуйтесь инструментом .querySelector()
    let infoInput = popupFormEdit.querySelector('.popup-edit__input_info'); // Воспользуйтесь инструментом .querySelector()
    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__title');
    let profileJob = document.querySelector('.profile__subtitle');   
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = infoInput.value;
}

function formSubmitHandlerAdd (evt) {
    evt.preventDefault();
    const htmlElement = templateElement.cloneNode(true);
    let nameInput = popupFormAdd.querySelector('.popup-add__input_name'); 
    console.log(nameInput.value);// Воспользуйтесь инструментом .querySelector()
    let infoInput = popupFormAdd.querySelector('.popup-add__input_info');
    console.log(infoInput.value);
    htmlElement.querySelector('.element__title').textContent = nameInput.value;
    htmlElement.querySelector('.element__photo').src = infoInput.value;
    const elementPhoto = htmlElement.querySelector('.element__photo');
    elementPhoto.addEventListener('click', function openPopupImg() {
        popupImgPhoto.setAttribute("src", infoInput.value);
        popupImgText.textContent = nameInput.value;
        popupImg.classList.add('popup-img_opened')});
    crossButtonImg.addEventListener('click', function closePopupImg() {
        popupImg.classList.remove('popup-img_opened')});
    elementsList.prepend(htmlElement);
    console.log(htmlElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupFormEdit.addEventListener('submit', formSubmitHandlerEdit);
popupFormAdd.addEventListener('submit', formSubmitHandlerAdd);

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);

crossButtonEdit.addEventListener('click', closePopupEdit);
saveButtonEdit.addEventListener('click', closePopupEdit);

crossButtonAdd.addEventListener('click', closePopupAdd);
saveButtonAdd.addEventListener('click', closePopupAdd);