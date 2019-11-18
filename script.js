function getPassword(){
    // the slider will ootd obtain the value and set it to a value 

    let newValue = document.getElementById("slider").value;

    let principal = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";
    for ( var i = 0; i <= newValue; i++){
        password = password + principal.charAt(Math.floor(Math.random() * Math.floor(newValue.length -1)));

    }
    document.getElementById("display").value = password;

    // there is place with the html where the passwords wwill be pinned there
    document.getElementById("lastNums").innerHTML += password + "<br />";
}

document.getElementById("length").innerHTML = "Default length of password until changed: 25";


// this is just to set the length display text for the user to see how long the passwrod is
document.getElementById("slider").oninput = function(){
if (document.getElementById("slider").value > 8){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;

}
else {
    document.getElementById("length").innerHTML = "Length must be greater than 8 but less than 128 characters in length";
}
}

function clipboardWorks() {
    document.getElementById("display").select();
    document.execCommand("Copy"); // this will save to a place for further use
    alert("Password is stored to clipboard");
}