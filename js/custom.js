//탭메뉴
    var $tab_list = $(".tab-menu");
    $tab_list.find("ul ul").hide();
    $tab_list.find("li.active > ul").show();
    
    function tabMenu(e){
        e.preventDefault();
        var $this = $(this);
        $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    }
        $tab_list.find("li.active > ul")
        
    //베너
    //스크립트 넣는 순서 : HTML 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출 
    $(".ban").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed : 3000,
        dots: true
    });
        
    //갤러리
    $(".gallery_img").slick({
        arrows:false,
        fade: true,
        pauseOnHover: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1
    });
        
    //시작버튼
    $(".play").click(function(){
        $(".gallery_img").slick("slickPlay");
        
    });  
        
    //정지버튼
    $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
        
    });  
        
    //이전버튼
    $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
        
    });
        
    //다음버튼
    $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
        
    });       
        
        
    //버튼을 클릭하면 전체 메뉴를 보이게 작업
    $(".tit .btn").click(function(e){
        e.preventDefault(); //a태그안에 #버튼이 있어서 상위로 올라가는것을 없애준다.
        //$("#cont_nav").css("display","block"); <-#cont_nav{display:block;}
        //$("#cont_nav").show();
        //$("#cont_nav").fadeIn();
        //$("#cont_nav").slideDown();
        //$("#cont_nav").toggle();
        //$("#cont_nav").fadeToggle();
        $("#cont_nav").slideToggle(200); //0.2초안에 슬라이드 토글로 위아래 왔다갔다 하는 기능
        $(this).toggleClass("on");//this = .tit.btn이고 추가 클레스인 on을 만들어줌 .tit .btn.on css를 만들어줘서 백그라운드에다가 이미지 만들어줌 
        
    });
        
    //팝업 게시판
    $(".layer").click(function(e){
        e.preventDefault();
        //$("#layer").css("display","block");
        //$("#layer").show();
        //$("#layer").fadeIn();
        $("#layer").slideDown();
                      
    });  
    $("#layer .close").click(function(e){
         e.preventDefault();
        //$("#layer").css("display","none");
        //$("#layer").hide();
        //$("#layer").fadeOut();
        $("#layer").slideUp();
    });
    
    //윈도우 팝업
    $(".window").click(function(e){
        e.preventDefault();
        //window.open("파일명", "파일이름", "옵션설정");
        //옵션 : left, top, width, height, status, toolbar, location, menubar, scroolbars, fullscreen
        window.open("sample_popup.html", "popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
    });
    
    //라이트박스
     $(".lightgallery").lightGallery({
         thumbnail:true,
         animateThumb: false,
        showThumbByDefault: false
     }); 