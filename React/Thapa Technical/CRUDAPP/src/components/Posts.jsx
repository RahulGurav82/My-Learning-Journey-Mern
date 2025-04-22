import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/PostApi';
import Card from './Card';
import Form from './Form';

const Posts = () => {

    const [data, setData] = useState([]);
    const [updateData, setUpdateData] =  useState({});
    

    const GetPostData = async () => {
        const res = await getPosts();
        setData(res.data);
    }
    
    useEffect(() => {
        GetPostData()
    }, [])

  return (

    <div>
        <Form 
            data={data}
            setData={setData}
            setUpdateData={setUpdateData}
            updateData={updateData} 
        />
        <ol>
        {
            data.map((crrVal) => (
                <li key={crrVal.id}>
                    <Card
                     setUpdateData={setUpdateData}
                     updateData={updateData}
                     crrVal={crrVal} 
                     data={data} 
                     setData={setData} />
                </li>
            ))
        }
        </ol>
    </div>
  )
}

export default Posts