'use strict'
var userEmailIn = localStorage.getItem("currentEmail") ;
var hiPAge = document.querySelector("#greating");
hiPAge.textContent = "welcome "+userEmailIn ;
var logOut = document.getElementById("logOut"); // log out
var alertN = document.getElementById("alertN"); // if user get any field empty
var saveBtn = document.getElementById("saveBtn");
var delBtn = document.getElementById("delBtn");

var notes;
if (localStorage.getItem("allNotes") == null){
    notes = [];
}else{
    notes = JSON.parse(localStorage.getItem("allNotes"));
}




 var saveForm =function(){
    var cont = document.getElementById("cont").value ;
    var userEmailIn = localStorage.getItem("currentEmail") ;
    
    if (cont !== ""){
        var note = {
           // email: email ,  
            cont : cont,
            userEmailIn  : userEmailIn ,
        };
        notes.push(note);
        localStorage.setItem("allNotes" , JSON.stringify(notes));
        
    }else{
        alertN.classList.remove("d-none");    //note is not clear

    }
 };




 



var logOutBtn = function (){ location.href="../log in project/sign in.html"}
logOut.addEventListener("click" ,logOutBtn);
saveBtn.addEventListener("click" , saveForm);
//delBtn.addEventListener("click" , delForm);




