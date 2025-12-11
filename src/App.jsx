import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import Reveal from './components/Reveal';

function App() {
    return (
        <Background>
            <Navbar />
            <Reveal width="100%">
                <Hero />
            </Reveal>
            <Reveal width="100%">
                <About />
            </Reveal>
            <Reveal width="100%">
                <Skills />
            </Reveal>
            <Reveal width="100%">
                <Projects />
            </Reveal>
            <Reveal width="100%">
                <Contact />
            </Reveal>
        </Background>
    );
}

export default App;
