$(function() {

    $('.header__mobmenu-btn').click(function() {
        $('.menu ul').slideToggle();
    });

    $('.header__search-open, .header__search-close').click(function() {
        if ($("#myOverlay").is(':hidden')) {
            $("#myOverlay").slideDown(500);
        } else {
            $("#myOverlay").slideUp(500);
        }
    });
});