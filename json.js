"use strict";
const person = {
    name: 'Alex',
    age: 28
}

//такой формат мы уже можем отправлять на сервер
let toServer = JSON.stringify(person);

console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

//глубокое клонирование объекта
const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);