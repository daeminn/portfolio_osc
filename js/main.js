$(function(){
  const body = $("body");
  const hd = $('#osc-hd');
  const fpCon = $("#osc-main-container");
  let ftEl = $("#osc-ft").clone().addClass("section fp-auto-height");;
  fpCon.append(ftEl);
  fpCon.fullpage({
    navigationTooltips: ['01','02','03','04'],
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000,
    normalScrollElements: '.gnb-wrap, #all-menu',
    lazyLoading: true,
    showActiveTooltip:true,

   });

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
       $(".develop, .business").css("width","50%");
    } else {
       body.addClass("pc").removeClass("mo tb");
       $(".section").removeClass("fp-auto-height");
       $("#osc-ft").addClass("fp-auto-height");
       $(".develop, .business").css("width","50%");         
       $(".depth2").show();
    }
   }  

  
  //풀페이지 네비게이션 show/hide
  hd.on({
      "mouseenter": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            $('#fp-nav').css("opacity","0");
         }
      },
      "mouseleave": function () {
         if (body.hasClass("pc") || body.hasClass("tb")) {
            $('#fp-nav').css("opacity","1");
         }
      }
   });
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

});