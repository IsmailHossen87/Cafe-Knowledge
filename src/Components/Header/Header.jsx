import React from 'react'
import Profile from '../../assets/images/profile.png'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-4 border-b-2'>
        <h1 className='text-4xl'>Hi ,I am Rakhsani</h1>
        <img src={Profile} alt="" />
    </div>
  )
}
