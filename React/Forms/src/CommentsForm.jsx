import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name] : event.target.value}
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
            remarks : "",
            rating : 5,
        });
    }

    return (
        <div>
            <h3>Give a Comments</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="username"
                    value={formData.username} 
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="remarks">remarks</label>
                <textarea 
                    name="remarks" 
                    id="remarks" 
                    placeholder="remarks" 
                    value={formData.remarks}
                    onChange={handleInputChange}></textarea>
                <br />
                <label htmlFor="rating">Rating</label>
                <input 
                    type="number" 
                    name="rating" 
                    id="rating" 
                    placeholder="rating" 
                    value={formData.rating}
                    onChange={handleInputChange}
                />
                <br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}