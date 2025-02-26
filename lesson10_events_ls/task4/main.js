// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1


let currentNumber = +localStorage.getItem('number') || 0;
currentNumber+= 1;
localStorage.setItem('number', currentNumber);

let h1 = document.createElement("h1");
h1.innerText = currentNumber;
document.body.appendChild(h1);
