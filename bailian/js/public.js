/**
 * Created by Administrator on 2016/9/13.
 */
$(".tools-left").hover(function(){
    $(".tools-leftshow").css("display","block");
    $(".tools-leftfont1").css("background","#fff");
},function (){
    $(".tools-leftshow").css("display","none");
    $(".tools-leftfont1").css("background","#f7f7f7");
    }
);
$(".tools-right li").hover(function(){
    $(this).css("background","#fff");
},function(){
    $(this).css("background","#f7f7f7");
});
$(".tools-right li a,.tools-right li span").hover(function(){
    $(this).css("color","#c01133");
},function(){
    $(this).css("color","#666");
});
$("#tools-leftfont1").hover(function(){
    $(".tools-leftmy").css("display","block");
},function(){
    $(".tools-leftmy").css("display","none");
});
$("#tools-leftfont3").hover(function(){
    $(".tools-leftKH").css("display","block");
},function(){
    $(".tools-leftKH").css("display","none");
});
$("#tools-leftfont4").hover(function(){
    $(".tools-leftZS").css("display","block");
},function(){
    $(".tools-leftZS").css("display","none");
});





$(".show-navLeft ul li").each(function(){
    $(this).hover(function () {
        $(this).addClass("se").siblings().removeClass("se");
        $(".se .show-navRight").css("display","block");
        //$(".show-navRight").addClass("active1");
        // $(".show-navRight li").eq($(this).index()).addClass("active1").siblings().removeClass("active");
    },function(){
        //$(".show-navRight").css("display","none");
        $(".se .show-navRight").css("display","none");

    })
});



$(".login").hover(function(){
    $(".login1").css("display","block")
},function(){
    $(".login1").css("display","none")
});
$(".collention").hover(function(){
    $(".collention1").css("display","block")
},function(){
    $(".collention1").css("display","none")
});
$(".history").hover(function(){
    $(".history1").css("display","block")
},function(){
    $(".history1").css("display","none")
});
$(".service").hover(function(){
    $(".service1").css("display","block")
},function(){
    $(".service1").css("display","none")
});
$(".kefu").hover(function(){
    $(".kefu1").css("display","block")
},function(){
    $(".kefu1").css("display","none")
});

function focusPic($btnLi,$picLi,$wrap) {
    var iNow =0;
    var len = $picLi.length;
    var timer = null;

    /*初始的设置*/
    $btnLi.removeClass("active").eq(iNow).addClass("active");
    $picLi.hide().eq(iNow).show();

    autoPlay();//自动轮播

    $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });

    /*小按钮的事件*/
    $btnLi.mouseover(function () {
        if($(this).hasClass("active")){return}
        iNow = $(this).index();

        changeView()
    });

    function autoPlay() {
        timer= setInterval(toNext,2000)
    }

    function toNext () {
        /*iNow++;
         iNow%=len;*/
        iNow =++iNow%len;
        changeView()
    }

    function changeView() {
        $btnLi.removeClass("active").eq(iNow).addClass("active");
        $picLi.stop().fadeOut().eq(iNow).stop().fadeIn()
        //console.log(iNow)
    };
}




function slidePic(option) {
    /*划动轮播*/
    var $wrap =  option.wrap;//壳子
    var $list = option.list; //ul
    var $btn =  option.btn; //按钮
    console.log($btn);
    var $prev =  option.prev;
    var $next =  option.next;

    var iNow = 0;
    var timer = null;
    var len = $btn.length;
    var iW = $wrap.width();


    option.autoPlay && autoPlay()//如果需要自动，就自动播放

    $btn.click(function () {
        iNow = $(this).index();
        console.log(iNow);
        changeView()
    });
    $prev && $prev.click(function () {
        iNow--;
        if(iNow<0){
            iNow = len-1;
        }
        changeView()
    });
    $next && $next.click(toNext);

    /*如果需要轮播，再添加方法*/
    option.autoPlay && $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });

    function toNext() {
        iNow++;
        if(iNow>=len){
            iNow=0;
        }
        changeView()
    }
    function autoPlay() {
        timer = setInterval(toNext,2000)
    }
    function changeView() {
        $btn.removeClass("active").eq(iNow).addClass("active");
        $list.stop().animate({"left":-iNow*iW})
    }
}

