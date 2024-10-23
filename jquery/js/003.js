 $(".fade").click(
     ()=>{
        let efeito = 1;
        if(efeito == 1){
            $("#texto").fadeIn();
            efeito = 1;
        }
        else{
            $("#texto").fadeOut();
            efeito = 0;
        }
        alert(efeito)
    }
 )