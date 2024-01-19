import React from 'react'
import Typewriter from 'typewriter-effect';

function HeroSection() {
    return (
        <div className='md:flex'>
            <div>
                <h1 className=' flex text-5xl my-3 font-bold'> I am a <span className=' text-blue-700'>
                    <Typewriter
                        options={{
                            strings: [' Web Designer', 'Graphic Designer', 'Video Editor', 'Motion Graphic Artist'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet temporibus iusto labore cupiditate ab ipsam beatae, tempora soluta impedit expedita officiis explicabo corporis perferendis nulla, velit corrupti. Nobis, animi.</p>
            </div>
            <div className='md:w-[50%]'>
                <img className='w-[100%]' src="/images/programmers.png" alt="" />
            </div>
        </div>
    )
}

export default HeroSection