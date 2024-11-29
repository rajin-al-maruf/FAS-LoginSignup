import React, { useState } from 'react'

const LoginSignup = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""

    })

    function handleChange(event) {
        const {name, value} = event.target

        setLoginData( prevData => ({
            ...prevData,
            [name] : value
        }))
    }
console.log(loginData)
  return (
    <div>
      <div>
        <input 
            className='bg-slate-200 rounded-md p-2 m-2'
            type="email" 
            name="email" 
            onChange={handleChange}
            value={loginData.email}

        />
        <input 
            className='bg-slate-200 rounded-md p-2 m-2'
            type="password" 
            name="password" 
            onChange={handleChange}
            value={loginData.password}
        />
      </div>
      <button 
        className='m-2 bg-slate-300 p-2 rounded-md'
        type="submit">Submit</button>
    </div>
  )
}

export default LoginSignup
