import React, { useState } from "react"
import "./Header.css"
// import logo from "../pic/logo512.png"
import pdf1 from "../Reports_PDF/pdf1.pdf"
import Sulekha_Singh_Resume from "../Reports_PDF/Sulekha_Singh_Resume.pdf"

const Header = () => {
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // console.log(Mobile)


    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        {/*<li>*/}
                        <img src={require("../pic/sulekha_circle.png")} alt='' height='50px'/>
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <p>SULEKHA SINGH</p>*/}
                        {/*</li>*/}

                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#features'>Skills</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>
                            <li>
                                <a href={Sulekha_Singh_Resume} >resume</a>
                            </li>
                            {/*<li>*/}
                            {/*    <a href='#clients'>clients</a>*/}
                            {/*</li>*/}
                            <li>
                                <a href='#blog'>My Courses</a>
                            </li>
                            {/*<li>*/}
                            {/*    <a href='#contact'>contact</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <button className='home-btn'>BUY NOW</button>*/}
                            {/*</li>*/}
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>

            {/*<section className='demo'></section>*/}
        </>
    )
}

export default Header