import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold p-1 text-teal-500">
                Categories
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-lygo_ping p-2 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-lygo_ping p-2 border-b block"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu