import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faKiwiBird } from '@fortawesome/free-solid-svg-icons'
import Contacts from './SubComponents/NavBarContacts'
// import Logo from '../../public/Logo_header.png'

import SocialMedia from './SubComponents/SocialMediaSideButtons.js'
import EmailSubscription from './SubComponents/EmailSubscribe.js'
import Logo from '../../public/Logo_header.png'

function Header(){
    return (
        <header className="">
            <div className="relative items-center">
                <div className="">
                    <Link to="/">
                        <img className="relative rounded-bg mt-12 h-full w-full" src={Logo} alt="Main_Logo" />
                    </Link>
                </div>
                <div className="bg-gray-800 bg-opacity-75 hover:z-50 hover:opacity-100 fixed rounded-lg mt-20 ml-2 transform transition duration-200 ease-in-out hover:translate-x-3 hover:scale-125">
                    <SocialMedia/>
                </div>
                <div className="bg-gray-800 z-40 opacity-75 hover:opacity-100 absolute right-0 flex mr-6 -mt-2 ml-2 transform transition duration-200 ease-in-out hover:-translate-x-3 hover:scale-110">
                    <EmailSubscription/>
                </div>
                <div className="relative">
                    <div className="fixed justify-between bg-gray-900 w-full top-0 z-10">
                        <div className="absolute right-0 z-10 sm:mt-2">
                            <Navigation/>
                        </div>
                        <div className="text-center w-full border-b-2 border-pink-600">
                            <Contacts/>
                        </div>    
                     </div>
                </div>
            </div>
        </header>
    )
}

export default Header

