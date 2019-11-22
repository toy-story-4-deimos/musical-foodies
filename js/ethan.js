"use strict";
let searchTerm;
let wineSearch;
let foodToPair;
let foodPairings;


// Example search syntax
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY

// $('#search').on('input', (function() {
//     searchTerm = $('#search').val();
//     fetch(`https://api.spoonacular.com/food/products/search?query=chicken&apiKey=${foodKey}`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//         })
// }));
let test;
const testRequest = () => {
    return fetch(`https://api.spoonacular.com/food/recipess/search?query=chicken&apiKey=${foodKey}`)
        .then(response => response.json())
    };



// Search by Wine

const searchByWine = () => {
    wineSearch = 'malbec';
    return fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${wineSearch}&apiKey=${foodKey}`)
        .then(response => response.json());
};

// Function to recommend wine types based on type of food searched

const pairWineWithFood = () => {
    return fetch(`https://api.spoonacular.com/food/wine/pairing?food=steak&apiKey=${foodKey}`)
        .then(response => response.json())
};

// Function to find a list of recommended Wine brands based on type selected

const recommendWine = () => {
    return fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=merlot&number=2&apiKey=${foodKey}`)
        .then(response => response.json())
};


const requestTest = () => {
    searchByWine()
        .then((foodList) => {
            test = foodList;
            foodPairings = foodList.pairings;
            console.log(test);
            console.log(foodPairings)
        })
};
requestTest();
