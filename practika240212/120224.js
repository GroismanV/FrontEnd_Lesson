// Кратко

// Это объект, хранящийся в window, который позволяет долговременно сохранять данные в браузере.Работает как хранилище данных в формате ключ - значение — при сохранении данных мы указываем имя поля, в которое должны быть сохранены данные, и затем используем это имя для их получения.

//     Значения хранятся в виде строк.При попытке сохранения других типов данных, они будут приведены к строке.Например, если записать число, то при чтении нам вернётся число, записанное в строку.
//     Не имеет ограничений по времени хранения, может быть очищен пользователем вручную или браузером при переполнении автоматически(браузеры на основе движка WebKit, например Safari, очищают localStorage, если к нему не обращались в течение 7 дней).
//     Максимальный объем данных ограничен размером 5MB.

//     Пример

// Записываем данные:

// window.localStorage.setItem('name', 'Дока Дог')

// При чтении ранее записанных данных по ключу name мы получим Дока Дог:

// const name = window.localStorage.getItem('name')
// console.log(name)
// // 'Дока Дог'

// Повторная запись по тому же ключу приведёт к замене данных:

// window.localStorage.setItem('name', 'Собака Дока')

// const name = window.localStorage.getItem('name')
// console.log(name)
// // 'Собака Дока'

// Как понять

// Если вам нужно сохранить данные в браузере на долгое время и объем этих данных достаточно большой, то localStorage — то, что вам нужно.Данные будут храниться бессрочно и могут быть стёрты только в двух случаях: при превышении лимита по размеру данных или очистке хранилища пользователем или программно.
// Как пишется
// Запись

// Для записи используйте метод setItem('ключ', 'значение').Он принимает два строковых параметра: ключ, по которому будет сохранено значение, и само значение.

//     window.localStorage.setItem('name', 'Дока Дог')

// Чтение

// За чтение отвечает getItem('ключ') c одним параметром, который указывает на ключ для чтения и возвращает полученное значение из хранилища.Если по этому ключу нет значения, то метод вернёт null.

//     window.localStorage.getItem('name') // вернет 'Дока Дог'
// window.localStorage.getItem('user') // вернет `null`

// Удаление

// Удаляет запись из хранилища removeItem('ключ').Он успешно выполнится даже если указанного ключа не существует в хранилище.

//     window.localStorage.removeItem('name')
// window.localStorage.removeItem('user')

// Очистка хранилища

// Метод clear() очищает хранилище полностью.

//     window.localStorage.clear()


const form = document.querySelector('form')
const nameInput = document.querySelector('#userName')
const ageInput = document.querySelector('#userAge')

// при загрузке страницы достали данные из LS
const nameFromStorage = localStorage.getItem('userName')
const ageFromStorage = localStorage.getItem('userAge')
// если они там есть подставить в value
if (nameFromStorage) nameInput.value = nameFromStorage
if (ageFromStorage) ageInput.value = ageFromStorage

form.addEventListener('submit', (event) => {
    event.preventDefault()

    localStorage.setItem('userName', nameInput.value)
    localStorage.setItem('userAge', ageInput.value)

    nameInput.value = ''
    ageInput.value = ''
})

