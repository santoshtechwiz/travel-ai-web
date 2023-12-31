import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AboutComponent from "../Components/AboutComponent";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
  
  <>
    <NavBar></NavBar>
    <AboutComponent></AboutComponent>
    <Footer></Footer>
  </>
  ); 
};

export default AboutPage;
