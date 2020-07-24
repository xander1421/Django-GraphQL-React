
import React from 'react'
// import Tooltip from './TooltipContacts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faMailBulk,faPaintBrush, faAddressBook } from '@fortawesome/free-solid-svg-icons'

function Contacts(){
    return (
        <div className="flex flex-wrap m-1 text-xl text-center  justify-center text-white">
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ml-auto">
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
                            <span className="mr-1 hover:text-gray-100">Contacts</span>
                        </button>
                            <ul className="transition-colors duration-200 dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">One project</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Two project</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Three project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
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
                            <span className="mr-1 hover:text-gray-100">Contacts</span>
                        </button>
                            <ul className="dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">One project</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Two project</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Three project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
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
                            <span className="mr-1 hover:text-gray-100">Contacts</span>
                        </button>
                            <ul className="dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">One project</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Two project</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Three project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
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
                            <span className="mr-1 hover:text-gray-100">Contacts</span>
                        </button>
                            <ul className="dropdown-menu absolute bg-gray-900 hidden pt-1">
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">One project</a></li>
                                <li className=""><a className="hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Two project</a></li>
                                <li className=""><a className="rounded-b hover:bg-teal-700 hover:text-white py-2 px-1 block whitespace-no-wrap" href="#">Three project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>      
        </div>
    )
}


export default Contacts

