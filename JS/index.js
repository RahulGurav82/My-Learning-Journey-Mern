// let str = "  RahulLovesCoding"

// console.log(str.trim());
// console.log(str.toUpperCase() )
// console.log(str.indexOf("c"))
// console.log(str.replace("R", "A"))
// let str1 = str.slice("R", "A")
// console.log(str.repeat(4))

// let example = "Help!ishdhbsabdkaldjhasijljbajsdbhaijskdklasjaj";
// let ex = example.length;


// let correctPass = example.trim().toUpperCase();
// let correctPass1 =  example.slice(2, example.length);
// correctPass1

// Arrays

let arr = ["Rahul", "Tanaya", "College", "FYCS", ];

// push method
arr.push("Examp");
console.log(arr)
// pop method
arr.pop();
console.log(arr)
// unshift method
arr.unshift("Rahul")
console.log(arr)
// shift method
arr.shift()
console.log(arr)
console.log(arr[0].slice(1,3));
console.log(typeof arr) 
let emtArr = []
console.log(emtArr)

let months = ["january", "july", "october", "May", "feb"];
months.shift()
months.shift()
months
months.unshift("jan");
months.unshift("july");
months
console.log(months.includes("jan"))

console.log(months.slice(-1))

console.log(arr.sort())

let nums = [
    [2, 4],
    [3, 9],
    [4, 16],
    [5, 25]
]

console.log(nums[0][1])

let xox = [
    ["x", null, 0],
    [null, "x", null],
    [0, null, "x"],
]
console.table(xox);