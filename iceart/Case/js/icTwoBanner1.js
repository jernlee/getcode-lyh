/**
 * Created by TZQ on 2017/5/23.
 */
//实现背景轮播
//先找人
var bannerImg = document.getElementById("bannerImg");
var bigBg = document.getElementById("banner-bg");
var bigBgs = bigBg.children;
var left = document.getElementById("btn1");
var right = document.getElementById("btn2");
//鼠标移动到btn上变色
left.onmouseover = function () {
    this.style.backgroundColor = "#FF5B5B";
    clearInterval(bigTimer);
};
left.onmouseout = function () {
    this.style.backgroundColor = "";
    bigTimer = setInterval(doRight,3000);
};
right.onmouseover = function () {
    this.style.backgroundColor = "#FF5B5B";
    clearInterval(bigTimer);
};
right.onmouseout = function () {
    this.style.backgroundColor = "";
    bigTimer = setInterval(doRight,3000);
};
//克隆第一张图片加到最后
/*var firstImg = bigBgs[0].cloneNode(true);
firstImg.className = "banner-bg4";
firstImg.id = "bg4";
bigBg.appendChild(firstImg);
//点击按钮轮播背景
var imgWidth = bigBgs[0].offsetWidth;*/
var index = 0;



var flag1 = true;
function fn(){
    flag1 = true;
};
right.onclick = function () {
    doRight();
};

function doRight(){
    //节流阀
    if(flag1){
        for (var i = 0; i < bigBgs.length; i++) {
            bigBgs[i].style.display = "none";
        }
        index++;
        if(index > 2){
            index = 0;
        }
        bigBgs[index].style.display = "block";

        /*//先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
        if(pic === bigBgs.length - 1){
            bigBg.style.left = 0 + "px";
            pic = 0;
        }
        pic++;//计算出将要显示的图片的索引
        var target = -pic * imgWidth;
        animate(bigBg,{"left":target});*/

        if(titl === title2s.length - 1){
            title2.style.left = 0 + "px";
            titl = 0;
        }
        titl++;
        var target2 = -titl * titleWidth;
        animate(title2,{"left":target2});

        //先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
        if(pic1 === lbImges.length - 1){
            lbImg.style.left = 0 + "px";
            pic1 = 0;
        }
        flag1 = false;
        pic1++;//计算出将要显示的图片的索引
        var target1 = -pic1 * minImgWidth;
        animate(lbImg,{"left":target1},fn);
    }
}


left.onclick = function () {
    //节流阀
    if(flag1){

        for (var i = 0; i < bigBgs.length; i++) {
            bigBgs[i].style.display = "none";
        }
        index--;
        console.log(index);
        if(index < 0){
            index = 2;
        }
        bigBgs[index].style.display = "block";
        console.log(index);

        /*//先判断 如果是第一张图片 先让ul瞬间跳到最后位置 然后索引也要变为bigBgs.length - 1
        if(pic === 0){
            bigBg.style.left = -(bigBgs.length - 1) * imgWidth + "px";
            pic = bigBgs.length - 1;
        }
        pic--;//计算出将要显示的图片的索引
        var target = -pic * imgWidth;
        animate(bigBg,{"left":target});*/

        if(titl === 0){
            title2.style.left = -(title2s.length - 1) * titleWidth + "px";
            titl = title2s.length - 1;
        }
        titl--;
        var target2 = -titl * titleWidth;
        animate(title2,{"left":target2});

        //先判断 如果是第一张图片 先让ul瞬间跳到最后位置 然后索引也要变为lbImges.length - 1
        if(pic1 === 0){
            lbImg.style.left = -(lbImges.length - 1) * minImgWidth + "px";
            pic1 = lbImges.length - 1;
        }
        flag1 = false;
        pic1--;//计算出将要显示的图片的索引
        var target1 = -pic1 * minImgWidth;
        animate(lbImg,{"left":target1},fn);
    }
};


//点击按钮然title2轮播
//找人
var title2 = document.getElementById("title2");
var title2s = title2.children;
//克隆第一个title添加到最后
var firstTitle = title2s[0].cloneNode(true);
firstTitle.className = "title2-four";
title2.appendChild(firstTitle);
//点击箭头移动title
var titl = 0;
var titleWidth = title2s[0].offsetWidth;


//设置数字变化
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var n1 = n2 = n3 = 0;
var timer1 = null;
var timer2 = null;
var timer3 = null;
var bigMun = document.getElementById("bigMun");
//当页面滚动到一定位置就执行下面的函数
/*var chge = true;
//获取页面的卷曲值，只要大于等于每个值就执行
function scroll () {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}
window.onscroll= function () {
    console.log(scroll().top);
    if(chge && scroll().top >= 400){
        chge = false;
        wordChange();
    }
    console.log(1);
}

function wordChange(){
    timer1 = setInterval(function () {
        n1++;
        m1.innerHTML = n1;
        if(n1 === 35){
            clearInterval(timer1);
        }
    },50);
    timer2 = setInterval(function () {
        n2++;
        m2.innerHTML = n2;
        if(n2 === 26){
            clearInterval(timer2);
        }
    },50);
    timer3 = setInterval(function () {
        n3++;
        m3.innerHTML = n3;
        if(n3 === 8){
            clearInterval(timer3);
        }
    },50);
};*/

//下面小图片移动
//找人
var lbImg = document.getElementById("lbImg");
var lbImges = lbImg.children;
//克隆第一张图片放到最后
var minImg = lbImges[0].cloneNode(true);
minImg.className = "lbImg4";
lbImg.appendChild(minImg);
//点击按钮移动图片
var pic1 = 0;
var minImgWidth = lbImges[0].offsetWidth;


//给按钮设置一个定时器
var bigTimer = setInterval(doRight,3000);


//下载图案
var bgDown = document.getElementById("bgDown");
var imgDown = document.getElementById("imgDown");
bgDown.onmouseover = function () {
    //this.style.opacity = "0.8"
    animate(bgDown,{"opacity":0.8,"borderWidth":0,"width":152,"height":152});
    animate(imgDown,{"top":-50}, function () {
        animate(imgDown,{"top":0})
    });
};
bgDown.onmouseout = function () {
    //this.style.opacity = "0.4"
    animate(this,{"opacity":0.4,"borderWidth":1,"width":150,"height":150})
};




