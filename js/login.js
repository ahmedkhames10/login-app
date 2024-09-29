var signinbtn=document.getElementById('signin')
var signupbtn=document.getElementById('signupbtn')
var signup=document.getElementById('signup')
var content=document.getElementById('content')
var content2=document.getElementById('content2')
var inputemail1=document.getElementById('email1')
var inputname1=document.getElementById('name1')
var inputpass1=document.getElementById('password1')
var empty=document.getElementById('empty')
signinbtn.addEventListener('click',function(){
content.classList.add('d-none');
content2.classList.remove('d-none');
})
signupbtn.addEventListener('click',function(){
    content2.classList.add('d-none');
content.classList.remove('d-none');
})
function check(){
  
    if (inputemail1.value==''||inputname1.value==''||inputpass1.value=='') {
        empty.innerHTML=`<p class="text-danger py-3">all inputs are required</p>`
    }
    else{
        for(var i=0;i<products.length;i++){
            if (products[i].email==inputemail1.value) {
                empty.innerHTML=`<p class="text-danger py-3">email already exist</p>`
        return false;
            }
          }
          addproduct()
        empty.innerHTML=`<p class="text-info py-3">success</p>`
 
    }
}
signup.addEventListener('click',function(){
check()
})
var products=[];
function addproduct(){
    var product={
        code:inputname1.value,
        email:inputemail1.value,
        pass:inputpass1.value
    }
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
}

//  var sign up
var inputemail2=document.getElementById('email2')
var inputpass2=document.getElementById('pass2')
var loginbtn=document.getElementById('login')
var empty2=document.getElementById('empty2')
var theh1=document.getElementById('theh1')
function gohome(){
    if (inputemail2.value==''||inputpass2.value=='') {
        empty2.innerHTML=`<p class="text-danger py-3">all inputs are required</p>`
    }
    else{
        for (let i = 0; i < products.length; i++) {
if (inputemail2.value==products[i].email&&inputpass2.value==products[i].pass) {
    location.href=('home.html')
  localStorage.setItem('username',JSON.stringify(products[i].code))
    return false
}            
        }
    }
}
loginbtn.addEventListener('click',function(){
gohome()
})
var homeuser=document.getElementById('homeuser')
var username=localStorage.getItem('username')
homeuser.innerHTML=`<h2 class="text-info text-center">hello ${username}</h2>`