/**
 * Created by Administrator on 2016/9/20.
 */

    /*var $reduce = $(".nub-reduce");
    var $add = $(".nub-add");
    var $input = $(".numbuer-box input");
    var $inputVal = $(".numbuer-box input").val();
    var $price = $(".item-price i").html();
    var $oneMoney = $(".total-price i")
    var $oneMoneyVal = $(".total-price i").html();*/
    var $chAll = $(".ch-all");
    var $chItem = $(".ch-item");
    var $ok = $(".pay-button");
   // var $cartBar = $("#cart-bar");底部定位

    var $allNum = $(".all-num");//底部总数量
    var $allSum = $(".all-money");//底部总价格

    var $allNumword=$(".item-show span");//底部总数量
    var $allSumword=$(".all-money strong");//底部总价格
    var $allprice = $(".price i");

    //var iT = $ok.offset().top;
    /*var $clk = $(".clk");
    var $select  = $(".select-box");*/

    //事件委托
    $(document).on("click",".ch-item",function () {
        //console.log($(this).prop("checked"))
        if(!$(this).prop("checked")){
            //如果当前没有选中，就干掉全选
            $chAll.prop("checked",false)
        }else {

            var allCh = true;//假设被全选
            //判断所有的选项是否都选中
            $(".ch-item").each(function () {
                if(!$(this).prop("checked")){
                    //如果有一个没有被选中
                    allCh =false
                }
            });
            if(allCh){
                $chAll.prop("checked",true)
            }

        }
        getSum()

    });

    //console.log($cartBar);
    /*$(window).on("scroll load",function () {
        var iH = $(this).scrollTop()+$(this).height();
        if(iH<iT){
            $cartBar.addClass("fixed")
        }else {
            $cartBar.removeClass("fixed")
        }
    })*/



    /*加减*/
    $(document).on("click",".nub-reduce",function () {

        var oP =$(this).parents(".cart-item");
        var num =oP.find(".num-text");//加减的数值
        var price = oP.find(".item-price i");//商品单价
        var sum = oP.find(".total-price i");//单个商品总价

        var val = num.val();
        if(val<=1){
            val=2
        }
        num.val(--val);
        //金额
        sum.html(val*(price.html()*100)/100);
        getSum();
        $.cookie("id"+$(this).parent().attr("id")+"num",$(this).siblings("input").val());
        $.cookie("total",parseInt($.cookie("total"))-1);


    });
    $(document).on("click",".nub-add",function () {

        var oP =$(this).parents(".cart-item");
        var num =oP.find(".num-text");
        var price = oP.find(".item-price i");
        var sum = oP.find(".total-price i");

        var val = num.val();

        num.val(++val);//可能要判断库存

        //金额
        sum.html(val*(price.html()*100)/100)
        getSum();
        $.cookie("id"+$(this).parent().attr("id")+"num",$(this).siblings("input").val());
        $.cookie("total",parseInt($.cookie("total"))+1);
    });

    //删除按钮
    var total=$.cookie("total")||0;
    $(document).on("click",".delRemove",function () {

        var inum = $(this).index(".delRemove");

        $(this).offsetParent().remove();
        //$("cart-item").eq(inum).remove();
        getSum();

        var clickId=$(this).attr("data-id");
        var ha=$.cookie("id"+clickId+"num");

        $.removeCookie("id"+clickId+"num");
        //$.removeCookie("dataid"+clickId)
        total-=ha;
        $.cookie("total",total);
        //$("#shoppnum").html(total)

    });

    function getSum() {
        var allNum = 0;
        var allSum = 0;
        $(".ch-item:checked").each(function () {
            var oP = $(this).parents(".cart-item");
            var num =oP.find(".num-text");
            var sum = oP.find(".item-sum i");
            allNum+=parseFloat(num.val());
            allSum+=parseFloat(sum.html());
        });
        $allNumword.html(allNum);
        $allSumword.html(allSum);
        $allprice.html(allSum);
    }
    //添加购物车商品列表
    $.get("json/package.json",function (data) {
        productData = data;
        var str = "";
        for(var i=0;i<productData.length;i++){

            if(productData[i].pid==$.cookie("id"+productData[i].pid)&&($.cookie("id"+productData[i].pid+"num")!=null)){

                var numm=$.cookie("id"+productData[i].pid+"num");
                var pricece=productData[i].price;
                var haha=numm*pricece;
                str+=
                    '<div class="cart-line cart-item">' +
                        '<div class="cnk-line">' +
                            '<input class="cnk ch-item" type="checkbox"/>' +
                        '</div>' +
                        '<div class="item-box">' +
                            '<a target="_blank" class="small-pic"><img src="'+productData[i].big_pic+'"/></a>' +
                            '<div class="item-name">' +
                                '<i class="global"></i>' +
                                '<a target="_blank">'+productData[i].des+'</a>' +
                            '</div>' +
                        '</div>' +
                        '<div class="type-box"></div>' +
                        '<div class="item-price-box">' +
                            '<div class="item-price">￥<i>'+productData[i].price+'</i></div>' +
                        '</div>' +
                        '<div class="numbuer-box" id="'+productData[i].pid+'">' +
                            '<div class="nub-reduce">-</div>' +
                            '<input type="text" class="num-text" value="'+$.cookie("id"+productData[i].pid+"num")+'"/>' +
                            '<div class="nub-add">+</div>' +
                        '</div>' +
                        '<div class="price-box">' +
                            '<div class="total-price item-sum">￥<i>'+haha+'</i></div>' +
                        '</div>' +
                        '<div class="action-box">' +
                            '<a>移入收藏夹</a>' +
                            '<a class="remove delRemove" data-id="'+productData[i].pid+'" id="'+$.cookie("id"+productData[i].pid+"num")+'">删除</a>' +
                        '</div>' +
                    '</div>'

            }
            //if--end
            $(".cart-box").html(str);

            $(document).on("click",".ch-all",function () {
                if($(this).prop("checked")){
                    $(".ch-item").prop("checked",true);
                    $chAll.prop("checked",true);
                }else {
                    $(".ch-item").prop("checked",false);
                    $chAll.prop("checked",false);
                }
                getSum()
            });
            //全选按钮-end
        }
        //for-end

    })
    //json-end

