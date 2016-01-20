// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
(function ($) {
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500,
            scroll_selector: 'html,body'
        };

        var options = $.extend(defaults, options),
            to_scroll = options.scroll_selector;

        options.elem.click(function(event){
            event.preventDefault();
            var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;

            if (offset) {
                var toMove = parseInt(offset);
                $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $(options.scroll_selector).stop(true, false).animate({scrollTop: toMove }, options.speed);
            } else {
                $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, options.speed);
            }
        });

    };
})(jQuery);