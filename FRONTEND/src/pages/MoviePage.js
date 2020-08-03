import React from "react";
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import gql from "graphql-tag";
import { withRouter } from 'react-router'


// Note the usage of argument.
// the exclamation mark makes the slug argument as required
// without it , argument will be optional
export const MOVIE_QUERY = gql`
    query movie($slug:String!){
        movie(slug:$slug){
            id, name, year, summary, posterUrl, slug
        }
    }
`


const MoviePage = (props) => {
    // uncomment to see which props are passed from router
    // console.log(props)

    // due to we make slug parameter dynamic in route component,
    // urlParameters will look like this { slug: 'slug-of-the-selected-movie' }
    const urlParameters = props.match.params

    const { loading, error, data } = useQuery(MOVIE_QUERY, { 
        variables:{slug:urlParameters.slug}
    });

    if (loading) return <div>Loading</div>
    if (error) return <div>Unexpected Error: {error.message}</div>
  
    return (
        <div className="text-white flex justify-center pt-10">
        <Link to="/" className="text-gray-700 text-center bg-gray-400 ml-10 mb-10" >Back</Link>
            {data && data.movie && 
                <div className="">
                    <img 
                        className=""
                        src={data.movie.posterUrl}
                        alt={data.movie.name + " poster"}
                        title={data.movie.name + " poster"} 
                    />
                    <div className="px-3 m-2">
                        <h1 className="text-4xl font-bold">{data.movie.name}</h1>
                        <p className="text-lg">Year: {data.movie.year}</p>
                        <br />
                        <p className="text-2xs">{data.movie.summary}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(MoviePage)


