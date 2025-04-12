import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Login = () => {

    const [data , setData] = useState({
        email : '',
        password : ''
    })
    const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', data);
        console.log('✅ Login successful:', response.data);
        alert('Login successful!');

        // Optional: Store token or user data if returned
        // localStorage.setItem('token', response.data.token);

        setData({ email: '', password: '' }); // Clear form
        navigate('/'); // Redirect after login
    } catch (error) {
        console.error('❌ Login failed:', error.response?.data || error.message);
        alert('Login failed. Please check your email and password.');
    }
};


  return (
        <div className='flex justify-center items-center flex-col gap-4 mt-30'>
        <h1 className='text-xl '>Login</h1>
        <form className='grid gap-6' onSubmit={handleLogin}>
            <div>
                <label htmlFor="email"></label>
                <input type="text" placeholder='Email' 
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                className='border p-1 w-72 rounded'/>
            </div>
            <div className='mt-10'>
                <label htmlFor="password"></label>
                <input type="password" placeholder='password' 
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className='border p-1 w-72 rounded'/>
            </div>
            <div>
                <label htmlFor="login"></label>
                <button className='bg-red-500 w-72 px-2 py-1 rounded'>Login Now</button>
            </div>
            </form>
            <p>Dont have an account? <Link to={'/register'}>Sign up</Link></p>
    </div>
  )
}
