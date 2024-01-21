import React from 'react'

function OutLinedButton({ name, link }) {
    return (
        <>
            <a className='border-blue-700 hover:bg-blue-100 border-2 text-blue-700 font-bold p-3 rounded-3xl px-6' href={link}>
                {name}
            </a>
        </>
    )
}

export default OutLinedButton