import React, { useState } from 'react'

const Login = () => {

    const[userName,setUsername]=useState("");
    const[passWord,setPassword]=useState("");
    const[error,setError]=useState("")
    const[isSuccess,setIsSuccess]=useState(false)

    function credentialsMatch(e){
        e.preventDefault();
        if(userName!=="admin" || passWord!=="admin"){
        setIsSuccess(false)
        setError("Username or Password doesn't match!");      
        setUsername("");
        setPassword("");
    }else{
        setIsSuccess(true)
        setError('Login Success!');
        setUsername("");
        setPassword("");
    }
}

  return (
    <div className='login-container'>
        <form onSubmit={credentialsMatch}>
            <h1>Login</h1>
        <input 
            type="text"
            value={userName}
            placeholder='Username'
            required
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
        />
        <br />
        <input 
            type="password"
            value={passWord}
            placeholder='Password'
            required
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
        />
        <br />
        <div className="error "style={{display:"block",color: isSuccess?'green':'red'}}>{error}</div><br></br>
        <button type='submit'>Login</button>
        <br />
        </form>
        <br />  
    </div>
  )
}

export default Login
