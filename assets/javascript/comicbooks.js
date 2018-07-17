$(function(){

    var comicbooks = {
        image : "",
        name : "",
        issue_number : "",
        cover_date : "",
    }



    var query = localStorage.getItem("query");
    //console.log(query);
    function comicsAjax(){
        var key = "390f1045415ee2e2bbb6b090a5a6cc8457d2f4f0";
        //var test = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key="+ key +"&filter=name%3Adeadpool&format=JSON";
        var queryURL = "https://cryptic-headland-94862.herokuapp.com/https://comicvine.gamespot.com/api/search/?api_key=" + key + "&query=" + query + "&resources=issue&limit=1&format=JSON";
        //var test2 = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?api_key=390f1045415ee2e2bbb6b090a5a6cc8457d2f4f0&query=%3Abruce+wayne&limit=1&format=JSON"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //console.log(response);
            //console.log(response.results);
            
            //basic info

            comicbooks.name = response.results[i].name;
            comicbooks.image = response.results[i].image.thumb_url;
            comicbooks.issue_number = response.results[i].issue_number;
            comicbooks.publish_date = response.results[i].cover_date;

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
        });
    }
    
    $(".heroSubmit").on("click", function(event) {
        event.preventDefault();
        var getInput = $(".heroSearch").val();
        //console.log(getInput);
        localStorage.setItem("query", getInput);
        query = localStorage.getItem("query");
        $(".heroSearch").empty();

        renderButtons();
        heroAjax();
        renderChart();
    });

    function renderButtons(){
        $(".filter").empty();
        for(var i = 0; i < topics.length; i++){
            var a = $("<button>");
            a.addClass("waves-effect waves-light btn " + topics[i]);

            a.attr("value", query);
            a.append(topics[i]);
            $(".filter").append(a);

        }
    }
    

    function renderChart(){
        var queryURL = "https://cryptic-headland-94862.herokuapp.com/http://superheroapi.com/api/10155912004548192/search/" +
          query + "/id/powerstats"; 

        $.ajax({
            url: queryURL,
            method: "GET",

          })
          .then(function (response) {
              var results = response.results;
              for (var i = 0; i < results.length; i++) {
                console.log(results[i].powerstats);
                var heroStatsIntelligence = response.results[0].powerstats.intelligence;
                var heroStatsInt = JSON.parse(heroStatsIntelligence);
                console.log("Intelligence:" + heroStatsInt);

                var heroStatsStrength = response.results[0].powerstats.strength;
                var heroStatsStr = JSON.parse(heroStatsStrength);
                console.log("Strength:" + heroStatsStr);

                var heroStatsSpeed = response.results[0].powerstats.speed;
                var heroStatsSpd = JSON.parse(heroStatsSpeed);
                console.log("Speed:" + heroStatsSpd);

                var heroStatsDurability = response.results[0].powerstats.durability;
                var heroStatsDur = JSON.parse(heroStatsDurability);
                console.log("Durability:" + heroStatsDur);

                var heroStatsPower = response.results[0].powerstats.power;
                var heroStatsPow = JSON.parse(heroStatsPower);
                console.log("Power:" + heroStatsPow);

                var heroStatsCombat = response.results[0].powerstats.combat;
                var heroStatsCom = JSON.parse(heroStatsCombat);
                console.log("Combat:" + heroStatsCom);

          
                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
                        datasets: [{
                            label: 'Stats',
                            data: [heroStatsInt, heroStatsStr, heroStatsSpd,  heroStatsDur, heroStatsPow, heroStatsCom  ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 2
                        }]
                    },  options: {
                    
                        legend: {
                        display: false,
                        },
                        scale: {
                        ticks: {
                            beginAtZero:true,
                            max:100,
                            stepSize: 25,
                        },

                        xAxes: [{
                            gridLines: {
                            display: false,
                            drawBorder: false,
                            },
                            ticks: {
                            display: false,
                            
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                            drawBorder: false,
                            display: false,
                            beginAtZero: true,
                            },  
                            ticks: {
                            display: false,
                            beginAtZero: true,
                            }
                        }],
                            
                            },
                        tooltips: {
                        backgroundColor: '#1e90ff'
                        }
                    },
                    })
                    }
            })       
    }
    $(".chart-container").hide();

    $(".filter").on("click", ".Stats", function(){
        $(".chart-container").show();
    });
    heroAjax();
    renderChart();
    renderButtons();
});
