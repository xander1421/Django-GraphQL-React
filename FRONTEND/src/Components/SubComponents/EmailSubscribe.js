import React from 'react'

function EmailSubscription(){
    return (
        <form className="flex-auto text-white h-20 w-60 p-2 rounded-lg">
            <h2>Subscribe to our NewsLetter</h2>
            <div className="flex border-b-4 border-pink-600 py-2 pt-4">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="email@example.com" aria-label="Full name"></input>
                <button className="flex-shrink-0 bg-teal-500 hover:bg-pink-700 border-teal-500 hover:border-pink-800 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Sign Up
                </button>
            </div>
        </form>

    )
}

export default EmailSubscription