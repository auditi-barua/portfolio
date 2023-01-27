import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <Skill />
            <About/>
            <Education />
            <Projects/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;