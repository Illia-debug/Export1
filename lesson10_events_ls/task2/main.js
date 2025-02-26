// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let inputBlock = document.createElement("input");
inputBlock.classList.add('age');
inputBlock.setAttribute('placeholder', 'age');
inputBlock.setAttribute('type', 'number');
let button = document.createElement('button');
button.innerText='send'
document.body.append(inputBlock, button);
button.onclick=function () {
    let numberAge =  [];
    if (inputBlock.value>18) {
        numberAge.push(inputBlock.value);
    localStorage.setItem('age', JSON.stringify(numberAge));
    }else if (inputBlock.value<18&&inputBlock.value>0) {
        confirm('вибач тобі меншу 18');
    }else{
        confirm("введи реальні показники")}
}