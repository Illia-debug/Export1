// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let inputKg = document.createElement('input');
inputKg.classList.add('kg');
let inputFut = document.createElement('input');
inputFut.classList.add('fut');
document.body.append(inputKg, inputFut);


inputKg.oninput = function () {
    inputKg.value = parseFloat(inputKg.value || 0)
    inputFut.value = this.value * 2.204;
};