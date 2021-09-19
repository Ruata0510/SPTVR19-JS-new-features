"use strict";

const num = 1;

//анонимная самовызывающаяся функция (создаём локальную область видимости)
(function() {
    let num = 2;
    console.log(num);
    console.log(num + 1);
}());

console.log(num);

//объектный интерфейс (второй способ модульности)
const user = (function(){
    const privat = function(){
        console.log("I am privat");
    };
    
    return {
        sayHello: privat //экспортируем наружу локальное свойство
    }
}());

user.sayHello();