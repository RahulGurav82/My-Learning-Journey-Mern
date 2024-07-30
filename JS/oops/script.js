// let arr = [1, 2, 3, 4];
// arr.sayHello = ()=>{console.log("hello from prototype..!")}

// arr.__proto__.push = (n) => {
//     console.log("Pushing Element In Array ", n);
// }

// console.log(Array.prototype === Array.prototype);


// Constructor - doen't return anything. & Start with capital letter.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.__prototype__.talk = function (){
//     console.log("Hii, Welcome", this.name);
// }

// let p1 = new Person("Rahul", 21);

// class

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hii, Welcome", this.name);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); // parent class constructor is being cslled.
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age); // parent class constructor is being cslled.
        this.subject = subject;
    }
}