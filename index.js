$(".menuLogo").on("click", function() {
    $(".menuLogo").fadeOut(200);
    $(".sidebar").fadeIn(200);
})

$(".cancelLogo").on("click", function() {
    $(".sidebar").fadeOut(200);
    $(".menuLogo").fadeIn(200);
})