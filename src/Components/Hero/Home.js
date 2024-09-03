import React from "react"
import "./Home.css"
import sulekha from "../pic/sulekha.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
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
                            <p>
                                Welcome to my digital profile! I am an enthusiastic and dedicated individual currently pursuing a Master's degree in Computer Science at the Georgia Institute of Technology. My academic journey revolves around a passion for innovation, data-driven insights, and the dynamic world of computer science.  The program's rigorous curriculum has equipped me with a solid foundation in algorithms, artificial intelligence, data science, and software engineering, among other critical areas.
                            </p>
                            <p>
                                My current role as VDC/ Innovation Engineer in Construction has empowered me to effect transformative change by implementing cutting-edge technological advancements. My efforts revolve around enhancing construction efficiency and productivity, leveraging data-driven insights, optimizing project timelines through data engineering and the strategic deployment of AI and machine learning solutions.
                            </p>
                            <p>
                                Looking ahead, I am eager to collaborate with like-minded professionals and engage in projects that can positively impact society and industries.
                            </p>
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

                        <a href="https://github.com/ssingh448?tab=repositories">
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