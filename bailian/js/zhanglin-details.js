/**
 * Created by Administrator on 2016/9/20.
 */
$(function () {

    var url =  window.location.href;
    //console.log(url.split("?"))//数组
    //url.split("?")[1]//"pId=0020003"

    // console.log(url.split("?")[1].split("=")[1])//0020003
    var pId = fnBase.request("pId");
    //console.log(fnBase.request("timer"));
    $.get("json/goodsDetails.json",function (data) {
        for(var i=0;i<data.length;i++){
            if(data[i].pId==pId){
                /*设置大图的src*/
                $blowUpImg.attr("src",data[i].blowUp_pic);
                $bigPicWrap.find("img").attr("src",data[i].big_pic);
                /*设置列表图片的src*/
                var listpicArray = data[i].listpic;
                var str = "";
                for(var j=0;j<listpicArray.length;j++){
                    str+='<li><img src="'+listpicArray[j]+'" ></li>'
                }
                $(".details-ul").html(str)

                //word-part部分
                $(".brandDes span").html(data[i].brandDes);
                $(".name").html(data[i].name);
                $(".des").html(data[i].des);
                $(".price").html(data[i].price);
                $(".dis").html(data[i].dis);
                $(".market-price").html(data[i].market_price);
                $(".favorable").html(data[i].favorable);
                $(".phone-dis span").eq(0).html(data[i].phone_dis);

                var typeListArray = data[i].typeList;
                var str = "";
                for(var j=0;j<typeListArray.length;j++){
                    str+='<span class="typeList">'+typeListArray[j]+'</span>'
                }
                $(".type-span").html(str)

                $(".storyPrice p").html(data[i].storyPrice);
                $(".storyTopPrice p").html(data[i].storyPrice);
                $(".shop span").eq(0).html(data[i].shop);
                $(".introduce-word p").html(data[i].introduce_word);

                var main1_liArray = data[i].main1_li;
                var str = "";
                for(var j=0;j<main1_liArray.length;j++){
                    str+='<li>'+main1_liArray[j]+'</li>'
                }
                $(".main1").html(str)

                var main2_liArray = data[i].main2_li;
                var str = "";
                for(var j=0;j<main2_liArray.length;j++){
                    str+='<li>'+main2_liArray[j]+'</li>'
                }
                $(".main2").html(str)

                $(".parameter-pic").find("img").attr("src",data[i].parameter_pic);

                var details_picArray = data[i].details_pic;
                var str = "";
                for(var j=0;j<details_picArray.length;j++){
                    str+='<img src="img/'+details_picArray[j]+'"/>'
                }
                $(".details-pic").html(str)

                //购物车
                /*$(".addBtn").attr("data-id",data[i].id);

                 var total = 0;
                 $(".addBtn").each(function(){
                 var num = $.cookie("id"+$(this).attr("data-id")+"num")||0;
                 $(this).bind("click",function(){
                 total++;
                 if($.cookie("id"+$(this).attr("data-id"))==null){
                 $.cookie("id"+$(this).attr("data-id"),$(this).attr("data-id"),{expires:7,path:'/'});
                 $.cookie("id"+$(this).attr("data-id")+"num",++num);
                 }else{
                 $.cookie("id"+$(this).attr("data-id")+"num",++num);
                 }
                 $.cookie("total",total);
                 $(".add-pic").find("span").text($.cookie("total"));
                 })
                 //console.log(document.cookie);
                 })

                 total = parseInt($.cookie("total"))||total;
                 if(total){
                 $(".add-pic").find("span").text($.cookie("total"));
                 }						*/



                //购物车复制
                $(".addBtn").attr("data-id",data[i].id);

                var total = 0;
                $(".addBtn").each(function(){
                    var num = $.cookie("id"+$(this).attr("data-id")+"num")||0;
                    $(this).bind("click",function(){
                        var nn=$(this).offsetParent().find(".text");
                        var val=nn.val();
                        nn.val(++val);
                        console.log(val);
                        total++;
                        if($.cookie("id"+$(this).attr("data-id"))==null){
                            $.cookie("id"+$(this).attr("data-id"),$(this).attr("data-id"),{expires:7,path:'/'});
                            $.cookie("id"+$(this).attr("data-id")+"num",++num);
                        }else{
                            $.cookie("id"+$(this).attr("data-id")+"num",++num);
                        }
                        $.cookie("total",total);
                        $(".add-pic").find("span").text($.cookie("total"));
                    })
                    console.log($.cookie("id"+$(this).attr("data-id")+"num"));
                    $(".text").attr("value",$.cookie("id"+$(this).attr("data-id")+"num"));
                })

                total = parseInt($.cookie("total"))||total;
                if(total){
                    $(".add-pic").find("span").text($.cookie("total"));
                }



            }
        }
    });





    //放大镜
    var $bigPicWrap = $(".big-pic");
    var $moveBox = $(".move-box");
    var $blowUpWrap = $(".blowUp-pic");
    var $blowUpImg = $(".blowUp-pic img");
    var $imgList = $(".list-pic ul");

    var offsetT = $bigPicWrap.offset().top;
    var offsetL = $bigPicWrap.offset().left;

    /*列表图片点击事件*/
    $imgList.on('click',"img",function () {
        var src = $(this).attr("src");
        $bigPicWrap.find("img").attr("src",src);
        $blowUpImg.attr("src",src)
    });

    /*当鼠标移入图片的壳子时*/
    $bigPicWrap.mouseover(function () {
        $moveBox.show();
        $blowUpWrap.show();
    });

    /*当鼠标移出图片的壳子时*/
    $bigPicWrap.mouseout(function () {
        $moveBox.hide();
        $blowUpWrap.hide();
    });

    $bigPicWrap.mousemove(function (ev) {
//      console.log(ev.pageX);
        var iL = ev.pageX-offsetL-61;
        var iT = ev.pageY-offsetT-61;

        if(iL<0){
            iL=0
        }else if(iL>244){
            iL=244
        }else {
            iL = iL
        }

        iT = iT<0?0:iT>244?244:iT;

        $moveBox.css({left:iL,top:iT})
        //iL 0-200
        //iT 0-200
        $blowUpImg.css({left:-iL*3/2,top:-iT*3/2})
    });






    //楼层
// var $goTop = $("#go-top");
    var $list=$("#list");
    var $list2=$("#list2");

    var $section=$(".section");
    testScrollTop();
    $(window).scroll(function () {
        testScrollTop()
    });
    //跑到最顶上
    /* $goTop.click(function () {
     $("body,html").animate({"scrollTop":0});
     });*/

    $("#list li,#list2 li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var iT=$section.eq($(this).index()).offset().top;
        $("body,html").animate({"scrollTop":iT});

    });




    function testScrollTop() {
        var iScrollTop=$(window).scrollTop();
        if(iScrollTop>800){
//          $goTop.fadeIn();
            $(".storyTop").fadeIn();
        }else {
//          $goTop.fadeOut();
            $(".storyTop").fadeOut();
        }
        $section.each(function(){
            var iT=$(this).offset().top;
            var iH=$section.outerHeight();
            if(iScrollTop>=iT){
                $("#list li,#list2 li").removeClass("active").eq($(this).index()-1).addClass("active");

            }
        })
    }



    $(".load").mousemove(function(){
        $(".phone-dis img").show();
    })
    $(".load").mouseout(function(){
        $(".phone-dis img").hide();
    })









    //购物车

})