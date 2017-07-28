/**
 * Created by Administrator on 2017/5/22 0022.
 */
window.onload= function () {
    //筋斗云特效
    var lastPosition = 492;
    var nav = document.getElementById("nav");
    var navbg = document.getElementById("navbg");
    var lis = nav.children;
    var count = 5;
    lis[5].children[0].style.color = "#3B27FF";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            var target = this.offsetLeft;
            animate(navbg, {"left": target}, 15);
            navbg.style.width = this.offsetWidth + "px";
        };

        lis[i].onmouseout = function () {
            animate(navbg, {"left": lastPosition}, 15);
            navbg.style.width = lis[count].offsetWidth + "px";
        };

        lis[i].onclick = function () {
            count = this.index;
            //this.children[0].style.color= "#3B27FF";
            lastPosition = this.offsetLeft;//记录当前点击的位置
        };
    }


//缓动
    function animate(obj, json, speed, fn) {
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
    function animate2(obj, target, speed, fn) {
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
                if (fn) {
                    fn()
                }
            }
        }, speed);
    }
}