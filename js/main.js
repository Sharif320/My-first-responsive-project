$(document).ready(function () {
                                          // -----home 1 jquery code start----- //

  // ------preloader js start------// 


  $(window).on("load", function () {
    var preloader = $(".preloader");
    preloader.delay(300).fadeOut();
  })


  //-------- prelaoder js end -------//



  //--------- sticky home1  nav bar started-------// 


  var bt_stick;
  if ($(".main-nav").hasClass('main-stick')) {
    var bt_stick = $(".main-nav").offset().top;
  }
  $(window).scroll(function () {
    var jlscroll = $(window).scrollTop();
    if (jlscroll > bt_stick) {
      $(".main-nav.main-stick").addClass("nav-sticky");
      var nav_height = $(".main-nav.main-stick").outerHeight();
      $("blank-nav").css({
        "height": nav_height
      });
    } else {
      $(".main-nav.main-stick").removeClass("nav-sticky");
      $("blank-nav").css({
        "height": 0
      });
    }
  });
  //--------- sticky nav bar end--------// 





// --------slider image source--------// 

  var img = $(".home-item");
  img.css("background-image", function () {
    var bg = "url(" + $(this).data("background") + ")";
    return bg;
  });


  
  // ---------slick slider----------// 


  //--------- home slider ---------//
  $('.home-active').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: true

  });

  // --------counter area start------// 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });





  //---------------- home2 jquery element---------------------- //



  //----- home 2 sticky nav bar started----- //


  var bt_stick;
  if ($(".home2-nav").hasClass('main-stick')) {
    var bt_stick = $(".home2-nav").offset().top;
  }
  $(window).scroll(function () {
    var jlscroll = $(window).scrollTop();
    if (jlscroll > bt_stick) {
      $(".home2-nav.main-stick").addClass("home2-sticky");
      var nav_height = $(".home2-nav.main-stick").outerHeight();
      $("blank-nav").css({
        "height": nav_height,
        backgroundcolor: "white"
      });
      $(".home2-nav .navbar-nav  li a").css({

        color: "black"
      });
    
      $('.home2-nav .navbar-nav li a').hover(function () {
        $(".home2-nav .navbar-nav li a").css({
          color: "black"
        });



      });
      $(".home2-nav .navbar-nav  li span i").css({

        color: "black"
      });
    }
    else {
      $(".home2-nav.main-stick").removeClass("home2-sticky");
      $("blank-nav").css({
        "height": 0
      });
      $(".home2-nav .navbar-nav li a").css({

        color: "white"
      });
      $(".home2-nav .navbar-nav .dropdown-main li a").css({

        color: "black"
      });
      $('.home2-nav .navbar-nav li a').hover(function () {
        $(".home2-nav .navbar-nav li a").css({
          color: "white"
        });
      }),
     

        $(".home2-nav .navbar-nav  li span i").css({

          color: "white"
        });
     
    }
  })
  //----- home 2 sticky nav bar end----- //

  //-------- home slider started------ //
  $('.home-active').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: true

  });

   //-------- home slider end ------ //


})
$(document).ready(function(){
  $('#bar1').barfiller({
    tooltip: false,
    barColor: "#ff5200",
    animateOnResize: false
  }
  
  );
  $('#bar2').barfiller({
    tooltip: false,
    barColor: "#ff5200"
  }
   
  );
  $('#bar3').barfiller({
    tooltip: false,
    barColor: "#ff5200"
  });
  $('#bar4').barfiller({
    tooltip: false,
    barColor: "#ff5200"
  });
  $('#bar5').barfiller({
    tooltip: false,
    barColor: "#ff5200"
  });

})