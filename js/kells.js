"use strict";

//The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.
let id = 35;
let cuisines = "";
let diets = "";
let intolerances = "";
let dishTypes = "";

let tags = `tags=${cuisines},${diets},${intolerances},${dishTypes}`;

// let sort = `sort=${popularity},${healthiness},${price},${time}`;

// let query = `query=${searchInput}`;




//--------------------- Picks a random dish ----------------------------

// function getRandomDish() {
//     fetch(`https://api.spoonacular.com/recipes/random?${foodKey}`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//             let ready = element;
//             console.log(ready)
//
//
//         }).catch(err => {
//         console.log(err);
//     })
//
// }
//
//
// getRandomDish();
// console.log("git test");
//
//
//--------------------- Picks 5 random dishes ----------------------
//
// function getFiveRandomDishes() {
//     fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${foodKey}`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//             let ready = element;
//             console.log(ready)
//
//
//         }).catch(err => {
//         console.log(err);
//     })
//
// }
//
// getFiveRandomDishes();
// console.log("git test");


//---------------------- Picks random dish with tags by user -----------------

function getRandomDishWithTag() {
    fetch(`https://api.spoonacular.com/recipes/random?number=1&cuisine=American&apiKey=${foodKey}`)
        .then(response => response.json())
        .then(element => {
            console.log(element);
            let ready = element;
            console.log(ready)


        }).catch(err => {
        console.log(err);
    })

}


getRandomDishWithTag();
console.log("git test");

//---------------------- Picks 5 random dish with tags by user -----------------

function getFiveRandomDishWithTag() {
    fetch(`https://api.spoonacular.com/recipes/random?number=5&cuisine=American&apiKey=${foodKey}`)
        .then(response => response.json())
        .then(element => {
            console.log(element);
            let ready = element;
            console.log(ready)


        }).catch(err => {
        console.log(err);
    })

}


getFiveRandomDishWithTag();
console.log("git test");



//------------------------- Picks a dish by ID and gives summary of dish -------------


function getDishSummary() {
    fetch(`https://api.spoonacular.com/recipes/${id}/summary?&apiKey=${foodKey}`)
        .then(response => response.json())
        .then(element => {
            console.log(element);
            $('.card-content-one').append(element.summary);
            $('.header-one').append(element.title);
            let ready = element;
            console.log(ready)


        }).catch(err => {
        console.log(err);
    })

}


getDishSummary();
console.log("git test");



//------------------------- Tells a random food joke -------------

//ADULTS ONLY Y'ALL

// function getFoodJoke() {
//     fetch(`https://api.spoonacular.com/food/jokes/random?&apiKey=${foodKey}`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//             let ready = element;
//             console.log(ready)
//
//
//         }).catch(err => {
//         console.log(err);
//     })
//
// }
//
//
// getFoodJoke();
// console.log("git test");



//---------------------Tells you a random food trivia ---------------

// function getFoodTrivia() {
//     fetch(`https://api.spoonacular.com/food/trivia/random?&apiKey=${foodKey}`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//             let ready = element;
//             console.log(ready)
//
//
//         }).catch(err => {
//         console.log(err);
//     })
//
// }
//
//
// getFoodTrivia();
// console.log("git test");


// function getSortedDishes() {
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&sort=time&apiKey=${foodKey}`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//             let ready = element;
//             console.log(ready)
//
//
//         }).catch(err => {
//         console.log(err);
//     })
//
// }
//
// getSortedDishes();
// console.log("git test");






// Write a function to select a cuisine and post 10 recipes of said cuisine

// Write a function to add to the query string if a diet checkbox is checked

// Write a function for predictive text when searching in search bar

// Write a function that will pull all the information for a meal and place it in a card

// Write a function to navigate to a recipe card when a recipe suggestion is clicked on



// Write a function to pull up a module to be able to leave a review when leave a review is clicked
