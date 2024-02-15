const root = document.querySelector('#root')
const form = document.querySelector('form')
const nameInput = document.querySelector('#userName')
const ageInput = document.querySelector('#userAge')

const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Emily', age: 28 },
    { id: 5, name: 'David', age: 40 },
]

localStorage.setItem('users', JSON.stringify(users))
const usersFromStorage = JSON.parse(localStorage.getItem('users')) // по ключу

const showUsers = (arrayOfObjects) => {
    arrayOfObjects.forEach((user) => {
        const titleContainer = document.createElement('div')
        titleContainer.innerText = user.name
        root.append(titleContainer)
    })
}

showUsers(users)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    nameInput.value = ''
    ageInput.value = ''

    const newUser = {
        id: Math.random(),
        name: nameInput.value,
        age: ageInput.value,
    }
    // данные добавить в массив
    newUser, users
    // и перерисовать пользователей
    showUsers()
})

// при добавлении нового пользователя в массив мы новый массив
// сохраняем в LocalStorage

// загружаем страницу, провряем в LS есть данные или нет
// если есть, то мы их отрисовываем, если тх нет то отрисовываем дфеолтный массив