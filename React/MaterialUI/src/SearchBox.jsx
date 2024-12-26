import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox() {
    let api_url = "https://api.openweathermap.org/data/2.5/weather";
    let api_key = "0d5c673054f1816a6cd6ebb38c9e8470";
    let [city, setCity] = useState("");

    let getWheatherInfo = async () => {
        let res = await fetch(`${api_url}?q=${city}&appid=${api_key}`);
        let jsonRes = res.json();
        console.log(jsonRes);
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWheatherInfo();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <Button variant="contained"
                size='large' type='submit'>SEARCH</Button>
            </form>
        </div>
    );
}