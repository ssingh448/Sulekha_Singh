import React, { useState } from "react"


const Card = (props) => {

    return (
        <>

            <div className='box btn_shadow '>
                <div className='container f_flex'>
                    <div className='left top'>
                        <div className='img'>
                        <img src={require(`./image/${props.image}`)} alt='' />
                    </div>
                    </div>
                    <div className='right'>
                        <div className='category d_flex'>
                            <span>{props.category}</span>
                            <li>
                                <a href={props.link}><h3>Github</h3></a>
                            </li>


                        </div>
                        <div className='title'>
                            <h2>{props.title}</h2>
                            {/*<p>{props.image}</p>*/}
                            <p>{props.about}</p>
                            <p>"vnevjner"</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card