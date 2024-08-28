import React,{useState} from 'react'

const PasswordMatch = () => {

    const [input1,setInput1]=useState("");
    const [input2,setInput2]=useState("");

    function passWordCheck(e){
      setInput1(e.target.value);
    }
    function passWordCheck2(e){
      setInput2(e.target.value);
    }

    

    function matchPassword(e){
        if(input1!=="" && input2!==""){
        if(input1!==input2){
            return "Password doesnt match!"
        }
    }
}

  return (
    <div>
      <h1>Password Match</h1>
      <input value={input1}
        placeholder='Type your password'
        required
        onChange={passWordCheck}
      />
      <br />
      <input value={input2}
        placeholder='Re-ype your password'
        required
        onChange={passWordCheck2}
      />

      <div style={{color:"red"}}>{matchPassword()}</div>

    </div>
  )
}

export default PasswordMatch
