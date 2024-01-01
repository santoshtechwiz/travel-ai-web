import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import About from "../Components/About";

const HomePage = () => {
  return (
  
  <>
    <NavBar></NavBar>
    <About></About>
    <Footer></Footer>
  </>
  ); 
};

export default HomePage;
