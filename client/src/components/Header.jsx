import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-sky-500'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-4 text-white'>
                <Link to="/">
                    <h1 className='text-lg font-bold'>App authentication</h1>
                </Link>
                <ul className='flex gap-4 capitalize'>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/about"><li>about</li></Link>

                    <Link to="/signin"><li>signin</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Header