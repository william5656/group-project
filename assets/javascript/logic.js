$(document).ready(function() {

    
    
    $(".searchBtn").on("click", function(){
        var getInput = $(".searchTerm").val();
        //console.log(getInput);
        localStorage.setItem("query",getInput);
    });
        //localStorage.setItem("query",getInput);

        
    

    var query = localStorage.getItem("query");

    $(document).on("click",".Stats", function() {
        var superHero = $(".Stats").val();
        var queryURL1 = "https://cryptic-headland-94862.herokuapp.com/http://superheroapi.com/api/10155912004548192/search/" +
        superHero + "/id/powerstats";

        $.ajax({
            url: queryURL1,
            method: "GET",

          })
          .then(function(response) {

            var results = response.results;
           for (var i = 0; i < results.length; i++) {
            $(".story").html(JSON.stringify(results[i].powerstats));
             /*console.log(results[i].powerstats);
             console.log("hi");*/
           }
        });   
    })
    

 /*    $(document).on("click",".Movies", function() {
        var movie = $(".Movies").val();
        var queryURL2 = "http://www.omdbapi.com/?apikey=trilogy&s=" + movie;

        $.ajax({
            url: queryURL2,
            method: "GET",

          })
          .then(function(response) {
            
              $(".mainImage").attr("src",response.Search[0].Poster);  
               console.log(response.Search[0]);
           
        });   
    })*/

})