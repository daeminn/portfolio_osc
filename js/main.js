$(function(){
  let wW = window.innerWidth;
  let wH = window.innerHeight;
  const body = $("body");

  const fpCon = $("#osc-main-container");
  let ftEl = $("#osc-ft").clone().addClass("section fp-auto-height");;
  fpCon.append(ftEl);
  fpCon.fullpage({
    navigationTooltips:  ['01','02','03'],
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000,
    normalScrollElements: '.gnb-wrap, #all-menu',
    lazyLoading: true,
    showActiveTooltip:true,
    scrollOverflow:true,

   });

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
         section01();
      } else {
         body.addClass("pc").removeClass("mo tb");
         section01();
      }
   }
   /* table cell 너비조절 */
   function section01(){
    let develop = $('.develop');
    let business = $('.business');
    let sec01Box = $('.sec01-box');
    develop.mouseenter(function(){
      $(this).css("width","70%");
      business.css("width","30%");
    })
    business.mouseenter(function(){
      $(this).css("width","70%");
      develop.css("width","30%");
    })
    sec01Box.mouseleave(function(){
      develop.css("width","50%");
      business.css("width","50%");
    })
   }
 });