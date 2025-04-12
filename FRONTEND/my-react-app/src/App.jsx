import './App.css'
import Admin from './Pages/Admin'
import Store from './Pages/Store.jsx'
import User from './Pages/User'
import Form from './Components/Form.jsx'
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import { Login } from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'

function App() {
  
  return (
    <>
    <div className='grid gap-6'>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Admin/>} />
         <Route path="/Store" element={<Store/>} />
         <Route path="/Admin" element={<User/>} />
         <Route path='/login' element = {<Login/>}/>
         <Route path='/register' element = {<Signup/>}/>
         
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
