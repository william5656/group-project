$(function(){

    var shoppingQuery = localStorage.getItem("query");

    // var shoppingQueryURL = "http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=DanHomon-s-PRD-98bb06b1d-de4b9aaa&siteid=0&version=967&QueryKeywords=" + shoppingQuery + "&AvailableItemsOnly=true&MaxEntries=5"

    var shoppingQueryURL = "https://cors-anywhere.herokuapp.com/http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=DanHomon-s-PRD-98bb06b1d-de4b9aaa&siteid=0&version=967&QueryKeywords=" + shoppingQuery + "&AvailableItemsOnly=true&MaxEntries=3"


    $.ajax({
        url: shoppingQueryURL,
        method: "GET"
    }).then(function(response) {
        var json = JSON.parse(response);
        /*console.log(json);
        console.log(json.Product[0].DetailsURL);
        console.log(json.Product[0].Title);*/



        for(var i = 0; i < json.Product.length; i++) {
            var newDiv = $("<a>");
            newDiv.addClass("shoppingLinks");
            newDiv.attr("href", json.Product[i].DetailsURL);
            newDiv.text(json.Product[i].Title);
            $(".ebayLinks").append(newDiv);
            $(".ebayLinks").append("<br><br>");

        }

    });

    function ajaxCall(item){
        //var shoppingQuery = localStorage.getItem("query");

        // var shoppingQueryURL = "http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=DanHomon-s-PRD-98bb06b1d-de4b9aaa&siteid=0&version=967&QueryKeywords=" + shoppingQuery + "&AvailableItemsOnly=true&MaxEntries=5"

        var findingURL = "https://cors-anywhere.herokuapp.com/https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=DanHomon-s-PRD-98bb06b1d-de4b9aaa&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" 
        + shoppingQuery + "%20" + item 
        + "&itemFilter.name=TopRatedSellerOnly&itemFilter.value=true" ;


        $.ajax({
            url: findingURL,
            method: "GET"
        }).then(function(response) {
            var json = JSON.parse(response);
            console.log(json);
            console.log(json.findItemsByKeywordsResponse[0].searchResult[0].item[0].title[0]);
            console.log(json.findItemsByKeywordsResponse[0].searchResult[0].item[0].viewItemURL[0]);


            
            for(var i = 0; i < json.findItemsByKeywordsResponse[0].searchResult[0].item.length; i++) {

                var newRow = $("<a>").addClass("row productRow");
                newRow.attr("href", json.findItemsByKeywordsResponse[0].searchResult[0].item[i].viewItemURL[0])

                var imgCol = $("<div>").addClass("col s4 imgCol");
                var imgTag = $("<img>").attr("src", json.findItemsByKeywordsResponse[0].searchResult[0].item[i].galleryURL[0]);
                imgCol.append(imgTag);
                
                var toyCol = $("<div>").addClass("col s8 toyCol");
                var toyName = $("<h4>").addClass("toyName");
                toyName.text(json.findItemsByKeywordsResponse[0].searchResult[0].item[i].title[0]);
                toyCol.append(toyName);

                newRow.append(imgCol);
                newRow.append(toyCol);
                
                $(".toysCol").append(newRow);
            }

        });
    }

    ajaxCall("toy");
});