"use strict";

//
// function getFoodKey() {
//     fetch(`https://api.spoonacular.com/recipes/search?apiKey=${foodKey}&query=wine&`)
//         .then(response => response.json())
//         .then(element => {
//             console.log(element);
//             let ready = element;
//             console.log(ready)
//         })
//         .catch(err => {
//         console.log(err);
//     })
//
// }
//
//
// getFoodKey();
// console.log("git test");

//create function to minimize pings

$(document).ready(function () {
    function loadAPICuisine(cuisine) {
        fetch(`https://api.spoonacular.com/recipes/random?number=4&cuisine=${cuisine}&apiKey=${foodKey}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                $('.header-one').append(element.recipes[0].title);
                $('.card-content-one').append(element.recipes[0].winePairing.pairingText);
                $('.card-image-one').html(`<img src= "${element.recipes[0].image}">`);
                $('.header-two').append(element.recipes[1].title);
                $('.card-content-two').append(element.recipes[1].winePairing.pairingText);
                $('.card-image-two').html(`<img src= "${element.recipes[1].image}">`);
                $('.header-three').append(element.recipes[2].title);
                $('.card-content-three').append(element.recipes[2].winePairing.pairingText);
                $('.card-image-three').html(`<img src= "${element.recipes[2].image}">`);
                $('.header-four').append(element.recipes[3].title);
                $('.card-content-four').append(element.recipes[3].winePairing.pairingText);
                $('.card-image-four').html(`<img src= "${element.recipes[3].image}">`);

            });


    }

    //need a function that generates dishes to minimize the pings

    //click button logic for foods
    $('#chinese').click(function () {
        loadAPICuisine("chinese");
    });
    $('#french').click(function () {
        loadAPICuisine("french");

    });
    $('#greek').click(function () {
        loadAPICuisine("greek");


    });
    $('#indian').click(function () {
        loadAPICuisine("indian");

    });
    $('#italian').click(function () {
        loadAPICuisine("italian");

    });
    $('#asian').click(function () {
        loadAPICuisine("asian");

    });
    $('#mexican').click(function () {
        loadAPICuisine("mexican");
    });


});

