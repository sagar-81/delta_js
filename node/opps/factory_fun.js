function Data(name, age) {
    var person = {
        name: name,
        age: age,
        talk() {
            console.log(`My Name is ${this.name}`);
        }
    }
    return person;
}

var d1 = Data('Sagar', "19");

console.log(d1.talk());
console.log(d1.age);

