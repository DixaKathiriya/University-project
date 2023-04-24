/*------------------------------------------------------------------

Project:    Political Landing Page
Version:	1.6
Author:	    Iwthemes
Support:    support@iwthemes.com
Portfolio:  https://themeforest.net/user/iwthemes/portfolio?ref=iwthemes

-------------------------------------------------------------------*/

 (function ($) {
    "use strict";

     $(document).ready(function(){
       $(".testimonials ul").owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2500
        }
      );
    });

     $(document).ready(function(){
        $('.accordion-container').hide();
        $('.accordion-trigger:first').addClass('active').next().show();
        $('.accordion-trigger').click(function(){
        if( $(this).next().is(':hidden') ) {
            $('.accordion-trigger').removeClass('active').next().slideUp();
            $(this).toggleClass('active').next().slideDown();
        }
        return false;
        });
    });


 })( jQuery );
