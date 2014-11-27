/***SET SECTION HEIGHT***/
$(window).ready(function() {

    //GET HEIGHT OF BROWSER TO SET SECTIONS
    var h = $(window).height();
    var w = $(window).width();
    $("#landing").css("height", h);
    //$("#about").css("height", h/2);
    $("#container").css("height", h);
    if (w < 1000) {
      $("#container").css("height", h*2);
    }

    if (w < 775) {
      $("#container").css("height", h*3);
    }
    $("#contact").css("height", h/2);

    $(window).resize(function() {
        var h = $(window).height();
        $("#landing").css("height", h);
        //$("#about").css("height", h/2);
        $("#container").css("height", h);
        var w = $(window).width();
        if (w < 1000) {
          $("#container").css("height", h*2);
        }
        if (w < 775) {
          $("#container").css("height", h*3);
        }
        $("#contact").css("height", h/2);
    });


    //FADE IN ELEMENTS
    var prevScroll = 0;
    $(window).scroll(function(){
      var h = $(window).height();
      var currScroll = $(this).scrollTop();

        //scroll down
        if (currScroll > prevScroll) {

          //fade title on landing
          if (currScroll > h/4) {
            $("#centered").fadeOut('slow');
            $("#arrow").fadeOut("slow");
          }

          //ABOUT SECTION SLIDING
          if (currScroll > h/2) {
            $("#about-title").addClass('animated fadeInDown').css("opacity", "1");
            setTimeout(function() {
              $("#about1").addClass('animated bounceInUp').css("opacity", "1");
            }, 300);
            setTimeout(function() {
              $("#about2").addClass('animated bounceInUp').css("opacity", "1");
            }, 900);
            setTimeout(function() {
              $("#about3").addClass('animated bounceInUp').css("opacity", "1");
            }, 1500);
          }

          //PORTFOLIO SLIDING
          var w = $(window).width();

          //WINDOW LARGER THAN 1000px
          if (w > 1000) {
            if(currScroll > h) {
              $("#port-title").addClass('animated fadeInDown').css("opacity", "1");
              setTimeout(function() {
                $("#one").addClass('animated fadeInUp').css("opacity", "1");
              }, 300);
              setTimeout(function() {
                $("#two").addClass('animated fadeInUp').css("opacity", "1");
              }, 600);
              setTimeout(function() {
                $("#three").addClass('animated fadeInUp').css("opacity", "1");
              }, 900);
            }

            if (currScroll > 1.5*h) {
                $("#four").addClass('animated fadeInUp').css("opacity", "1");
              setTimeout(function() {
                $("#five").addClass('animated fadeInUp').css("opacity", "1");
              }, 300);
              setTimeout(function() {
                $("#six").addClass('animated fadeInUp').css("opacity", "1");
              }, 600);
            }

            //CONTACT SLIDING
            if (currScroll > 2*h) {
              $("#contact-title").addClass('animated fadeInUp').css("opacity", "1");
              setTimeout(function() {
                $("#fb").addClass('animated bounceInUp').css("opacity", "1");
              }, 300);
              setTimeout(function() {
                $("#twitter").addClass('animated bounceInUp').css("opacity", "1");
              }, 600);
              setTimeout(function() {
                $("#insta").addClass('animated bounceInUp').css("opacity", "1");
              }, 900);
            }
          }

          //WINDOW SMALLER THAN 775px
          else if (w <= 775) {
            if (currScroll > h*1.3) {
              $("#port-title").addClass('animated fadeInDown').css("opacity", "1");
              setTimeout(function() {
                $("#one").addClass('animated fadeInUp').css("opacity", "1");
              }, 300);
            }

            if (currScroll > h*2) {
              $("#two").addClass('animated fadeInUp').css("opacity", "1");
            }

            if (currScroll > h*2.4) {
              $("#three").addClass('animated fadeInUp').css("opacity", "1");
            }

            if (currScroll > h*2.9) {
              $("#four").addClass('animated fadeInUp').css("opacity", "1");
            }

            if (currScroll > 3.4*h) {
              $("#four").addClass('animated fadeInUp').css("opacity", "1");
            }

            if (currScroll > 3.9*h) {
                $("#five").addClass('animated fadeInUp').css("opacity", "1");
            }

            if (currScroll > 4.4*h) {
                $("#six").addClass('animated fadeInUp').css("opacity", "1");
            }

            //CONTACT SLIDING
            if (currScroll > 4.5*h) {
              $("#contact-title").addClass('animated fadeInUp').css("opacity", "1");
              setTimeout(function() {
                $("#fb").addClass('animated bounceInUp').css("opacity", "1");
              }, 300);
              setTimeout(function() {
                $("#twitter").addClass('animated bounceInUp').css("opacity", "1");
              }, 600);
              setTimeout(function() {
                $("#insta").addClass('animated bounceInUp').css("opacity", "1");
              }, 900);
            }
          }


          //WINDOW BETWEEN 775 AND 1000
          else if ((w > 775) && (w <= 1000)) {
            if(currScroll > h) {
              $("#port-title").addClass('animated fadeInDown').css("opacity", "1");
              setTimeout(function() {
                $("#one").addClass('animated fadeInUp').css("opacity", "1");
              }, 300);
              setTimeout(function() {
                $("#two").addClass('animated fadeInUp').css("opacity", "1");
              }, 600);
            }

            if (currScroll > 1.8*h) {
              $("#three").addClass('animated fadeInUp').css("opacity", "1");
              setTimeout(function() {
                $("#four").addClass('animated fadeInUp').css("opacity", "1");
              }, 300);
            }

            if (currScroll > 2.5*h) {
                $("#five").addClass('animated fadeInUp').css("opacity", "1");
              setTimeout(function() {
                $("#six").addClass('animated fadeInUp').css("opacity", "1");
              }, 300);
            }

            //CONTACT SLIDING
            if (currScroll > 3*h) {
              $("#contact-title").addClass('animated fadeInUp').css("opacity", "1");
              setTimeout(function() {
                $("#fb").addClass('animated bounceInUp').css("opacity", "1");
              }, 300);
              setTimeout(function() {
                $("#twitter").addClass('animated bounceInUp').css("opacity", "1");
              }, 1000);
              setTimeout(function() {
                $("#insta").addClass('animated bounceInUp').css("opacity", "1");
              }, 1700);
            }
          }
        }

        //scroll up
        else {
          if (currScroll < h/2) {
            $("#centered").fadeIn('slow');
            $("#arrow").fadeIn("slow");
          }
        }

     prevScroll = currScroll;
   });
});