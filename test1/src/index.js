import './index.html'
import './libs/js/flexible.js';
import $ from 'webpack-zepto';
import './libs/js/zepto.fullpage.js';
import 'gcss';
import 'fcss';
import 'acss';
import 'icss';

$('.wp-inner').fullpage({
    change: function (e) {
        // 移除动画属性
        $('.page').eq(e.cur).find('.js-animate').each(function() {
            $(this).removeClass($(this).data('animate')).hide();
        });
       
    },
    afterChange: function (e) {
        // 添加动画属性
        $('.page').eq(e.cur).find('.js-animate')
            .each(function () {
                $(this).addClass($(this).data('animate')).show();
            });

 
    }
});
var phoneYZM = null,
    sendYan = false,
    timer = null;
// 提交验证
$("#submitTo").on("click",function(e){
    e.preventDefault();
    $(".c7").css("top","1.066667rem");
    var value = $("#username").val().trim(),
        password = $("#password").val().trim(),
        password1 = $("#password1").val().trim(),
        userLen = value.length,
        pwd = $("#password").val().trim(),
        passLen = $("#password").val().trim().length,
        tel = $("#telephone").val(),
        telCode = $("#telCode").val().trim(),
        val = $("#code").val();
    // 用户名
    if(userLen<=2||userLen>6){
       $(".usernameMsg").html("用户名长度在2~6之间");
       $("#username").focus();      
    }else if(!/^[a-zA-Z]+/.test(value)){
        $(".usernameMsg").html("首位为字母");
        $("#username").focus();
    }else if(!/[a-zA-Z0-9]+$/.test(value)){
        $(".usernameMsg").html("用户名为字母数字组合");
        $("#username").focus();
    }
    // 密码
    else if(/.*[\s]+.*/.test(pwd)){
        $(".passwordMsg").html("密码不能为空格");
        $("#password").focus();
    }else if(passLen<6){
        $(".passwordMsg").html("密码长度不足6位");
        $("#password").focus();
    }else if(pwdStrength(pwd)==1){
        $(".passwordMsg").html("密码强度不足");
        $("#password").focus();
    }
    // 确认密码
    else if(password1!=password){
        $(".password1Msg").html("密码不一致");
        $("#password1").focus();
    }


    // 手机验证
    else if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(tel)){
        $(".telMsg").html("请输入正确手机号");
        $("#telephone").focus();
    }else if(!sendYan){
        $(".telMsg").html("请发送验证码");
        $("#telephone").focus();
    }else if(telCode.length==0 ){
        $(".telCodeMsg").html("请输入验证码");
        $("#telCode").focus();
    }else if(telCode !=phoneYZM){
        $(".telCodeMsg").html("验证码不正确，重新输入");
        $("#telCode").focus();
    }

    // 图标验证
    else if(val.length==0){
        $(".codeMsg").html("请输入验证码");
        $("#code").focus();
    }else if(!codeTrue()){
        $(".codeMsg").html("验证码不正确，重新输入");
        $("#code").focus();
    }
    // 提交
    else{
        $.ajax({
            type:"post",
            async:true,
            data:{
                "username":value,
                "password":password
            },
            url:__DEVAPI__+"php/1.php",
            success:function(data){
                alert("成功");
                clearInput();
                clearInterval(timer);
                $("#yan").val("发送验证码").removeClass("yanColor");               
            },
            error:function(){
                alert("错了")
            }
        })
    }       
})

// 用户名
$("#username").on("input",function(){
    var userLen = $("#username").val().trim().length;
    if(userLen>2&&userLen<=6){
        $(".usernameMsg").html("");
    }
})
// 密码
$("#password").on("input",function(){
    var pwd = this.value.trim(),
        strength = pwdStrength(pwd);
    if(strength == 1){
        $(".passwordMsg").attr("class","nameMsg passwordMsg");
    }else if(strength == 2){
        $(".passwordMsg").html("密码强度一般");
        $(".passwordMsg").attr("class","nameMsg passwordMsg warn");
        setTimeout(function(){
           $(".passwordMsg").html(""); 
        }, 1000)
    }else if(strength == 3){
        $(".passwordMsg").html("密码强度很好");
        $(".passwordMsg").attr("class","nameMsg passwordMsg ok");
        setTimeout(function(){
           $(".passwordMsg").html(""); 
        }, 1000)
    }
})
// 密码强度
function pwdStrength(pwd){
    if(/[a-zA-Z]+/.test(pwd) && /[0-9]+/.test(pwd) && /\W+\D+/.test(pwd)) {
       return 3;
    }else if(/[a-zA-Z]+/.test(pwd) || /[0-9]+/.test(pwd) || /\W+\D+/.test(pwd)) {
        if(/[a-zA-Z]+/.test(pwd) && /[0-9]+/.test(pwd)) {
            return 2;
        }else if(/[a-zA-Z]+/.test(pwd) && /\W+\D+/.test(pwd)) {
            return 2;
        }else if(/[0-9]+/.test(pwd) && /\W+\D+/.test(pwd)) {
            return 2;
        }else{
            return 1;
        }
    }
}
// 确认密码
$("#password1").on("input",function(){
    var password = $("#password").val(),
        password1 = $("#password1").val();
    if(password1==password){
        setTimeout(function(){
           $(".password1Msg").html(""); 
        }, 1000)
    }else{
        $(".password1Msg").attr("class","nameMsg password1Msg"); 
    }
})
// 电话号码
$("#telephone").on("input",function(){
    var tel = $("#telephone").val();
    if(/^0?1[3|4|5|8][0-9]\d{8}$/.test(tel)){
        setTimeout(function(){
           $(".telMsg").html(""); 
        }, 1000)
    }else{
        $(".telMsg").attr("class","nameMsg telMsg");
    }
})
// 手机发送验证码
$("#yan").on("click",function(){

    var $this = $(this);
    var tel = $("#telephone").val().trim();
    if(tel.length==0){
        $(".telMsg").html("请输入手机号");
        $("#telephone").focus();
        return;
    } else if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(tel)){
        $(".telMsg").html("格式不正确");
        $("#telephone").focus();
        return;
    }
    $.ajax({
        url: (__DEVAPI__+"./php/phoneCode.php"),
        type: "post",
        async: false,
        data: {
            phonenumber: tel
        },
        success: function(data) {
            if (!!data) {
                sendYan = true;
                $this.attr("disabled",true).addClass("yanColor");
                setTimeout(function(){
                   $(".telMsg").html(""); 
                }, 1000)
                $this.val("60");
                phoneYZM = data;
                alert(phoneYZM);                
                timer = setInterval(function(){
                    $this.val( $this.val()-1);
                    if($this.val() ==0){ 
                        clearInterval(timer);
                        $this.removeAttr("disabled").removeClass("yanColor");
                        $this.val("发送验证码");
                        sendYan = false;
                    } 
                }, 1000)
            }
        }
    })
})
// 短信验证码
$("#telCode").on("input",function(){
    setTimeout(function(){
       $(".telCodeMsg").html(""); 
    }, 1000)
})

// 图形验证码
captcha();
$("#code").on("input",function(){
    setTimeout(function(){
       $(".codeMsg").html(""); 
    }, 1000)
})
function codeTrue(){
    var flag,
        val = $("#code").val();
    $.ajax({
        url:__DEVAPI__+"./php/captchaAjax1.php",
        type:"post",
        async:false,
        data:{code:val},
        success:function(data){
            flag=(data==0) ? false : true;
            if(!flag){               
                $("#captcha_img").click();
            }
        }
    })
    return flag;   
}

function captcha(){
    var src=__DEVAPI__+'./php/captcha.php?r=Math.random()';
    $("#captcha_img").attr("src",src);
}

$("#captcha_img").on("click",function(){
    captcha();
});

function clearInput(){
    $("#username").val("");
    $("#password").val("");
    $("#password1").val("");
    $("#telephone").val("");
    $("#telCode").val("");
    $("#code").val("");
}
// hack 虚拟键盘
$("#telCode").on("focus",function () {
    $(".c7").css("top","0rem")
})

$("#code").on("focus",function () {
    $(".c7").css("top","-1.2rem")
})

var bgAudio = new Audio();
    bgAudio.loadStatus = 'unload';
    bgAudio.loop = true;
    function loadAudio(audio, url, callback) {
       audio.src = url;
       audio.load();
       audio.addEventListener('canplay', function () {
           bgAudio.loadStatus = 'loaded';
           callback();
       });
       audio.addEventListener('loadstart', function () {
           bgAudio.loadStatus = 'loading';
       });
    }
    function playAudio(){
       if (bgAudio.loadStatus === 'unload') {
           loadAudio(bgAudio, './media/bg.mp3', function () {
               playAudio();
           });
           return true
       }

       bgAudio.play();
    }
    function stopAudio() {
       bgAudio.pause();
    }

    bgAudio.addEventListener('playing' ,function (e) {
       $('#music .music-btn').addClass('play');
    });
    bgAudio.addEventListener('pause' ,function (e) {
       $('#music .music-btn').removeClass('play');
    });

    $('body').one('click', function () {
       playAudio();
       $('#music').on('click', function (e) {
           if (bgAudio.paused) {
               playAudio();
               return false;
           }
            stopAudio(); 
            return true;       
       });
    });
    window.onload = function() {
       if (bgAudio.loadStatus !== 'unload') {return;}
       playAudio();
    };



