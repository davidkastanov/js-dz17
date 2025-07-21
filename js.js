// Завдання 2 Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const getImg = document.querySelector("img")
console.log(getImg);

getImg.src = "https://cakeshop.com.ua/images/AcpSe7kFpmzMfgJUwhyXbNbja_gwkleunua5ZVM9jTQ/h:5000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC81NzEzXzEuanBn"



// Завдання 3   Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const getLink = document.querySelector("a")
getLink.href = "https://courses-all.goiteens.com/v-gl-v2/?utm_source=google&utm_medium=cpc&utm_campaign=brand&gad_source=1&gad_campaignid=20839355974&gbraid=0AAAAAqHR3NnQ9zpLz3cyNCx0qFcUJTD5q&gclid=CjwKCAjwvuLDBhAOEiwAPtF0VqJwUrpUTCnmdgMV1CBfYQEwHCMHlvPy48OIb-0Idmadu1iEWCroyhoCy9IQAvD_BwE"
const getAltImg = document.querySelector("img")
getAltImg.alt = "шарікі"



// Завдання 4 Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const getUl = document.querySelector(".items")
getUl.firstElementChild.textContent = "а тут нема посилання"
console.log(getUl);
