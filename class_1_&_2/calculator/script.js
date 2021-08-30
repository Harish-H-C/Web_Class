function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a) + Number(b)
    document.getElementById('output').innerText = "Addition of Number is "+out+" "
}
function sub(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a) - Number(b);
    document.getElementById("output").innerText = `Subtraction of Number is ${out} `
}
function mul(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a) * Number(b);
    document.getElementById("output").innerText = `Subtraction of Number is ${out} `
}
// function mul(){
// 	var a = document.getElementById("first").valuue;
// 	var b = document.getElementById("second").valuue;
// 	var out = Number(a) * Number(b);
// 	document.getElementById("output").innerText = `Subtraction of Number is ${out}`
// }