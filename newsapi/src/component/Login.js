import React from 'react'

const Login = () => {
  return (
    <div className='login'>
         <form id='form' className='container' method=''>
          {/* <h1>login</h1> */}
          <input autoComplete='off' id='username' type={"text"} placeholder='username'></input><br/>
          <input autoComplete='off' id='password' type={"password"} placeholder='password'></input><br/>
          <button type='submit'> login</button>
        </form></div>
      
    
  )
}

export default Login 
