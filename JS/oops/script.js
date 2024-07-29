let arr = [1, 2, 3, 4];
arr.sayHello = ()=>{console.log("hello from prototype..!")}

arr.__proto__.push = (n) => {
    console.log("Pushing Element In Array ", n);
}

console.log(Array.prototype === Array.prototype);