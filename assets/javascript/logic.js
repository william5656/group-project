$(document).ready(function() {

    
    $(function(){
        $(".searchBtn").on("click", function(){
            var getInput = $(".searchTerm").val();
            //console.log(getInput);
            localStorage.setItem("query",getInput);
        });
        //localStorage.setItem("query",getInput);

        
    });

    var query = localStorage.getItem("query");
    var topics = ["Toys", "Games", "Movies", "Stats", "Comic Books"];

    $(document).on("click",".Stats", function() {
        var superHero = $(".Stats").val();
        var queryURL1 = "https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/10155912004548192/search/" +
        superHero + "/id/powerstats";

        $.ajax({
            url: queryURL1,
            method: "GET",

          })
          .then(function(response) {

            var results = response.results;
           for (var i = 0; i < results.length; i++) {
            $(".story").html(JSON.stringify(results[i].powerstats));
             console.log(results[i].powerstats);
             console.log("hi");
           }
        });   
    })
    $(".heroSubmit").on("click", function(event) {
        event.preventDefault();
        $(".heroSubmit").empty();
        hero = $(".heroSearch").val();
        $(".filter").empty();
        for(var i = 0; i < topics.length; i++){
            var a = $("<button>");
             a.addClass("waves-effect waves-light btn " + topics[i]);
             a.attr("value", hero);
             a.append(topics[i]);
             $(".filter").append(a);
         }
    })
    $(".heroSubmit").empty();
    hero = $(".heroSearch").val();
    $(".filter").empty();
    for(var i = 0; i < topics.length; i++){
        var a = $("<button>");
         a.addClass("waves-effect waves-light btn " + topics[i]);
         a.attr("value", query);
         a.append(topics[i]);
         $(".filter").append(a);
         console.log(query);
     }

})