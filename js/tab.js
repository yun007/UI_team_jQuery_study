$(function(){

    $('.tab_area li').on('click', function(e){                
        e = e.target;
        var tab = $(this).parent('ul'),
            index = $(this).index(),
            tab_view = tab.siblings('div');

            $(this).addClass('on').siblings('li').removeClass('on');
            $(tab_view).eq(index).show().siblings('div').hide();
            
            /* 탭구조확인 탭부모 형제유무 체크하여 분기 */
            if($(tab).siblings().length == 0){
                $(this).siblings().find('div').hide();
                $(e).siblings('div').show();                        
               // console.log(e)
            }
        //console.log(e, index, tab.attr('class'),$(tab).siblings());                
    }); 
    
});