webpackJsonp([1,0],[function(module,exports,t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function a(t){return/[a-zA-Z]+/.test(t)&&/[0-9]+/.test(t)&&/\W+\D+/.test(t)?3:/[a-zA-Z]+/.test(t)||/[0-9]+/.test(t)||/\W+\D+/.test(t)?/[a-zA-Z]+/.test(t)&&/[0-9]+/.test(t)?2:/[a-zA-Z]+/.test(t)&&/\W+\D+/.test(t)?2:/[0-9]+/.test(t)&&/\W+\D+/.test(t)?2:1:void 0}function n(){var t,e=(0,u.default)("#code").val();return u.default.ajax({url:"./php/captchaAjax1.php",type:"post",async:!1,data:{code:e},success:function(e){t=0!=e,t||(0,u.default)("#captcha_img").click()}}),t}function s(){var t="./php/captcha.php?r=Math.random()";(0,u.default)("#captcha_img").attr("src",t)}function o(){(0,u.default)("#username").val(""),(0,u.default)("#password").val(""),(0,u.default)("#password1").val(""),(0,u.default)("#telephone").val(""),(0,u.default)("#telCode").val(""),(0,u.default)("#code").val("")}function i(t,e,a){t.src=e,t.load(),t.addEventListener("canplay",function(){m.loadStatus="loaded",a()}),t.addEventListener("loadstart",function(){m.loadStatus="loading"})}function l(){return"unload"===m.loadStatus?(i(m,"./media/bg.mp3",function(){l()}),!0):void m.play()}function d(){m.pause()}t(2),t(7);var r=t(1),u=e(r);t(8),t(4),t(6),t(5),t(3),(0,u.default)(".wp-inner").fullpage({change:function(t){(0,u.default)(".page").eq(t.cur).find(".js-animate").each(function(){(0,u.default)(this).removeClass((0,u.default)(this).data("animate")).hide()})},afterChange:function(t){(0,u.default)(".page").eq(t.cur).find(".js-animate").each(function(){(0,u.default)(this).addClass((0,u.default)(this).data("animate")).show()})}});var c=null,f=!1,p=null;(0,u.default)("#submitTo").on("click",function(t){t.preventDefault(),(0,u.default)(".c7").css("top","1.066667rem");var e=(0,u.default)("#username").val().trim(),s=(0,u.default)("#password").val().trim(),i=(0,u.default)("#password1").val().trim(),l=e.length,d=(0,u.default)("#password").val().trim(),r=(0,u.default)("#password").val().trim().length,m=(0,u.default)("#telephone").val(),h=(0,u.default)("#telCode").val().trim(),g=(0,u.default)("#code").val();l<=2||l>6?((0,u.default)(".usernameMsg").html("用户名长度在2~6之间"),(0,u.default)("#username").focus()):/^[a-zA-Z]+/.test(e)?/[a-zA-Z0-9]+$/.test(e)?/.*[\s]+.*/.test(d)?((0,u.default)(".passwordMsg").html("密码不能为空格"),(0,u.default)("#password").focus()):r<6?((0,u.default)(".passwordMsg").html("密码长度不足6位"),(0,u.default)("#password").focus()):1==a(d)?((0,u.default)(".passwordMsg").html("密码强度不足"),(0,u.default)("#password").focus()):i!=s?((0,u.default)(".password1Msg").html("密码不一致"),(0,u.default)("#password1").focus()):/^0?1[3|4|5|8][0-9]\d{8}$/.test(m)?f?0==h.length?((0,u.default)(".telCodeMsg").html("请输入验证码"),(0,u.default)("#telCode").focus()):h!=c?((0,u.default)(".telCodeMsg").html("验证码不正确，重新输入"),(0,u.default)("#telCode").focus()):0==g.length?((0,u.default)(".codeMsg").html("请输入验证码"),(0,u.default)("#code").focus()):n()?u.default.ajax({type:"post",async:!0,data:{username:e,password:s},url:"php/1.php",success:function(t){alert("成功"),o(),clearInterval(p),(0,u.default)("#yan").val("发送验证码").removeClass("yanColor")},error:function(){alert("错了")}}):((0,u.default)(".codeMsg").html("验证码不正确，重新输入"),(0,u.default)("#code").focus()):((0,u.default)(".telMsg").html("请发送验证码"),(0,u.default)("#telephone").focus()):((0,u.default)(".telMsg").html("请输入正确手机号"),(0,u.default)("#telephone").focus()):((0,u.default)(".usernameMsg").html("用户名为字母数字组合"),(0,u.default)("#username").focus()):((0,u.default)(".usernameMsg").html("首位为字母"),(0,u.default)("#username").focus())}),(0,u.default)("#username").on("input",function(){var t=(0,u.default)("#username").val().trim().length;t>2&&t<=6&&(0,u.default)(".usernameMsg").html("")}),(0,u.default)("#password").on("input",function(){var t=this.value.trim(),e=a(t);1==e?(0,u.default)(".passwordMsg").attr("class","nameMsg passwordMsg"):2==e?((0,u.default)(".passwordMsg").html("密码强度一般"),(0,u.default)(".passwordMsg").attr("class","nameMsg passwordMsg warn"),setTimeout(function(){(0,u.default)(".passwordMsg").html("")},1e3)):3==e&&((0,u.default)(".passwordMsg").html("密码强度很好"),(0,u.default)(".passwordMsg").attr("class","nameMsg passwordMsg ok"),setTimeout(function(){(0,u.default)(".passwordMsg").html("")},1e3))}),(0,u.default)("#password1").on("input",function(){var t=(0,u.default)("#password").val(),e=(0,u.default)("#password1").val();e==t?setTimeout(function(){(0,u.default)(".password1Msg").html("")},1e3):(0,u.default)(".password1Msg").attr("class","nameMsg password1Msg")}),(0,u.default)("#telephone").on("input",function(){var t=(0,u.default)("#telephone").val();/^0?1[3|4|5|8][0-9]\d{8}$/.test(t)?setTimeout(function(){(0,u.default)(".telMsg").html("")},1e3):(0,u.default)(".telMsg").attr("class","nameMsg telMsg")}),(0,u.default)("#yan").on("click",function(){var t=(0,u.default)(this),e=(0,u.default)("#telephone").val().trim();return 0==e.length?((0,u.default)(".telMsg").html("请输入手机号"),void(0,u.default)("#telephone").focus()):/^0?1[3|4|5|8][0-9]\d{8}$/.test(e)?void u.default.ajax({url:"./php/phoneCode.php",type:"post",async:!1,data:{phonenumber:e},success:function(e){e&&(f=!0,t.attr("disabled",!0).addClass("yanColor"),setTimeout(function(){(0,u.default)(".telMsg").html("")},1e3),t.val("60"),c=e,alert(c),p=setInterval(function(){t.val(t.val()-1),0==t.val()&&(clearInterval(p),t.removeAttr("disabled").removeClass("yanColor"),t.val("发送验证码"),f=!1)},1e3))}}):((0,u.default)(".telMsg").html("格式不正确"),void(0,u.default)("#telephone").focus())}),(0,u.default)("#telCode").on("input",function(){setTimeout(function(){(0,u.default)(".telCodeMsg").html("")},1e3)}),s(),(0,u.default)("#code").on("input",function(){setTimeout(function(){(0,u.default)(".codeMsg").html("")},1e3)}),(0,u.default)("#captcha_img").on("click",function(){s()}),(0,u.default)("#telCode").on("focus",function(){(0,u.default)(".c7").css("top","0rem")}),(0,u.default)("#code").on("focus",function(){(0,u.default)(".c7").css("top","-1.2rem")});var m=new Audio;m.loadStatus="unload",m.loop=!0,m.addEventListener("playing",function(t){(0,u.default)("#music .music-btn").addClass("play")}),m.addEventListener("pause",function(t){(0,u.default)("#music .music-btn").removeClass("play")}),(0,u.default)("body").one("click",function(){l(),(0,u.default)("#music").on("click",function(t){return m.paused?(l(),!1):(d(),!0)})}),window.onload=function(){"unload"===m.loadStatus&&l()}},,function(module,exports){module.exports='<!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8 /> <title>Document</title> </head> <body> <div id=music class=music> <a class=music-btn></a> </div> <div class=wp> <div class=wp-inner> <div class="page page1"> <div class=container> <a href=http://jingyan.baidu.com/ target=_blank class="exp-logo js-animate animated" data-animate=flipInX></a> <div class="heart js-animate animated" data-animate=bounceIn></div> <div class="big-title js-animate animated" data-animate=fadeInRightBig></div> <p class="line-title js-animate animated" data-animate=fadeInLeftBig><span><i class=i-left></i>测测你有多少分<i class=i-right></i></span></p> <div class="next-page js-animate animated" data-animate=fadeInUpBig>开始测试</div> </div> </div> <div class="page page2"> <div class="js-animate animated c1" data-animate=fadeInUp>bounceIn</div> <div class="js-animate animated c2" data-animate=zoomInRight>dddd</div> <div class="js-animate animated c3" data-animate=zoomInLeft>bounceIn</div> <div class="js-animate animated c4" data-animate=bounceIn>dddd</div> <div class="js-animate animated c5" data-animate=zoomIn> <p>你哈哈哈哈哈哈啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p> </div> <div class="js-animate animated c6" data-animate=zoomInUp>dddd</div> </div> <div class="page page3"> <div class="js-animate animated c7" data-animate=fadeInUp> <form action="" class=sub-form method="" autocomplete=off> <p class=item-form> <label for=username>用户名：</label> <input type=text name=username id=username placeholder=请输入用户名 /> <span class="nameMsg usernameMsg"></span> </p> <p class=item-form> <label for=password>密码：</label> <input type=text name=password id=password placeholder=请输入密码 /> <span class="nameMsg passwordMsg"></span> </p> <p class=item-form> <label for=password1>确认密码：</label> <input type=text name=password1 id=password1 placeholder=请输入密码 /> <span class="nameMsg password1Msg"></span> </p> <p class=item-form> <label for=telephone>手机号：</label> <input type=text name=telephone id=telephone placeholder=请输入手机号 /> <input type=button id=yan value=发送验证码 /> <span class="nameMsg telMsg"></span> </p> <p class=item-form> <label for=telCode>短信验证码：</label> <input type=text name=telCode id=telCode placeholder=请输入短信验证码 /> <span class="nameMsg telCodeMsg"></span> </p> <p class=item-form> <label for=code>验证码：</label> <input type=text name=code id=code placeholder=请输入验证码 /> <img id=captcha_img e/> <span class="nameMsg codeMsg"></span> </p> <p class=item-form> <label for=submitTo>确定：</label> <input type=submit id=submitTo class=submitTo value=提交 /> <span class=nameMsg></span> </p> </form> </div> </div> </div> </div> <span class=start><b></b></span> </body> </html>'},function(module,exports){},3,3,3,function(module,exports){"use strict";!function(){var t="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(a){e.innerText=t}}(),!function(t,e){function a(){var e=o.getBoundingClientRect().width;e/d>540&&(e=540*d);var a=e/10;o.style.fontSize=a+"px",u.rem=t.rem=a}var n,s=t.document,o=s.documentElement,i=s.querySelector('meta[name="viewport"]'),l=s.querySelector('meta[name="flexible"]'),d=0,r=0,u=e.flexible||(e.flexible={});if(i){console.warn("将根据已有的meta标签来设置缩放比例");var c=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(r=parseFloat(c[1]),d=parseInt(1/r))}else if(l){var f=l.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(d=parseFloat(p[1]),r=parseFloat((1/d).toFixed(2))),m&&(d=parseFloat(m[1]),r=parseFloat((1/d).toFixed(2)))}}if(!d&&!r){var h=t.navigator.userAgent,g=(!!h.match(/android/gi),!!h.match(/iphone/gi)),v=g&&!!h.match(/OS 9_3/),w=t.devicePixelRatio;d=g&&!v?w>=3&&(!d||d>=3)?3:w>=2&&(!d||d>=2)?2:1:1,r=1/d}if(o.setAttribute("data-dpr",d),!i)if(i=s.createElement("meta"),i.setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+r+", maximum-scale="+r+", minimum-scale="+r+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(i);else{var b=s.createElement("div");b.appendChild(i),s.write(b.innerHTML)}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(a,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(a,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*d+"px":s.addEventListener("DOMContentLoaded",function(){s.body.style.fontSize=12*d+"px"},!1),a(),u.dpr=t.dpr=d,u.refreshRem=a,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(module,exports,t){(function(t){"use strict";!function($,t,e){function a(t){t.preventDefault()}function n(t,e,a){return t<0?a?e-1:0:t>=e?a?0:e-1:t}function s(t,e,a){var n="0px",s="0px";"v"===e?s=a+"px":n=a+"px",t.css({"-webkit-transform":"translate3d("+n+", "+s+", 0px);",transform:"translate3d("+n+", "+s+", 0px);"})}function o(t){var e=$.extend(!0,{},d,t),a=this;a.curIndex=-1,a.o=e,a.startY=0,a.movingFlag=!1,a.$this.addClass("fullPage-wp"),a.$parent=a.$this.parent(),a.$pages=a.$this.find(e.page).addClass("fullPage-page fullPage-dir-"+e.dir),a.pagesLength=a.$pages.length,a.update(),a.initEvent(),a.start()}function i(t,e){this.$this=t,o.call(this,e)}if("undefined"==typeof $)throw new Error("zepto.fullpage's script requires Zepto");var l=null,d={page:".page",start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(t){},beforeChange:function(t){},afterChange:function(t){},orientationchange:function(t){}};$.extend(i.prototype,{update:function(){"h"===this.o.dir&&(this.width=this.$parent.width(),this.$pages.width(this.width),this.$this.width(this.width*this.pagesLength)),this.height=this.$parent.height(),this.$pages.height(this.height),this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},initEvent:function(){var e=this,a=e.$this;a.on("touchstart",function(t){return e.status?e.movingFlag?0:(e.startX=t.targetTouches[0].pageX,void(e.startY=t.targetTouches[0].pageY)):1}),a.on("touchend",function(t){if(!e.status)return 1;if(e.movingFlag)return 0;var a="v"===e.o.dir?(t.changedTouches[0].pageY-e.startY)/e.height:(t.changedTouches[0].pageX-e.startX)/e.width,n=a>e.o.der||a<-e.o.der?a>0?-1:1:0;e.moveTo(e.curIndex+n,!0)}),e.o.drag&&a.on("touchmove",function(t){if(!e.status)return 1;if(e.movingFlag)return e.startX=t.targetTouches[0].pageX,e.startY=t.targetTouches[0].pageY,0;var n=t.changedTouches[0].pageY-e.startY;(0==e.curIndex&&n>0||e.curIndex===e.pagesLength-1&&n<0)&&(n/=2);var o=t.changedTouches[0].pageX-e.startX;(0==e.curIndex&&o>0||e.curIndex===e.pagesLength-1&&o<0)&&(o/=2);var i="v"===e.o.dir?-e.curIndex*e.height+n:-e.curIndex*e.width+o;a.removeClass("anim"),s(a,e.o.dir,i)}),t.addEventListener("orientationchange",function(){180!==t.orientation&&0!==t.orientation||e.o.orientationchange("portrait"),90!==t.orientation&&t.orientation!==-90||e.o.orientationchange("landscape")},!1),t.addEventListener("resize",function(){e.update()},!1)},holdTouch:function(){$(document).on("touchmove",a)},unholdTouch:function(){$(document).off("touchmove",a)},start:function(){this.status=1,this.holdTouch()},stop:function(){this.status=0,this.unholdTouch()},moveTo:function(e,a){var o=this,i=o.$this,l=o.curIndex;if(e=n(e,o.pagesLength,o.o.loop),a?i.addClass("anim"):i.removeClass("anim"),e!==l){var d=o.o.beforeChange({next:e,cur:l});if(d===!1)return 1}return o.movingFlag=!0,o.curIndex=e,s(i,o.o.dir,-e*("v"===o.o.dir?o.height:o.width)),e!==l&&o.o.change({prev:l,cur:e}),t.setTimeout(function(){o.movingFlag=!1,e!==l&&(o.o.afterChange({prev:l,cur:e}),o.$pages.removeClass("cur").eq(e).addClass("cur"))},o.o.duration),0},movePrev:function(t){this.moveTo(this.curIndex-1,t)},moveNext:function(t){this.moveTo(this.curIndex+1,t)},getCurIndex:function(){return this.curIndex}}),$.fn.fullpage=function(t){return l||(l=new i($(this),t)),this},$.fn.fullpage.version="0.5.0",$.each(["update","moveTo","moveNext","movePrev","start","stop","getCurIndex","holdTouch","unholdTouch"],function(t,e){$.fn.fullpage[e]=function(){return l?l[e].apply(l,arguments):0}})}(t,window)}).call(exports,t(1))}]);