// JavaScript source code

$(document).ready(function () {
    var BGcolor=["#ff0000", "#483D8B", "DeepSkyBlue","DarkTurquoise", "Fuchsia", "Indigo","MediumSpringGreen","MediumAquaMarine"];
    var x = 0;
    var y = 0
 
    $(".item").slideUp();
    $("#Menu").mouseenter(function () {
        $(".item").slideDown();
        $(".item").eq(1).click(function () {
            $("p").css("color", BGcolor[x]);
            x++;
            if (y > 2) { ($(".item").eq(1).unbind(click)),(y=0),(x=0) };
            if (x >= 7) { (x = 0), (y++) }});
        $(".item").eq(2).click(function ()  {
            $("body").css("background-color", BGcolor[x]);
            x++;
            if (y > 2) { $(".item").eq(2).unbind(click) };
            if (x >= 7) { (x = 0), (y++) }
        });
        $(".item").eq(0).click(function () {
            $("main, header, footer").hide(500);
        })
        $(".item").eq(0).click(function () {
            $("main, header, footer").hide(500);
        });
            $(".items").mouseleave(function () {
                $(".item").slideUp(500);
            })



     
           


          


                       
        }) 
    })

