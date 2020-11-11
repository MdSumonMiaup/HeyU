/*
        About          
=========================
/*
 Template Name: HeyU - Apps Landing Page 
 Template URI: https://mdsumonmia.me/template/heyu
 Author URI: https://mdsumonmia.me/
*/

jQuery(document).ready(function($){
  
/*
      Table Index       
========================
:: 1. Preloader
:: 2. OnePageNav
:: 3. Sticky Menu
:: 4. 4. Back to Top
*/

  "use strict"
  
/*=====| 1. Preloader |=====*/

var loader = function() {
  setTimeout(function() { 
    if($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }, 1);
};
loader();

/*=====| 2. OnePageNav |=====*/
$('#nav').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing'
});
  
});

/*=====| 3. Sticky Menu |=====*/
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $('.stickynav').addClass('sticky');
      
    }
    else {
      $('.stickynav').removeClass('sticky');
    }
})


  function navbg(x) {
    if (x.matches) { // If media query matches
      $('.stickynav').addClass('sticky');
    } else {
      $('.stickynav').removeClass('sticky');
    }
  }
  var x = window.matchMedia("(max-width: 767px)")
  navbg(x) 
  x.addListener(navbg);

/*=====| 4. Back to Top |=====*/
var btn = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});
