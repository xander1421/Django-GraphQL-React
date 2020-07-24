import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import gql from "graphql-tag";


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

const MovieList = () => {
    const {loading, error, data}
}
function ProductCard(props){
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div 
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageUrl}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/products/${props.product.id}`}>
                        { props.product.name }
                    </Link>    
                </h3>
                <div className="font-bold mb-3">
                    $ { props.product.price }
                </div>
                <div className="mb-3">
                    { props.product.description }
                </div>
                <Link 
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard