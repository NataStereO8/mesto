let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let profileAddButton = profile.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupSaveButton = popup.querySelector('.popup__save-button');
let nameInput = popupForm.querySelector('.popup__input_text-name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = popupForm.querySelector('.popup__input_text-job'); // Воспользуйтесь инструментом .querySelector()
let profileName = profile.querySelector('.profile__title');
let profileJob = profile.querySelector('.profile__subtitle');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}

function closePopup() {
    popup.classList.remove('popup_opened');
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
    
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupSaveButton.addEventListener('click', closePopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);