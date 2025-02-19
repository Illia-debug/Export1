// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log(string1.length)
console.log(string2.length)
console.log(string3.length)
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('--------------------------8lld9HMxXWB----------------');
console.log(string1.toUpperCase())
console.log(string2.toUpperCase())
console.log(string3.toUpperCase())
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let string1 = 'HELLO WORLD';
// let string2 = 'LOREM IPSUM';
// let string3 = 'JAVASCRIPT IS COOL';
console.log('--------------------------ClDsAm7xba7----------------');
console.log(string1.toLowerCase())
console.log(string2.toLowerCase())
console.log(string3.toLowerCase());
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   '
console.log(strDirty.trim());
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

function fromStrToArr(str) {
    if (typeof str === "string") {
        return str.split(' ');

    }
    return ('ошибка введіть стрингу');
}

console.log(fromStrToArr(str));
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('----------Rbr5kEQ---------')
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let castNumForStr = nums.map((value) => value + '');
console.log(castNumForStr)
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('----------5hqyKTfmc---------')
let nums1 = [11, 21, 3];

function sortNums(nums, direction) {
    if (direction === 'up') return nums.sort((a, b) => a - b)

    if (direction === 'low') return nums.sort((a, b) => a + b)
}

console.log(sortNums(nums1, 'up'))
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('----------yo06d74c1C---------')
console.log(coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
}));

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
const maped = coursesAndDurationArray.map(function (value, index) {
    return {...value, id: index + 1}
});
console.log(maped);
// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
console.log('----------bolvdlhP---------')
const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const color = ['red', 'black'];
let cardsSuitValue = []

for (const string of value) {
    for (const cardSuitElement of cardSuit) {
        cardsSuitValue.push({cardSuit: cardSuitElement, cardValue: string})
    }
}
const cardsAll = [];
for (const card of cardsSuitValue) {
    if (card.cardSuit === 'diamond' || card.cardSuit === 'heart') {
        cardsAll.push({...card, color: color[0]})
    } else if (card.cardSuit === 'spade' || card.cardSuit === 'clubs') {
        cardsAll.push({...card, color: color[1]})
    }
}
let tys = cardsAll.find(value => {
    return value.cardValue === 'ace' && value.cardSuit === 'spade'
});

console.log(tys)// - знайти піковий туз
let sixs = cardsAll.filter(value => value.cardValue === '6');
console.log(sixs)// - всі шістки
let reds = cardsAll.filter(value => value.color === 'red');
console.log(reds)// - всі червоні карти
let diamond = cardsAll.filter(value => value.cardSuit === 'diamond');
console.log(diamond)// - всі буби
let clubs = cardsAll.filter(value => value.cardSuit === 'clubs' && value.cardValue !== '6'
    && value.cardValue !== '7' && value.cardValue !== '8'
);
console.log(clubs)// - всі трефи від 9 та більше
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('----------EP5I1UUzAX---------')
let reduse = cardsAll.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card)
    } else if (card.cardSuit === "diamond") {
        acc.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card)
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});


console.log( reduse)
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log('----------4LJn7zBx---------')
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let filterSass=coursesArray.filter(value => value.modules.includes('sass'))
console.log(filterSass);
let filterDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filterDocker)




