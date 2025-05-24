import React from 'react'
import globe from '../assets/globe.png'

const Header = () => {
    return (
        <header className="flex justify-center bg-orange-500 p-4">
            <div className="flex flex-row items-center">
                <img src={globe} alt="globe Logo" className="h-12 w-12" />
                <h3 className="text-xl font-semibold text-white ml-4">My Travel Journal</h3>
            </div>
        </header>
    )
}

export default Header