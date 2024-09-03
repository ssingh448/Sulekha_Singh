import React from "react"

const Card = (props) => {
    // const skill = this.props.skills
    return (
        <>
            <div className='box btn_shadow f_flex'>
                <div className='modal-img leftt'>
                    <p> {props.title} </p>
                    {/*<img src={props.image} alt='' />*/}
                </div>
                <div className='modal-text rightt'>
                    {/*<span>Featured - Design</span>*/}
                    {/*var skill = {props.skills}*/}
                    <h3>{props.skills}</h3>
                    {/*<h2> {props.skills?.map(e => {*/}
                    {/*    return e*/}
                    {/*    })}*/}
                    {/*</h2>*/}
                    {/*<h2>{props.skills}</h2>*/}
                    {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>*/}
                    {/*<p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>*/}

                </div>
                {/*<img src={props.image} alt='' />*/}
                {/*<h2>{props.title}</h2>*/}
                {/*<p>{props.desc}</p>*/}
                {/*<a href='/'>*/}
                {/*    <i className='fas fa-arrow-right'></i>*/}
                {/*</a>*/}
            </div>
        </>
    )
}

export default Card