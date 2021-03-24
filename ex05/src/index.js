class Microsoft {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    occupation() {
        return `${this.name} is a philanthropist!`;
    }
}
class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }
}
const henry = new Microsoft("William Henry Gates III");
const elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(henry.occupation());
console.log(elliot.occupation());
console.log(elliot.studentAge());
module.exports = {
    Microsoft,
    Facebook
}