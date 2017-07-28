/**
 * Created by Administrator on 2017/5/24.
 * 各种工具封装
 */

//渐变动画
function animateDecele(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 100;//0.5
                var step = (target - leader) / 15;//0.5-1=-0.5
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                leader = leader + step;
                //obj.style[k] = leader + "px";
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 15;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 15);
}


//匀速动画
function animateLinear(obj, time, json, fn) {
    clearInterval(obj.timer);
    var intiLeader = {};
    for (var k in json) {
        var str = k;
        intiLeader[str] = getStyle(obj, k);
    }
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                var leader = getStyle(obj, k) * 10000;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 10000;//0.5
                var step = (target - intiLeader[k]*10000) / (time * 1000 / 15);//
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                if (Math.abs(target - leader) >= Math.abs(step)) {
                    leader = leader + step;
                    obj.style[k] = leader / 10000;
                } else {
                    obj.style[k] = target / 10000;//手动放到终点
                }
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                //if (flagObj[k]) {
                //    intiLeader = parseInt(getStyle(obj, k)) || 0;
                //    flagObj[k] = false;
                //}
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - parseInt(intiLeader[k])) / (time * 1000 / 15);
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (Math.abs(target - leader) >= Math.abs(step)) {
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                } else {
                    obj.style[k] = target + "px";//手动放到终点
                }
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}


//获得样式兼容性封装
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

