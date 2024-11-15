import React from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Menu from "../Components/Menu";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <Menu/>
    </>
  );
};

export default Home;
