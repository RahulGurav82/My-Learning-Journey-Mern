import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullname : "",
        username : "",
        password : "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setFormData((currData) => {
            // currData[fieldName] = fieldValue;
            return { ...currData, [fieldName] : fieldValue};
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullname : "",
            username : "",
            password : "",
        });
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Enter Fullname</label>
            <input 
                type="text" 
                id="fullName" 
                placeholder="Enter Full Name" 
                value={formData.fullname} 
                name="fullname"
                onChange={handleInputChange}
            />
            <br /><br /><br />
            <label htmlFor="username">Enter Username</label>
            <input 
                type="text" 
                id="username" 
                name="username"
                placeholder="Enter Full Name" 
                value={formData.username} 
                onChange={handleInputChange}
            />
            <br /><br /><br />
            <label htmlFor="password">Enter Password</label>
            <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Enter Password" 
                value={formData.password} 
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}