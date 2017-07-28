/**
 * Created by Administrator on 2017/5/22 0022.
 */
window.onload= function () {
    //筋斗云特效
    var lastPosition = 348;
    var nav = document.getElementById("nav");
    var navbg = document.getElementById("navbg");
    var lis = nav.children;
    var count = 3;
    lis[4].children[0].style.color= "#3B27FF";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover= function () {
            var target = this.offsetLeft;
            animate(navbg,{"left":target},15);
            navbg.style.width=this.offsetWidth+"px";
        }

        lis[i].onmouseout = function () {
            animate(navbg,{"left":lastPosition},15);
            navbg.style.width=lis[count].offsetWidth+"px";
        };

        lis[i].onclick = function () {
            count = this.index;
            //this.children[0].style.color= "#3B27FF";
            lastPosition = this.offsetLeft;//记录当前点击的位置
        };
    }


//简介信息推出
    var title1 = document.getElementById("title1");
    var title2 = document.getElementById("title2");
    var info = document.getElementById("info");
    var btns = document.getElementById("btns");
    animateInfo(title1,15,6, function () {
        animateInfo(title1,0,25);
    });

    animateInfo(title2,15,6, function () {
        animateInfo(title2,0,25);
    });

    animateInfo(info,15,8, function () {

        animateInfo(btns,10,4, function () {
            animateInfo(btns,0,25);
        });
        animateInfo(info,0,25);
    });






//图标旋转360度
    //var share = document.getElementById("share");
    var icos = document.getElementsByClassName("i");
    for (var j = 0; j < icos.length; j++) {
        icos[j].onmouseover= function () {
            //this.style.transform = "rotate(60deg)";
            animateIco(this,360,1);
        }
        icos[j].onmouseout= function () {
            animateIco(this,0,1);
        }
    }

    var close = document.getElementById("close");
    var support = document.getElementById("support");
    close.onmouseover= function () {
        animateIco(this,360,1);
    }
    close.onmouseout= function () {
        animateIco(this,0,1);
    }
    close.onclick= function () {
        animateClose(support,1134,15, function () {
            support.style.display="none";
        });
    }




//微信弹出特效
    var icomsg = document.getElementById("icomsg");
    var wechat = document.getElementById("wechat");
    icomsg.onmouseover= function () {
        wechat.style.display="block";
        animate(wechat,{"top":51,"opacity":1},15)
    }
    icomsg.onmouseout= function () {
        animate(wechat,{"top":11,"opacity":0},15, function () {
            wechat.style.display="none";
        })
    }

//光点弹出特效
    var guang1 = document.getElementById("guang1");
    var guang2 = document.getElementById("guang2");
    var guang3 = document.getElementById("guang3");
    var guang_wechat1 = document.getElementById("guang-wechat1");
    var guang_wechat2 = document.getElementById("guang-wechat2");
    var guang_wechat3 = document.getElementById("guang-wechat3");

    guang1.onmouseover= function () {
        guang_wechat1.style.display="block";
        animate(guang_wechat1,{"left":60,"opacity":1},15)
    }
    guang1.onmouseout= function () {
        animate(guang_wechat1,{"left":-10,"opacity":0},15, function () {
            guang_wechat1.style.display="none";
        })
    }






    guang2.onmouseover= function () {
        guang_wechat2.style.display="block";
        animate(guang_wechat2,{"left":60,"opacity":1},15)
    }
    guang2.onmouseout= function () {
        animate(guang_wechat2,{"left":-10,"opacity":0},15, function () {
            guang_wechat2.style.display="none";
        })
    }

    guang3.onmouseover= function () {
        guang_wechat3.style.display="block";
        animate(guang_wechat3,{"left":60,"opacity":1},15)
    }
    guang3.onmouseout= function () {
        animate(guang_wechat3,{"left":-10,"opacity":0},15, function () {
            guang_wechat3.style.display="none";
        })
    }


//海浪和船
    var lang1 = document.getElementById("lang1");
    var lang2 = document.getElementById("lang2");
    var lang3 = document.getElementById("lang3");
    var chuan1 = document.getElementById("chuan1");
    var chuan2 = document.getElementById("chuan2");
    var chuan3 = document.getElementById("chuan3");
    var chuan4 = document.getElementById("chuan4");
    lang11();
    lang22();
    lang33();
    chuan11();
    chuan22();
    chuan33();
    chuan44();

    function lang11(){
        animate2(lang1,-600,30, function () {
            animate2(lang1,0,30,lang11);
        })
    }
    function lang22(){
        animate2(lang2,600,30, function () {
            animate2(lang2,0,30,lang22);
        })
    }
    function lang33(){
        animate2(lang3,-600,30, function () {
            animate2(lang3,0,30,lang33);
        })
    }

    function chuan11(){
        animate2(chuan1,877,100, function () {
            animate2(chuan1,804,100,chuan11);
        })
    }
    function chuan22(){
        animate2(chuan2,564,100, function () {
            animate2(chuan2,524,100,chuan22);
        })
    }
    function chuan33(){
        animate2(chuan3,180,100, function () {
            animate2(chuan3,220,100,chuan33);
        })
    }
    function chuan44(){
        animate2(chuan4,48,100, function () {
            animate2(chuan4,68,100,chuan44);
        })
    }


//流星特效
    var star1 = document.getElementById("star1");
    var star2 = document.getElementById("star2");
    var star3 = document.getElementById("star3");
    var star4 = document.getElementById("star4");
    star11();
    star22();
    star33();
    star44();
    function star11(){
        animate(star1,{"opacity":0},110, function () {
            animate(star1,{"opacity":1},50,star11);
        })
    }
    function star22(){
        animate(star2,{"opacity":0},100, function () {
            animate(star2,{"opacity":1},110,star22);
        })
    }
    function star33(){
        animate(star3,{"opacity":0},110, function () {
            animate(star3,{"opacity":1},110,star33);
        })
    }
    function star44(){
        animate(star4,{"opacity":0},100, function () {
            animate(star4,{"opacity":1},40,star44);
        })
    }


//滚轮和圆点
    var ourPhone = document.getElementById("ourPhone");
    var main_father = document.getElementById("main-father");
    //var nav_indexs = document.getElementById("nav-indexs");
    var allYuan = document.getElementById("nav-indexs").children;
    var childIndex = 0;
    document.onwheel= function (event) {
        if(event.wheelDelta<0){
            if(childIndex<2){
                allYuan[childIndex].className="child";
                childIndex++;
                allYuan[childIndex].className="child on";
                var target = -(childIndex*672);
                animate(main_father,{"top":target},15, function () {
                    if(childIndex===1){
                        //显示手机
                        ourPhone.style.display="block";
                        animate(ourPhone,{"bottom":-278},15);
                    }
                    if(childIndex===2){
                        //先隐藏手机
                        ourPhone.style.display="none";
                        animate(ourPhone,{"bottom":-904},15);
                        //再显示服务支持
                        support.style.display="block";
                        animate(support,{"top":0},15);
                    }
                });
            }

        }
        else if(event.wheelDelta>0){
            if(childIndex>0){
                allYuan[childIndex].className="child";
                childIndex--;
                allYuan[childIndex].className="child on";
                var target = -(childIndex*672);
                animate(main_father,{"top":target},15, function () {
                    if(childIndex===1){
                        //先隐藏服务支持
                        animateClose(support,1134,15, function () {
                            support.style.display="none";
                        });
                        //再显示手机
                        ourPhone.style.display="block";
                        animate(ourPhone,{"bottom":-278},15);
                    }
                    if(childIndex===0){
                        //隐藏手机
                        ourPhone.style.display="none";
                        animate(ourPhone,{"bottom":-904},15);
                        //隐藏服务支持
                        support.style.display="none";
                        animate(support,{"top":1134},15);
                    }
                });
            }
        }
    }

    //点击圆点
    var yuan1 = document.getElementById("yuan1");
    var yuan2 = document.getElementById("yuan2");
    var yuan3 = document.getElementById("yuan3");
    yuan1.onclick= function () {
        childIndex=0;
        allYuan[1].className="child";
        allYuan[2].className="child";
        this.className = "child on";
        //隐藏手机
        ourPhone.style.display="none";
        animate(ourPhone,{"bottom":-904},15);
        //隐藏服务支持
        support.style.display="none";
        animate(support,{"top":1134},15);
        //再滚动
        animate(main_father,{"top":0},15);
    }
    yuan2.onclick= function () {
        childIndex=1;
        allYuan[0].className="child";
        allYuan[2].className="child";
        this.className = "child on";
        //先隐藏服务支持
        support.style.display="none";
        animate(support,{"top":1134},15);
        //再滚动，显示手机
        animate(main_father,{"top":-672},15, function () {
            ourPhone.style.display="block";
            animate(ourPhone,{"bottom":-278},15);
        });
    }
    yuan3.onclick= function () {
        childIndex=2;
        allYuan[0].className="child";
        allYuan[1].className="child";
        this.className = "child on";
        //先隐藏手机
        ourPhone.style.display="none";
        animate(ourPhone,{"bottom":-904},15);
        //再滚动，显示服务支持
        animate(main_father,{"top":-1344},15, function () {
            support.style.display="block";
            animate(support,{"top":0},15);
        });
    }

}


//简介信息推出专用函数
function animateInfo(obj,target,speed,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = parseInt(window.getComputedStyle(obj, null).marginLeft);
        var step = 5;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.marginLeft = leader + "px";
        } else {
            obj.style.marginLeft = target + "px";//手动放到终点
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    }, speed);
}

//close专用函数
function animateClose(obj,target,speed,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = parseInt(obj.style.top)||0;
        var step = 70;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.top = leader + "px";
        } else {
            obj.style.top = target + "px";//手动放到终点
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    }, speed);
}

//旋转360专用函数
function animateIco(obj,target,speed,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //"rotate(360deg)".slice("rotate(360deg)".indexOf("(")+1,"rotate(360deg)".indexOf("d"))
        var str = obj.style.transform||"rotate(0deg)";
        var leader = parseInt(str.slice(str.indexOf("(")+1,str.indexOf("d")))||0;
        var step = 8;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.transform = "rotate("+leader+"deg)";
        } else {
            //obj.style.transform = "rotate(360deg)";//不需要！！！
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    }, speed);
}

//缓动
function animate(obj, json,speed, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, speed);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//匀速
function animate2(obj,target,speed,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 1;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    }, speed);
}

