$(document).ready(function() {

    var topics = ["Toys", "Games", "Movies", "Stats", "Comic Books"];

    $(document).on("click",".Stats", function() {
        var superHero = $(".Stats").val();
        var queryURL = "https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/10155912004548192/search/" +
        superHero + "/id/powerstats";

        $.ajax({
            url: queryURL,
            method: "GET",

          })
          .then(function(response) {

            var results = response.results;
           for (var i = 0; i < results.length; i++) {
            // $(".story").html(JSON.stringify(results[i].powerstats));
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
    });
});