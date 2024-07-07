var login = document.getElementById('login')



var email = document.getElementById('email')
var password = document.getElementById('pass')




var s =localStorage.getItem('allData')
console.log(s)
for(let i=0; i<data.length; i++){
    console.log(data[i])
}
login.addEventListener('click', function(){

if(getData.email === email.value && getData.password === password.value){

location.href = './src/pages/dashboard.html'
}
else{


}

})