import React from 'react'

function Navbar() {
  return (
    <>
        <section className='h-20  flex items-center border-b mb-2'>
            <ul className='flex text-3 gap-1 border  text-blue-700  font-semibold '>
                <li className=' cursor-pointer hover:text-black hover:bg-blue-100 p-2 px-3 rounded-lg hover:-translate-y-[2px]  transition-all'><a href="#"></a>Home</li>
                <li className=' cursor-pointer hover:text-black hover:bg-blue-100 p-2 px-3 rounded-lg hover:-translate-y-[2px]  transition-all'><a href=""></a>About</li>
                <li className=' cursor-pointer hover:text-black hover:bg-blue-100 p-2 px-3 rounded-lg hover:-translate-y-[2px]  transition-all'><a href=""></a>Hire Me</li>
            </ul>
        </section>

    </>
  )
}

export default Navbar