import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"
// import PDFViewer from 'pdf-viewer-reactjs'
// import pdf1 from "../Reports_PDF/pdf1.pdf"

const Blog = () => {
    return (
        <>
            <section className='Portfolio Blog' id='blog'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>VISIT MY ACADEMIC JOURNEY</h4>
                        <h1>My Courses</h1>
                    </div>

                    <div className='content grid'>
                        {BlogApi.map((value, index) => {
                            return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog