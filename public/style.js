

let input = document.querySelector("#user")
let pass = document.querySelector("#password")
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    alert(pass.value);
    alert(input.value);
});