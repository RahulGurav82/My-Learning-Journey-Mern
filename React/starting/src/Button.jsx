function hello(evt) {
    console.log("hello..");
    console.log(evt);
}


export default function Button() {
    return (
        <button onClick={hello}>Click Me</button>
    )
}