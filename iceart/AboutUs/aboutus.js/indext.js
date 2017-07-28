/*banner B*/
window.onload = function () {
    var headerH = $("headerH");
    var bannerH = $("bannerH");
    var serviceH = $("serviceH");
    var aContent1 = $("aContent1");
    var aContent2 = $("aContent2");
    var aContent1Imgs = aContent1.getElementsByTagName("img");
    var aContent2Imgs = document.getElementsByClassName("ability-content2-images")
    var topWords = aContent1.getElementsByClassName("W-top");
    var bottomWords = aContent1.getElementsByClassName("W-bottom");
    var spotDir = "on";
    var topHeight = headerH.offsetHeight + bannerH.offsetHeight + serviceH.offsetHeight - 500;
    var aboutUsFixed = $("aboutUsFixed");

    /* 导航栏特效 */
    var sign = 80;//定义默认的向上滚与向下滚的边界
    window.onscroll = window.onresize = function () {
        var oScrollTop = scroll().top;
        if (oScrollTop > sign) {
            sign = oScrollTop;
            //headerH.className = "header header-out";
            animate3(headerH, {"top": -70});
            headerH.style.overflow = "hidden";
        }
        if (oScrollTop < sign) {
            sign = oScrollTop;
            animate3(headerH, {"top": 0});
            headerH.style.overflow = "";
        }
        if (scroll().top > topHeight) {
            spotOnFn();
        }

        if (scroll().top > topHeight + 300) {
            animate3(aboutUsFixed, {"opacity": 1});
        }
        if (scroll().top < topHeight + 300) {
            animate3(aboutUsFixed, {"opacity": 0});
        }

    };
    /*导航栏筋斗云特效*/
    var lastPosition = 208;
    var nav = document.getElementById("nav");
    var navbg = document.getElementById("navbg");
    var lis = nav.children;
    var count = 2;
    lis[3].children[0].style.color = "#3B27FF";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            var target = this.offsetLeft;
            animate5(navbg, {"left": target}, 15);
            navbg.style.width = this.offsetWidth + "px";
            for (var i = 0; i < lis.length; i++) {
                lis[i].children[0].style.color = "#454545";
            }
            this.children[0].style.color = '#3B27ff';
        };

        lis[i].onmouseout = function () {
            animate5(navbg, {"left": lastPosition}, 15);
            navbg.style.width = lis[3].offsetWidth + "px";
            for (var i = 0; i < lis.length; i++) {
                lis[i].children[0].style.color = "#454545";
            }
            lis[3].children[0].style.color = '#3B27ff';
            console.log(lis[3]);
        };

        lis[i].onclick = function () {
            count = this.index;
            // console.log(count);
            this.children[0].style.color = "#3B27FF";
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

    /* banner特效 begin */
    var peopleLoading = document.getElementById("peopleLoading");
    var peopleBg = document.getElementById("mask");
    var people = document.getElementById("people");
    var bannerContent = document.getElementsByClassName("banner-content")[0];

    /* 人头特效 */
    var bgSize = 0;
    var peopleSize = 0;

    var flag = true;

    var peopleBgTimer = setInterval(function () {
        peopleBg.style.transform = "scale(" + bgSize + ")";
        bgSize += 0.04;
        if (bgSize >= 1) {
            clearInterval(peopleBgTimer);
        }
    }, 15);
    setTimeout(function () {
        var peopleTimer = setInterval(function () {
            people.style.transform = "scale(" + peopleSize + ")";
            peopleSize += 0.04;
            if (peopleSize >= 1) {
                clearInterval(peopleTimer);
            }
        }, 15);
    }, 300);
    setTimeout(function () {
        setInterval(function () {
            peopleBg.style.transform = "scale(" + bgSize + ")";
            if (bgSize <= 1.05) {
                flag = true;
            } else if (bgSize > 1.3) {
                flag = false;
            }
            if (flag) {
                bgSize += 0.005;
            } else {
                bgSize -= 0.005;
            }
        }, 40);
    }, 1000);


    peopleLoading.onmouseover = function () {
        peopleBg.style.opacity = 1;
        people.style.backgroundColor = "#d8d6ff";
        people.children[0].style.backgroundImage = "url(images/people1_1.png)";
        people.children[1].style.backgroundImage = "url(images/people2_1.png)";
    };
    peopleLoading.onmouseout = function () {
        peopleBg.style.opacity = 0.15;
        people.style.backgroundColor = "#fff";
        people.children[0].style.backgroundImage = "url(images/people1.png)";
        people.children[1].style.backgroundImage = "url(images/people2.png)";
    };

    /* 文字渐入特效 */
    animateLinear(bannerContent.children[0], .5, {"top": 410, "opacity": 1});
    setTimeout(function () {
        animateLinear(bannerContent.children[1], .5, {"top": 485, "opacity": 1});
    }, 300);


    var lang2 = document.getElementById("lang2");
    var lang3 = document.getElementById("lang3");
    leftRun();
    rightRun();


    function leftRun() {
        animate2(lang2, 600, function () {
            animate3(lang2, 0, leftRun)
        });
    }


    function rightRun() {
        animate2(lang3, -500, function () {
            animate2(lang3, 0, rightRun)
        })
    }

    /*banner E*/
    /*content B*/
    var imgss = document.getElementsByClassName("img");
    var abilityNav = $("ability-nav");
    var spotOn = abilityNav.children[0];
    var spotOff = abilityNav.children[1];

    var oNxy = [];
    for (var i = 0; i < imgss.length; i++) {
        imgss[i].index = i;
        var ml = getStyle(imgss[i], "marginLeft");
        oNxy[i] = parseInt(ml);
        imgss[i].onmouseover = function () {
            if (this.index < 6 || this.index == 7) {
                var target = -(oNxy[this.index] + 1);
                animate1(this, {"marginLeft": target});
            }
        };
        imgss[i].onmouseout = function () {
            if (this.index < 6 || this.index == 7) {
                var target = oNxy[this.index];
                animate1(this, {"marginLeft": target});
            }
        };
    }

    /*content E*/
    /*Our Ability begin*/
    function $(id) {
        return document.getElementById(id)
    }

//鼠标滚动动画操作


    //window.onscroll = function () {
    //    console.log(headerH.offsetHeight);
    //    if (scroll().top > topHeight) {
    //        //var count = -1;
    //        //huidiao();
    //        //function huidiao() {
    //        //    count++;
    //        //    if (count > 5) {
    //        //        return;
    //        //    }
    //        //    animate3(aContent1Imgs[count], {"width": 86, "height": 86,"left":38,"top":0, "border-radius": 50},function(){
    //        //        animate3(topWords[count],{"left":0})
    //        //        animate3(bottomWords[count], {"left": 0});
    //        //        //huidiao();
    //        //    });
    //        spotOnFn();
    //    }
    //}

    function spotOnFn() {
        var aContent1ImgsIndex = 0;
        var spotOnTimer = setInterval(function () {
            animate3(aContent1Imgs[aContent1ImgsIndex], {
                "width": 86,
                "height": 86,
                "left": 38,
                "top": 0
                //"border-radius": 50
            });
            //setTimeout(function () {
            animate3(topWords[aContent1ImgsIndex], {"left": 0});
            animate3(bottomWords[aContent1ImgsIndex], {"left": 0});
            //}, 150);
            if (aContent1ImgsIndex < 5) {
                aContent1ImgsIndex++;
            } else {
                clearInterval(spotOnTimer);
            }

        }, 50);
    }


//图片和文字向两侧移开代码
    var abilityContents = document.getElementsByClassName("abilityContent");
    for (var a = 0; a < abilityContents.length; a++) {
        //abilityContents[a].index = a;
        abilityContents[a].onmouseover = function () {
            var img = this.children[0];
            var words = this.children[1];
            animate2(img, 25);
            animate2(words, 153);
        };
        abilityContents[a].onmouseout = function () {
            var img = this.children[0];
            var words = this.children[1];
            animate2(img, 38);
            animate2(words, 140);
        };
    }


//点击圆点内容切换


    spotOn.onclick = function () {

        for (var a = 0; a < aContent1Imgs.length; a++) {
            aContent1Imgs[a].style.width = 0 + "px";
            aContent1Imgs[a].style.height = 0 + "px";
            aContent1Imgs[a].style.top = 43 + "px";
            aContent1Imgs[a].style.left = 81 + "px";
        }
        for (var b = 0; b < topWords.length; b++) {
            topWords[b].style.left = -165 + "px";
        }
        for (var c = 0; c < bottomWords.length; c++) {
            bottomWords[c].style.left = -400 + "px";
        }
        spotOnFn();
        this.style.backgroundColor = "#c2c2c2";
        spotOff.style.backgroundColor = "white";
        aContent1.style.display = "block";
        aContent2.style.display = "none";
        spotDir = "on";
    };

    spotOff.onclick = function () {
        this.style.backgroundColor = "#c2c2c2";
        spotOn.style.backgroundColor = "white";
        aContent1.style.display = "none";
        aContent2.style.display = "block";
        for (var a = 0; a < aContent2Imgs.length; a++) {
            aContent2Imgs[a].style.width = 0;
            aContent2Imgs[a].style.height = 0;
            aContent2Imgs[a].style.left = -110 + "px";
            aContent2Imgs[a].style.top = -60 + "px";
        }
        var aContent2ImgsIndex = 0;
        var spotOffTimer = setInterval(function () {
            animate3(aContent2Imgs[aContent2ImgsIndex], {
                "width": 220,
                "height": 120,
                "left": 0,
                "top": 0,

            });
            if (aContent2ImgsIndex < 9) {
                aContent2ImgsIndex++;
            } else {
                clearInterval(spotOffTimer);
            }
        }, 100);
        console.log(aContent2Imgs);

        spotDir = "off";
    };
    console.log(spotOff.onclick);

//滚动图
    var aboutUsSlideShow = $("aboutUsSlideShow");
    var slideShowBox = $("slideShowBox");
    var slideShowImage = $("slideShowImg");
    var slideShowImages = slideShowImage.children;
    var slideShowSpots = $("slideShowSpots");
    var spots = slideShowSpots.children;
    var imgWidth = slideShowBox.offsetWidth;
    var img = 0;
    var spot = 0;
    timer = setInterval(function () {
        if (img === slideShowImages.length - 1) {
            slideShowImage.style.left = 0;
            img = 0;
        }
        img++;
        var target = -img * imgWidth;
        animate4(slideShowImage, target)
        if (spot < spots.length - 1) {
            spot++;
        } else {
            spot = 0;
        }
        for (var b = 0; b < spots.length; b++) {
            spots[b].className = "spot-off";
        }
        spots[spot].className = "spot-on"
    }, 2000);

//固定位置的操作
    var phoneFlapImg = $("phoneFlapImg");
    var phoneFlapWord = $("phoneFlapWord");
    var changePhone = $("changePhone");
    var changePhoneOn = $("changePhone_on");
    phoneFlapImg.onmouseover = function () {
        phoneFlapWord.style.display = "block";
        changePhone.style.display = "none";
        changePhoneOn.style.display = "inline-block";
    }
    phoneFlapImg.onmouseout = function () {
        phoneFlapWord.style.display = "none";
        changePhone.style.display = "inline-block";
        changePhoneOn.style.display = "none";
    }
    var emailImg = $("emailImg");
    var changeEmail = $("changeEmail");
    var changeEmailOn = $("changeEmail_on");
    emailImg.onmouseover = function () {
        changeEmail.style.display = "none";
        changeEmailOn.style.display = "inline-block";
    }
    emailImg.onmouseout = function () {
        changeEmail.style.display = "inline-block";
        changeEmailOn.style.display = "none";
    }
    var peopleImg = $("peopleImg");
    var changePeople = $("changePeople");
    var changePeopleOn = $("changePeople_on");
    peopleImg.onmouseover = function () {
        changePeople.style.display = "none";
        changePeopleOn.style.display = "inline-block";
    }
    peopleImg.onmouseout = function () {
        changePeople.style.display = "inline-block";
        changePeopleOn.style.display = "none";
    }
    var qqImg = $("qqImg");
    var changeQQ = $("changeQQ");
    var changeQQOn = $("changeQQ_on");
    qqImg.onmouseover = function () {
        changeQQ.style.display = "none";
        changeQQOn.style.display = "inline-block";
    }
    qqImg.onmouseout = function () {
        changeQQ.style.display = "inline-block";
        changeQQOn.style.display = "none";
    }

    var fixedTop = $("fixedTop");
    fixedTop.onmouseover = function () {
        this.style.backgroundColor = "#6D74FF"
    }
    fixedTop.onmouseout = function () {
        this.style.backgroundColor = "#7b7a7a"
    }

//点击按钮切换
    var abilityBtn = $("ability-btn");
    abilityBtn.onmouseover = function () {
        this.style.backgroundColor = "#6d74ff";
        this.style.color = "white";
    }
    abilityBtn.onmouseout = function () {
        this.style.backgroundColor = "white";
        this.style.color = "#a6a6a6";
    }
    abilityBtn.onclick = function () {
        if (spotDir === "on") {
            spotOff.onclick();
        } else {
            spotOn.onclick();
        }
    }


};