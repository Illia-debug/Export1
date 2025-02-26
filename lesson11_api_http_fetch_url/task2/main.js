// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести
// // інформацію про всі рецепти. Інгредієнти повинні
//     бути список під час відображення.
let main = document.createElement("main");
document.body.append(main);
let urlRecipe=new URL('https://dummyjson.com/recipes')
urlRecipe.searchParams.set('limit','50')
fetch(urlRecipe)
    .then((response) => response.json())
    .then(({recipes}) => {
        for (const recipeField of recipes) {
            let divRecipeField = document.createElement('div');
            let h2name = document.createElement('h2');
            let pInstructions = document.createElement('p');
            let img = document.createElement("img");
            img.setAttribute('src',recipeField.image)
            h2name.innerText=recipeField.name
            divRecipeField.innerText = 'id-' + recipeField.id + '; ' + 'prep time minutes-' + recipeField.prepTimeMinutes + '; ' + 'cook time minutes -' + recipeField.cookTimeMinutes + '; ' + 'servings -' + recipeField.servings + '; ' + 'difficulty -' + recipeField.difficulty + '; ' + 'cuisine -' + recipeField.cuisine + '; ' + 'calories perServing -' + recipeField.caloriesPerServing + '; ' + 'tags -' + recipeField.tags + '; ' + 'userId -' + recipeField.userId + '; ' + 'rating -' + recipeField.rating + '; ' + 'reviewCount -' + recipeField.reviewCount + '; ' + 'meal type' + recipeField.mealType + ';';
            pInstructions.innerText=recipeField.instructions
            let ulIngredients=document.createElement('ul')
            ulIngredients.innerText='Ingredients'
            main.append(divRecipeField,h2name,pInstructions,img,ulIngredients)
            for (const  ingredient of recipeField.ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredient;
                ulIngredients.appendChild(li)
            }
            // console.log(recipeField.ingredients)
        }
    });