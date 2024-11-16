import React from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <Menu/>
    <Testimonials/>
    </>
  );
};

export default Home;
