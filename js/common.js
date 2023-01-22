$(window).ready(function () {
   let wW = window.innerWidth;
   let wH = window.innerHeight;
   const body = $("body");
   const hd = $('#osc-hd');
   let hdH = hd.innerHeight;
   let sideBarOpener = $('.side-bar-open');
   let sideBarCloser = $('.side-bar-close');
   let gnbWrap = $('.gnb-wrap');
   let sideBar = $('.side-bar');
   let depth1a = $('.depth1>li>a')
   
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
      } else if (wW >= 768 && wW < 1280) {
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
      if (body.hasClass("mo")) {
          $(".depth2").stop().slideUp();
      } else {
          $(".depth2").stop().slideDown();
      }
  }
  
//모바일 GNB 작동
$(".depth1>li").on({
   "click": (function () {
       if (body.hasClass("mo")||body.hasClass("tb")) {
           $(this).children(depth1a).toggleClass("show");
           $(this).children(".depth2").stop().slideToggle(300);
           $(this).siblings().find(".depth2").stop().slideUp(300);
           $(this).siblings().children().removeClass('show');
       }
   })
});
//헤더 GNB 작동
   hd.on({
      "mouseenter": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            $(this).addClass(("active"));
         }
      },
      "mouseleave": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            $(this).removeClass("active");
         }
      }
   });

   
   sideBarOpener.on({
      "click": function () {
         if (body.hasClass("mo")||body.hasClass("tb")) {
            gnbWrap.addClass("open")
            $(".depth2").stop().slideUp();
         }
      }
   });
   sideBarCloser.on({
      "click": function () {
         if (body.hasClass("mo")||body.hasClass("tb")) { 
            gnbWrap.removeClass("open")
            $(".depth2").stop().slideUp();
         }
      }
   });
})