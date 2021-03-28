btn=document.getElementById('button');
fname=document.getElementById('fname');
lname=document.getElementById('lname');
password=document.getElementById('password')
confirm=document.getElementById('confirm')
phone=document.getElementById('phone')
email=document.getElementById('email')
male=document.getElementById('male')
female=document.getElementById('female')
birthday=document.getElementById('bday')
qsns=document.getElementById('qsns')
card=document.getElementById('card1')
message=document.getElementById('message')
close=document.getElementById('close')

btn.addEventListener('click',(e)=>{
   e.preventDefault();
   if (fname.value=="" || lname.value=="" || password.value=="" || confirm.value=="" || phone.value=="" || email.value=="" || birthday.value=="" ||qsns.value=="" || bday.value=="dd-mm-yyyy" )
   {
    message.textContent="One or more fields are empty"
    card.style.display="block";
   } else if(male.checked==false && female.checked==false){
    message.textContent="Select Gender"
    card.style.display="block";
   }else if(password.value.length<8){
message.textContent="Password should contain more than 8 characters"
card.style.display="block";
   }else if(password.value != confirm.value){
    message.textContent="Passwords are not matching"
    card.style.display="block";
   }else{
    message.textContent="Registered"
    card.style.display="block";
   }
})
let pattern1=/^[A-Za-z]{8,14}$/;

password.addEventListener('keyup',(e)=>{
    password.style.backgroundColor="white"
   if (pattern1.test(password.value )){
password.style.backgroundColor="cyan"
   }else
   {
    password.style.backgroundColor="Crimson"
   }
})

addEventListener('load',(e)=>{
card.style.display="none";
})

close.addEventListener('click',(e)=>{
    card.style.display="none"
    if (message.textContent=="Registered"){
        fname.value=""
        lname.value=""
        phone.value=""
        password.value=""
        confirm.value=""
        email.value=""
        male.checked=false
        female.checked=false
        bday.value=""
        qsns.value=""
    }
})

