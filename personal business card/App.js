import React from 'react';
import Footer from './components/Footer.js';
import Identification from './components/Identification.js';
import AboutMe from './components/AboutMe.js';

export default function App() {
    return (
        <main>
            <Identification />
            <AboutMe />
            <Footer />
        </main>
    )
}