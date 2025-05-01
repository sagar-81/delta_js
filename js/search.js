
let url = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector("button");
let searchInput = document.querySelector("#search");
let body = document.querySelector('body')

button.addEventListener('click', async () => {
    let country = searchInput.value.trim();
    if (!country) {
        p.innerText = "Please enter a country!";
        return;
    }

    let data = await getColleges(country);
    if (data.length === 0) {
        p.innerText = "No universities found!";
        return;
    }

    showName(data);
});

function showName(params) {
    params.forEach(data => {
        let para = document.createElement("li");
        para.innerText = data.name;
        body.appendChild(para);
    });
}



async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (error) {
        return [];
    }
}