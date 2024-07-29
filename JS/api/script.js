// let api = " https://catfact.ninja/fact";
// fetch(api)
// .then((Response) => {
//     console.log(Response);
//     Response.json()
// })
// .catch((err) => {
//     console.log("Error -", err);
// });

// let btn = document.querySelector(".btn");
// let factPara = document.querySelector("#fact");

// async function getData() {
//     try {
//         let res = await axios.get(api);
//         result = res.data.fact;
//         console.log(result);
//         return result;
//     } catch (error) {
//        throw error("Error During fetching api :", error); 
//     }
// }

// btn.addEventListener("click", async ()=> {
//     let data = await getData();
//     factPara.innerText = data;
// })


// college api 

let url = 'http://universities.hipolabs.com/search?name=pakistan';
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.addEventListener("click", async ()=> {
    let colleges;
    let data = await university();
    // console.log(university());
    list.innerText = "";
    for(col of data){
        let li = document.createElement("li");
        colleges = col.name;
        li.innerText = colleges;
        list.appendChild(li);
    }
});

async function university() {
    try {       
        let res = await axios.get(url);
        let result = res.data;
        return result;
    } catch (error) { 
        throw error("Error is : ", error);
    }
};