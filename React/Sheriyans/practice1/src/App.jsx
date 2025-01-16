import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios"

function App() {
  let [data, setData] = useState([]);


  const getData = async ()=> {
    let response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(data);
  }

  useEffect(()=> {
    getData();
  }, [])

  return (
    <>
      <div>
        <button onClick={getData}>Get Data</button>
        <div className='display'>
          hello
              {data.map( function(elm, idx) {
                return <img key={idx} src={elm.download_url} alt=""/>
              })}
        </div>
      </div>
    </>
  )
}

export default App
