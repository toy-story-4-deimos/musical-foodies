"use strict";


//create function to minimize pings

$(document).ready(function () {

    let firstRecipe = {
        id : null,
        title : null,
        summary: null
    };
    let secondRecipe = {
        id : null,
        title : null,
        summary: null
    };
    let thirdRecipe = {
        id : null,
        title : null,
        summary: null
    };
    let fourthRecipe = {
        id : null,
        title : null,
        summary: null
    };

    $('.modal').modal();

    function loadAPICuisine(cuisine) {
        fetch(`https://api.spoonacular.com/recipes/search?&apiKey=${foodKey}&number=4&cuisine=${cuisine}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                console.log(element.results);
                console.log(element.results[0]);
                console.log(element.results[0].id);
                $('.header-one').html(element.results[0].title);
                // $('.card-content-one').html(element.results[0].winePairing.pairingText);
                $('.card-image-one').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[0].image}">`);
                $('.header-two').html(element.results[1].title);
                // $('.card-content-two').html(element.recipes[1].winePairing.pairingText);
                $('.card-image-two').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[1].image}">`);
                $('.header-three').html(element.results[2].title);
                // $('.card-content-three').html(element.recipes[2].winePairing.pairingText);
                $('.card-image-three').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[2].image}">`);
                $('.header-four').html(element.results[3].title);
                // $('.card-content-four').html(element.recipes[3].winePairing.pairingText);
                $('.card-image-four').html(`<img src= "https://spoonacular.com/recipeImages/${element.results[3].image}">`);

                firstRecipe.id = element.results[0].id;
                firstRecipe.title = element.results[0].title;
                secondRecipe.id = element.results[1].id;
                secondRecipe.title = element.results[1].title;
                thirdRecipe.id = element.results[2].id;
                thirdRecipe.title = element.results[2].title;
                fourthRecipe.id = element.results[3].id;
                fourthRecipe.title = element.results[3].title;
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
    $('#japanese').click(function () {
        loadAPICuisine("japanese");

    });
    $('#mexican').click(function () {
        loadAPICuisine("mexican");
    });


    let input = "";


    $("#search-button").click(function () {
        let input = $("#search").val();
        autoCompleteSearchBar(input);
        console.log(input);
    });

    function autoCompleteSearchBar(input) {


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

                firstRecipe.id = element.results[0].id;
                firstRecipe.title = element.results[0].title;
                secondRecipe.id = element.results[1].id;
                secondRecipe.title = element.results[1].title;
                thirdRecipe.id = element.results[2].id;
                thirdRecipe.title = element.results[2].title;
                fourthRecipe.id = element.results[3].id;
                fourthRecipe.title = element.results[3].title;

            });


    }



    $("#recipe-button-1").click(function () {
        console.log(firstRecipe);
        let id = firstRecipe.id;
        console.log("Recipe ID: "+id);
        console.log(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`);
        fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                firstRecipe.title = element.title;
                firstRecipe.summary = element.summary;

                $(".modal-content").html("<h4>"+`${firstRecipe.title}`+"</h4>" + "<p>"+`${firstRecipe.summary}`+"</p>");
                // loadAPICuisine(cuisine)


            });
    });
    $("#recipe-button-2").click(function () {
        console.log(secondRecipe);
        let id = secondRecipe.id;
        console.log("Recipe ID: "+id);
        console.log(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`);
        fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                secondRecipe.title = element.title;
                secondRecipe.summary = element.summary;

                $(".modal-content").html("<h4>"+`${secondRecipe.title}`+"</h4>" + "<p>"+`${secondRecipe.summary}`+"</p>");
                // loadAPICuisine(cuisine)


            });
    });
    $("#recipe-button-3").click(function () {
        console.log(thirdRecipe);
        let id = thirdRecipe.id;
        console.log("Recipe ID: "+id);
        console.log(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`);
        fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                thirdRecipe.title = element.title;
                thirdRecipe.summary = element.summary;

                $(".modal-content").html("<h4>"+`${thirdRecipe.title}`+"</h4>" + "<p>"+`${thirdRecipe.summary}`+"</p>");
                // loadAPICuisine(cuisine)


            });
    });
    $("#recipe-button-4").click(function () {
        console.log(fourthRecipe);
        let id = fourthRecipe.id;
        console.log("Recipe ID: "+id);
        console.log(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`);
        fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${foodKey}`)
            .then(response => response.json())
            .then(element => {
                console.log(element);
                fourthRecipe.title = element.title;
                fourthRecipe.summary = element.summary;

                $(".modal-content").html("<h4>"+`${fourthRecipe.title}`+"</h4>" + "<p>"+`${fourthRecipe.summary}`+"</p>");
                // loadAPICuisine(cuisine)


            });
    });
});

