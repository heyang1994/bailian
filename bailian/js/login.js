/**
 * Created by Administrator on 2016/9/21.
 */
console.log(2);
$(function(){
    var $username = $(".login-name input");
    var $password = $(".login-password input");

    $username.focus(function(){
        console.log(1);
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
    });
    $username.blur(function(){
        $(this).removeClass("colorB");
        if($(this).val()==""){
            $(this).addClass("colorR");
        }

    });
    $password.focus(function(){
        console.log(1);
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
    });
    $password.blur(function(){
        $(this).removeClass("colorB");
        if($(this).val()==""){
            $(this).addClass("colorR");
        }

    });
});

$(".button").click(function(){
    var $username = $(".login-name input");
    console.log(5);
     $.cookie("username",$username.val(),{expires:7,path:'/'});
        /*if($.cookie("username"+$username.val()==null){
            $.cookie("id"+$(this).attr("data-id"),$(this).attr("data-id"),{expires:7,path:'/'});
            $.cookie("id"+$(this).attr("data-id")+"num",++num);
        }else{
            $.cookie("id"+$(this).attr("data-id")+"num",++num);
        }
        $.cookie("total",total);*/
        /*$("#shopping_cart").find("span").text($.cookie("total"));*/
    //console.log(document.cookie);
    })


/*
total = parseInt($.cookie("total"))||total;
if(total){
    $("#shopping_cart").find("span").text($.cookie("total"));
}*/
