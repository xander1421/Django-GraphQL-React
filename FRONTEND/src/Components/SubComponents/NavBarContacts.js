
import React from 'react'
import { Link } from "react-router-dom"
import {WhoAmI} from "../../pages/WhoAmI"
// import Tooltip from './TooltipContacts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faMailBulk,faPaintBrush, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import SmallLogo from '../../../public/Logo_small_header.png'
function Contacts(){
    return (
        <div className="flex flex-wrap max-w-screen-xl transform transition duration-200 ease-in-out hover:translate-y-3 m-1 text-sm text-center text-white items items-center">
                <Link to="/">
                    <img className="h-12 w-12 mb-1 hover:opacity-75" src={SmallLogo} alt="Main_Logo" />
                </Link>
                <div className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6">
                    <div className="font-semibold m-1 font-xl">
                        <div className="dropdown inline-block relative">
                        <button>
                        <FontAwesomeIcon
                            icon={faPortrait}
                            color="white"
                            size="1x"
                        />
                        <a className="m-1 font-bold"></a>
                        </button>
                        <button className="font-semibold py-2 px-1 rounded inline-flex">
                            <span className="sm:text-sm mr-1 hover:text-gray-100">About me</span>
                        </button>
                            <ul className="transition-colors duration-200 dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">Who am I</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">What I can do</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">My CV</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6">
                    <div className="font-semibold m-1 font-md">
                        <div className="dropdown inline-block relative">
                        <button>

                        <FontAwesomeIcon 
                            icon={faPaintBrush}
                            color="white"
                            size="1x"
                        />
                        <a className="m-1 font-bold"></a>
                        </button>
                        <button className="font-semibold py-2 px-1 rounded inline-flex">
                            <span className="sm:text-sm mr-1 hover:text-gray-100">Projects</span>
                        </button>
                            <ul className="dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">One project</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">Two project</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">Three project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6">
                    <div className="font-semibold m-1 font-md">
                        <div className="dropdown inline-block relative">
                        <button>
                        
                        <FontAwesomeIcon 
                            icon={faMailBulk}
                            color="white"
                            size="1x"
                        />
                        <a className="m-1 font-bold"></a>
                        </button>
                        <button className="font-semibold py-2 px-1 rounded inline-flex">
                            <span className="sm:text-sm mr-1 hover:text-gray-100">Contacts</span>
                        </button>
                            <ul className="dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">One project</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">Two project</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2  px-1 block whitespace-no-wrap" href="#">Three project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>     
        </div>
    )
}


export default Contacts

