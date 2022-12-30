'use strict'
var regBtn = document.getElementById("regBtn"); // get information from user
var alertM = document.getElementById("alertM"); // if user get any field empty
var logBtn = document.getElementById("logBtn");

logBtn
var logIn = function(){
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("passWord").value;
  
   if(email !=="" && passWord !=="")
    { console.log(email);
     
    }else{
        alertM.classList.remove("d-none");    //sure that all fields are ok
    }
}




var register = function (){ location.href="../log in project/log in.html"}







regBtn.addEventListener("click" , register);
logBtn.addEventListener("click" , logIn);
