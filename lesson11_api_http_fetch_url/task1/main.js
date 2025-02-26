// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
let  colectionMain=document.getElementsByTagName('main')
let main = colectionMain[0];

let url = new URL('https://dummyjson.com/carts');
url.searchParams.set('limit', 50)
fetch(url)
    .then(res => res.json())
    .then(({carts}) => {
        for (const cart of carts) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = 'id carts' + cart.id + 'total-' + cart.total + 'discountedTotal-' + cart.discountedTotal + ' ' + 'userId-' + cart.userId + ' ' + 'totalProducts-' + cart.totalProducts + 'totalQuantity-' + cart.totalQuantity
            div.append(p)
            main.append(div)
            for (const product of cart.products) {

                let h4IdTitle = document.createElement("h4")
                h4IdTitle.innerText = 'id' + ' ' + product.id + ' ' + 'title -' + ' ' + product.title
                let h3Prise = document.createElement('h3')
                h3Prise.innerText = 'Prise' + '-' + product.price
                let img = document.createElement("img");
                img.setAttribute('src', product.thumbnail)
                let h3Description = document.createElement('h3');
                h3Description.innerText = 'quantity-' + product.quantity+' '+'total-'+product.total+' '+'discountPercentage-'+product.discountPercentage+' '+'discountedTotal-'+product.discountedTotal

                div.append(h4IdTitle, h3Prise, img, h3Description)
                // console.log(product)
            }
            // console.log(cart)
        }
    });