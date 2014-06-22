'use strict';

var app = (function($, window, document, undefined) {
    var $window = $(window),
        $document = $(document),

    init = function () {
        tetris();
    },
    invaders = function () {
        var cols = {
                "col1": [true,false,false,false,false,false,false,false,false],
                "col2": [true,true,true,false,false,true,true,true,false],
                "col3": [true,true,false,false,true,true,true,true,true],
                "col4": [true,true,false,false,true,true,false,true,true],
                "col5": [true,true,false,true,true,false,false,true,true],
                "col6": [true,true,true,true,true,false,false,true,true],
                "col7": [false,true,true,true,false,false,true,true,true],
                "col8": [false,false,false,false,false,false,false,false,true]
            },
            hits = 0;
        $(".box").click(function (event) {
            var $this = $(this),
                places = [0,76,152,228,304,380,456,532,608],
                column,
                mousePos = {
                    x: event.clientX,
                    y: event.cliemtY,
                    relX: event.clientX - $this.offset().left
                },
                $bullet = $("#bullet");

            $bullet.css("top","700px");
            $bullet.css("left",mousePos.x - 7);
            //find column
            console.log(mousePos.relX);
            for(var i = 0; i < places.length; i++){
                if(places[i] + 76 < mousePos.relX){
                    column = i + 2;
                }
            }
            if(!column)
                column = 1;
            //find item
            console.log("col", column);
            var col = cols["col" + column],
                item;
            for(var j = 0; j < col.length; j++){
                if(col[j]){
                    item = "item" + ( j + 1 );
                    col[j] = false;
                    break;
                }

            }
            //find element
            var $element = $(".col" + column + "." + item),
                bottom = -30;
            if($element.length)
                bottom = "-=" + (700 - $element.offset().top - 76);
            //show and animate bullet
            $bullet.show();
            $bullet.supremate({"top": bottom},1300,'swing',function(){
                $element.addClass("explosion");
                $bullet.hide();
                hits++;
                if(hits === 40){
                    $(".box").html("<h2 style='font-size:100px;text-align:center;margin-top:100px;'>You win!!!</h2>")
                }
                setTimeout(function () {
                    $element.hide();
                },270);
            });
        })
        $(".box").mousemove(function( event ) {
            handleMouseMove(event);
        });
        function handleMouseMove(event) {
            event = event || window.event; // IE-ism
            var mousePos = {
                x: event.clientX
            };
            $("#shoter").css("left", mousePos.x - 35);
        }
    },
    tetris = function () {
        var cols = {
            "col1": [true,false,false,false,false,false,false,false,false],
            "col2": [true,true,true,false,false,true,true,true,false],
            "col3": [true,true,false,false,true,true,true,true,true],
            "col4": [true,true,false,false,true,true,false,true,true],
            "col5": [true,true,false,true,true,false,false,true,true],
            "col6": [true,true,true,true,true,false,false,true,true],
            "col7": [false,true,true,true,false,false,true,true,true],
            "col8": [false,false,false,false,false,false,false,false,true]
        }
        var places = [608,532,456,380,304,228,152,76,0];
        $(".item").click(function(){
            var $this = $(this),
                place = parseInt($this.data("place"), 10),
                col = "col" + $this.data("col"),
                col = cols[col],
                item = "";
            console.log("place", place);
            if(place == 0){
                var colors = ["#ff2e20","#1e32f7","#00f842","#ff46f9","#00fcfd","#fefb4a"],
                    top = places[0];
                var interval = setInterval(function(){
                    var colo = Math.floor((Math.random() * 5) + 1);
                    $this.css("background", colors[colo]);
                }, 50);
                setTimeout(function () {
                    clearInterval(interval);
                },500);
                return;
            }


            for(var i = place  - 1; i >= 0; i--){
                if(col[i]){
                    item = i;
                    break;
                }
            }

            var colors = ["#ff2e20","#1e32f7","#00f842","#ff46f9","#00fcfd","#fefb4a"],
                top = places[0];
            //var interval = setInterval(function(){
            //    var colo = Math.floor((Math.random() * 5) + 1);
            //    $this.css("background", colors[colo]);
            //}, 50);
            console.log(item);
            if(item || item === 0){
                top = places[item] - 76;
                col[place] = false;
                col[item + 1] = true;
                if(item !== 0){
                    $this.data("place", item + 1);
                }else{
                    $this.data("place", item);
                }
            }else{
                col[place] = false;
                col[0] = true;
                $this.data("place", 0);
            }
            console.log(col);
            $this.animate({
                "top": top
            }, 500, function(){
                clearInterval(interval);

            });
        });
    };
    return {
        init: init
    };
})(jQuery, this, this.document);
