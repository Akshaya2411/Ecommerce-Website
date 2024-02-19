import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {
  const[state,setState]=useState("Sign In")
  const[formData,setFormdata]=useState({
    name:"",
    email:"",
    password:""

  })
  const changeHandler =(e)=>{
    setFormdata({...formData,[e.target.name]:e.target.value})
  }
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const signup=async()=>{
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.error)
    }
  }
  const login=async()=>{
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.error)
    }

  }
  return (
    <div className='loginsignup'>
      <div className='logincontainer'>
        <h1>{state}</h1>
        <div className="regfields">
          {state==='Sign Up'?<input type='text' value={formData.name} onChange={changeHandler}  name='name' placeholder='Enter Name' required/>:<></>}
          <input type='email' value={formData.email} onChange={changeHandler}  name='email' placeholder='Enter Email ID' required/>
          <input type='password' value={formData.password} onChange={changeHandler}  name='password' placeholder='Enter Password' required/>
        </div>
        
        {state==='Sign In'? <p className='logfields'>Don't have an account? <span style={{cursor:'pointer'}} onClick={()=>{setState('Sign Up')}}>Click here to Sign Up</span></p>: <p className='logfields'>Already have an account? <span style={{cursor:'pointer'}} onClick={()=>{setState('Sign In')}}>Click here to Sign In</span></p>}
      <div className='agree'>
        <input type="checkbox" checked={isChecked}
          onChange={handleCheckboxChange} name='' id=''/>
        <p> By continuing, I agree to the terms and conditions</p>
        </div>
        <button disabled={!isChecked} onClick={()=>state==='Sign In'?login():signup()}>Continue</button>
      </div>
    </div>
  )
}

export default Login