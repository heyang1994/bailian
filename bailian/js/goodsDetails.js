/**
 * Created by Administrator on 2016/9/19.
 */

$(function () {

    var url =  window.location.href;
    //console.log(url.split("?"))//数组
    //url.split("?")[1]//"pId=0020003"

    // console.log(url.split("?")[1].split("=")[1])//0020003
    var pid = fnBase.request("pid");
    //console.log(fnBase.request("timer"));
    $.get("json/package.json",function (data) {
        for(var i=0;i<data.length;i++){
            if(data[i].pid==pid){
                //找到和url里面pId一样的商品
                //有imgArray就使用imgArray，没有的话就使用[data[i].img]（放在数组里面使用）
                $blowUpImg.attr("src",data[i].big_pic);
                $bigPicWrap.find("img").attr("src",data[i].big_pic);
                $(".price").html(data[i].price);
                $(".goods-name h4").html(data[i].des);
                var str = "";
                var listpicArray = data[i].pic_list;
                for(var j=0;j<listpicArray.length;j++){
                    str+='<li><img src="'+listpicArray[j]+'" ></li>'
                }

                $imgList.html(str);

                //购物车

                $(".addnum").attr("data-id",data[i].pid);
                $(".reduce").attr("data-id",data[i].pid);

                var total = 0;
                $(".addnum").each(function(){
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
                        $(".sidecarimg2").html($.cookie("total"));
                        console.log($.cookie("total"))

                    })
                    console.log($.cookie("id"+$(this).attr("data-id")+"num"));
                    $(".text").attr("value",$.cookie("id"+$(this).attr("data-id")+"num"));
                })
                //reduce
                $(".reduce").each(function(){
                    var num = $.cookie("id"+$(this).attr("data-id")+"num")||0;
                    $(this).bind("click",function(){
                        var nn=$(this).offsetParent().find(".text");
                        var val=nn.val();
                        nn.val(--val);
                        console.log(val);
                        total--;
                        if($.cookie("id"+$(this).attr("data-id"))==null){
                            $.cookie("id"+$(this).attr("data-id"),$(this).attr("data-id"),{expires:7,path:'/'});
                            $.cookie("id"+$(this).attr("data-id")+"num",--num);
                        }else{
                            $.cookie("id"+$(this).attr("data-id")+"num",--num);
                        }
                        $.cookie("total",total);
                        $(".sidecarimg2").html($.cookie("total"));
                    })
                    console.log($.cookie("id"+$(this).attr("data-id")+"num"));
                    $(".text").attr("value",$.cookie("id"+$(this).attr("data-id")+"num"));
                })

                total = parseInt($.cookie("total"))||total;
                if(total){
                    $(".sidecarimg2").html($.cookie("total"));
                }
            }
        }
    });


    var $bigPicWrap = $(".newsLT");
    var $moveBox = $(".moveBox");
    var $blowUpWrap = $(".big-pic");
    var $blowUpImg = $(".big-pic img");
    var $imgList = $(".items-ul");



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
        console.log(ev.pageX);
        var iL = ev.pageX-offsetL-75;
        var iT = ev.pageY-offsetT-75;

        if(iL<0){
            iL=0
        }else if(iL>200){
            iL=200
        }else {
            iL = iL
        }

        iT = iT<0?0:iT>200?200:iT;

        $moveBox.css({left:iL,top:iT})
        //iL 0-200
        //iT 0-200
        $blowUpImg.css({left:-iL*350/200,top:-iT*350/200})
    });

   
})