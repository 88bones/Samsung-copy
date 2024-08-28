import React, { useState } from 'react'

const DisableSubmit = () => {

    const[password,setPassword]=useState("");
    const[rePassword,setRePassword]=useState("");

    function doesMatch(){
    if(password!=="" && rePassword!=="" & password==rePassword){
        return false;
    }
    return true;
}

  return (
    <div>
        <h1>Diable Submit</h1>
            <input
                placeholder='Password'
                value={password}
                onChange={(e)=>{
                setPassword(e.target.value);
                
                }}
            />
            <br />
             <input
                placeholder='Re-Password'
                value={rePassword}
                onChange={(e)=>{
                setRePassword(e.target.value);
                }}
            />
            <br />
            <button type="submit"
                    disabled={doesMatch()}
                    onClick={()=>{
                        alert("Password has been reset!");
                        setPassword("");
                        setRePassword("");
                    }}
            
            >Submit</button>
    </div>
  )
}

export default DisableSubmit
