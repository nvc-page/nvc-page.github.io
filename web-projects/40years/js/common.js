var F=0;
$(document).ready(function(){

//photo 1-8
//row 1-8
//img/banner 1-32
  function myFunction(){
  var photoX = "photo"+Math.round(Math.random()*8 + 1);
  var rowX = "row"+Math.round(Math.random()*8 + 1);
  var imgX = "img/banner/"+Math.round(Math.random()*32 + 1)+".jpg";
  
  $("."+rowX+" ."+photoX+" .tile_in").css("background","url("+imgX+")");
  //console.log(photoX + rowX + imgX)
  
}
$(window).on("load",function(){
  setInterval(myFunction,50)
})

//


// Logo 40th appear when load
$(window).on("load",function(){
  gsap.from(".logo40years-appear",13, {duration: 2, rotation:0, y:200, opacity:0, ease:"elastic"});
})

// TOGGLE MENU BUTTON
$(window).on("resize load",function(){
  var xHeight = $(".special-message-background2").height();
  if ($(window).width()>1080) {
    $(".newzealand-part-img").css({height:xHeight/1.5+"px"})
  } else {
    $(".newzealand-part-img").css({height:xHeight/3+"px"})
  }
});
//

$("#page-content, .menu ul li a, .logo").click(function(){
  $(".menu-btn").removeClass('open');
  F=0;
  $("#nav-bar .menu").removeClass("show-menu");
  $("#page-content").removeClass("move-left-effect");
})
//
$(".menu-btn, .close-menu").click(function(){
  if (F==0) {
    $(".menu-btn").addClass('open');
    F=1;
  } else{
    $(".menu-btn").removeClass('open');
    F=0;
  }
  $("#nav-bar .menu").toggleClass("show-menu");
  $("#page-content").toggleClass("move-left-effect");

});

// BACK TO TOP
  $('.totop').on('click', function(e) {
    e.preventDefault();
    $('body,html').animate({scrollTop:0}, 600, 'easeOutCubic');
  });
// JUMB TO BOTTOM
  // $('.badge').on('click', function(e) {
  //   e.preventDefault();
  //   $('body,html').animate({scrollTop:$('footer').offset().top - 100}, 600, 'easeOutCubic');
  // });


  $(window).on('load scroll', function(){
    var elementPosition = $(window).scrollTop();
    //var elementPosition_b = $(window).scrollTop() + $(window).height() - 200;
    //var content2 = $('.content2 .txts').offset().top;


    // SHOW/HIDE BACK TO TOP BUTTON
    if(elementPosition > 400){
      $('.totop').addClass('on');
    } else {
      $('.totop').removeClass('on');
    }

    // STORE ELEMENTS
    prlx('.box_wrp');
    prlx('.box li.imgs');
    prlx('.box li.txts');
    prlx('.timeline_header');
    prlx('.y2019 span');
    prlx('.box_wrp_2019 .txt');
    prlx('.greeting-text-en');
    prlx('.greeting-text-jp');
    prlx('.greeting-content-decor1 img');
    prlx('.greeting-content-decor2 img');
    prlx('.red-part-title');
    prlx('.red-part-text');
    prlx('.yellow-part-title');
    prlx('.yellow-part-text');
    prlx('.yellow-part-link img');
    prlx('.purple-part-text');
    prlx('.purple-part-title');
    prlx('.purple-part-link');
  });

//TYPING EFFECT

  // var i = 0;
  // var txt = `わーほりが 40 周年になるんだよ文章わーほり
  // が 40 周年になるんだよ文章わーほりが 40 周年
  // になるんだよ文章わーほりが 40 周年になるん
  // だよ文章わーほりが 40 周年になるんだよ文章
  // わーほりが 40 周年になるんだよ文章わーほり
  // が 40 周年になるんだよ文章わーほりが 40 周年
  // になるんだよ文章わーほりが 40 周年になるん
  // だよ文章わーほりが 40 周年になるんだよ文章
  // わーほりが 40 周年になるんだよ文章わーほり
  // が 40 周年になるんだよ文章わーほりが 40 周年
  // になるんだよ文章わーほりが 40 周年になるん
  // だよ文章わーほりが 40 周年になるんだよ文章
  // わーほりが 40 周年になるんだよ文章わーほり
  // が 40 周年になるんだよ文章わーほりが 40 周年
  // になるんだよ文章わーほりが 40 周年になるん`;

  // var speed = 100;

  // function typeWriter() {
  //   if (i < txt.length) {
  //     document.querySelector(".red-part-text.page1").innerHTML += txt.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // };
  // $(window).on('scroll', function(){
  //   var posX = $(".red-part-text.page1").offset().top;
  //   var screen = $(window).scrollTop();
  //   var screenHeight = $(window).innerHeight()*0.7
  //   if (screen + screenHeight > posX) {
  //     typeWriter();
  //   }
  // })

// SCROLL TO APPEAR EFFECT - MULTITIMES

  function prlx(tgt){
    $(tgt).each(function(){
      var tgt_s = $(this).offset().top;
      var offsetHeight = 200;
      if($(window).innerWidth() < 769){
        offsetHeight = $(window).innerWidth() * 0.2;
      }

      var elementPosition = $(window).scrollTop() + $(window).height() - offsetHeight;
      var elementPositionX = $(window).scrollTop() + $(window).height() + offsetHeight;

      if(tgt_s < elementPosition){
        $(this).addClass('show');
      } else if(tgt_s > elementPositionX){
        $(this).removeClass('show');
      }
    })
  };

// SCROLL TO APPEAR EFFECT - ONETIMES
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var windowsHeight = $(window).height();
      var winTop = $(window).scrollTop();
        if (pos < winTop + windowsHeight) {
          $(this).addClass("slide");
        } else if (pos > winTop + windowsHeight) {
          $(this).removeClass("slide");
        }
    });
  });
});
