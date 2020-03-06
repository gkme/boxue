(function($) {
    $.selectSuggest = function(target, data,itemSelectFunction,opation) {//id,数据,回调函数,重置参数
        var defaulOption = {
            suggestWidth:"194px",//设置宽度
            suggestMaxWidth:"194px",//设置最大宽度
            top:'34px',//顶部的距离
            suggestMaxHeight:'200px',//弹出框最大高度
            itemColor : '#000000',//默认字体颜色
            itemBackgroundColor:'#fff',//默认背景颜色
            itemOverColor : '#ffffff',//选中字体颜色
            itemOverBackgroundColor : '#5570f1',//选中背景颜色
            itemPadding : 3 ,//item间距
            fontSize : 12 ,//默认字体大小
            alwaysShowALL : true//点击input是否展示所有可选项
        };
        var defaulOption = Object.assign(defaulOption,opation);
        var maxFontNumber = 0;//最大字数
        var currentItem;
        var suggestContainerId = target + "-suggest";

        var showClickTextFunction = function() {
            $('#' + target).val(this.innerText);
            currentItem = null;
            $('#' + suggestContainerId).hide();
        }
        var suggestContainer;
        if ($('#' + suggestContainerId)[0]) {
            suggestContainer = $('#' + suggestContainerId);
            suggestContainer.empty();
        } else {
            suggestContainer = $('<div></div>'); //创建一个子<div>
        }

        suggestContainer.attr('id', suggestContainerId);
        suggestContainer.attr('tabindex', '0');
        suggestContainer.hide();
        var _initItems = function(items) {
            suggestContainer.empty();
            for (var i = 0; i < items.length; i++) {
                    if(items[i].text.length > maxFontNumber){
                        maxFontNumber = items[i].text.length;
                        }
                var suggestItem = $('<div></div>'); //创建一个子<div>
                suggestItem.attr('id', items[i].id);
                suggestItem.attr('title', items[i].text);
                suggestItem.append(items[i].text);
                suggestItem.css({
                    'padding':defaulOption.itemPadding + 'px',
                    'width':defaulOption.suggestWidth,
                    'white-space':'nowrap',
                    'cursor': 'pointer',
                     'text-overflow':'ellipsis',
                     'overflow':'hidden',
                    'background-color': defaulOption.itemBackgroundColor,
                    'color': defaulOption.itemColor
                });
                suggestItem.bind("mouseover",
                function() {
                    $(this).css({
                        'background-color': defaulOption.itemOverBackgroundColor,
                        'color': defaulOption.itemOverColor
                    });
                    currentItem = $(this);
                });
                suggestItem.bind("mouseout",
                function() {
                    $(this).css({
                        'background-color': defaulOption.itemBackgroundColor,
                        'color': defaulOption.itemColor
                    });
                    currentItem = null;
                });
                suggestItem.bind("click", showClickTextFunction);
                suggestItem.bind("click", itemSelectFunction);
                suggestItem.appendTo(suggestContainer);
                suggestContainer.appendTo($("#"+target).parent());
            }
        }

        var inputChange = function() {
            var inputValue = $('#' + target).val();
            inputValue = inputValue.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var matcher = new RegExp(inputValue, "i");
            return $.grep(data,
            function(value) {
                return matcher.test(value.text);
            });
        }

        $('#' + target).bind("keyup",
        function() {
            _initItems(inputChange());
        });
        $('#' + target).bind("blur",
        function() {
            if(!$('#' + suggestContainerId).is(":focus")){
                $('#' + suggestContainerId).hide();
                if (currentItem) {
                    currentItem.trigger("click");
                }
               currentItem = null;
              return;
            }                       
        });

        $('#' + target).bind("click",
        function() {
            if (defaulOption.alwaysShowALL) {
                _initItems(data);
            } else {
                _initItems(inputChange());
            }
            $('#' + suggestContainerId).removeAttr("style");
            $('#' + suggestContainerId).css({
                'border': '1px solid #ccc',
                'max-height': defaulOption.suggestMaxHeight,
                'top': defaulOption.top,
                'left': 0,
                'width': defaulOption.suggestWidth,
                'max-width':defaulOption.suggestMaxWidth,
                'position': 'absolute',
                'font-size': defaulOption.fontSize+'px',
                'z-index': 9,
                'background-color': '#FFFFFF',
                'overflow-y': 'auto',
                'overflow-x': 'hidden',
                'white-space':'nowrap'

            });
            $('#' + suggestContainerId).show();
        });
        _initItems(data);

        $('#' + suggestContainerId).bind("blur",
        function() {
            $('#' + suggestContainerId).hide();
        });
    }
})(jQuery);
