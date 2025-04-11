import React, {useState} from 'react'

const LoginForm = () => {
    const [user, setUser] = useState({
        username : "",
        password : "",
    });

    const handleOnChange = (evt) => {
        const {name , value } = evt.target;
        setUser((prev) => ({...prev, [name] : value}));
    }

    const handleForm = (evt) => {
        evt.preventDefault();
        console.log(user);
        setUser({
            username : "",
            password : "",
        })
    }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input 
            type="text" 
            name="username" 
            id="username" 
            value={user.username}
            onChange={handleOnChange}
        />
        <input 
            type="password" 
            name="password" 
            id="password"
            value={user.password}
            onChange={handleOnChange} 
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
