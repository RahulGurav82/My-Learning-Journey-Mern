import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phoneNumber : ""
    });

    const handleOnChange = (evt) => {
        let {name , value} = evt.target;
        setFormData((preVal) => ({...preVal, [name] : value}))
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        console.log(formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: ""
        });
    }

    let {firstName, lastName, email, phoneNumber, password} = formData;

  return (
    <div>
        <form onSubmit={handleFormSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <input 
                type="text"
                name='firstName' 
                placeholder='First Name'
                id='firstName' 
                value={firstName}
                onChange={handleOnChange}
            />
            <input 
                type="text" 
                placeholder='Last Name'
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={handleOnChange}
            />
            <input 
                type="email"
                name="email" 
                id="email" 
                placeholder='Email'
                value={email}
                onChange={handleOnChange}
            />
            <input 
                type="tel" 
                name="phoneNumber" 
                id="phoneNumber" 
                placeholder='Phone Number' 
                value={phoneNumber}
                onChange={handleOnChange}
            />
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Password'
                value={password}
                onChange={handleOnChange}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form