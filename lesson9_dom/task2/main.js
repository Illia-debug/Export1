// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let menu = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
    document.body.appendChild(ul);

for (const unit of menu) {

    let li = document.createElement('li');
    li.innerText = unit;

    ul.appendChild(li);

}