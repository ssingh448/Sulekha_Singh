import React from 'react';
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
// import pdf1 from "../Reports_PDF/pdf1.pdf";

const Features = (props) => {
    return(
        <>
            <section className='features top' id='features'>
                <div className='container'>
                    <div className='heading'>
                        <h4>MY EXPERTISE</h4>
                        <h1>Skills</h1>
                    </div>

                    {/*<div className='modal-content d_flex'>*/}
                    {/*    <div className='modal-img left'>*/}
                    {/*        <img src='' alt='' />*/}
                    {/*    </div>*/}
                    {/*    <div className='modal-text right'>*/}
                    {/*        <span>Featured - Design</span>*/}
                    {/*        <h1>{props.title}</h1>*/}
                    {/*        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>*/}
                    {/*        <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>*/}
                    {/*        */}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className='content gridd'>
                        {data.map((val, index) => {
                            return <Card key={index} image={val.image} title={val.title} desc={val.desc} skills ={val.skills} />
                        })}

                        {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>*/}
                    </div>
                </div>
            </section>
        </>
    )

}

export default Features;