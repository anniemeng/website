/***SET SECTION HEIGHT***/
$(window).ready(function() {
    //GET HEIGHT OF BROWSER TO SET SECTIONS
    var h = $(window).height();
    //$("#landing").css("height", h);

    $(window).resize(function() {
      var h = $(window).height();
      //$("#landing").css("height", h);
    });

    var menuLeft = document.getElementById( 'nav-menu' ),
            body = document.body;

    showLeft.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( menuLeft, 'open-menu' );
    };

    menuLeft.addEventListener("click", function() {
      classie.toggle( this, 'active' );
      classie.toggle( menuLeft, 'open-menu' );
    });
});