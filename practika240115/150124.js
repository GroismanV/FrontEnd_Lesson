// 1. создать элемент form
const form = document.createElement('form')
// 2. добавить к форме класс form-container
form.classList.add('form-container')
console.log(form)
// 3. выбрать элемент root
// root - корень
const root = document.querySelector('#root')
// 4. прикрепить элемент к корневому элементу

// append - добавлять/присоединять
// элемент к которому крепится . append (эл кот крепим)
root.append(form)
// document.body.append(form)

// 5. создать элемент label
const nameLabel = document.createElement('label')
// 6. добавить к нему аттрибут for со значением name
nameLabel.setAttribute('for', 'name')
nameLabel.textContent = 'имя' // innerText
//attribute --> ключ = значение в первом теге
// 7. прикрепить label к form
form.append(nameLabel)

// 8. создать инпут
const nameInput = document.createElement('input')
// 9. добавить к нему аттрибту id = name
nameInput.setAttribute('id', 'name')

// 10. прикрепили инпут к форме
form.append(nameInput)

// 11. добавить к нему аттрибут placeholder ="введите имя"
// 12. добавить к нему аттрибут type = text
nameInput.setAttribute('placeholder', 'введите имя')
nameInput.setAttribute('type', 'text')

// 13. Создать label для пароля
const passwordLabel = document.createElement('label')
passwordLabel.setAttribute('for', 'password')
passwordLabel.innerText = 'пароль'
form.append(passwordLabel)

// 14. создать input для пароля
const passwordInput = document.createElement('input')
passwordInput.setAttribute('type', 'password')
passwordInput.setAttribute('id', 'password')
passwordInput.setAttribute('placeholder', 'введите пароль')
form.append(passwordInput)

// 15  создать кнопку
const submitButton = document.createElement('button')
// текст войти
submitButton.innerText = 'Log in'
submitButton.setAttribute('type', 'submit')
form.append(submitButton)

form.addEventListener('submit', function (event) {
    event.preventDefault()
})