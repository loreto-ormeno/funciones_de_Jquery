$(document).ready(function(){
    $("#boton").click(function(){
        $("h1, h2").addClass("text-primary");
    });
    $("#hide").on('click',function(){
        $(".parrafo").hide();
    });
    $("#show").on('click',function(){
        $(".parrafo").show();
    });
    $('#header3').hover(function(){
        $(this).append('Este texto apareció de la nada');
    });
    $("#p1").mouseenter(function(){
        alert("El mouse esta pasado por el parrafo");
    });
    $('.externo').click(function() {
        alert("Estas dejando nuestra página...");
    });
    $("#boton2").click(function(){
        $(".div1").fadeOut();
        $(".div2").fadeOut("slow");
        $(".div3").fadeOut(3000);
    });
    $("#b").on('click',function(){
        $(".p1").slideUp(2000);
    });
    $("#b").on('click',function(){
        $(".p1").slideDown(2000);
    });
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("Hello world!!!!!");
    });
    $("#btn3").click(function(){
        $("#test3").val("Pato Donald");
    }); 
                 
});