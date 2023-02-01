$(window).ready(function () {
   let wW = window.innerWidth;
   let wH = window.innerHeight;
   const body = $("body");
   const hd = $('#osc-hd');
   let hdH = hd.innerHeight;
   let gnbOpener = $('.gnb-open');
   let gnbCloser = $('.gnb-close');
   let gnbWrap = $('.gnb-wrap');
   let depth1a = $('.depth1>li>a')
   let menuPullDown = $('.menu-open');
   let menuCloser = $('.all-menu-close');
   let allMenu = $('#all-menu');

   rwd();

   $(window).resize(function () {
      rwd();
      reset();
   });

   function rwd() {
      wW = window.innerWidth;
      wH = window.innerHeight;
      if (wW < 768) {
         body.addClass("mo").removeClass("tb pc");
         $(".depth2").stop().slideUp();
         $(".section").addClass("fp-auto-height");
      } else if (wW >= 768 && wW < 1024) {
         body.addClass("tb").removeClass("mo pc");
      } else {
         body.addClass("pc").removeClass("mo tb");
         
      }
   }

   function reset() {
      hdH = hd.height();
      gnbReset();
  }

  function gnbReset() {
      if (body.hasClass("mo")||body.hasClass("tb")){
      }
  }
  
  

//모바일 GNB 작동
$(".depth1>li").on({
   "click": (function () {
       if (body.hasClass("mo")||body.hasClass("tb")) {
           $(this).children(".depth2").stop().slideToggle(300);
           $(this).siblings().find(".depth2").stop().slideUp(300);
       }
   })
});
//헤더 GNB 작동
   hd.on({
      "mouseenter": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            $(this).addClass("active");
         }
      },
      "mouseleave": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            $(this).removeClass("active");
         }
      }
   });
   
   gnbOpener.on({
      "click": function () {
         if (body.hasClass("mo")||body.hasClass("tb")) {
            gnbWrap.addClass("open");
         }
      }
   });
   gnbCloser.on({
      "click": function () {
         if (body.hasClass("mo")||body.hasClass("tb")) { 
            gnbWrap.removeClass("open")
            $(".depth2").stop().slideUp();
         }
      }
   });
   menuPullDown.on ({
      "click":function() {
         if (body.hasClass("pc")) {
            allMenu.addClass("down");
            $(this).fadeOut();
         }
      }
   })
   menuCloser.on ({
      "click":function() {
         if (body.hasClass("pc")) {
            allMenu.removeClass("down");
            menuPullDown.fadeIn();
         }
      }
   })
})