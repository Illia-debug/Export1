// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив
// з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
let arr1 = [1, 2];
let arr2 = [1, 2, 3];
let arr3 = [1, 2, 3, 4];

localStorage.setItem(arr1, JSON.stringify(arr1));
localStorage.setItem(arr2, JSON.stringify(arr2));
localStorage.setItem(arr3, JSON.stringify(arr3));

function addObj(arrName, objAdd) {

    if (Array.isArray(arrName)) {
        let arrJSON = localStorage.getItem(arrName);
        let parse = JSON.parse(arrJSON);
        if (typeof objAdd === 'object') {

            parse.push(objAdd);
        }

        localStorage.setItem(arrName, JSON.stringify(parse))
    }
}

addObj(arr1, 'lili');//поведінка при помилці аргумента - нічо невідбуваеться
addObj(arr2, {name: 'sasa', age: 13});
addObj(arr3, {name: 'lili', age: 20});

