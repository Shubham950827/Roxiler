import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Form = () => {
    const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', data);
      console.log('✅ Registration successful:', response.data);
      alert('Registration successful!');
      setData({ username: '', email: '', password: '', address: '' });
      navigate('/login')
      // clear form
    } catch (error) {
      console.error('❌ Error during registration:', error.response?.data || error.message);
      alert('Registration failed. Check console for details.');
    }
  };

  return (
    <div className='mx-auto'>
      <h1 className='text-xl mb-6'>Register</h1>
      <form className='grid gap-4' onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder='Username'
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            className='border p-1 w-72 rounded'
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className='border p-1 w-72 rounded'
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className='border p-1 w-72 rounded'
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Address'
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className='border p-1 w-72 rounded'
          />
        </div>
        <div>
          <button type="submit" className='bg-blue-500 text-white p-2 rounded'>
            Register
          </button>
        </div>
      </form>
      <p>Already have an account!?<Link to={'/login'}>Login</Link></p>
    </div>
  );
};

export default Form;
