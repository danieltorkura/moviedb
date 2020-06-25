import React from 'react'
import Result from './Result'

const Results = ({ movies }) => {
    // console.log(`Movies : ${movies}`)
    // console.log(JSON.parse(movies))
    return (

        <section className='results'>
            {/* {movies.map((result) => {
                console.log(result)
                return (<Result result={result} />)
            }

            )} */}
        </section>

    )
}

export default Results
