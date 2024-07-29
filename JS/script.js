// let arr = [1, 2, 898, 43, 43, 434, 67, 33, 89, 6];
// let nearr = [...arr];
// console.log(nearr);
// console.log(Math.min(...arr))
// console.log(...arr);
// console.log(arr);
// let chars = [..."hello"]
// console.log(chars)


// // object spread litral

// let data = {
//     email : "rahul@gmail.com",
//     pass : "passs"
// }

// let data1 = {...data,
//     id : 121
// }

// let dataArr = {...arr}
// console.log(dataArr)
// console.log(data1);

// function sum(...args) {
//     for(let i = 0; i < args.length; i++) {
//         console.log("give us :", args[i])
//     }
// }

// sum(1, 2)


// function sum(...args) {
//     return args.reduce( (sum , el)=> sum + el)
// }

// console.log(sum(1, 2,3 ));

// function min(...args){
//     return args.reduce( (min, el) => {
//         if (min > el){
//             return el;
//         }
//         else {
//             return min;
//         }
//     });
// }

// console.log(min(2, 4, 6, 1, 5));

// let players = ["Rahul", "Sachin", "Rohit", "Yadav"];

// let [winner, runnerUp, ...others] = players;
// console.log(winner)
// console.log(runnerUp)
// console.log(others)

// let info = {
//     name : "Rahul",
//     age : 21,
//     // city : "diva",
//     password : "admin@123",
//     email : "admin@gmail.com"
// }

// let { name, email, city = "delhi" } = info;

// console.log(city)


// let student = {
//     idPass : true,
//     eng : 23,
//     math : 54,
//     cs : 100,
//     getAvg() {
//         let avg = (this.eng + this.cs + this.math) / 3;
//         console.log(avg);
//     }
// }
// student.getAvg();

// console.log(this);

// function hello() {
//     console.log("Inside The Hello..!");
//     Demo();
// }

// function Demo() {
//     console.log("Inside The Demo...!");
//     hello();
// }

// Demo();

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let r = one() + two();
//     console.log(r);
// }

// three();

// setTimeout(() => {
//     console.log("Hiii");
// }, 6000);

// console.log("heee");


// function saveData(data) {
//     return new Promise((resolve, reject) =>{
//         let internerSpeed = Math.floor((Math.random() * 10) + 1);
//         console.log(internerSpeed);
//         if (internerSpeed > 4){
//          resolve("Success : Data Is Saved");
//         } else {
//             reject("failure : Weak");
//         } 
//     });
// }

// saveData("Hiii");

let h1 = document.querySelector("h1");

function ColorChange(color, delay) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            h1.style.color = color; 
            resolve("success");
        }, delay);

    });
};

async function demo() {
    await ColorChange("red", 1000);
    await ColorChange("orange", 1000);
    await ColorChange("green", 1000);
    await ColorChange("yellow", 1000);
}

demo();
