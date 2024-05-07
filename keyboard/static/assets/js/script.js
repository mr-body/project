window.addEventListener("load", function () {
        document.querySelector(".loading").style.display = "none";
});

var backR = 0; //back red
var backG = 100; //back green
var backB = 0; //back blue;
//using these to help get the value for the back RGB for the gradient trasition
var frontR = 10;
var frontG = 50;
var frontB = 40;

var keyR; //key red;
var keyG; //key green
var keyB; //key blue

$(document).ready(function() {

  $('.key').click(function() {
    keyR = Math.floor((Math.random() * 255) + 0);
    keyG = Math.floor((Math.random() * 255) + 0);
    keyB = Math.floor((Math.random() * 255) + 0);

    var theKey = $(this).css('color', 'rgb(' + keyR + ',' + keyG + ',' + keyB + ')');

    setTimeout(function() {
      $(theKey).css('color', 'white');
    }, 1000);

  });

  setInterval(function() {
    changeBack();
  }, 30);

  function changeBack() {
    
      gradientControl();

    $('.base').css("background", "-webkit-linear-gradient(right, rgb(" + frontR + "," + frontG + "," + frontB + "), rgb(" + backR + "," + backG + "," + backB + ")");
  }

  function gradientControl() {
    backR += 5;
    backG += 5;
    backB += 5;

    frontR = frontR + 5;
    frontG = frontG + 5;
    frontB = frontB + 5;

    if (backR == 255)
      backR = 0;
    else if (backG == 255)
      backG = 0;
    else if (backB == 255)
      backB = 0;

    if (frontR == 255)
      frontR = 0;
    else if (frontG == 255)
      frontG = 0;
    else if (frontB == 255)
      frontB = 0;
  }
});