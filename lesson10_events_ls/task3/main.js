// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
//     та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок
//     з вашим
// об'єктом
let form = document.createElement('form');
let inputName = document.createElement('input');
inputName.classList.add('name');
inputName.setAttribute('placeholder', 'name');

let inputSruname = document.createElement('input');
inputSruname.classList.add('sruname');
inputSruname.setAttribute('placeholder', 'sruname');

let inputAge = document.createElement('input');
inputAge.classList.add('age');
inputAge.setAttribute('placeholder', 'age');

let button = document.createElement('button');
button.innerText = 'sent';

form.append(inputName,inputSruname,inputAge,button);
document.body.appendChild(form);

    let users = [];
button .addEventListener('click',(ev)=>{
    ev.preventDefault();
    let user = {name: inputName.value, surname: inputSruname.value, age: inputAge.value};
    users.push(user);
    let h2 = document.createElement('h2');
    h2.innerText= inputName.value+'  '+inputSruname.value+'  '+inputAge.value
    document.body.append(h2)
});
console.log(users)
