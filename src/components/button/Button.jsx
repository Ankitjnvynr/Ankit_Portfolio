import React from 'react'

function Button({ name, link }) {
    return (
        <>
            <a className='bg-blue-700 hover:bg-blue-800 transition-all text-white p-3 rounded-3xl px-6' href={link}>
                {name}
            </a>
        </>
    )
}

export default Button