$(function(){
    $("#osc-ft").removeClass("fp-auto-height");
    //페이지 구분
    let page = $("body").attr("id");
    let mainNum = page.slice(3,4); //대메뉴 번호
    let subNum = page.slice(5,6); //서브메뉴 번호
    let lnbActiveNum = page.slice(-1); //현재 메뉴 표시
    let bgColor = ["#333", "#FFA211", "#F55521", "#A62029"];
    //1. 제목 설명 밑 배경색 지정
    $(".desc-line, .lnb-depth2").css("background-color", bgColor[mainNum]);

    //2. 서브비주얼 이미지 출력
    let subHdBgImg = "url('./images/sub/sub_visual_0" + mainNum + ".jpg')";
    $(".hgroup").css("background-image", subHdBgImg);
    
    //메인메뉴 레이블
    let main = ["회사소개","신약개발","의료사업","기능소재", "투자정보", "인재채용", "준법경영"];
    //서브메뉴 레이블
    let sub = [];
    sub[0] = "About Us|회사연혁|Contact Us";
    sub[1] = "신약개발개요|류마티스 관절염|면역혈소판 감소증|급성골수성 백혈병|비소세포성폐암|알츠하이머 치매";
    sub[2] = "치과용뼈이식재|치과용멤브레인";
    sub[3] = "건강식품소재|일반식품소재|Product";
    sub[4] = "공지사항|언론센터|IR Materials|Coverage Reports"
    sub[5] = "채용공고";
    sub[6] = "윤리강령|신고하기";
    
    // 3. 반복문으로 각 배열 번지별로 저장된 문자 나눠서 서브배열 만들기
    for(let i = 0; i < sub.length; i++) {
        sub[i] = sub[i].split("|");
    }

    //서브메뉴 URL
    let subUrl = [];
    subUrl[0] = ["../introduce.html", "../history.html", "#"];
    subUrl[1] = ["#", "#", "#", "#", "#", "#"];
    subUrl[2] = ["#", "#"];
    subUrl[3] = ["#", "#","#"];
    subUrl[4] = ["#", "#","#","#"];
    subUrl[5] = ["#"];
    subUrl[6] = ["#","#"];

    // //서브메뉴 레이블 설명
    // let subDesc = [];
    // subDesc[0] = ["Translating science into medicine", "우리 동네 독서동아리를 찾을 수 있어요.", "우리 독서동아리를 알려요.", "사람과 사람이 만나고 사람과 책이 만난 이야기", "독서동아리지원센터를 소개합니다."];
    // subDesc[1] = ["독서동아리 회원들이 만나 책을 읽고, 느끼고, 즐길 수 있는 공간을 소개합니다."];
    // subDesc[2] = ["책 읽는 사회를 위한 북매거진", "독서동아리가 함께 읽은 책을 소개합니다.", "국립중앙도서관 및 국립어린이청소년도서관 현장 사서가 매월 좋은 책을 추천합니다."];
    // subDesc[3] = ["책과 관련한 문화프로그램과 행사를 공유합니다.", "1", "2", "3", "4"];
    
    // 4. 제목과 설명 출력
    $(".sub-h2").text(sub[mainNum][subNum]);
    // $(".desc-txt").text(subDesc[mainNum][subNum]);
    
    // 5. 서브메뉴(lnb) 리스트 생성
    $(".lnb-depth1").append("<li class=\"active\"><a href=\"#\">" + main[mainNum] + "</a></li>");
    for(let j = 0; j < main.length; j++) {
        $(".lnb-depth1").append("<li><a href=\"" + subUrl[j][0] +"\">" + main[j] + "</a></li>");
    }
    $(".lnb-depth2").append("<li class=\"active\"><a href=\"#\">" + sub[mainNum][subNum] + "</a></li>");
    for(let k = 0; k < sub[mainNum].length; k++) {
        $(".lnb-depth2").append("<li><a href=\"" + subUrl[mainNum][k] +"\">" + sub[mainNum][k] + "</a></li>");
    }

    // 6. lnb 작동
    $(".lnb").on({
        "mouseenter focusin": function(){
            $(this).addClass("active");
        },
        "mouseleave focusout": function(){
            $(this).removeClass("active");
        }
    });
    
    //7. 글자크기 확대/축소
    let fz = 10;
    let fzMax = 15;
    let fzMin = 6;
    $(".txt-reset-btn").click(function(){
        fz = 10;
        $("html").css("font-size", fz + "px");
    });
    $(".txt-size-plus-btn").click(function(){
        // condition ? true : false;
        fz == fzMax ? fz = fzMax : fz++;
        $("html").css("font-size", fz + "px");
    });
    $(".txt-size-minus-btn").click(function(){
        fz == fzMin ? fz = fzMin : fz--;
        $("html").css("font-size", fz + "px");
    });

     // 8. LNB고정을 위한 값 설정
     let wH = $(window).height();
     let lnbTg = $(".lnb-container");
     let lnbTop = lnbTg.offset().top + lnbTg.height();
     let scTop = $(window).scrollTop();
     $(window).resize(function(){
         wH = $(window).height();
         lnbTop = lnbTg.offset().top + lnbTg.height();
     });

    // 9. 스크롤시 LNB고정, 위로가기 버튼 제어
    const topBtn = $(".top-btn");
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
        if(scTop > lnbTop) {
            lnbTg.addClass("fixed");
            topBtn.fadeIn(300);
        } else {
            lnbTg.removeClass("fixed");
            topBtn.fadeOut(300);
        }
    });
});