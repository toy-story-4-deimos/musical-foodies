"use strict";



//create function to minimize pings

$(document).ready(function () {
    function loadAPICuisine(cuisine) {
        fetch(`https://api.spoonacular.com/recipes/random?number=4&cuisine=${cuisine}&apiKey=${foodKey}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                $('.header-one').html(element.recipes[0].title);
                $('.card-content-one').html(element.recipes[0].winePairing.pairingText);
                $('.card-image-one').html(`<img src= "${element.recipes[0].image}">`);
                $('.header-two').html(element.recipes[1].title);
                $('.card-content-two').html(element.recipes[1].winePairing.pairingText);
                $('.card-image-two').html(`<img src= "${element.recipes[1].image}">`);
                $('.header-three').html(element.recipes[2].title);
                $('.card-content-three').html(element.recipes[2].winePairing.pairingText);
                $('.card-image-three').html(`<img src= "${element.recipes[2].image}">`);
                $('.header-four').html(element.recipes[3].title);
                $('.card-content-four').html(element.recipes[3].winePairing.pairingText);
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



    let input = "";

    $("#search-button").click(function () {
        let input = $("#search").val();
        autoCompleteSearchBar();
        console.log(input);
    });

    function autoCompleteSearchBar() {



    fetch(`https://api.spoonacular.com/recipes/search?number=4&query=${input}&apiKey=${foodKey}`)
        .then(response => response.json())
        .then(element => {
            console.log(element);
            $('.header-one').html(element.results[0].title);
            $('.card-content-one').html("Ready in: " + element.results[0].readyInMinutes + "        Minutes" + " Serves: " + element.results[0].servings);
            $('.card-image-one').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[0].image}">`);
            console.log(typeof element.results[0].image);
            $('.header-two').html(element.results[1].title);
            $('.card-content-two').html("Ready in: " + element.results[1].readyInMinutes + "        Minutes" + " Serves: " + element.results[0].servings);
            $('.card-image-two').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[1].image}">`);
            $('.header-three').html(element.results[2].title);
            $('.card-content-three').html("Ready in: " + element.results[2].readyInMinutes + "        Minutes" + " Serves: " + element.results[0].servings);
            $('.card-image-three').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[2].image}">`);
            $('.header-four').html(element.results[3].title);
            $('.card-content-four').html("Ready in: " + element.results[3].readyInMinutes + "        Minutes" + " Serves: " + element.results[0].servings);
            $('.card-image-four').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[3].image}">`);

        });


    }



});

