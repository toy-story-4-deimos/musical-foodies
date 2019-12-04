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
            $('.header-one').append(element.results[0].title);
            $('.card-content-one').append(element.results[0].readyInMinutes);
            $('.card-image-one').append(`<img src= "https://spoonacular.com/recipeImages/${element.results[0].image}">`);
            console.log(typeof element.results[0].image);
            $('.header-two').append(element.results[1].title);
            $('.card-content-two').append(element.results[1].readyInMinutes);
            $('.card-image-two').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[1].image}">`);
            $('.header-three').append(element.results[2].title);
            $('.card-content-three').append(element.results[2].readyInMinutes);
            $('.card-image-three').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[2].image}">`);
            $('.header-four').append(element.results[3].title);
            $('.card-content-four').append(element.results[3].readyInMinutes);
            $('.card-image-four').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[3].image}">`);

        });


    }



});

