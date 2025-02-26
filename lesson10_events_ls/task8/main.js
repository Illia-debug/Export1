// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const table = document.getElementById('table')
const generatorForm = document.forms['tableGenerator'];

generatorForm.onsubmit = function (ev) {
    table.innerText = '';
    ev.preventDefault();
    const linesValue = +generatorForm.lines.value;
    const cellValue = +generatorForm.cells.value;
    const dataValue = generatorForm.data.value;

    for (let i = 0; i < linesValue; i++) {
        let lines = document.createElement("tr");
        table.append(lines)
        for (let i = 0; i < cellValue; i++) {
            let cell = document.createElement("td");
            cell.innerText = dataValue
            lines.append(cell)
        }
    }
}
