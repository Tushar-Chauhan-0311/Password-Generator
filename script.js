let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("Uppercase"); 
let numbers = document.getElementById("Numbers");     
let symbols = document.getElementById("Symbols");     
let gnbtn = document.getElementById("gnbtn");
let copyicon = document.getElementById("copyicon");


slidervalue.textContent = inputslider.value;

inputslider.addEventListener("input", () => {
    slidervalue.textContent = inputslider.value;
});

gnbtn.addEventListener("click", () => {
    passbox.value = generatepassword();
});

let uppercars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*<>?";

function generatepassword() {
    let getpassword = "";
    let allchars = "";

    if (lowercase.checked) allchars += lowercars;
    if (uppercase.checked) allchars += uppercars;
    if (numbers.checked)   allchars += allnumbers;
    if (symbols.checked)   allchars += allsymbols;

    if (allchars.length === 0) {
        alert("Please select at least one option!");
        return "";
    }

    for (let i = 0; i < inputslider.value; i++) {
        getpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }

    return getpassword;
}


copyicon.addEventListener("click", () => {
    if(passbox.value != "" || passbox.length >= 1){
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText = "check";
     copyicon.title = "password copied";

     setTimeout(() => {
        copyicon.innerText = "content_copy";
        copyicon.title = "";
     },2000)
    }
})


