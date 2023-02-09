$(window).ready(function () {
   let wW = window.innerWidth;
   let wH = window.innerHeight;
   const body = $("body");
   const hd = $('#osc-hd');
   let gnbOpener = $('.gnb-open');
   let gnbCloser = $('.gnb-close');
   let gnbWrap = $('.gnb-wrap');
   let depth1 = $('.depth1');
   let depth1a = $('.depth1>li>a')
   let menuPullDown = $('.all-menu-open');
   let menuCloser = $('.all-menu-close');
   let allMenu = $('#all-menu');

   rwd();

   $(window).resize(function () {
      rwd();
   });

   function rwd() {
      wW = window.innerWidth;
      wH = window.innerHeight;
      if (wW < 768) {
         body.addClass("mo").removeClass("tb pc");
         $(".depth2").stop().slideUp();      
      } else if (wW >= 768 && wW < 1024) {
         body.addClass("tb").removeClass("mo pc");
      } else {
         body.addClass("pc").removeClass("mo tb");
         $(".depth2").show();
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


   
   //PC GNB 활성화
   hd.on({
      "mouseenter": function () {
         if (body.hasClass("pc")) {
            hd.addClass("active");
         }
      }
   });
   //PC GNB 비활성화
   hd.on({
      "mouseleave": function () {
         if (body.hasClass("pc")) {
            hd.removeClass("active");
         }
      }
   })
  

   //모바일 GNB 열기
   gnbOpener.on({
      "click": function () {
         if (body.hasClass("mo")||body.hasClass("tb")) {
            gnbWrap.addClass("open");
         }
      }
   });
   
   //모바일 GNB 닫기
   gnbCloser.on({
      "click": function () {
         if (body.hasClass("mo")||body.hasClass("tb")) { 
            gnbWrap.removeClass("open")
            $(".depth2").stop().slideUp();
         }
      }
   });

   //사이트맵 열기
   menuPullDown.on ({
      "click":function() {
         if (body.hasClass("pc")) {
            allMenu.addClass("down");
            $(this).fadeOut();
         }
      }
   })
   //사이트맵 닫기
   menuCloser.on ({
      "click":function() {
         if (body.hasClass("pc")) {
            allMenu.removeClass("down");
            menuPullDown.fadeIn();
         }
      }
   })
})