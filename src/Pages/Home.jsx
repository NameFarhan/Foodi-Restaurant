import React from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <Menu/>
    <Testimonials/>
    <Services/>
    </>
  );
};

export default Home;
