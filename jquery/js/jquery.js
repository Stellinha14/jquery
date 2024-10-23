// $(document).ready(function(){

//     $("p").css({
//         "border" : "1px solid #000",
//         "background-color" : "green"
//     }).click(
//         function(){
//             alert('paragrafo');

//             //this é igual ao ultimo elemento utilizado, no caso o 'p' - $(p) = $(this)
//             $(this).css("background-color" , "yellow");
//         }
//     )
// })
$(document).ready(function(){

   
}) 
let visible = 0;
$("#ver").click(
    function(){
        if(visible==0){
            $("#texto").hide();
            visible = 1
        }else{
            $("#texto").show();
            visible = 0;
        }
      
    }
)
// $(".fad").click(
//     function(){
//         if(efeito == 1){
//             $("#texto").fadeIn(5000);
//             efeito = 0;
//         }else{
//             $("#texto").fadeOut(5000);
//             efeito = 1;
//         }
      
//     }
// )
