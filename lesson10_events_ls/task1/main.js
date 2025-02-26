// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//     зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let h2 = document.createElement('h2')
h2.setAttribute('id', 'text');
h2.innerText='lol'

let button=document.createElement('button')
button.innerText = 'delete h2';

button.onclick=function () {
    h2.remove()
}
document.body.append(h2,button);

