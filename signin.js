'use strict'
var regBtn = document.getElementById("regBtn"); // get information from user
var alertM = document.getElementById("alertM"); // if user get any field empty
var logBtn = document.getElementById("logBtn");

var users =JSON.parse (localStorage.getItem("users"));

var logIn = function(){
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("passWord").value;
    for (var i = 0 ; i < users.length ; i++){
        if (users[i].email === email && users[i].passWord === passWord  ){
            localStorage.setItem("currentEmail",email);
            location.href = "../log in project/notes.html"

        }

  }
  
   if(email !=="" && passWord !=="")
    { console.log(email,passWord);
    
    
    }else{
        alertM.classList.remove("d-none");    //sure that all fields are ok
    }
}




var register = function (){ location.href="../log in project/log in.html"}


regBtn.addEventListener("click" , register);
logBtn.addEventListener("click" , logIn);
