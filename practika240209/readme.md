0902

// resolve - колбек функция // reject - колбек функция const random = new Promise((callback1, callback2) => { if (Math.random() > 0.5) { setTimeout(() => callback1('apple'), 1000) } else { setTimeout(() => callback2('product not found'), 2000) } })

random .then((data) => console.log(data)) .catch((error) => console.log(error)) .finally(() => console.log('Works after all'))

Promise.resolve().then(() => console.log('promise')) setTimeout(() => console.log('timote'), 1000) console.log('3')

// separation of concerns // необходимо логику выносить // бизнес логика работает отдельно // UI отдельно от Функционала