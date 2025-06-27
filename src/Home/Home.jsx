import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skill/Skill';
import Projects from '../Projects/Projects';
import ContactInfo from '../Content/Content';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;