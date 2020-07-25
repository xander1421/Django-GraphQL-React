import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faKiwiBird } from '@fortawesome/free-solid-svg-icons'
import Contacts from './SubComponents/NavBarContacts'
import Logo from '../../public/Logo_header.png'

function Header(){
    return (
        <header className="">
            <div className="relative">
                <div className="">
                    <img className="relative rounded-bg mt-12 h-full w-full" src={Logo} alt="Main_Logo" />
                </div>
                
                <div className="relative">
                    <div className="fixed justify-between bg-gray-900 w-full top-0 z-10">
                        <div className="absolute top-0 right-0 z-10">
                            <Navigation/>
                        </div>
                        <div>
                            <Contacts/>
                        </div>
                        <div className="border-b-8 border-pink-600"></div>
                         
                     </div>
                     
                </div>
                  

            </div>
        </header>
    )
}

export default Header

