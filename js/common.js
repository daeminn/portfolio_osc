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
         $(".section").addClass("fp-auto-height");
         $(".develop, .business").css("width","inherit")      
      
      } else if (wW >= 768 && wW < 1024) {
         body.addClass("tb").removeClass("mo pc");
         $(".section").removeClass("fp-auto-height");
         $("#osc-ft").addClass("fp-auto-height");
         $(".develop, .business").css("width","50%")
      } else {
         body.addClass("pc").removeClass("mo tb");
         $(".section").removeClass("fp-auto-height");
         $("#osc-ft").addClass("fp-auto-height");
         $(".develop, .business").css("width","50%")
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


   //헤더 컬러변경
   hd.on({
      "mouseenter": function(){
         if (body.hasClass("pc") || body.hasClass("tb")){
            gnbWrap.addClass("color");
         }
      },
      "mouseleave": function(){
         if (body.hasClass("pc") || body.hasClass("tb")){
            gnbWrap.removeClass("color");
         }
      }
   })
   
   //PC GNB 활성화
   depth1.on({
      "mouseenter": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            hd.addClass("active");
            $('#fp-nav').css("opacity","0");
         }
      }
   });
   //PC GNB 비활성화
   hd.on({
      "mouseleave": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            hd.removeClass("active");
            $('#fp-nav').css("opacity","1");
         }
      }
   })
   //메인화면 sec01 table-cell 이벤트
   $(".develop, .business").on({
      "mouseenter": function(){
         if(body.hasClass("pc") || body.hasClass("tb")){
            $(this).css("width","70%");
            $(this).siblings().css("width","30%");
         }
      },
      "mouseleave": function(){
         if(body.hasClass("pc") || body.hasClass("tb")){
            $(this).css("width","50%");
            $(this).siblings().css("width","50%");
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