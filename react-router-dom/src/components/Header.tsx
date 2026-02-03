import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => { 
  return (
    <div className='py-8 px-10 bg-emerald-500 text-white flex items-center justify-between text-xl'>
      <h2>Tanmay</h2>
      <div className='flex gap-10 text-xl underline'>
        {/* <a className='text-xl underline' href="/">Home</a>
        <a className='text-xl underline' href="/about">About</a>                aise karenge toh page reload hoga
        <a className='text-xl underline' href="/contact">Contact</a>            
        <a className='text-xl underline' href="/product">Product</a> */}              

        <Link to='/'>Home</Link>                       
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Header