/**
 * Created by Gary on 2017/5/26 0026.
 */
var box = document.getElementById('box');
var one = document.getElementById('one');
var two = document.getElementById('two');
var twoChild = two.getElementsByClassName('child-bg');
var three = document.getElementById('three');
var inner = document.getElementById('inner');
//获取第一个页面中的大圈圈
var quan = document.getElementById('quan');
//获取第一个页面的中心LOGO
var logo_center = document.getElementById('logo-center');
var p = 0; //page
//获取小圆点
var navIndex = document.getElementById('navIndex');
var lis = navIndex.children;
var shadow = document.getElementById('shadow');
//第二页中的四个图标容器
var content = two.getElementsByClassName('content')[0];
var Cchilds = content.getElementsByClassName('child');
var about = document.getElementById('about');
var child1 = document.getElementById('child1');
var child2 = document.getElementById('child2');
var child3 = document.getElementById('child3');
var child4 = document.getElementById('child4');
box.style.height = window.innerHeight + 'px';
box.style.width = window.innerWidth + 'px';
one.style.height = window.innerHeight + 'px';
one.style.width = window.innerWidth + 'px';
two.style.height = window.innerHeight + 'px';
two.style.width = window.innerWidth + 'px';
three.style.height = window.innerHeight + 'px';
three.style.width = window.innerWidth + 'px';

//导航开始
var lastPosition = 0;
var nav = document.getElementById("nav");
var header = nav.parentNode;
var navbg = document.getElementById("navbg");
var Navlis = nav.children;
var count = 3;
Navlis[1].children[0].style.color= "#fff";
for (var i = 0; i < Navlis.length; i++) {
    Navlis[i].index = i;
    Navlis[i].onmouseover= function () {
        var target = this.offsetLeft;
        animate(navbg,{"left":target},15);
        navbg.style.width=this.offsetWidth+"px";
        for(var i=0;i<Navlis.length;i++){
            Navlis[i].children[0].style.color= " #8ebfc2";
    }
    this.children[0].style.color = '#fff';
    };
    Navlis[i].onmouseout = function () {
        animate(navbg,{"left":lastPosition},15);
        navbg.style.width=Navlis[1].offsetWidth+"px";
        for(var i=0;i<lis.length;i++){
            Navlis[i].children[0].style.color= "#8ebfc2";
        }
        this.children[0].style.color = '#8ebfc2';
        Navlis[1].children[0].style.color = '#fff';
    };

    Navlis[i].onclick = function () {
        count = this.index;
        //this.children[0].style.color= "#3B27FF";
        lastPosition = this.offsetLeft;//记录当前点击的位置
    };
}
//图标旋转360度
//var share = document.getElementById("share");
var icos = document.getElementsByClassName("i");
for (var j = 0; j < icos.length; j++) {
    icos[j].onmouseover = function () {
        //this.style.transform = "rotate(60deg)";
        animateIco(this, 360, 1);
    }
    icos[j].onmouseout = function () {
        animateIco(this, 0, 1);
    }
}
//微信弹出特效
var icomsg = document.getElementById("icomsg");
var wechat = document.getElementById("wechat");
icomsg.onmouseover = function () {
    wechat.style.display = "block";
    animate5(wechat, {"top": 51, "opacity": 1}, 15)
}
icomsg.onmouseout = function () {
    animate5(wechat, {"top": 11, "opacity": 0}, 15, function () {
        wechat.style.display = "none";
    })
};
animate(header,{top:0},15);
//导航结束
//第二个页面的背景图
for (var i = 0; i < twoChild.length; i++) {
    twoChild[i].style.height = window.innerHeight + 'px';
    twoChild[i].style.backgroundImage = "url(./img/" + (i + 1) + ".jpg)";
};


three.style.backgroundImage = "url(./img/5.jpg)";
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function (event) {
        var event = event || window.event;
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i].children[0], {
                opacity: 0
            },15);
        }
        animate(this.children[0], {
            opacity: 1
        },15);
        animate(inner, {
            top: -one.offsetHeight * this.index
        },15);
        p = this.index;
    }
}
window.onresize = function () {
    console.log(window.innerHeight);
    box.style.height = window.innerHeight + 'px';
    box.style.width = window.innerWidth + 'px';
    one.style.height = window.innerHeight + 'px';
    one.style.width = window.innerWidth + 'px';
    two.style.height = window.innerHeight + 'px';
    two.style.width = window.innerWidth + 'px';
    for (var i = 0; i < twoChild.length; i++) {
        twoChild[i].style.height = window.innerHeight + 'px';
    }
    three.style.height = window.innerHeight + 'px';
    three.style.width = window.innerWidth + 'px';

};

window.onmousewheel = function (e) {
    var e = e || window.event;
    var cur = inner.offsetTop;

    //console.log(e.wheelDelta); //向上滚是120 向下滚是-120
    if (e.wheelDelta === 120) {
//                向上滚
        if (p <= 0) {
            p = 0;
            inner.style.top = 0;
        } else {
            p--;
            animate(inner, {
                top: -one.offsetHeight * p
            },15);
        }

    } else {
//         e.wheelDelta === -120 向下滚动
        if (p >= 2) {
            p = 2;
            inner.style.top = -one.offsetHeight * 2;
        } else {
            p++;
            animate(inner, {
                top: -one.offsetHeight * p
            },15);
        }
    }
    for (var i = 0; i < lis.length; i++) {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i].children[0], {
                opacity: 0
            },15);
        }
        animate(lis[p].children[0], {
            opacity: 1
        },15);
    }
    //第一个页面的时候
    if (p === 0) {
        quan.className = 'center centerA';
        // logo_center.className = 'logo-center logo-centerA';
        // console.log(p);

        setTimeout(function () {
            animate(logo_center, {
                opacity: 1
            },15);

        }, 1000);
        animate(shadow, {
            opacity: 1
        },15);


    } else {
        quan.className = 'center';
    }
    //第二个页面的时候
    if (p === 1) {
        //改变背景图片
        for (var i = 0; i < Cchilds.length; i++) {
            Cchilds[i].index = i;
            Cchilds[i].onmouseover = function () {
                for (var i = 0; i < Cchilds.length; i++) {
                    Cchilds[i].className = 'child';
                    twoChild[i].style.zIndex = 50;
                }
                this.className = "child in";
                twoChild[this.index].style.zIndex = 100;
            }
        }
    //    四个图逐个个进入
        console.log(child1);
        animate(child1,{top:0,opacity:1},15);
        setTimeout(function () {
            animate(child2,{top:0,opacity:1},15);
        },600);
        setTimeout(function () {
            animate(child3,{top:0,opacity:1},15);
        },1200);
        setTimeout(function () {
            animate(child4,{top:0,opacity:1},15);
        },1800);
    }
    if(p === 2){
        setTimeout(function () {
            animate(about,{opacity:1},15);
        },1000);


    }
};
//twoChild[i].style.backgroundImage
//当第一个页面的时候
// logo_center.style.opacity = '0';
if (p === 0) {

    quan.className = 'center centerA';
    setTimeout(function () {
        animate(logo_center, {
            opacity: 1
        },15);

    }, 1000);
    animate(shadow, {
        opacity: 1
    },15);
} else {
    quan.className = 'center';
}
/*for (var i = 0; i < Cchilds.length; i++) {
    Cchilds[i].index = i;
    Cchilds[i].onmouseover = function () {
        for (var i = 0; i < Cchilds.length; i++) {
            Cchilds[i].className = 'child';
            twoChild[i].style.zIndex = 0 ;
        }
        this.className = "child in";
        twoChild[this.index].style.zIndex = 100;
    }
}*/

