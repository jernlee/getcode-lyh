/**
 * Created by TZQ on 2017/5/23.
 */
//ʵ�ֱ����ֲ�
//������
var bannerImg = document.getElementById("bannerImg");
var bigBg = document.getElementById("banner-bg");
var bigBgs = bigBg.children;
var left = document.getElementById("btn1");
var right = document.getElementById("btn2");
//����ƶ���btn�ϱ�ɫ
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
//��¡��һ��ͼƬ�ӵ����
/*var firstImg = bigBgs[0].cloneNode(true);
firstImg.className = "banner-bg4";
firstImg.id = "bg4";
bigBg.appendChild(firstImg);
//�����ť�ֲ�����
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
    //������
    if(flag1){
        for (var i = 0; i < bigBgs.length; i++) {
            bigBgs[i].style.display = "none";
        }
        index++;
        if(index > 2){
            index = 0;
        }
        bigBgs[index].style.display = "block";

        /*//���ж� ��������һ��ͼƬ ����ul˲�����Ὺʼλ�� Ȼ������ҲҪ����
        if(pic === bigBgs.length - 1){
            bigBg.style.left = 0 + "px";
            pic = 0;
        }
        pic++;//�������Ҫ��ʾ��ͼƬ������
        var target = -pic * imgWidth;
        animate(bigBg,{"left":target});*/

        if(titl === title2s.length - 1){
            title2.style.left = 0 + "px";
            titl = 0;
        }
        titl++;
        var target2 = -titl * titleWidth;
        animate(title2,{"left":target2});

        //���ж� ��������һ��ͼƬ ����ul˲�����Ὺʼλ�� Ȼ������ҲҪ����
        if(pic1 === lbImges.length - 1){
            lbImg.style.left = 0 + "px";
            pic1 = 0;
        }
        flag1 = false;
        pic1++;//�������Ҫ��ʾ��ͼƬ������
        var target1 = -pic1 * minImgWidth;
        animate(lbImg,{"left":target1},fn);
    }
}


left.onclick = function () {
    //������
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

        /*//���ж� ����ǵ�һ��ͼƬ ����ul˲���������λ�� Ȼ������ҲҪ��ΪbigBgs.length - 1
        if(pic === 0){
            bigBg.style.left = -(bigBgs.length - 1) * imgWidth + "px";
            pic = bigBgs.length - 1;
        }
        pic--;//�������Ҫ��ʾ��ͼƬ������
        var target = -pic * imgWidth;
        animate(bigBg,{"left":target});*/

        if(titl === 0){
            title2.style.left = -(title2s.length - 1) * titleWidth + "px";
            titl = title2s.length - 1;
        }
        titl--;
        var target2 = -titl * titleWidth;
        animate(title2,{"left":target2});

        //���ж� ����ǵ�һ��ͼƬ ����ul˲���������λ�� Ȼ������ҲҪ��ΪlbImges.length - 1
        if(pic1 === 0){
            lbImg.style.left = -(lbImges.length - 1) * minImgWidth + "px";
            pic1 = lbImges.length - 1;
        }
        flag1 = false;
        pic1--;//�������Ҫ��ʾ��ͼƬ������
        var target1 = -pic1 * minImgWidth;
        animate(lbImg,{"left":target1},fn);
    }
};


//�����ťȻtitle2�ֲ�
//����
var title2 = document.getElementById("title2");
var title2s = title2.children;
//��¡��һ��title��ӵ����
var firstTitle = title2s[0].cloneNode(true);
firstTitle.className = "title2-four";
title2.appendChild(firstTitle);
//�����ͷ�ƶ�title
var titl = 0;
var titleWidth = title2s[0].offsetWidth;


//�������ֱ仯
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var n1 = n2 = n3 = 0;
var timer1 = null;
var timer2 = null;
var timer3 = null;
var bigMun = document.getElementById("bigMun");
//��ҳ�������һ��λ�þ�ִ������ĺ���
/*var chge = true;
//��ȡҳ��ľ���ֵ��ֻҪ���ڵ���ÿ��ֵ��ִ��
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

//����СͼƬ�ƶ�
//����
var lbImg = document.getElementById("lbImg");
var lbImges = lbImg.children;
//��¡��һ��ͼƬ�ŵ����
var minImg = lbImges[0].cloneNode(true);
minImg.className = "lbImg4";
lbImg.appendChild(minImg);
//�����ť�ƶ�ͼƬ
var pic1 = 0;
var minImgWidth = lbImges[0].offsetWidth;


//����ť����һ����ʱ��
var bigTimer = setInterval(doRight,3000);


//����ͼ��
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




