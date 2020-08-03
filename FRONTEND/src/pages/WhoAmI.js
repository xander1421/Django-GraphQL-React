import React from "react";
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"


const MovieList = () => {
    const { loading, error, data } = useQuery(MOVIE_LIST_QUERY);
    
    // when query starts, loading will be true until the response come.
    // At this time this will be rendered on screen
    if (loading) return <div>Loading</div>
    
    // if response fail, this will be rendered
    if (error) return <div>Unexpected Error: {error.message}</div>

    //if query succeed, data will be available and render the data
    return(
        <div className="bg-gray-700 text-center text-gray-300 justify-center rounded-md overflow-hidden flex flex-wrap px-4 py-8 my-10 ml-16 p-4" >
            {data && data.movieList &&
                data.movieList.map(movie => (
                    <div className="relative border-b-4 border-black m-2 text-2xl text-center justify-center w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 transform transition duration-75 ease-in-out hover:bg-gray-800 hover:-translate-y-1 hover:text-white hover:scale-110 rounded" key={movie.slug}>
                        
                        <Link to={`/movie/${movie.slug}`}>
                        <img 
                            src={movie.posterUrl} 
                            alt={movie.name + " poster"} 
                            title={movie.name + " poster"}
                            style={{"display": "block"}}
                            className="m-auto mt-6"
                        />  
                        <div className="lg:px-6 lg:py-4 sm:px-2 sm:py-1 ">
                            <span className="font-semibold text-xs" >2008-Dec-19</span>
                            <div className="font-semibold text-lg lg:text-lg mb-2  ">{movie.name}</div>
                            <span className="container flex flex-box leading-tight text-xs text-center p-2 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                        </div>
                        <div className="relative">
                            <div className="flex-grow lg:px-6 sm:max-w-screen-sm">
                                <span className="outline-2-white hover:bg-gray-400 inline-block m-1 bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-pink-500">#photography</span>
                                <span className="outline-2-white hover:bg-gray-400 inline-block m-1 bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-pink-500">#travel</span>
                                <span className="outline-2-white hover:bg-gray-400 inline-block m-1 bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-pink-500">#winter</span>
                            </div>
                        </div>

                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList;

