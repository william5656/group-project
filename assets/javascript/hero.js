$(function(){

    var hero = {
        name : "",
        deck : "",
        realName : "",
        origin : "",
        imageUrl : "",
        aliases: "",
        gender: "",
        birth: "",
        firstAppearance: "",
        publisher: "",
        issueCount: "",
        heroID: ""
    }

    var topics = ["Toys", "Games", "Movies", "Stats", "Comic Books"];

    /*$(".heroSearch").on("click", function(){
        var getInput = $(".searchTerm").val();
        //console.log(getInput);
        localStorage.setItem("query",getInput);
    });*/
    

    var query = localStorage.getItem("query");
    //console.log(query);
    function ajaxCall(){
        var key = "390f1045415ee2e2bbb6b090a5a6cc8457d2f4f0";
        var queryURL = "https://cryptic-headland-94862.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=" + key + "&filter=name%3A" + query + "&limit=1&format=JSON";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //console.log(response);
            //console.log(response.results);
            
            //basic info
            hero.name = response.results[0].name;
            hero.realName = response.results[0].real_name;
            if (response.results[0].birth === null) {
                hero.birth = "Unknown";
            } else {
                hero.birth = response.results[0].birth;
            };
            hero.origin = response.results[0].origin.name;
            if (response.results[0].gender === 1) {
                hero.gender = "Male";
            } else if (response.results[0].gender === 2) {
            hero.gender = "Female";
            } else {
                hero.gender = "Other";
            };
            hero.aliases = response.results[0].aliases;

            // story
            hero.deck = response.results[0].deck;
            hero.imageUrl = response.results[0].image.original_url;
            
            //publication facts
            hero.firstAppearance = response.results[0].first_appeared_in_issue.issue_number + " - " + response.results[0].first_appeared_in_issue.name;
            hero.publisher = response.results[0].publisher.name;
            hero.issueCount = response.results[0].count_of_issue_appearances;

            $(".heroName").text(hero.name);
            $(".realName").text(" " + hero.realName);
            $(".dateOfBirth").text(" " + hero.birth);
            $(".heroRace").text(" " + hero.origin);
            $(".heroGender").text(" " + hero.gender);
            $(".aliases").text(" "+ hero.aliases);
            $(".story").text(hero.deck);
            $(".mainImage").attr("src", hero.imageUrl);
            $(".firstAppearance").text(hero.firstAppearance);       
            $(".publisher").text(hero.publisher);    
            $(".issueCount").text(hero.issueCount);
            
            hero.heroID = response.results[0].id;  
            console.log(hero.heroID);        
        });
    }
    ajaxCall();

    $(".heroSubmit").on("click", function(event) {
        event.preventDefault();
        var getInput = $(".heroSearch").val();
        localStorage.setItem("query", getInput);
        query = localStorage.getItem("query");
        $(".heroSearch").empty();
        renderButtons();
        ajaxCall();
    });
    function renderButtons(){
        $(".filter").empty();
        for(var i = 0; i < topics.length; i++){
            var a = $("<button>");
            a.addClass("waves-effect waves-light btn " + topics[i]);
            a.attr("value", query);
            a.append(topics[i]);
            $(".filter").append(a);
            console.log(query);
        }
    }
    
    renderButtons(); 
    
});


