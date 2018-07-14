$(function(){

  //$(".heroSubmit").on("click", function () {
        var superHero = localStorage.getItem("query");
        //var superHero = $(".heroSearch").val().trim();;
        var superHeroTest = "deadpool";
        console.log(superHero);
        var queryURL = "https://cryptic-headland-94862.herokuapp.com/http://superheroapi.com/api/10155912004548192/search/" +
          superHero + "/id/powerstats"; 

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
      //})
});