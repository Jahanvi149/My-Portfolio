'use strict';

var $ = jQuery;


// -------------------Responsive Menu--------------------

(function ($){
    jQuery(document).ready(function() {
        jQuery(".hamburger-menu").click(function(){
            jQuery(".menu-container").slideToggle(),
            jQuery("body").toggleClass("active")
        }),
        jQuery(".hamburger-menu").on("click", function() {
            jQuery(this).hasClass("active") ? jQuery(this).removeClass("active") : jQuery(this).addClass("active")
        })

        startAnimation();
        function startAnimation() {
            jQuery('.progressbar-wrap').each(function () {
                jQuery(this).find('.progress').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2000);
            });
        }

        var typed = new Typed(".typing", {
            strings: [
              "Front-end Developer" 
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
          });

    });

    jQuery('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = jQuery(jQuery(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    jQuery('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});


})(jQuery);

