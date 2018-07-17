$(document).ready(function() {

    
    
    $(".searchBtn").on("click", function(){
        var getInput = $(".searchTerm").val();
        //console.log(getInput);
        localStorage.setItem("query",getInput);
    });
        //localStorage.setItem("query",getInput);
    

})