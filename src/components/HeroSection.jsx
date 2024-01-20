import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";



function HeroSection() {
    return (
        <div className='md:flex items-center gap-5 min-h-[80vh]'>
            <div className='flex flex-col gap-3  '>
                <h1 className=' flex text-3xl md:text-5xl my-5 mt-10 font-bold '>Hii I am<span className="text-white rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500">&nbsp;Ankit, </span></h1>
                <h1 className=' flex text-xl md:text-3xl my-3 font-bold'> I am a&nbsp;<span className=' text-blue-700'>
                    <Typewriter
                        options={{
                            strings: [' Web Designer', 'Graphic Designer', 'Video Editor', 'Motion Graphic Artist'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                </h1>
                <p className='text-justify leading-6 text-lg text-slate-600 ' >Welcome to my digital playground! I'm  <span className=' font-bold'> Ankit</span>, a passionate web and graphic designer, as well as a skilled video editor and motion graphics enthusiast. With a keen eye for aesthetics and a love for storytelling, I bring ideas to life in the digital realm.</p>
                <div className='h-44  flex flex-col  justify-center  gap-7'>
                    <div className='flex items-center  gap-3'>
                        <a className='bg-blue-700 hover:bg-blue-800 transition-all text-white p-3 rounded-3xl px-6' href="#">My Resume</a>
                        <a className='border-blue-700 hover:bg-blue-100 border-2 text-blue-700 font-bold p-3 rounded-3xl px-6' href="#">My Work</a>
                    </div>
                    <div className='flex gap-4'>
                        <FaFacebook  className=' cursor-pointer hover:text-blue-900 text-blue-700 text-3xl' />
                        <FaInstagram className=' cursor-pointer hover:text-blue-900 text-blue-700 text-3xl' />
                        <FaTwitter className=' cursor-pointer hover:text-blue-900 text-blue-700 text-3xl' />
                        <FaWhatsapp className=' cursor-pointer hover:text-blue-900 text-blue-700 text-3xl' />
                    </div>

                </div>

            </div>
            <div className='md:w-[50%]m'>
                <img className='w-[100%]' src="/images/programmers.png" alt="" />
            </div>
        </div>
    )
}

export default HeroSection