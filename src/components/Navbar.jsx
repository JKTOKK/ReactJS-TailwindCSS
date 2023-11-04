import React from 'react'

function Navbar() {
  return (
    <nav className='bg-blue-500 p-4'>
        <div className="container mx-auto flex justify-between items-center">
            <a href="javascript:;" className='text-white text-x2l font-semibold'>JKTOKK</a>

            <ul className='flex space-x-4'>
                <li><a href="javascript:;" target='_self' className='text-white' >Home</a></li>
                <li><a href="javascript:;" target='_self' className='text-white' >About</a></li>
                <li><a href="javascript:;" target='_self' className='text-white' >Porfolio</a></li>
                <li><a href="javascript:;" target='_self' className='text-white' >Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar