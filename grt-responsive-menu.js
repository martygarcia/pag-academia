
(function( $ ){
	$.fn.grtmobile = function () {
		$('.grt-mobile-button').on('click', function(){
			$(this).toggleClass("grt-mobile-button-open");
			$("ul.grt-menu").toggleClass("open-grt-menu ");
			$("html, body").toggleClass("body-overflow");
		});
		$('li.grt-dropdown').on('click', function(e){
			$(this).toggleClass("active-dropdown");
		});
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();


// Add fixed class on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

// Prevent a href clicks on dropdown category item
$('li.grt-dropdown > a').on('click', function(e){
	e.preventDefault();
});
