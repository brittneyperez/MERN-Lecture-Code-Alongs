import React from 'react'

const DisplayAll = ({ movieList }) => {
    return (
        <div className='mt-4'>
            <h1>All Movies</h1>
            {
                movieList.map((movie, i) => {
                    return (
                        <ul key={i}>
                            <li>
                                <strong><em>{ movie.title }</em> - { movie.year }</strong> | { movie.genre }
                            </li>
                        </ul> 
                    )
                })
            }
        </div>
    )
}

export default DisplayAll