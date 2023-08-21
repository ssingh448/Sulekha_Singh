import React from "react"
import "./Home.css"
import sulekha from "../pic/sulekha.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
// import { Typewriter } from "react-simple-typewriter"


const Home = (props) => {
    return(
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>

                        <h3>WELCOME TO MY PROFILE</h3>

                        <h1>
                            <span>Sulekha Singh</span>
                        </h1>


                        {/*<h2>*/}
                        {/*    a <span>*/}
                        {/*        /!*coder*!/*/}
                        {/*        <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>*/}
                        {/*    </span>*/}
                        {/*</h2>*/}

                        <div className='para'>
                            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        </div>

                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={sulekha} alt='' />
                        </div>
                    </div>
                </div>
                <div className='hero_btn'>

                        <h4>FIND ME AT</h4>
                        <div className='button'>
                        <a href="mailto:sulekhasinghh@gmail.com?" >
                            <button className='btn_shadow'>
                                <i className='fas fa-envelope'></i>
                            </button>

                        </a>

                        <a href="https://github.com/ssingh448?tab=projects">
                            <button className='btn_shadow'>
                                <i className="fab fa-github"></i>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/sulekha-singh-08386865/">
                            <button className='btn_shadow'>
                                <i className='fab fa-linkedin-in'></i>
                            </button>
                        </a>

                    </div>
                    {/*<div className='col_1'>*/}
                    {/*    <h4>BEST SKILL ON</h4>*/}
                    {/*    <button className='btn_shadow'>*/}
                    {/*        <img src={skill1} alt='' />*/}
                    {/*    </button>*/}
                    {/*    <button className='btn_shadow'>*/}
                    {/*        <img src={skill2} alt='' />*/}
                    {/*    </button>*/}
                    {/*    <button className='btn_shadow'>*/}
                    {/*        <img src={require("../pic/skill1.png")} alt='' />*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>

    )
}




export default Home;