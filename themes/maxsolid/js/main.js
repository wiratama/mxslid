$(document).ready(function() {

  // Breakpoint
  function breakpoint() {
    $('body').restive({
      breakpoints: ['240', '320', '480', '640', '960', '1024', '1280'],
      classes: ['css-240', 'css-320', 'css-480', 'css-640', 'css-960', 'css-1024', 'css-1280'],
      force_dip: true
    });
  }
  breakpoint();
  $(window).resize(breakpoint);

  // Scroll to Page
  $('#navigation').find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate ({
      scrollTop: $(section).offset().top - 80
    }, 500, 'linear');
    $body.toggleClass('navigation-closed');
  });

  $('.nav-bar-fast-contact').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate ({
      scrollTop: $(section).offset().top - 80
    }, 500, 'linear');
    if ( $('body').is('.navigation-closed') ) {
      return;
    } else {
      $body.toggleClass('navigation-closed');
    };
  });

  // Trigger Hamburger
  var $hamburger = $('.hamburger');
  var $body      = $('body');
  $hamburger.on('click', function(e)  {
    e.preventDefault();
    $body.toggleClass('navigation-closed');
  });

  // Swiper Home Work
  var workSwiper = new Swiper ('.section-home-work .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 220,
    centeredSlides: true,
    //mousewheel: true,
    navigation: {
      nextEl: '.section-home-work .swiper-navigation .button-prev',
      prevEl: '.section-home-work .swiper-navigation .button-next'
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
      }
    }
  });

  // Swiper Home Team
  var workSwiper2 = new Swiper ('.section-home-team .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    centeredSlides: false,
    //mousewheel: true,
    navigation: {
      nextEl: '.section-home-team .swiper-navigation .button-prev',
      prevEl: '.section-home-team .swiper-navigation .button-next'
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        centeredSlides: true,
      }
    }
  });

  // Swiper Home Routine
  var workSwiper3 = new Swiper ('.section-home-routine .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    //mousewheel: true,
    navigation: {
      nextEl: '.section-home-routine .swiper-navigation .button-prev',
      prevEl: '.section-home-routine .swiper-navigation .button-next'
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        centeredSlides: true,
      }
    }
  });

  // Animation waypoints
  // --- section history
  $('section#history').waypoint(function() {
    $('section#history .section-title h2').addClass('title-animation-in');
  }, { offset: '500' });

  $('section#history').waypoint(function() {
    $('section#history .section-entry').addClass('entry-animation-in');
  }, { offset: '250' });

  $('section#history').waypoint(function() {
    $('section#history .section-button-wrapper').addClass('button-animation-in');
  }, { offset: '125' });

  // --- section service
  $('section#service').waypoint(function() {
    $('section#service .section-title h2').addClass('title-animation-in');
  }, { offset: '500' });

  $('section#service').waypoint(function() {
    $('section#service .section-entry q, section#service .section-entry p').addClass('entry-animation-in');
  }, { offset: '250' });

  $('section#service').waypoint(function() {
    $('section#service .figure-group-service figure').addClass('figure-animation-in');
  }, { offset: '125' });

  // --- section work
  $('section#work').waypoint(function() {
    $('section#work .section-title h2').addClass('title-animation-in');
  }, { offset: '500' });

  $('section#work').waypoint(function() {
    $('section#work .section-entry q, section#work .section-entry p').addClass('entry-animation-in');
  }, { offset: '250' });

  $('section#work .swiper-container').waypoint(function() {
    $('section#work .swiper-container').addClass('swiper-animation-in');
  }, { offset: '500' });

  $('section#work .swiper-container').waypoint(function() {
    $('section#work .swiper-navigation').addClass('navigation-animation-in');
  }, { offset: '500' });

  // --- section team
  $('section#team').waypoint(function() {
    $('section#team .section-title h2').addClass('title-animation-in');
  }, { offset: '500' });

  $('section#team').waypoint(function() {
    $('section#team .section-entry q, section#team .section-entry p').addClass('entry-animation-in');
  }, { offset: '250' });

  $('section#team .swiper-container').waypoint(function() {
    $('section#team .swiper-container').addClass('swiper-animation-in');
  }, { offset: '500' });

  $('section#team .swiper-container').waypoint(function() {
    $('section#team .swiper-navigation').addClass('navigation-animation-in');
  }, { offset: '500' });

  // --- section contact
  $('section#contact').waypoint(function() {
    $('section#contact .section-title h2').addClass('title-animation-in');
  }, { offset: '500' });

  $('section#contact').waypoint(function() {
    $('section#contact .form-default').addClass('form-animation-in');
  }, { offset: '250' });

  // --- section routine
  $('section#routine').waypoint(function() {
    $('section#routine .section-title h2').addClass('title-animation-in');
  }, { offset: '500' });

  $('section#routine .swiper-container').waypoint(function() {
    $('section#routine .swiper-container').addClass('swiper-animation-in');
  }, { offset: '500' });

  $('section#routine .swiper-container').waypoint(function() {
    $('section#routine .button-action-wrapper').addClass('button-animation-in');
  }, { offset: '400' });



  // Caches a jQuery object containing the header element
  var target 			= $('.nav-bar');
  var topNavigation	= $('section.section-hero');
  function _scrollOn() {
    $(window).scroll(function() {
        var _scroll = $(window).scrollTop();

        if ( $('body').hasClass('navigation-installed') && _scroll >= 76 ) {
            target.addClass('navbar-animate');
        } else {
            target.removeClass('navbar-animate');
        }

        if ( $('body').hasClass('navigation-installed') && _scroll >= $(window).outerHeight() ) {
            $('.nav-bar .bg').addClass('navbar-bg-animate');
            target.removeClass('navbar-animate');
        } else {
            $('.nav-bar .bg').removeClass('navbar-bg-animate');
        }

        // if ( $('body').hasClass('desktop') && _scroll >= $('#post-hero').height() ) {
        //   topNavigation.addClass('on');
        // } else {
        //   topNavigation.removeClass('on');
        // }
    });
  }

  _scrollOn();
  $(window).resize(_scrollOn);

});
