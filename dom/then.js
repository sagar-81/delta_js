


function changeColor(timeout, log) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Log is" + log)
            console.log(log)
        }, timeout);
    })
}




changeColor(1000, "1000 done").then((e) => {
    changeColor(1000, "1000 done").then((e) => {
        changeColor(1000, "1000 done")
    })
}).catch((e) => {
    console.log(e)
})