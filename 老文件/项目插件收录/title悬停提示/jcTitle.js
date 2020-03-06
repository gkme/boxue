;(function($) {
    $.fn.jcTitle = function(options) {
        var defaults = {
            background: '#f7eebf',
            color: '#393939',
            opacity: '0.8',
            border: 'solid 1px #968212',
            fontSize: 12,
            position: 'absolute',
            zIndex: 9999,
            textShadow: 'none',
            borderRadius: 3,
            padding: 6,
            follow: true
        },
            options = $.extend(defaults, options);
        return this.each(function() {
            var elem = $(this),
                title = options.content || elem.attr('title'),
                _ww, _wh, _tw, _th;
            if (title != '') {
                var junchengTitle = $('<div />');
                elem.attr('title', '').hover(function(e) {
                    _ww = $(window).width(), _wh = $(window).height();
                    junchengTitle.html(title).appendTo('body').hide().css(options).fadeIn(500);
                    _tw = $('body div').last().outerWidth(), _th = $('body div').last().outerHeight();
                    if (options.follow) {
                        elem.mousemove(function(e) {
                            var _top = e.pageY + 8,
                                _left = e.pageX + 8;
                            if (_top > _wh + $(document).scrollTop() - _th) {
                                _top = e.pageY - _th - 8
                            }
                            if (_left > _ww + $(document).scrollLeft() - _tw) {
                                _left = e.pageX - 8 - _tw
                            }
                            junchengTitle.css({
                                top: _top,
                                left: _left
                            })
                        })
                    } else {
                        var _top = e.pageY + 8,
                            _left = e.pageX + 8;
                        if (_top > _wh + $(document).scrollTop() - _th) {
                            _top = e.pageY - _th - 8
                        }
                        if (_left > _ww + $(document).scrollLeft() - _tw) {
                            _left = e.pageX - 8 - _tw
                        }
                        junchengTitle.css({
                            top: _top,
                            left: _left
                        })
                    }
                    junchengTitle.fadeIn(500)
                }, function() {
                    junchengTitle.remove()
                })
            }
        })
    }
})(jQuery);