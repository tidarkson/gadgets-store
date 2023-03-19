import React from 'react'
import logo from '../images/logo.png'
import { FaSearch, FaBars, FaShoppingCart, FaUserPlus } from 'react-icons/fa'

function Header() {
    return (
        <>

            <header className='header flex items-center justify-between py-3'>
                <div className='menu-btn flex'>
                    <div>
                        <FaBars className='mx-4' />
                    </div>
                    <div>
                        <FaSearch />
                    </div>
                </div>

                <div className='logo'>
                    <img src={logo} alt="Microsoft"/>
                </div>

                <div className='cart flex'>
                    <div >
                        <FaShoppingCart />
                    </div>
                    <div className='mx-4'>
                        <FaUserPlus />
                    </div>
                </div>
            </header>


        </>
    )
}

export default Header