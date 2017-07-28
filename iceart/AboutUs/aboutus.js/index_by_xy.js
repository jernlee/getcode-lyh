/**
 * Created by Administrator on 2017/5/28.
 */
var header = document.getElementById("headerH");


/* 导航栏特效 */
var sign = 80;//定义默认的向上滚与向下滚的边界
window.onscroll = window.onresize = function(){
    var oScrollTop=$(window).scrollTop();
    if ( oScrollTop > sign) {
        sign = oScrollTop;
        //headerH.className = "header header-out";
        animate3(headerH,{"top":-70});
        header.style.overflow = "hidden";
    }
    if ( oScrollTop < sign) {
        sign = oScrollTop;
        animate3(headerH,{"top":0});
        header.style.overflow = "";
    }
};

/* banner特效 */

