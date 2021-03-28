submit=document.querySelector('.submit');
username=document.getElementById("uname")
password=document.getElementById("password")


submit.addEventListener('click',(e)=>{
    e.preventDefault();
     if (username.value=="" && password.value==""){
alert("Enter username and password");
     }
    else if(username.value=="")
    {
        alert("Enter Username");
    } else if(password.value=="")
    {
        alert("Enter Password");
    }
    else if(username.value=="Punith" && password.value=="Gowda" || username.value=="punith" && password.value=="gowda"){
        alert("Welcome Punith");
        username.value=""
        password.value=""
        window.open("mainpage.html","_self");
            }
else{
    alert("Wrong username or password");
}
})

