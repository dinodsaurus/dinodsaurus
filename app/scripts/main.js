'use strict';

var app = (function($, window, document, undefined) {
    var $window = $(window),
        $document = $(document),
        insta,
        gameOver,
    init = function () {
        invaders();
        editor();
        instagram();
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
            hits = 0,
            bulletFly = false;
        $(".box").click(function (event) {
            if(bulletFly || gameOver)
                return;
            var $this = $(this),
                places = [0,46,92,138,184,230,276,322,368],
                column,
                mousePos = {
                    x: event.clientX,
                    y: event.cliemtY,
                    relX: event.clientX - $this.offset().left
                },
                $bullet = $("#bullet");

            $bullet.css("top","490px");
            $bullet.css("left",mousePos.x - 5);
            //find column
            for(var i = 0; i < places.length; i++){
                if(places[i] + 46 < mousePos.relX){
                    column = i + 2;
                }
            }
            if(!column)
                column = 1;
            //find item
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
            if($element.length) {
                hits++;
                bottom = "-=" + (490 - $element.offset().top - 46);
            }
            //show and animate bullet
            $bullet.show();
            bulletFly = true;
            $bullet.supremate({"top": bottom},1300,'swing',function(){
                bulletFly = false;
                $element.addClass("explosion");
                $bullet.hide();

                if(hits === 40){
                    $( ".item" ).each(function( index ) {
                        var ind= index;
                        console.log(ind);
                        var $that = $(this);
                        var cap = "";
                        if(insta[ind].caption){
                            cap = insta[ind].caption.text;
                            console.log(cap);
                        }
                        $that.show().html("<a href='"+ insta[ind].images.standard_resolution.url +"'><img alt='" + cap + "' src='" + insta[ind].images.thumbnail.url + "'/></a>");
                    });
                    $(".item a").fluidbox();
                    $(".item1.col1").show();
                    $("#shoter").width("auto").text("@dinodsaurus");
                    gameOver = true;
                }else{
                    setTimeout(function () {
                        $element.hide();
                    },270);
                }
            });
        })
        $(".box").mousemove(function( event ) {
            if(!gameOver)
                handleMouseMove(event);
        });
        function handleMouseMove(event) {
            event = event || window.event; // IE-ism
            var mousePos = {
                x: event.clientX
            };
            $("#shoter").css("left", mousePos.x - 45);
        }
    },
    editor = function () {
        var $edit = $(".edit")
        for(var i=2; i < 100; i++){
            $( "#num").find("li:first-child").clone().text(i).appendTo( "#num" );
        }
    },
    instagram = function () {
        function shuffle(o){ //v1.0
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        var base = "https://api.instagram.com/v1/users/318953138/media/recent?client_id=036e1503210046a59931ed2cbcf2924d&count=20";
        $.getJSON( base + "&callback=?", function( data ) {
            insta = data.data;
            console.log(insta);
            $.getJSON( base + "&max_id=" + insta[insta.length-1].id + "&callback=?", function( data ) {
                for(var i=0;i< data.data.length;i++){
                    insta.push(data.data[i]);
                }
                insta = shuffle(insta);
                console.log(insta);
            });
        });
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
