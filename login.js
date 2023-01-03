'use strict'
var regBtn = document.getElementById("regBtn"); // get information from user
var alertM = document.getElementById("alertM"); // if user get any field empty
var alertMp = document.getElementById("alertMp"); // if user get not identical pass
var logBtn1 = document.getElementById("logBtn1"); // log to sing page
var users ;
if (localStorage.getItem("users") == null ){
    users =[];
} else {
    users =JSON.parse(localStorage.getItem("users"));
};

//function

var register = function(){
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("passWord").value;
    var reEnterPass = document.getElementById("reEnterPass").value;
   if(email !=="" && passWord !=="" && reEnterPass !=="")
    { console.log(email);
     
    }else{
        alertM.classList.remove("d-none");    //sure that all fields are ok
     } 
    if( passWord == reEnterPass )            

    { var user ={                          
        email : email ,
        passWord : passWord ,
    };
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));       //save email and pass
    location.href = "../log in project/sign in.html" ;

     
    }else{
        alertMp.classList.remove("d-none");      //to be sure pass is ok

    } ;

} ;
var singIn = function (){
     location.href="../log in project/sign in.html";
    };

logBtn1.addEventListener("click" , singIn);

regBtn.addEventListener("click" , register);



