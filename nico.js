"use strict";

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
console.log("git test");


