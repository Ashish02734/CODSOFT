// Navbar Scroll Hide/Show Script 
$(window).scroll(function () {
    if ($(this).scrollTop() < 45) {
        $('.navbar-container').addClass('header-hidden');
    } else {
        $('.navbar-container').removeClass('header-hidden');
    }
});

// Back to top button script
$(window).scroll(function () {
  if ($(this).scrollTop() < 500) {
      $('.back-to-top').css('display', 'none');
  } else {
      $('.back-to-top').css('display', 'block');
  }
});

$(".back-to-top-svg").click(function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Burger Menu Drawer 
function navbarDrawer(){
    let ele = document.getElementById("navbarDrawer");
    let burgerSvg = document.getElementById("burger-svg");
    let crossSvg = document.getElementById("cross-svg");

    if (ele.style.width == "325px"){
        ele.style.width = "0px";
        ele.style.padding = "20px 0px";
        burgerSvg.style.display = "block";
        crossSvg.style.display = "none";
    }
    else{
        ele.style.width = "325px";
        ele.style.padding = "20px 20px";
        burgerSvg.style.display = "none";
        crossSvg.style.display = "block";
    }
}

// Slick Slider Script
$(document).ready(function(){
    $('.gallery-inner').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        variableWidth: true,
        arrows: true,
        dots: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
  });
          