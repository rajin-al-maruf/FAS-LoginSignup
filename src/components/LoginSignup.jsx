import React, { useState } from 'react'
import { app } from '../firebaseConfig'
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "firebase/auth";


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

    const auth = getAuth()

    function handleSubmit() {
        createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((response) => {
            console.log(response.user)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

  return (
    <div className=''>
      <div className='flex flex-col max-w-sm m-auto mt-20 p-10 border '>
        <p className='m-auto text-2xl mb-6 font-medium'>SignUp</p>
        <input 
            className='rounded-md p-2 my-2 border focus:outline-none text-gray-700 text-sm '
            type="email" 
            name="email" 
            onChange={handleChange}
            value={loginData.email}
            placeholder='Email address'
        />
        <input 
            className='rounded-md p-2 my-2 border focus:outline-none text-gray-700 text-sm'
            type="password" 
            name="password" 
            onChange={handleChange}
            value={loginData.password}
            placeholder='Password'
        />
        <button 
            className='mt-4 bg-gray-800 p-2 rounded-md text-white hover:bg-gray-900'
            type="submit"
            onClick={handleSubmit}
            >
                Signup
        </button>
      </div>
      
    </div>
  )
}

export default LoginSignup
