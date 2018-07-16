$(document).ready(function() {

    var query = localStorage.getItem("query");
    var heroID = "";
    
    
    var key = "390f1045415ee2e2bbb6b090a5a6cc8457d2f4f0";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=" + key + "&filter=name%3A" + query + "&limit=1&format=JSON";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

            heroID = response.results[0].id;  
    
        });   

        function displayMovie(){
        var queryURL = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/"+ heroID + "/movies/?api_key=" + key + "&filter=name%3A" + query + "&limit=10&format=JSON";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            
            $(".movie-box").empty();

            var movies = response.results
            console.log(movies);
            for(var i=0; i < movies.length; i++){

               var movieDiv = $("<div class = movie-container>");
               movieDiv.addClass("yo");

               var image = movies[i].image.small_url; 
               movieDiv.append("<img class = 'movie-holder' src='" + image  + "'>");

               var name = movies[i].name;
               movieDiv.append("<div class = title>" + name + "</div>");

               var rating = movies[i].rating;
               movieDiv.append("<div>" +  rating + "</div>")

               var info = movies[i].deck;
               movieDiv.append(info );

               $(".movie-box").append(movieDiv);

                console.log(movies[i].name);
            }
        });
    }


    $(".heroSubmit").on("click", function(event) {
        event.preventDefault();
        $(".heroSearch").empty();
        displayMovie();
    })

    displayMovie();
    
});
