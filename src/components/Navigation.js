import { useState } from "react";

export default function NavTabs({ selectedNav, setHomeDisplay }) {
    return (
        <div className="navAll">
            <nav className="d-flex justify-content-around navbar navbar-expand-lg navbar-light">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-around " >
                    <ul className="navbar-nav collapse navbar-collapse" id="navbarNav">
                        <li className="nav-item active">
                            <button className="nav-item btn" onClick={() => setHomeDisplay('home')}>
                                Home
                            </button></li>
                        <li className="nav-item active">
                            <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('about')}>About Me</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('portfolio')}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('contact')}>Contact</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('resume')}>Resume</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}