import React, { useState } from "react"


const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>

            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={require(`./image/${props.image}`)} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>


                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    {/*<p>{props.image}</p>*/}
                    <p>{props.about}</p>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal modal-blog'>
                    <div onClick={toggleModal} className='overlay'></div>



                    <div className='modal-content'>

                        <div className='modal-img left'>
                            {props.content}
                        </div>
                        <div className='modal-text right'>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i className='fas fa-times'></i>
                            </button>

                        </div>
                    </div>
                </div>
                // <div className='modal'>
                //     <div onClick={toggleModal} className='overlay'></div>
                //     <div className='modal-content d_flex'>
                //         <div className='modal-img left'>
                //             <img src={props.image} alt='' />
                //         </div>
                //         <div className='modal-text right'>
                //         {/*    { props.category === "DEVELOPMENT" &&*/}
                //         {/*    <object className='pdf' data={pdf1} type="application/pdf" width="100%" height="500px">*/}
                //         {/*    <p>Alternative text - include a link <a href={pdf1}>to the PDF!</a></p>*/}
                //         {/*</object>}*/}
                //             <span>Featured - Design</span>
                //             <h1>{props.title}</h1>
                //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                //             <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                //             {/*<div className='button f_flex mtop'>*/}
                //             {/*    <button className='btn_shadow'>*/}
                //             {/*        LIKE THIS <i class='far fa-thumbs-up'></i>*/}
                //             {/*    </button>*/}
                //             {/*    <button className='btn_shadow'>*/}
                //             {/*        VIEW PROJECT<i class='fas fa-chevron-right'></i>*/}
                //             {/*    </button>*/}
                //             {/*</div>*/}
                //             <button className='close-modal btn_shadow' onClick={toggleModal}>
                //                 <i class='fas fa-times'></i>
                //             </button>
                //         </div>
                //     </div>
                // </div>
            )}
        </>
    )
}

export default Card