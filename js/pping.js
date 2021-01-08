var gouwuche = document.querySelector('.gouwuche');



var dataid = '123'
var xhr = new XMLHttpRequest(); //
xhr.open('POST', '../php/pping.php')
xhr.onload = function() {

    var obj = JSON.parse(xhr.responseText)
    console.log(obj)
    for (var key of obj) {
        // key[1]
        console.log(key)
        var kelong = document.querySelector('.kelong')
        var gouwuche = document.querySelector('.gouwuche');
        var a = kelong.cloneNode(true)
        a.style.display = 'flex'
        a.querySelector('.danhao').children[0].innerText = key['1'];
        gouwuche.appendChild(a);
    }

    var del = document.querySelectorAll('.del');
    for (var i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            this.parentElement.parentElement.removeChild(this.parentElement);

            var xhr = new XMLHttpRequest(); //
            xhr.open('POST', '../php/remove.php')
            xhr.onload = function() {

                if (xhr.responseText) {
                    console.log('删除成')

                }
            }
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded') //设置请求头，不然后端看不懂你的请求
            var renzhen = this.parentElement.children[2].children[0].innerText
            console.log(renzhen)
            xhr.send(`id=${renzhen}`)

        }
    }

    var btn = gouwuche.querySelectorAll('.button');
    var btn1 = gouwuche.querySelectorAll('.btnn');
    var haojia = gouwuche.querySelectorAll('.haojia');



    function haoao() {
        var henhao = gouwuche.querySelectorAll('.henhao')

        var qian = document.querySelector('.qian')
        var np = 0;
        for (var i = 0; i < henhao.length; i++) {
            np += Number(henhao[i].innerText);
        }
        np -= 9.9
        qian.innerText = np.toFixed(2);
    }

    haoao();





    console.log(btn)

    for (var i = 0; i < btn.length; i++) {

        btn[i].onclick = function() {
            var a = this.previousElementSibling.innerText;
            a++
            var p = 9.9 * a;

            this.parentElement.parentElement.querySelector('.henhao').innerText = p.toFixed(2);

            this.nextElementSibling.innerText = p.toFixed(2);
            this.previousElementSibling.innerText = a;
            haoao();
            fnf();
        }
    }



    for (var j = 0; j < btn1.length; j++) {


        btn1[j].onclick = function() {
            var t = this.nextElementSibling.innerText;
            t--
            var p = 9.9 * t;

            this.parentElement.parentElement.querySelector('.henhao').innerText = p.toFixed(2);
            this.nextElementSibling.nextElementSibling.nextElementSibling.innerText = p.toFixed(2);
            if (!t) {
                this.parentElement.parentElement.removeChild(this.parentElement);
                iselect()
                var xhr = new XMLHttpRequest(); //
                xhr.open('POST', '../php/remove.php')
                xhr.onload = function() {

                    if (xhr.responseText) {
                        console.log('删除成')

                    }
                }
                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded') //设置请求头，不然后端看不懂你的请求
                var renzhen = this.parentElement.children[2].children[0].innerText
                console.log(renzhen)
                xhr.send(`id=${renzhen}`)




            }
            this.nextElementSibling.innerText = t;

            haoao();
            fnf();
        }
    }





    var check = document.querySelectorAll('.checkbox');
    var checkx = document.querySelector('.checkboxx');



    //反选
    function selectInvert() {
        var check = document.querySelectorAll('.checkbox');
        var checkx = document.querySelector('.checkboxx');

        for (var i = 0; i < check.length; i++) {
            if (checkx.checked)
                check[i].checked = true;

            if (!checkx.checked) {
                check[i].checked = false;

            }
            /*     else
                    check[i].checked = true;*/
        }
    }

    function iselect() {
        var checkx = document.querySelector('.checkboxx');
        var check = document.querySelectorAll('.checkbox');
        var p = 1;
        for (var i = 0; i < check.length; i++) {

            if (check[i].checked) {
                p++;
                if (p == check.length) {
                    checkx.checked = true;
                } else {
                    checkx.checked = false;
                }
            } else {
                checkx.checked = false;

            }
        }

    }
    checkx.onclick = selectInvert;
    for (var ip = 0; ip < check.length; ip++) {
        check[ip].onclick = iselect;
    }

    function fnf() {
        var gouwu = document.querySelector('.gouwuche');
        var haojia = document.querySelectorAll('.haojia')
        var quan = document.querySelector('.quan')
        var p = 0;
        for (var i = 0; i < haojia.length; i++) {
            p += parseInt(haojia[i].innerText);
        }
        quan.innerText = p - 1;
    }

    fnf();












}
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded') //设置请求头，不然后端看不懂你的请求

xhr.send(`num=${dataid}`);