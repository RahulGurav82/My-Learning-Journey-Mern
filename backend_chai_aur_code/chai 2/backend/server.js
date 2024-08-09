import express from 'express'
const app = express();

const PORT = process.env.PORT || 2000;

app.get("/", (req, res) => {
    res.send("Server is ready");
});


app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id : 1,
            title : "a joke 1",
            content : "You Are Monkey 1"
        },
        {
            id : 2,
            title : "a joke 2",
            content : "You Are Monkey 2"
        }
    ];

    res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`server runinng on port ${PORT}`);
})