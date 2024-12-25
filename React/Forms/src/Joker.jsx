import { useState } from "react";

export default function Joker() {
    const api = "https://official-joke-api.appspot.com/random_joke";
    
    const getNewJoke = async () => {
        let res = await fetch(api);
        let jsonResponse = await res.json();
        // console.log(jsonResponse);
        // return jsonResponse;
        setJoke({setup : jsonResponse.setup, punchline : jsonResponse.punchline});
    }
    let [joke, setJoke] = useState(getNewJoke);

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}