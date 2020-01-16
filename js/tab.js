$(document).ready(function(){

    /*
        //정리전

        $('.tab_area li').on('click', function(e){                
            e = e.target;
                tab = $(this).parent('ul'),
                index = $(this).index(),
                tab_view = tab.siblings('div');

                $(this).addClass('on').siblings('li').removeClass('on');
                $(tab_view).eq(index).show().siblings('div').hide();
                
                //  탭구조확인 탭부모 형제유무 체크하여 분기 
                if($(tab).siblings().length == 0){
                    $(this).siblings().find('div').hide();
                    $(e).siblings('div').show();                        
                // console.log(e)
                }
            //console.log(e, index, tab.attr('class'),$(tab).siblings());                
        }); 

    */

        //함수로 빼니까....코드가...길어졌다....

        let $tabWrap = $('.tab_area'),
            $tab = $tabWrap.find('li');
        // $tabBox = $tabWrap.find('div');
        

        $tab.on('click', function(){
            $tabEle = $(this);
            $index = $(this).index();
            
            tabActive($index, $tabEle);
        //  console.log('click index : ',$index)
        });
            
        var tabActive = function(_index, _tabEle){
            _tabEle.addClass('on').siblings('li').removeClass('on');
            $tabContent = _tabEle.parents('ul').siblings('div');        
            $tabContent.eq(_index).show().siblings('div').hide();

            if($tabContent.siblings().length == 0){
                _tabEle.find('div').show();            
                _tabEle.siblings().find('div').hide();            
            }
            //console.log('tabBoxIndex : ', _index, "tabBox",)
        };
        //console.log($tabWrap,$tab)
        
        

// eslint-disable-next-line padded-blocks
});

