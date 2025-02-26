// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let div = document.createElement('div');
document.body.appendChild(div);

for (const element of coursesAndDurationArray) {
    let infoDiv = document.createElement('div');
    infoDiv.innerText = element.title + ' ' + element.monthDuration;
    div.appendChild(infoDiv);
}

