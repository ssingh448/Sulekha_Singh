import React from 'react';
import pdf1 from "../Reports_PDF/pdf1.pdf";

const Blog2 = (props) => {
    return(
        <>
            <span>fc</span>

            {/*<h1>{props.title}</h1>*/}
            {/*<p>{props.category}</p>*/}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>


            {/*<h1>{props.title}</h1>*/}
            <p>sfvLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>

            {/*<h1>{props.title}</h1>*/}
            <p>dbdLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>

            <object className='pdf' data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="1000px">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>

            <object className='pdf' data={pdf1} type="application/pdf" width="100%" height="1000px">
                <p>Alternative text - include a link <a href={pdf1}>to the PDF!</a></p>
            </object>

        </>
    )
}
export default Blog2;