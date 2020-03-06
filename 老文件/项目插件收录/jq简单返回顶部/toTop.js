jQuery(document).ready(function($) {    
    if($("meta[name=toTop]").attr("content")=="true"){
        $("<div id='toTop'><img src='1.png' style='width:44px;height:44px;'></div>").appendTo('body');
        $("#toTop").css({
            position:'fixed',
            width: '44px',
            height: '44px',
            bottom:'20px',
            right:'20px',
            cursor:'pointer',
            zIndex:'99999999999',
        });
        if($(this).scrollTop()==0){
                $("#toTop").hide();
            }
        $(window).scroll(function(event) {
            if($(this).scrollTop()==0){
                $("#toTop").hide();
            }
            if($(this).scrollTop()!=0){
                $("#toTop").show();
            }
        }); 
        
    }
});
