'use strict'
// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersObjects = [
    new User(1, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(2, 'didi', 'dodido', 'lili@gmail.com', 44444),
    new User(3, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(4, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(5, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(6, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(7, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(8, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(9, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new User(10, 'Lili', 'dodido', 'lili@gmail.com', 44444)
];
// #2ikXsE2WiKZ
console.log('-----------------2ikXsE2WiKZ------------')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let paired = value => value.id % 2 === 0;
let filterUsersId = usersObjects.filter(paired);
console.log(filterUsersId);
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('------pOeHKct---------')
let userSortId = usersObjects.sort((userId1, userId2) => {
    return userId1.id - userId2.id;
});
console.log(userSortId);
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        {telephone: 'samsung', prise: '1000$'},
        {lSD: 'samsung', prise: "2000$"},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(2, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        {telephone: 'Apple', prise: '2000$'},
        {fresh: 'cherri', prise: "2$"},
    ]),
    new Client(3, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        {telephone: 'Apple', prise: '2000$'},
        {fresh: 'cherri', prise: "2$"},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(4, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        {telephone: 'Apple', prise: '2000$'},
        {fresh: 'cherri', prise: "2$"},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(5, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        {telephone: 'Apple', prise: '2000$'}
    ]),
    new Client(6, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        {telephone: 'Apple', prise: '2000$'},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(7, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        {telephone: 'samsung', prise: '1000$'},
        {lSD: 'samsung', prise: "2000$"},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(8, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        {telephone: 'samsung', prise: '1000$'},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(9, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        {telephone: 'samsung', prise: '1000$'},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {telephone: 'Apple', prise: '5000$'}
    ]),
    new Client(10, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        {telephone: 'samsung', prise: '1000$'},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {lSD: 'samsung', prise: "2000$"},
        {telephone: 'Apple', prise: '5000$'}
    ])
];
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати
// його по кількості товарів в полі order по зростанню. (sort)
console.log('--------8abtVjRv------')
let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);




// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('----vV9a6584I5----')

function Car1(model, made, releaseDate, maxSpeed, engineVolume) {
    this.model = model;
    this.made = made;
    this.releaseDate = releaseDate;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.info = function () {
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !== "function") {

                console.log(this[argumentsKey], argumentsKey);
            }

        }
    };
    this.addDrive = function (driver) {
        this.driver = driver
    };
    this.increaseMaxSpeed = (newSpeed) => console.log(newSpeed = this.maxSpeed + 50);
    this.changeYear = (newValue) => console.log(newValue = this.made = '2020');
}


let reno = new Car1('reno', 'China', 2000, 200, 3);
reno.info()
reno.addDrive({
    name: 'vasa',
    surname: 'lolo'
})
reno.increaseMaxSpeed()
reno.changeYear()

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('--5kla3yMpgp--')
class Car {
    constructor(model, made, releaseDate, maxSpeed, engineVolume) {
        this.model = model;
        this.made = made;
        this.releaseDate = releaseDate;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.info = function () {
            for (const argumentsKey in this) {
                if (typeof this[argumentsKey] !== "function") {

                    console.log(this[argumentsKey], argumentsKey);
                }

            }
        };
        this.addDrive = function (driver) {
            this.driver = driver
        };
    }
    increaseMaxSpeed = (newSpeed) => console.log(newSpeed = this.maxSpeed + 50);

    changeYear = (newValue) => console.log(newValue = this.made = '2020');

}
let ford = new Car('ford', 'USA', 2000, 200, 3);
ford.info()
ford.addDrive({
    name: 'vasa',
    surname: 'lolo'
})
console.log(ford)
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('----zg6Fifnqig---')
class Pelyshka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
class Princ{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let girls = [
    new Pelyshka("Lili", 39, 41),
    new Pelyshka("Dodo", 29, 37),
    new Pelyshka("Koko", 19, 38),
    new Pelyshka("Didi", 18, 36),
    new Pelyshka("Momo", 14, 33),
    new Pelyshka("Mimi", 40, 39),
    new Pelyshka("Viki", 29, 37),
    new Pelyshka("Mike", 13, 36),
    new Pelyshka("Nini", 14, 35),
    new Pelyshka("Soso", 15, 34),
];
let princ=new Princ('sasa',30,35);
for (const girl of girls) {
    if (girl.size===princ.size){
        console.log(girl)
        princ.wife=girl
        }
}
console.log(princ)
let nevesta= girls.find(value => value.size===princ.size)






