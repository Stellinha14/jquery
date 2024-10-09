$(document).ready(function(){

    $("p").css({
        "border" : "1px solid #000",
        "background-color" : "green"
    }).click(
        function(){
            alert('paragrafo');

            //this é igual ao ultimo elemento utilizado, no caso o 'p' - $(p) = $(this)
            $(this).css("background-color" , "yellow");
        }
    )
})
