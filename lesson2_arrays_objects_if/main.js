// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
'use strict';
let arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrElements[0]);
console.log(arrElements[1]);
console.log(arrElements[2]);
console.log(arrElements[3]);
console.log(arrElements[4]);
console.log(arrElements[5]);
console.log(arrElements[6]);
console.log(arrElements[7]);
console.log(arrElements[8]);
console.log(arrElements[9]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Deep blue see',
    pageCount: 200,
    genre: 'documental'
};
let book2 = {
    title: 'Deep red see',
    pageCount: 300,
    genre: 'documental'
};
let book3 = {
    title: 'Deep green see',
    pageCount: 400,
    genre: 'fantastic'
};
// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Deep blue see',
    pageCount: 200,
    genre: 'documental',
    authors: [
        {
            name: 'vasa',
            age: 32
        }
    ]
};
let book5 = {
    title: 'Deep red see',
    pageCount: 300,
    genre: 'documental',
    authors: [
        {
            name: 'peta',
            age: 32
        }
    ]
};
let book6 = {
    title: 'Deep green see',
    pageCount: 400,
    genre: 'fantastic',
    authors: [
        {
            name: 'vova',
            age: 32
        }
    ]
};
// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.' +
// ' Вивести в консоль пароль кожного користувача
let user1 = {
    name: 'vasa',
    username: 'vasilovich',
    password: 1111
};
let user2 = {
    name: 'petr',
    username: 'petrovich',
    password: 2222
};
let user3 = {
    name: 'lili',
    username: 'lilivovusch',
    password: 3333
};
let user4 = {
    name: 'lala',
    username: 'lalovich',
    password: 4444
};
let user5 = {
    name: 'lolo',
    username: 'lolovich',
    password: 5555
};
let user6 = {
    name: 'kinder',
    username: 'kindorovich',
    password: 6666
};
let user7 = {
    name: 'kata',
    username: 'katovich',
    password: 7777
};
let user8 = {
    name: 'kaka',
    username: 'kakovich',
    password: 8888
};
let user9 = {
    name: 'nini',
    username: 'ninivich',
    password: 9999
};
let user10 = {
    name: 'vivi',
    username: 'vivivvich',
    password: 1010
};
console.log(user1['password']);
console.log(user2.password);
console.log(user3['password']);
console.log(user4['password']);
console.log(user5['password']);
console.log(user6['password']);
console.log(user7['password']);
console.log(user8['password']);
console.log(user9['password']);
console.log(user10['password']);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperatures = [
    {
        sunday: [
            {morning: 18, day: 26, night: 15}
        ]
    },
    {
        monday: [
            {morning: 18, day: 26, night: 15}
        ]
    },
    {
        thursday: [
            {morning: 18, day: 26, night: 15}
        ]
    },
    {
        wednesday: [
            {morning: 18, day: 26, night: 15}
        ]
    },
    {
        thursday: [
            {morning: 18, day: 26, night: 15}
        ]
    },
    {
        friday: [
            {morning: 18, day: 26, night: 15}
        ]
    },
    {
        saturday: [
            {morning: 18, day: 26, night: 15}
        ]
    }
];
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -1;
if (x !== 0) {
    console.log('вірно')
}
let a = 1;
if (a !== 0) {
    console.log('вірно')
}
a = 0;
if (a !== 0) {
    console.log('вірно')
}
a = -3;
if (a !== 0) {
    console.log('вірно')
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 61;
if (time >= 0 && time < 16) {
    console.log('перша чверть')
}else if (time >= 16 && time < 31) {
    console.log('друга чверть')
}else if (time >= 31 && time < 46) {
    console.log('третя чверть')
}else if (time >= 46 && time < 61) {
    console.log('четверта чверть');
} else {
    console.log('введіть реальні дані')
}
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day = 32;
if (day >= 1 && day < 11) {
    console.log('перша')
}else if (day >= 11 && day < 21) {
    console.log('друга')
}else if (day >= 21 && day < 32) {
    console.log('третя')
}else {
    console.log('введіть реальну дату день')
}
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let today =8;
switch (today) {
    case 1:
        console.log('понеділок')
        break;
    case 2:
        console.log('вівторок')
        break;
    case 3:
        console.log('середа')
        break;
    case 4:
        console.log('четвер')
        break;
    case 5:
        console.log('пятниця')
        break;
    case 6:
        console.log('субота')
        break;
    case 7:
        console.log('неділя');
        break;
    default:
        console.log('помилка - ведіть день від 1 до 7')
}
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let number1 = 132;
let number2 = 132;
if (number1>number2){
    console.log(number1)
}else if (number2>number1){
    console.log(number2)
}else if (number1===number2){
    console.log('рівно')
}
// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті,які приводиться до false, а це 0 null undefined і тд).
let c = '';
if (!c) {
    console.log('default')
}
// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('супер')
} if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('супер')
} if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('супер')
} if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('супер')
} if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('супер')
} if (coursesAndDurationArray[5].monthDuration>5) {
    console.log('супер')
}



