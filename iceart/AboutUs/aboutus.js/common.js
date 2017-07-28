/**
 * 根据id获取元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && prev.nodeType !== 1) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}

/**
 * 获取任意对象的内部文本（兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 设置任意对象的内部文本 （兼容所有浏览器）
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 获取第一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取最后一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 获取 筋斗云动画函数
 * @param obj
 * @param target
 */
/*function animate(obj,target){
    clearInterval(obj.timer)
    obj.timer=  setInterval(function(){
        var leader=obj.offsetLeft
        var step=10;
        step=leader<target?step:-step
        var leader=obj.offsetLeft
        if(Math.abs(leader-target)>=Math.abs(step)){
            leader=leader+step
            obj.style.left=leader+"px"
        }else{
            obj.style.left=leader+"px"
            clearInterval(obj.timer)
        }
    },15)
}*/
/**
 * 获取旋转木马动画效果
 * @param obj
 * @param json
 * @param fn
 */
function animate1(obj, json, fn) {
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
    }, 30);
}
function animate3(obj, json, fn) {
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
                var step = (target - leader) / 7;
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
    }, 15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 * 获取鼠标到浏览器的位置
 * @type {Element}
 */
/*
var box = document.getElementById("box");
box.onresize=function(){
    box.clientLeft=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0
    box.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
}
*/

/**
 * 获取页面坐标函数
 * @param event
 */
//window.onclick=function(event){
//    var event=event||window.event
//    console.log(event.clientX +"--"+ event.clientY);
//    console.log(event.pageX +"--"+ event.pageY);
//}
/**
 * 获取鼠标在盒子上的位置
 * @param event
 */
/*window.onmousemove=function(event,obj) {
    var event = event || window.event
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop
    var boxX = pageX - obj.offsetLeft
    var boxY = pageY - obj.offsetTop
    obj.innerHTML = boxX + "--" + boxY
}*/
/**
 * 完整的轮播图案例
 * @param obj
 * @param target
 */
function animate2(obj,target,fn){
    clearInterval(obj.timer)
    obj.timer=  setInterval(function(){
        var leader=obj.offsetLeft
        var step=5;
        step=leader<target?step:-step
        var leader=obj.offsetLeft
        if(Math.abs(leader-target)>=Math.abs(step)){
            leader=leader+step
            obj.style.left=leader+"px"
        }else{
            obj.style.left=target+"px"
            clearInterval(obj.timer)
            if(fn){
                fn()
            }
        }
    },50)
}
function animate4(obj,target,fn){
    clearInterval(obj.timer)
    obj.timer=  setInterval(function(){
        var leader=obj.offsetLeft
        var step=30;
        step=leader<target?step:-step
        var leader=obj.offsetLeft
        if(Math.abs(leader-target)>=Math.abs(step)){
            leader=leader+step
            obj.style.left=leader+"px"
        }else{
            obj.style.left=target+"px"
            clearInterval(obj.timer)
            if(fn){
                fn()
            }
        }
    },15)
}
/**
 * 获取被卷走得高度和左边的宽度
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll(){
    return{
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollTop||0,
    }
}
/*导航栏筋斗云特效*/
function animate5(obj, json,speed, fn) {
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