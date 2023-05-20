$(window).ready(function () {
   let wW = window.innerWidth;
   let wH = window.innerHeight;
   const body = $("body");
   const hd = $('#osc-hd ');
   let gnbOpener = $('.gnb-open');
   let gnbCloser = $('.gnb-close');
   let gnbWrap = $('.gnb-wrap');
   let depth1a = $('.depth1>li>a');
   let menuPullDown = $('.all-menu-open');
   let menuCloser = $('.all-menu-close');
   let modal = $('.modal');
   let allMenu = $('#all-menu');
   let depth2 = $(".depth2");
   let loginFormOpen = $(".login-form-open");
   let loginFormClose = $(".login-form-close, .modal");
   
   rwd();

   $(window).resize(function () {
      rwd();
   });
   
   function rwd() {
      wW = window.innerWidth;
      if (wW < 768) {
         body.addClass("mo").removeClass("tb pc");
         depth1a.click(function(e) {
            e.preventDefault();
         })
      } else if (wW >= 768 && wW < 1024) {
         body.addClass("tb").removeClass("mo pc");
         depth1a.click(function(e) {
            e.preventDefault();
         })
      } 
      else {
         body.addClass("pc").removeClass("mo tb");
         depth2.stop().show();
      }
   };  

   //PC GNB 활성화
   function pcGnb() {
      hd.on({
         "mouseenter": function () {
            if (body.hasClass("pc")) {
                  $(this).addClass("active");
                  if($("#ol_before, #ol_after").hasClass("open")) { 
                     $(this).off(); //로그인창이 열리면 헤더 작동 방지
                  }
            }
         },
         "mouseleave": function () {
            if (body.hasClass("pc")) {
               $(this).removeClass("active");
            }
         }
      });
   };
   pcGnb();

   function mobileGnbOpCl() { //모바일 GNB 열고 닫기
      gnbOpener.on({
         "click": function () {
            if (body.hasClass("mo")||body.hasClass("tb")) {
               gnbWrap.addClass("down");
            }
         }
      });
      gnbCloser.on({
         "click": function () {
            if (body.hasClass("mo")||body.hasClass("tb")) { 
               gnbWrap.removeClass("down")
               depth2.stop().slideUp();
            }
         }
      });
   };
   mobileGnbOpCl();

   function mobileGnb() { //모바일 GNB depth1 작동
      $(".depth1>li").on({
         "click": (function () {
            if (body.hasClass("mo")||body.hasClass("tb")) {
               $(this).children(".depth2").stop().slideDown(300);
               $(this).siblings().find(".depth2").stop().slideUp(300);
            }
         })
      });
   };
   mobileGnb();

   function siteMapOpCl(){ //사이트맵 열고 닫기
      menuPullDown.on ({
         "click":function() {
            if (body.hasClass("pc")) {
               allMenu.addClass("slide");
               $(this).fadeOut();
            }
         }
      });
      menuCloser.on ({
         "click":function() {
            if (body.hasClass("pc")) {
               allMenu.removeClass("slide");
               menuPullDown.fadeIn();
            }
         }
      });
   };
   siteMapOpCl();

   function loginFornOpCl(){  //로그인폼 열고닫기
      loginFormOpen.on ({  
         "click":function() {
            if (body.hasClass("pc")) {
               $("#ol_before").addClass("open");
               $("#ol_after").addClass("open");
               modal.show();
               hd.removeClass("active");
               
            }
         }
      });
      loginFormClose.on ({
         "click":function() {
            if (body.hasClass("pc")) {
               $("#ol_before").removeClass("open");
               $("#ol_after").removeClass("open");
               modal.hide();
               loginFormOpen.show();
               $(".regist-modal").hide();
               $(".find-modal").hide();
            }
         }
      });
   };
   loginFornOpCl();

   //패스워드 찾기 모달
   $('.pw-find').click(function(){
      $(".find-modal").show();
   });

   //회원가입 모달
   $('.btn-join').click(function(){
      $(".regist-modal").show();
   });

   // $("a").click(function(){
   //    if($(this).attr("href") === "#"){
   //       return false;
   //    }
   // })
})