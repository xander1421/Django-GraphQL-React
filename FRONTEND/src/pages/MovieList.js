import React from "react";
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"

import gql from "graphql-tag";



// our first query will requests all movies
// with only given fields
// note the usage of gql with 'jsvascript string literal'
export const MOVIE_LIST_QUERY = gql`
    query movieList{
        movieList{
            name, posterUrl, slug, year
        }
    }
`

const MovieList = () => {
    const { loading, error, data } = useQuery(MOVIE_LIST_QUERY);
    
    // when query starts, loading will be true until the response come.
    // At this time this will be rendered on screen
    if (loading) return <div>Loading</div>
    
    // if response fail, this will be rendered
    if (error) return <div>Unexpected Error: {error.message}</div>

    //if query succeed, data will be available and render the data
    return(
        <div className="text-center text-teal-500 container justify-center rounded-md overflow-hidden flex flex-wrap px-4 py-8 max-w-full my-10" >
            {data && data.movieList &&
                data.movieList.map(movie => (
                    <div class=" m-2 text-2xl text-center  justify-center sm:m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 transform transition duration-75 ease-in-out hover:bg-teal-700 hover:-translate-y-1 hover:text-white hover:scale-110 rounded  hover:shadow-lg " key={movie.slug}>
                        <Link to={`/movie/${movie.slug}`}>
                        <img 
                            src={movie.posterUrl} 
                            alt={movie.name + " poster"} 
                            title={movie.name + " poster"}
                            style={{"display": "block"}}
                            className="m-auto mt-6"
                        />  
                        <div className="px-6 py-4">
                            <span className="font-semibold text-xs" >2008-Dec-19</span>
                            <div className="font-semibold text-2xl mb-2">{movie.name}</div>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block m-1 bg-white rounded-full px-3 py-1 text-sm font-semibold text-teal-900">#photography</span>
                            <span className="inline-block m-1 bg-white rounded-full px-3 py-1 text-sm font-semibold text-teal-900">#travel</span>
                            <span className="inline-block m-1 bg-white rounded-full px-3 py-1 text-sm font-semibold text-teal-900">#winter</span>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList;

