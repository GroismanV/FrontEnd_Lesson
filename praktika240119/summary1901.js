const root = document.querySelector('#root') 

root.classList.add('container')
root.classList.remove('container')


const themeButton = document.createElement('button')
themeButton.innerHTML='change color'
root.append(themeButton)

themeButton.addEventListener('click', function () {
    root.classList.toggle('dark')
})
// создать userCard
// три поля - имя, возраст, город
// createElement создаем элемент
// innerText - для наполнения
// append - крепим к родителю
// добавить класс к карточке .user-card

const userCard = document.createElement("div")
root.append(userCard)
userCard.classList.add("user-card")


const name = document.createElement("h1")
name.innerText = "Bob"
// root.append(name)

const age = document.createElement("h2")
age.innerText = "40"
// root.append(age)

const city = document.createElement("p")
city.innerText = "Berlin"
// root.append(city)

userCard.append(name, age, city)