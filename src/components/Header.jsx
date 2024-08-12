import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { BiBasket } from 'react-icons/bi'

const Header = () => {
  return (
  <header className='shadow'>
<Container designs={"flex justify-between items-center"}>
    <Link to={"/"} className='text-red-500 font-[900] text-3xl font-mono'>Thunk Sepeti</Link>
<div className='flex items-center gap-4'>
  <button className='border border-red-500 py-1 px-3 text-red-500 rounded-lg hover:bg-red-500 hover:text-white'>Giriş Yap</button>
  <button className='border border-red-500 py-1 px-3 text-red-500 rounded-lg hover:bg-red-500 hover:text-white'>Kayıt Ol</button>
  <Link  className="hover:bg-red-500 rounded-full p-3 shadow-lg hover:bg-opacity-40 transition"to={"/cart"}><BiBasket/></Link>
</div>
</Container>
  </header>
  )
}

export default Header