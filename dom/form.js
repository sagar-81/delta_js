


let input1 = document.querySelector(".a");
let form = document.querySelector("form");
let input2 = document.querySelector(".b");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();     // not taking to next path
//     e.stopPropagation();   // not taking means div tigrred and we have one more listern but it not tiiggred
//     let a = Number(input1.value);
//     let b = Number(input2.value);
//     let sum = a + b;
//     alert("The sum is: " + sum);
//     input1.value = null;
//     input2.value = null;
// })

// input1.addEventListener("input", function (params) {
//     alert(`============================${this.value}===================================`)
// })

let text = document.querySelector(".text");
let p = document.querySelector("p");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let clear = document.querySelector(".clear");

bold.addEventListener("click", function () {
    p.style.fontWeight = "bold";
    bold.style.backgroundColor = "yellow";
});

clear.addEventListener("click", function () {
    p.innerText = "";
    text.value="";
});

italic.addEventListener("click", function () {
    p.style.fontStyle = "italic";
});

text.addEventListener("input", function (e) {
    p.innerText = text.value;
    console.dir(e);
});

text.addEventListener("mouseout",function(params) {
    console.log("mouse out")
})

text.addEventListener("keypress",function(params) {
    console.log("keypress ")
})

text.addEventListener("scroll",function(params) {
    console.log("keypress ")
})