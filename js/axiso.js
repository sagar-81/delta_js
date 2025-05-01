let button = document.querySelector('button');
let p = document.querySelector('#inner');


let data = button.addEventListener('click', async function () {
    let fact = await getFacts();
    p.innerText = fact;
});



async function getFacts() {
    try {
        const headers = { headers: { Accept: "application/json" } }
        let req = await axios.get("https://catfact.ninja/fact",headers);
        return req.data.fact;
    } catch (error) {
        console.log(error)
        return "No Fact Found";
    }
}