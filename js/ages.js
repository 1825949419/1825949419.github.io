var btn = document.querySelector('.zhu');
var form = document.querySelector('form');
var txt = document.querySelectorAll('input')[0]
var pass = document.querySelectorAll('input')[1]
var deng = document.querySelectorAll('input')[2]
var che = document.querySelectorAll('input')[4]
    // console.log(txt.value)

deng.onclick = function() {
    console.log(txt.value)
    var xhr = new XMLHttpRequest(); //
    xhr.open('POST', '../php/ages.php')
    xhr.onload = function() {
        var a = JSON.parse(xhr.responseText)

        if (a['code']) {
            alert('登录成功')
        } else {
            alert('没有该用户')

        }

    }

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded') //设置请求头，不然后端看不懂你的请求

    xhr.send(`n=${txt.value}&p=${pass.value}`)

}
btn.onclick = function() {
    var xhr = new XMLHttpRequest(); //
    xhr.open('POST', '../php/ages1.php')
    xhr.onload = function() {
        console.log('haoah')
        if (xhr.responseText) {
            alert('注册成功')
            if (che.checked == true) {
                setCookie('name', txt.value, 7 * 24 * 60 * 60)
                setCookie('password', pass.value, 7 * 24 * 60 * 60)
            } else {
                setCookie('name', txt.value)
                setCookie('password', pass.value)
            }
        } else {
            alert('注册失败')
        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded') //设置请求头，不然后端看不懂你的请求

    xhr.send(`name=${txt.value}&pass=${pass.value}`)
}

function setCookie(key, value, time) {
    var date = new Date().getTime();
    date = new Date(date)

    console.log(date)
    date = date - 8 * 60 * 60 * 1000 + time * 1000;
    date = new Date(date)
    console.log(date)
    document.cookie = (key + '=' + value + ";expires=") + date;
}

function getCookie(key) {
    // console.log(document.cookie) //
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var time = arr[i].split('=')
        if (time[0] == key) {
            return time[1]
        }
    }

}