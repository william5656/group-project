$(function(){

    var hero = {
        name : "",
        deck : "",
        description : "",
        realName : "",
        origin : "",
        imageUrl : ""
    }
    

    var query = localStorage.getItem("query");
    //console.log(query);
    
    var key = "390f1045415ee2e2bbb6b090a5a6cc8457d2f4f0";
    //var test = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key="+ key +"&filter=name%3Adeadpool&format=JSON";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=" + key + "&filter=name:" + query + "&limit=1&format=JSON";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        //console.log(response.results[0].deck);
        hero.name = response.results[0].name;
        hero.deck = response.results[0].deck;
        hero.description = response.results[0].description;
        hero.realName = response.results[0].real_name;
        hero.origin = response.results[0].origin;
        hero.imageUrl = response.results[0].image.original_url;
        $(".story").text(hero.deck);
        $(".mainImage").attr("src", hero.imageUrl);       
    });
    
});


