(function(){

var $btnTop = $('.top'),
    $footer = $('footer'),
    $docHeight = $(document).height(),
    $footerH = $footer.height(),
    $win = $(window),
    $winH = $win.height(), // 윈도우의 높이,
    winT;
    
   
//console.log($winH)
    // $win.scrollJs = $win.scrollJs || {};
    // $win.scrollJs.commonJs  = function () {
    //     this.init();
    // };
    // $win.scrollJs.commonJs.prototype ={
    //     init : function(){
    //         console.log('testInit')
    //     }
    // };

    var event = function(){
        scrollEvent();
        clickEvent();
       // console.log('event')
    }
    /* winScroll Event */    
    // $(window).scroll(function(){
    //     winScroll = $(this).scrollTop()
    //     winT = scrollH(winT);
    //     scrollTop(winT);
    //     btnTopActive(scrollTop(winT));
    //     console.log('12',scrollTop(winT));        
    //    console.log('winTop',_winT)
    // });


    /* scrollEvent */
    var scrollEvent = function(){

        $win.scroll(function(){
            scrollTop(winT);
            btnTopActive(scrollTop(winT));
        });

    };

    /* click */
    var clickEvent = function(){

        $btnTop.on('click', function(){
            $('html').animate({scrollTop:0}, 500); 
            console.log('btnTop-Event');
        });

        $footer.on('click', function(){
            console.log('footer-Event')
        });
        //console.log('clickEvent');

    };

    /* scrollTop */
    function scrollTop(winT){
        // 
        winT = $win.scrollTop(); //scrollTop 위치                
        return winT;
        // console.log('winH',winH,'winTop',winT, '문서높이', docHeight)        
    };

    /* 값수행 */
    function btnTopActive(_winT){
        // scrollbar 과 전체 문서의 간격을 구해서..푸터의 높이값과 같거나 넘을경우 고정시킨다.
        // docHeight - (winTop + winH) 가 (푸터높이)105 와 같거나 높을때 체크

        sum = $docHeight-(_winT+$winH);

        if(sum == $footerH || sum < $footerH){
            $btnTop.addClass("top-js");
            //console.log('absolute');
        }else{
            $btnTop.removeClass("top-js");
        //    console.log('fixed');
        }
        //console.log('계산',sum)
    };

    event();

	// $(function () {
    //     $win.scrollJs.commonJs = new $win.scrollJs.commonJs();
	// 	$win.scrollJs.commonJs();
    // });    
    
}());