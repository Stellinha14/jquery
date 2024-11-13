//1 exemplo
$(document).ready(function () {

});
// 2
$(function () {
    $("#accordion").accordion();

    function runEffect() {

        var selectedEffect = $("#effectTypes").val();
        console.log(selectedEffect);

        var options = {};
        
        if (selectedEffect === "scale") {
            options = { percent: 50 };
        } else if (selectedEffect === "size") {
            options = { to: { width: 500, height: 600 } };
        }

        $("#effect").effect(selectedEffect, options, 500, callback);

    } // fim da funçâo

    function callback() {
        setTimeout(function () {
            $("#effect").removeAttr("style").hide().fadeIn();
        }, 1000);
    };

    $("#button").on("click", function () {
        runEffect();
        return false;
    })

});