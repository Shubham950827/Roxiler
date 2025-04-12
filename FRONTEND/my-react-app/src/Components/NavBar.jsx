import React, { useState } from 'react'
import { Modal } from './Modal'
import { Link} from 'react-router-dom'
import { UpdateModal } from './UpdateModal'

export const NavBar = ({heading}) => {

    const [openUpdateForm , setOpenUpdateForm] = useState(false)

  return (

    <>

    <div className='bg-[#003366] w-full h-25 text-white flex items-center justify-between p-4'>
        <h1 className='font-bold text-4xl'>{heading}</h1>
        <div className='flex gap-6'>
            <button className='bg-blue-500 px-2 py-1 cursor-pointer rounded' onClick={() => setOpenUpdateForm(true)}>Update Pasword</button>
            <Link to={'/login'} className='bg-red-400 font-semibold px-2 py-1 rounded cursor-pointer'>Logout</Link>
        </div>
    </div>

    {
        openUpdateForm && (
            <UpdateModal close={() => setOpenUpdateForm(false)}/>
        )
    }
        </>
  )
}

export default NavBar