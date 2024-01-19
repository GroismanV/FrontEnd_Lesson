import { users } from './utils/users.js'

const root = document.querySelector('#root')
const header = document.createElement('header')
root.append(header)

// FORM
const form = document.createElement('form')
root.append(form)

const nameLabel = document.createElement('label')
nameLabel.setAttribute('for', 'name')
nameLabel.textContent = 'имя'
form.append(nameLabel)

const nameInput = document.createElement('input')
nameInput.setAttribute('id', 'name')
form.append(nameInput)

const ageLabel = document.createElement('label')
ageLabel.setAttribute('for', 'age')
ageLabel.textContent = 'возраст'
form.append(ageLabel)

const ageInput = document.createElement('input')
ageInput.setAttribute('id', 'age')
form.append(ageInput)

const cityLabel = document.createElement('label')
cityLabel.setAttribute('for', 'city')
cityLabel.textContent = 'город'
form.append(cityLabel)

const cityInput = document.createElement('input')
cityInput.setAttribute('id', 'city')
form.append(cityInput)

const submitButton = document.createElement('button')
submitButton.innerText = 'Log in'
submitButton.setAttribute('type', 'submit')
form.append(submitButton)

form.addEventListener('submit', function (event) {
    event.preventDefault()
    // event - событие
    // prevent - предотвратить
    // default = дефолтный по умолчанию
    // он предотвращает поведение перезагрузки страницы
    console.log(event)
})

// USER CONTAINER
const userContainer = document.createElement('div')
userContainer.classList.add('user-container')
root.append(userContainer)

// THEME
const themeButton = document.createElement('button')
themeButton.innerHTML = 'change color'
header.append(themeButton)

themeButton.addEventListener('click', function () {
    root.classList.toggle('dark')
})

// ОТРИСОВКА ПОЛЬЗОВАТЕЛЕЙ
const renderUsers = (arrayOfUsers) => {
    userContainer.innerHTML = ''
    arrayOfUsers.forEach((user) => {
        const userCard = document.createElement('div')

        const userName = document.createElement('h1')
        userName.innerText = user.name

        const userAge = document.createElement('h2')
        userAge.innerText = user.age

        const userCity = document.createElement('p')
        userCity.innerText = user.city

        userCard.append(userName, userAge, userCity)
        userCard.classList.add('user-card')

        userContainer.append(userCard)
    })
}

renderUsers(users)

// обработчики событий
// click - нажимаете на кнопку
// submit - когда делаете сабмит(отправку) форму

// input - когда что-то вводите в инпут
// change - когда в checkbox/radio нажимаете что-то/ убираете фокус и текстового инпута

// onMouseEnter - когда наводите мышку
// onMouseLeave - когда убираете курсор

// bubbling всплытие
// погружение