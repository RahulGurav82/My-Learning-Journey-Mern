const mongoose = require("mongoose");

main().then((res) => {
    console.log('Connection Successful');
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name : "Rahul",
//     email : "rahul@gmail.com",
//     age : 21
// });

// user1.save()
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });

// User.insertMany([
//     {name: "Rhunal", email : "rhunal@gmail.com", age:20},
//     {name: "sahil", email : "sahil@gmail.com", age:20}
// ]);

// User.find({age : {$gt : 20}}).then((res)=> {
//     console.log(res);
// });

// User.findById('66c0def7c551842fe1f76ece').then((res)=> {
//     console.log(res);
// });

// User.updateOne({name : "Rahul"}, {name : "Rohan"}).then((res)=> {
//     console.log(res);
// });

User.findOneAndUpdate({},{},{new:true}).then((res)=>{
    
});

