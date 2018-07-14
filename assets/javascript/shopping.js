$(function(){

    var shoppingQuery = localStorage.getItem("query");

    var shoppingQueryURL = "https://cors-anywhere.herokuapp.com/http://open.api.ebay.com/shopping?&callname=FindItems&appID=DanHomon-s-PRD-98bb06b1d-de4b9aaa&QueryKeywords=" + shoppingQuery

    $.ajax({
        url: shoppingQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

});