// map it used to transform each elm in an array and a return a new array.

const num = [1, 2, 3, 4, 5];

let sq = num.map((num) => {
    return num * num;
});

console.log(sq);

// fillter used fillter elements from an array based on a condition

const age = [10, 20, 25, 30, 35];
const adults = age.filter(age => age >= 18);
console.log(adults);