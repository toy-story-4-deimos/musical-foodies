"use strict";
//
// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%3F", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "https://api.spoonacular.com/recipes/search",
//         "x-rapidapi-key": foodKey
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });

function getFoodKey() {
    fetch(`https://api.spoonacular.com/recipes/search?apiKey=${foodKey}&query=cheese&number=2`)
        .then(response => response.json())
        .then(element => {
            console.log(element);
            let ready = element;
            console.log(ready)


        }).catch(err => {
        console.log(err);
    })

}

getFoodKey();


