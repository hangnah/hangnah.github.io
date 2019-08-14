var moveForce = 30; // max popup movement in pixels

var options = {
    duration: 1,
    easing: 'linear'
 };

$('#header-container-wrapper').mousemove(function (e) {

    var circle1X = $('#circle1').width();
    var circle1Y = $('#circle1').height();

    var move1X = (e.pageX - circle1X / 1.5) / (circle1X / 1.5) * -moveForce;
    var move1Y = (e.pageY - circle1Y / 1.5) / (circle1Y / 1.5) * -moveForce;

    $('#circle1')
        .css('left', move1X + 'px')
        .css('top', move1Y + 'px')
        .css('transition', 'all 0.4s ease-out 0s');

    var circle2X = $('#circle2').width();
    var circle2Y = $('#circle2').height();

    var move2X = (e.pageX - circle2X / 1.5) / (circle2X / 1.5) * -moveForce;
    var move2Y = (e.pageY - circle2Y / .8) / (circle2Y / .8) * -moveForce;

    $('#circle2')
        .css('left', move2X + 'px')
        .css('top', move2Y + 'px')
        .css('transition', 'all 0.4s ease-out 0s');

    var circle3X = $('#circle3').width();
    var circle3Y = $('#circle3').height();

    var move3X = (e.pageX - circle3X / .1) / (circle3X / .1) * -moveForce;
    var move3Y = (e.pageY - circle3Y / .3) / (circle3Y / .3) * -moveForce;
    $('#circle3')
        .css('left', move3X + 'px')
        .css('top', move3Y + 'px')
        .css('transition', 'all 0.4s ease-out 0s');
});