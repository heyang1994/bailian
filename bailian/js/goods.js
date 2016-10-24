/**
 * Created by Administrator on 2016/9/19.
 */

$(function () {

    var $proList = $(".goodslist");//ul
    var pageRow = 40;

    $.get("json/package.json",function (data) {

        var pageCount = Math.ceil(data.length/pageRow);

        addData(1);//初始化时第一页

        $("#page-rows").createPage({
            pageCount:pageCount, //总共有多少页
            current:1,//当前第几页
            backFn:function (page) {
                //alert(page)当前跳转到的页码
                addData(page);
            }
        });

    });


    function addData(page) {
        var proData = [];
            $.get("json/package.json",function (data) {
                proData = data; //所有的商品
                $(".gods-class").each(function () {
                    var index =  $(this).index(".gods-class")+1;
                    var str = "";
                    for(var i=50*(page-1);i<50*page;i++){
                        if(!data[i]){
                            break;
                        }
                        str+='<li>'+
                                '<div class="pro-show">' +
                                        '<div class="pro-img">' +
                                            '<a target="_blank" href="goodsDetails.html?pid='+proData[i].pid+'"><img src="'+proData[i].img+'"/></a>' +
                                        '</div>' +
                                        '<div class="pro-money">￥'+proData[i].price+'</div>' +
                                        '<div class="product-comment">' +
                                            '<a target="_blank" href="goodsDetails.html?pid='+proData[i].pid+'">'+proData[i].des+'</a>' +
                                        '</div>' +
                                        '<div class="pro-bottom">' +
                                            '<span>在 进口水果 中 畅销</span>' +
                                        '</div>' +
                                        '<div class="pro-assess">' +
                                            '百联自营' +
                                        '</div>' +
                                        '<div class="pro-button">' +
                                            '<button type="button">加入购物车</button>' +
                                        '</div>' +
                                    '</div>'+
                                '</li>'
                    }
                    $(this).html(str);
                    $(".sidecarimg2").html($.cookie("total"));
                })
            });

    }
});


