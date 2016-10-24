/**
 * Created by Administrator on 2016/9/23.
 */
$(".list2").hover(function(){
    $(".list2 .list-box").css("display","block");
},function(){
    $(".list2 .list-box").css("display","none");
});
$(".list3").hover(function(){
    $(".list3 .list-box").css("display","block");
},function(){
    $(".list3 .list-box").css("display","none");
});
$(".list4").hover(function(){
    $(".list4 .list-box").css("display","block");
},function(){
    $(".list4 .list-box").css("display","none");
});
var allSum = 0;
$(".cart").hover(function(){
    $(this).css("background","red");
},function(){
    $(this).css("background","#847057");
});
/*$(".cart").click(function(){
    allSum++;
    $.cookie("sum"+allSum,allSum);
    var nub = $.cookie("sum"+allSum);
   console.log(nub);
    $(".number").text(nub);
});*/

var total = $.cookie("total")||0;
$(".number").text($.cookie("total"));
$(".cart").each(function () {
    var num = $.cookie("id" + $(this).attr("data-id") + "num") || 0;
    //console.log($(this).attr("data-id"))
    $(this).click(function () {
        total++;
        if ($.cookie("id" + $(this).attr("data-id")) == null) {
            $.cookie("id" + $(this).attr("data-id"), $(this).attr("data-id"), {expires: 7, path: '/'});
        }
        $.cookie("id" + $(this).attr("data-id") + "num", ++num);
        $.cookie("total", total);
        $(".number").text($.cookie("total"));
        console.log(document.cookie);
    });

});







$(function () {
    $(".banner-box").each(function () {
        slidePic({
            wrap: $(this),
            list: $(this).find(".banner-list"),
            autoPlay: true
        })
    })
});

function slidePic(option) {
    /*划动轮播*/
    var $wrap =  option.wrap;//壳子
    var $list = option.list; //ul
    var $btn =  option.btn; //按钮
    var $prev =  option.prev;
    var $next =  option.next;

    var iNow = 0;
    var timer = null;
    var len = 4;
    var iW = 300;


    option.autoPlay && autoPlay()//如果需要自动，就自动播放


    /*如果需要轮播，再添加方法*/
    option.autoPlay && $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });

    function toNext() {

        if(iNow>=len){
            iNow=0;
            $list.css({"left":0})
        }
        iNow++;
        changeView()
    }
    function autoPlay() {
        timer = setInterval(toNext,2000)
    }
    function changeView() {
        //$btn.removeClass("active").eq(iNow).addClass("active");
        $list.stop().animate({"left":-iNow*iW})
    }
}



    var proData = [];
    $.get("js/tsconfig.json",function (data) {
        proData = data; //所有的商品
            var str = "";
                for(var i= 0;i<8;i++){
                str+='<li>'+
                        '<img src="'+proData[i].img+'"/>'+
                        '<div class="button">加入购物车</div>'+
                     '</li>'
                }
            
            $(".banner-list").html(str);
            
        });









