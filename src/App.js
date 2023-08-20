import React from 'react';
import Header from "./Components/Head/Header";
import "./App.css";
import Home from "./Components/Hero/Home";
import Features from "./Components/Features/Features";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";


const App = (props) => {
  return (
      <>
        <Header />
        <Home />
        <Features />
        <Portfolio />
        <Footer/>

      </>
  )
};

export default App;