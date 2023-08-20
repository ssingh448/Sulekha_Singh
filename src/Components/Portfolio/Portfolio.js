import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"


const Portfolio = () => {
    return (
        <>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>LIST OF PROJECTS WHICH I HAVE WORKED ON</h4>
                        <h1>My Portfolio</h1>
                    </div>

                    <div className='content grid'>

                        {Portfolio_data.map((value, index) => {
                            return <Card key={index} image={value.image} category={value.category} title={value.title} about = {value.about} content = {value.content} />
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio