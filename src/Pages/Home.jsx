import React from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import FooterLinks from "../Components/FooterLinks";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <Menu/>
    <Testimonials/>
    <Services/>
    <Footer/>
    <FooterLinks/>
    </>
  );
};

export default Home;
