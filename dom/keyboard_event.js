

let ac = document.querySelector('.input');

ac.addEventListener('keydown', function (params) {
    console.log("Code " + params.key)
    console.log("Key Code " + params.code)

    console.dir(params);
})