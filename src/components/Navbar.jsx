import React from 'react'

function Navbar() {
  // const _ = require('lodash');

  const menus = {
    "Home": "#",
    "About": "#",
    "Hire Me": "#",
    "My work": "#",
  }


  return (
    <>
      <section className='h-20  flex items-center justify-between border-b mb-2'>
        <div className="logo w-[50px]"><img className='w-[100%]' src="../pic.png" alt="logo" /></div>
        <ul className='flex text-3 gap-1   text-blue-700  font-semibold '>
          {
            Object.entries(menus).map(menu => {
              let link = menu[1];
              let name = menu[0];
              return <li key={link} className=' cursor-pointer hover:text-black hover:bg-blue-100  border-b-2  rounded hover:-translate-y-[2px]  transition-all'><a className='cursor-pointer p-1 md:py-2 md:px-4' href={link}>{name}</a></li>
              
            })
          }
          
        </ul>
      </section>

    </>
  )
}

export default Navbar