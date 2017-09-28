'use strict';

var app = (function($, window, document, undefined) {
    var $window = $(window),
        $document = $(document),
        insta,
        gameOver,
    init = function () {
        editor();
    },
    editor = function () {
        var $edit = $(".edit")
        for(var i=2; i < 100; i++){
            $( "#num").find("li:first-child").clone().text(i).appendTo( "#num" );
        }
    };
    return {
        init: init
    };
})(jQuery, this, this.document);
