let json = '{"id": 1,"name": "Alice","email": "alice@example.com","age": 25}';

console.log(JSON.parse(json)) // to parse a String data into  a JS object


let a = {
    a: "a",
    b: "b"
}
let str = JSON.stringify(a); // to parse a js object data  into JSON
console.log(str)