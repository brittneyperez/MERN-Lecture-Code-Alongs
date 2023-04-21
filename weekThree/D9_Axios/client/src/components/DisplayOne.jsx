import React from "react";

const Shrek = ({oneMovie}) => {
    return (
        <div className="mt-4">
            <h1>Display One Component: Shrek</h1>
            {
                oneMovie.filter(movie => movie.title === "Shrek").map((movie, i) => {
                    return (
                        <div key={i}>
                            <h3><strong><em>{ movie.title }</em></strong></h3>
                            <p><strong>{ movie.year }</strong> | { movie.genre }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shrek