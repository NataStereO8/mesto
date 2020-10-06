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

const templateElement = document.querySelector('.card-element').content;
const elementsList = document.querySelector('.elements__list'); 

const openEditFormButton = document.querySelector('.profile__edit-button');
const openAddFormButton = document.querySelector('.profile__add-button');

const popup = document.querySelectorAll('.popup');
const popupImg = document.querySelector('.popup_img');
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');

const closeAddFormButton = document.querySelector('.popup__close-button_add');
const closeEditFormButton = document.querySelector('.popup__close-button_edit');
const closeImgButton = document.querySelector('.popup__close-button_img');

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

const add = 'add';
const edit = 'edit';
const img = 'img';


function openPopupForm(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
}

function closePopupForm(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEsc);
}

function cleanInputs(form) {
    const inputList = Array.from(form.querySelectorAll(params.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.value = '';
    });
};

// const closeOnEsc = (event) => {
//     const popupList = Array.from(document.querySelectorAll('.popup'));
//     popupList.forEach((element) => {
//         if (element.classList.contains('popup_opened')) {
//             if (event.key === "Escape") {
//                 closePopupForm(element);
//             };
//         };
//     });
// }

const closeOnEsc = (event) => {
    if (event.key === "Escape") {
        popup.forEach((element) =>{
            if (element.classList.contains('popup_opened')) {
                closePopupForm(element);
            };
        });
    };
}

function closeOnOverlay(evt,popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopupForm(popup);
    }; 
}

function setListnersToCloseByOverlay() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach((element) => {
        element.addEventListener('mousedown', function(evt) {
            closeOnOverlay(evt,element);
            });
        });
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
        openPopupForm(popupImg);
    });
    elementLike.addEventListener('click', function liked() {
        elementLike.classList.toggle('element__like-button_active')});
    trashButton.addEventListener('click', function deleteElem(event){
        event.target.parentNode.remove(event)});
    return cardElement;
}

function renderCard(card){
    elementsList.append(createCard(card));
}

function addCard(card){
    elementsList.prepend(createCard(card));
}

function render(){
    initialCards.forEach(renderCard);
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();  
    profileNameEdit.textContent = nameInputEdit.value;
    profileInfoEdit.textContent = infoInputEdit.value;
    closePopupForm(popupEdit);
}

function handleFormAddSubmit(evt) {
    evt.preventDefault();
    const card = [{
        name: nameInputAdd.value,
        link: infoInputAdd.value,
    }];
    card.name = nameInputAdd.value;
    card.link = infoInputAdd.value;
    addCard(card);
    closePopupForm(popupAdd);
}

render();

popupFormEdit.addEventListener('submit', handleFormEditSubmit);
popupFormAdd.addEventListener('submit', handleFormAddSubmit);

openAddFormButton.addEventListener('click', function open() {
    cleanInputs(popupFormAdd);
    openPopupForm(popupAdd);
});
    
openEditFormButton.addEventListener('click', function open() {
    nameInputEdit.value = profileNameEdit.textContent;
    infoInputEdit.value = profileInfoEdit.textContent;
    openPopupForm(popupEdit);
});

closeAddFormButton.addEventListener('click', function close() {
    closePopupForm(popupAdd);
});
    
closeEditFormButton.addEventListener('click', function close() {
    closePopupForm(popupEdit);
});

closeImgButton.addEventListener('click', function close() {
    closePopupForm(popupImg);
});

setListnersToCloseByOverlay();
