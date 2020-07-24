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
            name, posterUrl, slug
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
        <div className="text-white w-full lg:max-w-full lg:flex mx-auto px-4 py-8 max-w-xl my-20" >
            {data && data.movieList &&
                data.movieList.map(movie => (
                    <div className="bg-gray-900 p-4" key={movie.slug}>
                        <Link to={`/movie/${movie.slug}`}>
                            <img 
                                className="shadow h-48 lg:h-auto lg:auto  bg-cover overflow-hidden"
                                src={movie.posterUrl} 
                                alt={movie.name + " poster"} 
                                title={movie.name + " poster"}
                                style={{"display": "block"}}
                            />
                            <p>{movie.name}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AboutPage;

