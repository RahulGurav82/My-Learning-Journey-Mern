import React, {useState} from 'react'

const App = () => {
  const [isLogin, setisLogin] = useState(false);

  return (
    <div>
      {
        isLogin ? "Log Out" : "Please Login"
      }

      <button onClick={()=>setisLogin(!isLogin)}>Login</button>
      <button>Set User</button>
      <button>Reset User</button>
    </div>
  )
}

export default App
