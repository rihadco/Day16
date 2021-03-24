class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        let personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}
let Rihad = new Person("Rihad", "rihad.covcic@gmail.com", 38);
console.log(Rihad.getPerson());
module.exports = Person;