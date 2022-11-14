import React, { useState } from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/contact';
import Resume from '../pages/Resume';
import Navigation from './Navigation';
export default function NavContainer() {
    const [selectedNav, setSelectedNav] = useState('home');
    function renderEl() {
        if (selectedNav === 'home') {
            return <Home />
        }
        if (selectedNav === 'about') {
            return <About />
        }
        if (selectedNav === 'portfolio') {
            return <Portfolio />
        }
        if (selectedNav === 'contact') {
            return <Contact />
        }
        if (selectedNav === 'resume') {
            return <Resume />
        }
    };
    const setHomeDisplay = (navEl) => setSelectedNav(navEl);
    return (
        <div>
            <Navigation selectedNav={selectedNav} setHomeDisplay={setHomeDisplay} />
            {renderEl()}
        </div>
    )
}