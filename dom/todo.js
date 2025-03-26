let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");


button.addEventListener("click", () => {
    let value = input.value;
    if (value == "") {
        alert("Please enter a value");
        return;
    }
    let li = document.createElement("li");
    li.innerText = value;
    list.appendChild(li);
    input.value = "";
    li.addEventListener("click", function () {
        list.removeChild(this);
    });
});

