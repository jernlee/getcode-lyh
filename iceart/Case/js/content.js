/**
 * Created by Administrator on 2017/5/21.
 */
window.onload = function () {
    //var lastPosition = 348;
    var lastPosition = 100;
    var nav = document.getElementById("nav");
    var navbg = document.getElementById("navbg");
    var lis = nav.children;
    var count = 1;
    lis[2].children[0].style.color = "#3B27FF";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            var target = this.offsetLeft;
            animatey(navbg, {"left": target}, 15);
            navbg.style.width = this.offsetWidth + "px";
        }

        lis[i].onmouseout = function () {
            animatey(navbg, {"left": lastPosition}, 15);
            navbg.style.width = lis[count].offsetWidth + "px";
        };

        lis[i].onclick = function () {
            count = this.index;
            //this.children[0].style.color= "#3B27FF";
            lastPosition = this.offsetLeft;//记录当前点击的位置
        };
    }

    var bigBox = document.getElementById("bigBox");
    var brand = document.getElementById("brand");
    var bigBoxes = bigBox.children;
    var brands = brand.children;
    for (var n = 0; n < brands.length; n++) {
        brands[n].index = n;
        brands[n].onclick = function () {
            var change = document.getElementById("change");
            var target = this.offsetLeft;
            for (var i = 0; i < bigBoxes.length; i++) {
                bigBoxes[i].style.display = "none";
            }
            bigBoxes[this.index].style.display = "block";
            animates(change, target);
            for (var j = 0; j < brands.length; j++) {
                brands[j].style.color = "#767676";
            }
            this.style.color = "#fff";
        };
    }

    for (var m = 0; m < bigBoxes.length; m++) {
        var lines = bigBoxes[m].children;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var abs = line.children;
            for (var j = 0; j < abs.length; j++) {
                abs[j].onmouseover = function () {
                    animatezz(this.children[0].children[0], {"width": 405, "height": 247, "opacity": 0.8});
                    animatezz(this.children[0].children[1], {"opacity": 1});
                    animatezz(this.children[0].children[1].children[0], {"opacity": 1});
                    animatezz(this.children[1].children[0],{"opacity":1});
                };
                abs[j].onmouseout = function () {
                    animatezz(this.children[0].children[0], {"width": 338, "height": 206, "opacity": 1});
                    animatezz(this.children[0].children[1], {"opacity": 0});
                    animatezz(this.children[0].children[1].children[0], {"opacity": 0});
                    animatezz(this.children[1].children[0],{"opacity":0});
                };
            }
        }
    }
    var aa = true;
    var k = 0;
    var chge = true;
    window.onscroll = function () {
        for (var i=0;i<bigBoxes.length;i++){
            var lines=bigBoxes[i].children;
            for (var j=0;j<lines.length;j++){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                if (scrollTop >= 1300 && aa) {
                    aa = false;
                    animatezz(lines[k], {"top": lines[k].offsetTop-30});
                }else if(scrollTop >= 1600 && k === 0){
                    aa = true;
                    k++;
                }else if(scrollTop >= 1900 && k === 1){
                    aa = true;
                    k++;
                }else if(scrollTop >= 2200 && k === 2){
                    aa = true;
                    k++;
                }else if(scrollTop >= 2500 && k === 3){
                    aa = true;
                    k++;
                }else if(scrollTop >= 2800 && k === 4){
                    aa = true;
                    k++;
                }else if(scrollTop >= 3100 && k === 5){
                    aa = true;
                    k++;
                }else if(scrollTop >= 3400 && k === 6){
                    aa = true;
                    k++;
                }else if(scrollTop >= 3700 && k === 7){
                    aa = true;
                    k++;
                }else if(scrollTop >= 4000 && k === 8){
                    aa = false;
                }
            }
        }


        //数字变化效果
        if(chge && scrollTop >= 400){
            chge = false;
            wordChange();
        };
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
        };
    };





    //缓动
    function animatey(obj, json, speed, fn) {
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
};
