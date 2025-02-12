// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function f(x, y) {
    return x * y;
}

console.log(f(2, 3))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = πr2, де π = 3,14, r – радіус круга.
function sCircle(r) {
    return Math.PI * r * 2
}

let b = parseInt(sCircle(12))
console.log(b)

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Площа повної поверхні циліндра:
//S = 2 π R (R + h) = 2π·12·(12 + 12) = 576π ≈ 1809.556992

function sCilindre(radius, height) {
    return 2 * Math.PI * radius * (radius + height)
}

console.log(parseInt(sCilindre(12, 12)));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function user(arr) {
    for (const element of arr) {
        console.log(element)
    }
}

user(users);
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
function p(text) {
    document.write(`
    <p>${text}</p>
    `)
}

p('Helo octen')
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
function list(msg) {
    document.write(`
    <ul>
    <li>${msg}</li>
    <li>${msg}</li>
    <li>${msg}</li>
    </ul>
    `)
}

list('octen');
// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write

function list2(text, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}

list2('octen cooooool', 10)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
let arr1 = ['asdad', 121, 2112, 'asdasd', true];

function elements(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}

elements(arr1);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
function objects(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`)
        for (let fildName in arrElement) {
            document.write(`${fildName} - ${arrElement[fildName]} `)
        }
        document.write(`</div>`)

    }
}

objects(users)
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let numbers = [-10000, [], 10, 'asdas', true, 20, 30, 1, 15, -1, -100, -55, {}, -112,];

function min(arr) {
    let mini = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] === 'number')
            if (arr[i] < mini)
                mini = arr[i];
    }
    console.log(mini)
}

min(numbers);
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
//     сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('------------------------------------')
let numbers2 = [10, true, 'asd', 20, 30, 40, -11111];
let numbers3 = {};

function f1(arr) {
    sum = 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            let number2 = arr[i]
            if (typeof number2 === "number")
                sum = sum + arr[i]
        }
        console.log(sum)
    }else {
        console.log('ця функція працює з масивами, - введіть масив')
    }
}
f1(numbers2);
f1(numbers3);
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log('--------------------------------')
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 function swap(arr) {
    let indexOne =arr[0];
    let indexTwo=[arr[1]];
    indexTwo.push(indexOne)
    for (let i = 2; i < arr.length; i++) {
        indexTwo.push(arr[i])
    }
    return indexTwo
}
console.log(swap(numbers4));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
console.log('---------------------------')
let grn = 10000;

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    let result = sumUAH/chosenCurrency.value;
    return result;


}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));








