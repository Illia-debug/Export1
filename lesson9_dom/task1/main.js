// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('wrap', 'collapse', 'alpha', 'beta')

const cloneNode = div.cloneNode(true);
document.body.appendChild(cloneNode);
//за клонування я про ноду функцію не знав тому клонування списав.
