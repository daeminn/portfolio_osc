$(function(){
  const fpCon = $("#osc-main-container");
  let ftEl = $("#osc-ft").clone().addClass("section fp-auto-height");;
  fpCon.append(ftEl);
  fpCon.fullpage({
     navigation: true,
     navigationPosition: "right",
     scrollingSpeed: 1000,
     normalScrollElements: '.gnb-wrap, #all-menu',
   });

   
   /* table cell 커튼 */
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
   section01();
 });