import React, { useEffect, useState } from 'react'
import { addPost, updatePost } from '../api/PostApi';

const Form = ({ data, setData, updateData, setUpdateData}) => {

    const [addData, setAddData] =  useState({
        title : "",
        body : "",
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=> {
            return {
                ...prev, 
                [name] : value,
            }
        });
    }

    const addPostData = async () => {
        const res = await addPost(addData);
        if (res.status === 201){
            setData([...data, res.data]);
        }

        setAddData({
            title : "",
            body : "",
        })

    }

    const UpdatePostData = async () => {
        try {
            const res = await updatePost(updateData.id, addData);
            if(res.status === 200) {
                setData((prev)=> {
                    return prev.map((crrVal) => {
                        return crrVal.id === updateData.id ? res.data : crrVal;
                    });
                });
            }

            setAddData({
                title : "",
                body : "",
            });

            setUpdateData({});
        } catch (error) {
            console.log(error)
        }    
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const action = evt.nativeEvent.submitter.value;
        if(action === "Add") {
            addPostData();
        } else if (action === "Edit") {
            UpdatePostData();
        }
    }


    useEffect(()=> {
        updateData && setAddData({
            title: updateData.title || "",
            body : updateData.body || "",
        })
    }, [updateData])

    let isEmpty = Object.keys(updateData).length === 0;
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">
            <input 
            type="text" 
            name='title' 
            placeholder='title'
            value={addData.title} 
            onChange={handleInputChange}
            />
        </label>

        <label htmlFor="message">
            <input 
            type="text" 
            name='body' 
            id='body' 
            placeholder='message'
            value={addData.body} 
            onChange={handleInputChange}
            />
        </label>
        <button type="submit" 
        value={ isEmpty ? "Add" : "Edit"}
        >
            { isEmpty ? "Add" : "Edit"}
        </button>
    </form>
    </>
  )
}

export default Form