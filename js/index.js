var lun1 = document.querySelector(" .nav_bd_c_f_lun")
var li1 = lun1.querySelectorAll('ul li')
var ntx = document.querySelector('.ntx')
var pr = document.querySelector('.pr')
var scholl = document.querySelector('.scholl')
var pp = scholl.children;
var numm = document.querySelector('.number')
lun1.trie = setInterval(fnn, 3000);
li1[0].style.left = 0 + 'px';
var index1 = 0;
lun1.onmouseout = function() {
    lun1.trie = setInterval(fnn, 3000);
}
lun1.onmouseover = function() {
    clearInterval(lun1.trie)

}
ntx.onclick = function() {
    fnn()
}
pr.onclick = function() {
    fnn1()
}



function fnn() {
    var neh = index1 + 1; //要看那一张的索引
    if (neh > li1.length - 1) {
        neh = 0;
    }
    li1[neh].style.left = 522 + 'px' //要看的放左面
    animate(li1[neh], {
        left: 0
    })
    animate(li1[index1], {
        left: -522
    })
    index1 = neh; //现在正在看的的图片度索引
    lis11();

}






function fnn1() {
    var neh = index1 - 1; //要看那一张的索引
    if (neh < 0) {
        neh = li1.length - 1;
    }
    li1[neh].style.left = -522 + 'px' //要看的放左面
    animate(li1[neh], {
        left: 0
    })
    animate(li1[index1], {
        left: 522
    })
    index1 = neh; //现在正在看的的图片度索引
    lis11();

}

function lis11() {
    for (var i = 0; i < pp.length; i++) {
        pp[i].className = ''

    }
    pp[index1].className = 'blue';
    numm.innerText = (index1 + 1) + '/6'

}
var chong = document.querySelectorAll('.chong')
var chongbox = document.querySelectorAll('.chong_box')
var mangni = document.querySelector('.mangni');
var wu = document.querySelectorAll('.wu');
var defe = document.querySelectorAll('.tab')

for (var i = 0; i < chong.length; i++) {
    chong[i].setAttribute('data', i)
    chong[i].onmouseover = function() {
        for (var j = 0; j < chong.length; j++) {
            chong[j].style.border = 'none'
            chongbox[j].style.display = 'none'
            defe[j].style.display = 'none'
        }
        this.style.border = '1px solid #ff6604'

        mangni.style.display = 'none';
        var n = this.getAttribute('data');
        defe[n].style.display = 'block'
        chongbox[n].style.display = 'block'
        for (var k = 0; k < wu.length; k++) {
            wu[k].style.display = 'none'
        }

    }
}
var lou = document.querySelector('.lou')

window.onscroll = function() {

    if (document.documentElement.scrollTop > 550) {
        lou.style.position = 'fixed';
        lou.style.top = '0' + 'px';
    } else {
        lou.style.position = 'absolute';
        lou.style.top = '550' + 'px';
    }
}