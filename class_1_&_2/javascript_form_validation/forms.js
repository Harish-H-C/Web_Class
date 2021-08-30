
function firstToUpper(){
    var name = document.getElementById('fname').value;
    name = name.trim()
    var out = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    document.getElementById('fname').value = out
}

function lastName(){
    var name = document.getElementById('lname').value;
    if(name.trim().length == 0){
        document.getElementById('lout').innerText = "Please Enter Last Name"
    }else{
        document.getElementById('lout').innerText = ""
    }
}

const checkPassword = () => {
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText = "MIn length of Password is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.background = "red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText = "";
            document.getElementById('ppout').style.background = "orange"
        }
    }else{
        document.getElementById('ppout').style.background = "green"
    }
}


function checkCPassword(){
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd == cpwd){
        document.getElementById('cpout').innerText = "";
    }else{
        document.getElementById('cpout').innerText = "Password does not Match";
    }
    // if(pwd !== cpwd){
    //     document.getElementById('cpout').innerText = "Password does not Match";
    // }else{
    //     document.getElementById('cpout').innerText = "";
    // }
}

function getCity(){
    var city = document.getElementById('city').value;
    document.getElementById('cout').innerText = ` Your Country is ${city}.`
}

function fillId(){
    var id = Math.ceil(Math.random() *100000)
    document.getElementById('eid').value = id
}