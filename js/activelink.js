$(document).ready(function(){
    $(".menu > a").click(function(){
        $(".menu > a").removeClass("youarehere");
        $(this).addClass("youarehere");
    }) 
}
)