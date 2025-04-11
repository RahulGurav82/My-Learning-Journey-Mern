import React, {useRef} from 'react'

const UseRef = () => {
    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
    }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="" ref={username} /> <br /> <br />
        <input type="password" name="" ref={password} /> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UseRef
