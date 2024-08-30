import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import {useEffect} from "react"
import {useState} from "react"




const Portfolio = () => {

    // const cat = "application";
    //
    // const filteredUsers = Portfolio_data.filter((user) =>
    //     user.category.toLowerCase().match("application")
    // );

    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(Portfolio_data);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = Portfolio_data.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>LIST OF PROJECTS WHICH I HAVE WORKED ON</h4>
                        <h1>My Portfolio</h1>
                    </div>

                    <div className='hero_btn'>

                        <div className='navlink'>

                            <a href="/#" active={filter === ''} onClick={() => setFilter('')}>
                                <button className='btn_shadow'>
                                    <h2> ALL </h2>
                                    {/*<i className="fab fa-github"></i>*/}
                                </button>
                            </a>

                            <a href="/#portfolio" active={filter === 'FIGMA'} onClick={() => setFilter('FIGMA')}>
                            <button className='btn_shadow'>
                                <h2> FIGMA </h2>
                                {/*<i className="fab fa-github"></i>*/}
                            </button>
                        </a>

                            <a href="/#portfolio" active={filter === 'APPLICATION'} onClick={() => setFilter('APPLICATION')}>
                                <button className='btn_shadow'>
                                    <h2> APPLICATION </h2>
                                    {/*<i className="fab fa-github"></i>*/}
                                </button>
                            </a>

                            <a href="/#portfolio" active={filter === 'PHOTOSHOP'} onClick={() => setFilter('PHOTOSHOP')}>
                                <button className='btn_shadow'>
                                    <h2> PHOTOSHOP </h2>
                                    {/*<i className="fab fa-github"></i>*/}
                                </button>
                            </a>

                            <a href="/#portfolio" active={filter === 'WEB DESIGN'} onClick={() => setFilter('WEB DESIGN')}>
                                <button className='btn_shadow'>
                                    <h2> WEB DESIGN </h2>
                                    {/*<i className="fab fa-github"></i>*/}
                                </button>
                            </a>



                        </div>
                    </div>

                    <div className='heading text-center '>
                        <h4></h4>
                    </div>

                    <div className='content grid'>

                        {/*{projects.map(item => item.filtered === true ? (*/}
                        {/*    <span key={item.title}>*/}
                        {/*        {item.title}*/}
                        {/*    </span>*/}
                        {/*) : '')}*/}

                        {projects.map(value => value.filtered === true ? (
                            <Card key={value.title} image={value.image} category={value.category} title={value.title}
                                  about={value.about} content={value.content}/>
                        ) : null)}

                        {/*{projects.map((value , index) => {*/}
                        {/*    return <Card key={index} image={value.image} category={value.category} title={value.title} about = {value.about} content = {value.content} />*/}
                        {/*})}*/}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
