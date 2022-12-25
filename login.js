'use strict'
var regBtn = document.getElementById("regBtn"); // get information from user
var alertM = document.getElementById("alertM");
var alertMp = document.getElementById("alertMp");
var users ;
if(localStorage.getItem("users")==null){
    users = [];

}else{
 users= JSON.parse(localStorage.getItem("users")) ;
}
var register = function(){
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("passWord").value;
    var reEnterPass = document.getElementById("reEnterPass").value;
    if(email !=="" && passWord !=="" && reEnterPass !==""){
        var user = {
            email : email,
            passWord : passWord ,
        };
        users.push(user);
        localStorage.setItem("users" , JSON.stringify(users));
        location.href = "../sign in.html"
        
    }else{
        alertM.classList.remove("d-none");

    } 
    if(passWord !== reEnterPass){alertMp.classList.remove("d-none")}else{
        console.log(passWord );
    } 
    console.log(users);

} ;



regBtn.addEventListener("click" , register);


