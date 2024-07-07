var createAcc = document.getElementById('btnca')

var userName = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('pass')
var idx = 0

var arr =[];
createAcc.addEventListener('click', function(){



var userData = {
    userName : userName.value,
    email : email.value,
    password : password.value
}

var strings= 'createAcc' + idx

idx++


localStorage.setItem(strings, JSON.stringify(userData))


var datas =localStorage.getItem(strings)
arr.push([datas])
localStorage.setItem('allData', arr)

// window.location.href ='../../index.html'
})
