var chong = document.querySelectorAll('.chong')
var chongbox = document.querySelectorAll('.main_l_h ul li')
var cbox = document.querySelectorAll('.main_l_h ol li')
var ol = document.querySelector('.main_l_h ol')







for (var i = 0; i < chong.length; i++) {
    chong[i].setAttribute('data', i)
    chongbox[i].setAttribute('index', i)
    chongbox[i].style.display = 'none'

    chongbox[0].style.display = 'block'
    chong[i].onmouseover = function() {
        for (var j = 0; j < chong.length; j++) {

            chongbox[j].style.display = 'none'
            cbox[j].style.display = 'none'

        }
        var n = this.getAttribute('data');
        cbox[n].style.display = 'block'
        chongbox[n].style.display = 'block'


    }


}

var h = document.querySelector('.main_l_hh')
var mask = document.querySelector('.mask')
h.onmouseenter = function(e) {
    mask.style.display = 'block'
        /* console.log(h.offsetLeft) */
    ol.style.display = 'block'

}
h.onmouseleave = function() {
    mask.style.display = 'none';
    ol.style.display = 'none'
}
h.onmousemove = function(e) {
    e = e || window.Event;

    /* console.log(e.offsetX);
    console.log(e.offsetY); */
    var left = e.pageX - h.offsetLeft - mask.offsetWidth / 2
    var top = e.pageY - h.offsetTop - mask.offsetHeight / 2
    var maskx = e.pageX - h.offsetLeft;
    var masky = e.pageY - h.offsetTop

    if (left < 0) {
        left = 0
    }
    if (left > h.offsetWidth - mask.offsetWidth) {
        left = h.offsetWidth - mask.offsetWidth;
    }
    if (top < 0) {
        top = 0
    }
    if (top > h.offsetHeight - mask.offsetHeight) {
        top = h.offsetHeight - mask.offsetHeight;
    }
    mask.style.left = left + 'px'
    mask.style.top = top + 'px'
    var dax = left / 430 * 860;
    var day = top / 430 * 860;
    // chongbox[i].getAttribute('index')
    for (var i = 0; i < cbox.length; i++) {
        cbox[i].style.left = -dax + 'px'
        cbox[i].style.top = -day + 'px'
    }

}
var date = new Date().getTime();
var date1 = Date.parse('2021/1/15 12:00:00');


var shen = date1 - date;
var miao = parseInt(shen / 1000); //总秒


var shimiao = parseInt(shen / 1000) - parseInt(miao / 60) * 60

var feng = parseInt(miao / 60)

var shifeng = parseInt(miao / 60) - parseInt(feng / 60) * 60


var xiaoshi = parseInt(feng / 60)
var shixiaoshi = parseInt(feng / 60) - parseInt(xiaoshi / 24) * 24

var tian = parseInt(xiaoshi / 24)

var r = document.querySelector('.tian')
var m = document.querySelector('.miao')
r.innerText = tian + '天';
m.innerText = shixiaoshi + ':' + shifeng + ':' + shimiao;


setInterval(() => {
    var date = new Date().getTime();
    var date1 = Date.parse('2021/1/15 12:00:00');


    var shen = date1 - date;
    var miao = parseInt(shen / 1000); //总秒


    var shimiao = parseInt(shen / 1000) - parseInt(miao / 60) * 60

    var feng = parseInt(miao / 60)

    var shifeng = parseInt(miao / 60) - parseInt(feng / 60) * 60


    var xiaoshi = parseInt(feng / 60)
    var shixiaoshi = parseInt(feng / 60) - parseInt(xiaoshi / 24) * 24

    var tian = parseInt(xiaoshi / 24)

    var r = document.querySelector('.tian')
    var m = document.querySelector('.miao')
    r.innerText = tian + '天';
    if (shifeng < 10) {
        m.innerText = shixiaoshi + ':0' + shifeng + ':' + shimiao;
    } else if (shimiao < 10) {
        m.innerText = shixiaoshi + ':' + shifeng + ':0' + shimiao;

    } else if (shixiaoshi < 10) {
        m.innerText = '0' + shixiaoshi + ':' + shifeng + ':' + shimiao;

    } else {
        m.innerText = shixiaoshi + ':' + shifeng + ':' + shimiao;

    }
}, 1000);
var mainr = document.querySelector('.main_r');
var rr = mainr.children[0]
var age = 2;
var xianz = 0;
setInterval(() => {

    var nn = xianz -= age;
    if (nn < -600) {
        xianz = 0
    }
    rr.style.top = nn + 'px';
}, 50);





function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

var add = document.querySelector('#add');

add.onclick = function() {
    add.setAttribute('dataid', rand(1000000, 99999999))
    var dataid = add.getAttribute('dataid')
    var datanum = add.getAttribute('datanum')

    console.log(dataid)
    var xhr = new XMLHttpRequest(); //
    xhr.open('POST', '../php/details.php')
    xhr.onload = function() {

        if (xhr.responseText) {
            alert('添加成功 商品单号:' + dataid)

        } else {
            alert('添加失败')
        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded') //设置请求头，不然后端看不懂你的请求

    xhr.send(`id=${dataid}&num=${datanum}`)

}