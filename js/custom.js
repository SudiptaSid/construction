// Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
})
// Fixed Menu
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".c_menu").addClass("fixed_menu");
    } else {
        $(".c_menu").removeClass("fixed_menu");
    }
});
// Stat Counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});
// Lightbox
$(function(){
    var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
  });