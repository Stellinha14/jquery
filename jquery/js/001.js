 //js
window.onload  = function () {
   let h =  document.getElementsByTagName("h1"); 
   h[0].style.color= "#7e46e8";
   
}

//jquery 
$(document).ready(function(){

    // referencia
    $("#jx").css("color", "#17bd11");

    $("#p1").css("background-color", "#47e6ce");

    $("#p2").css("background-color", "#c4aef5");

    //$("p:first")
    $('p').eq(0).css({"font-size" : "1.2em"});

    $("#bd").css("background-color", "#b0aeae");

})
