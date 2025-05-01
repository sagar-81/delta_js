class Data {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is bark`);
    }
}

var d1 =new Data('dog');
d1.speak();