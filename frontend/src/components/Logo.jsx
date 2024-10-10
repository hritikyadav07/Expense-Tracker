import React from 'react'
import LogoImage from '../assets/Logo.jpeg'

function Logo() {
  return (
    <>
    <div className='font-bold text-3xl flex'>
      {/* <Image src ="frontend\src\assets\Logo.jpeg"/> */}
        <img src={LogoImage} className=" h-12" alt="Logo" />
         Expense Tracker
    </div>
    </>
  )
}

export default Logo