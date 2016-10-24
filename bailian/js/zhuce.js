/**
 * Created by Administrator on 2016/9/17.
 */
$(".ZC-select i").click(function(){
    $(this).toggleClass("clicked")//如果this中有该class就删除，没有则添加
});
$(function(){
    var $input = $(".ZC-input input");

    var $input1 = $(".ZC-input .input1");//用户名
    var $input1RI = $(".input1R img");
    var $input1RS = $(".input1R span");
    var $input2 = $(".ZC-input .input2");//登录密码
    var $input2RI = $(".input2R img");
    var $input2RS = $(".input2R span");
    var $input3 = $(".ZC-input .input3");//重复密码
    var $input3RI = $(".input3R img");
    var $input3RS = $(".input3R span");
    var $input4 = $(".ZC-input .input4");//手机号
    var $input4RI = $(".input4R img");
    var $input4RS = $(".input4R span");
    var $input5 = $(".ZC-input .input5");//验证码
    var $input5RIa = $(".input5R i a");
    var $input5RImg = $(".input5R img");
    var $input5RS = $(".input5R span");
    var $input6 = $(".ZC-input .input6");//短信验证码
    var $input6RI = $(".input6R img");
    var $input6RS = $(".input6R span");
    var $input7 = $(".ZC-input .input7");//电子邮箱
    var $input7RI = $(".input7R img");
    var $input7RS = $(".input7R span");
    $input1.focus(function(){
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        $input1RI.attr({src:"images/zhuce/v-icon-1.png"});
        $input1RS.html("请输入用户名");
    });
    $input1.blur(function(){

        $(this).removeClass("colorB");
        var userName = /^\w{6,20}$/;
        if($(this).val()!==""){
            if(userName.test($(this).val())){
                $input1.removeClass("colorB");
                $input1RI.attr({src:"images/zhuce/v-icon-3.png"});
                $input1RS.html()
            }else{
                $(this).addClass("colorR");
                $input1RI.attr({src:"images/zhuce/v-icon-2.png"});
                $input1RS.html("用户名长度只能在6-20位字符之间")
            }
        }else{
            $(this).addClass("colorR");
            $input1RI.attr({src:"images/zhuce/v-icon-2.png"});
            $input1RS.html("请输入用户名")
        }
    });
    $input2.focus(function(){
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        $input2RI.attr({src:"images/zhuce/v-icon-1.png"});
        $input2RS.html("请输入密码");
    });
    $input2.blur(function(){
        $(this).removeClass("colorB");
        var userName = /^\w{6,20}$/;
        if($(this).val()!==""){
            if(userName.test($(this).val())){
                $input2.removeClass("colorB");
                $input2RI.attr({src:"images/zhuce/v-icon-3.png"});
                $input2RS.html()
            }else{
                $(this).addClass("colorR");
                $input2RI.attr({src:"images/zhuce/v-icon-2.png"});
                $input2RS.html("密码长度只能在6-20位字符之间")
            }
        }else{
            $(this).addClass("colorR");
            $input2RI.attr({src:"images/zhuce/v-icon-2.png"});
            $input2RS.html("您的密码不能为空")
        }
    });
    $input3.focus(function(){
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        $input3RI.attr({src:"images/zhuce/v-icon-1.png"});
        $input3RS.html("请输入密码");
    });
    $input3.blur(function(){
        $(this).removeClass("colorB");
        if($(this).val()!==$input2.val()){
            $(this).addClass("colorR");
            $input3RI.attr({src:"images/zhuce/v-icon-2.png"});
            $input3RS.html("确认密码与登录密码不一致")
        }else{
            if($(this).val()!==""){
                $input3RI.attr({src:"images/zhuce/v-icon-3.png"});
                $input3RS.html("")
            }else{
                $(this).addClass("colorR");
                $input3RI.attr({src:"images/zhuce/v-icon-2.png"});
                $input3RS.html("您设置的密码不能为空")
            }
        }
    });
    $input4.focus(function(){
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        $input4RI.attr({src:"images/zhuce/v-icon-1.png"});
        $input4RS.html("请输入手机号码");
    });
    $input4.blur(function(){
        $(this).removeClass("colorB");
        var phoneN = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
        if($(this).val()!==""){
            if(phoneN.test($(this).val())){
                $input4.removeClass("colorB");
                $input4RI.attr({src:"images/zhuce/v-icon-3.png"});
                $input4RS.html()
            }else{
                $(this).addClass("colorR");
                $input4RI.attr({src:"images/zhuce/v-icon-2.png"});
                $input4RS.html("请输入正确的手机号码")
            }
        }else{
            $(this).addClass("colorR");
            $input4RI.attr({src:"images/zhuce/v-icon-2.png"});
            $input4RS.html("手机号码不能为空")
        }
    });
    function fnRandomCode() {
        var randomCode = '';
        var str = [];
        for(var i=0 ; i<10; i++){
            str.push(i);
        }
        for(var i=65; i<91; i++){
            str.push(String.fromCharCode(i));
        }
        for(var i=97; i<123 ; i++){
            str.push(String.fromCharCode(i));
        }
        for(var i=0; i<4; i++){
            var codeIndex = parseInt(Math.random()*(str.length));
            randomCode += str[codeIndex];
        }
        return randomCode;
    }
    var randC = fnRandomCode();
    $input5.focus(function(){

        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        /*$input5RI.attr({src:"images/zhuce/v-icon-1.png"});*/
        $input5RIa.html("验证码：");
        $input5RS.html(randC);
    });
    $input5.blur(function(){
        $input5RIa.html("");
        $(this).removeClass("colorB");
        if($(this).val()!==randC){
            $(this).addClass("colorR");
            $input5RImg.attr({src:"images/zhuce/v-icon-2.png"});
            $input5RS.html("验证码错误")
        }else{
            if($(this).val()!==""){

                $input5RImg.attr({src:"images/zhuce/v-icon-3.png"});
                $input5RS.html("")
            }else{
                $(this).addClass("colorR");
                $input5RImg.attr({src:"images/zhuce/v-icon-2.png"});
                $input5RS.html("验证码不能为空")
            }

        }
    });
    $input6.focus(function(){
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        
    });
    $input6.blur(function(){
        if($(this).val()!==""){
            $(this).removeClass("colorB");
        }else{
            $(this).addClass("colorR");

        }
    });
    $input7.focus(function(){
        $(this).removeClass("colorR");
        $(this).addClass("colorB");
        $input7RI.attr({src:"images/zhuce/v-icon-1.png"});
        $input7RS.html("请输入邮箱");
    });
    $input7.blur(function(){
        $(this).removeClass("colorB");
        var eMailReg = /^([a-zA-Z]+\.)?\w+@\w+\.[a-z]{2,5}$/;
        if($(this).val()!==""){
            if(eMailReg.test($(this).val())){
                $input7.removeClass("colorB");
                $input7RI.attr({src:"images/zhuce/v-icon-3.png"});
                $input7RS.html()
            }else{
                $(this).addClass("colorR");
                $input7RI.attr({src:"images/zhuce/v-icon-2.png"});
                $input7RS.html("请输入正确的邮箱")
            }
        }else{
            $(this).addClass("colorR");
            $input7RI.attr({src:"images/zhuce/v-icon-2.png"});
            $input7RS.html("注册邮箱不能为空")
        }
    });
});
