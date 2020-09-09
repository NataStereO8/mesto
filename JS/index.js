let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let profileAddButton = profile.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupCrossButton = popup.querySelector('.popup__cross-button');
let popupSaveButton = popup.querySelector('.popup__save-button');


function openPopup() {
    popup.classList.add('popup_opened');
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

    // Находим поля формы в DOM
    let nameInput = popupForm.querySelector('.popup__input_name'); // Воспользуйтесь инструментом .querySelector()
    let jobInput = popupForm.querySelector('.popup__input_job'); // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = profile.querySelector('.profile__title');
    let profileJob = profile.querySelector('.profile__subtitle');
    
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);

profileEditButton.addEventListener('click', openPopup);
popupCrossButton.addEventListener('click', closePopup);
popupSaveButton.addEventListener('click', closePopup);