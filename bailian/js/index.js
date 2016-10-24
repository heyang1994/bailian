
/**
 * Created by Administrator on 2016/9/13.
 */


var proData = [];
$.get("json/tsconfig.json",function (data) {
    proData = data; //所有的商品
    $(".like_class").each(function () {
        var index =  $(this).index(".like_class")+1;
        var str = "";
        for(var i=5*(index-1);i<5*index;i++){
            str+='<li>' +
            '<div class="pro-show">'+
                '<div class="pro-img">'+
                '<a><img src="'+proData[i].img+'"/></a>'+
                '</div>'+
                '<div class="pro-name">'+
                '<a title="'+proData[i].des+'">'+proData[i].des+'</a>'+
            '</div>'+
            '<div class="pro-money">'+
                '<div class="money-f1">'+
                '￥<span style="font-size: 18px">'+proData[i].price+'</span>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</li>'
        }
        $(this).html(str);
    })
});



$(".li1").click(function(){
    $("body,html").animate({"scrollTop":920});
    testScrollTop()
});
$(".li2").click(function(){
    $("body,html").animate({"scrollTop":1394});
    testScrollTop()
});
$(".li3").click(function(){
    $("body,html").animate({"scrollTop":1868});
    testScrollTop()
});
$(".li4").click(function(){
    $("body,html").animate({"scrollTop":2342});
    testScrollTop()
});
$(".li5").click(function(){
    $("body,html").animate({"scrollTop":2816});
    testScrollTop()
});
$(".li6").click(function(){
    $("body,html").animate({"scrollTop":3290});
    testScrollTop()
});
$(".li7").click(function(){
    $("body,html").animate({"scrollTop":3664});
    testScrollTop()
});
$(".li8").click(function(){
    $("body,html").animate({"scrollTop":4138});
    testScrollTop()
});
$(".li9").click(function(){
    $("body,html").animate({"scrollTop":0});
    testScrollTop()
});
$(window).scroll(function () {
    //console.log($(window).scrollTop());
    testScrollTop()
});
function testScrollTop(){
    var iScrollT = $(window).scrollTop();
    if(iScrollT>800){
        $(".barNav").fadeIn()
    }else {
        $(".barNav").fadeOut()
    }
    if(iScrollT>900&& iScrollT< 1300){
        $(".li1").css("background-position","-45px 0")
    }else{
        $(".li1").css("background-position","-100px 0")
    }
    if(iScrollT>1300&& iScrollT< 1700){
        $(".li2").css("background-position","-45px -41px")
    }else{
        $(".li2").css("background-position","-100px 0")
    }
    if(iScrollT>1700&& iScrollT< 2300){
        $(".li3").css("background-position","-45px -82px")
    }else{
        $(".li3").css("background-position","-100px 0")
    }
    if(iScrollT>2300&& iScrollT< 2750){
        $(".li4").css("background-position","-45px -123px")
    }else{
        $(".li4").css("background-position","-100px 0")
    }
    if(iScrollT>2750&& iScrollT< 3150){
        $(".li5").css("background-position","-45px -164px")
    }else{
        $(".li5").css("background-position","-100px 0")
    }
    if(iScrollT>3150&& iScrollT< 3600){
        $(".li6").css("background-position","-45px -205px")
    }else{
        $(".li6").css("background-position","-100px 0")
    }
    if(iScrollT>3600&& iScrollT< 4050){
        $(".li7").css("background-position","-45px -246px")
    }else{
        $(".li7").css("background-position","-100px 0")
    }
    if(iScrollT>4050){
        $(".li8").css("background-position","-45px -287px")
    }else{
        $(".li8").css("background-position","-100px 0")
    }

}

$(function () {
    focusPic($("#banner-btn li"), $("#banner-list li"), $("#banner-wrap"));

    $(".floorLunbo").each(function () {
        slidePic({
            wrap: $(this),
            list: $(this).find(".floor-scroll"),
            btn: $(this).find(".floor-btn li"),
            autoPlay: true
        })
    })

});
$(".sidecarimg2").html($.cookie("total"));