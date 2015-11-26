// cloud 1
$(function() {
    var img = $("#cloud_1"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 15000;

    function animatePlane() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animatePlane);
    }

    animatePlane();
//cloud 2
    var img = $("#cloud_2"),
        width = img.get(0).width,
        screenWidth = $(window).width(),

        duration = 25000;

    function animatePlane() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animatePlane);
    }

    animatePlane();





});

