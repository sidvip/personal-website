/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Siddhartha Vibhu Pharswan"],
            startDelay: 300,
            typeSpeed: 80,
            backSpeed: 10,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <nav className="navbar sticky -top-5" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <span className="name-logo bounce">S</span>
                    <span className='name' ref={el}></span>
                </Link>

                {isMenuOpen ? <button className="fa fa-close navbar-burger" onClick={() => setMenuOpen(false)} /> :
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="web-nav" onClick={() => {
                        setMenuOpen(true);
                    }}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>}
            </div>

            <div id="web-nav" className={"navbar-menu " + (isMenuOpen ? 'is-active' : "")}>
                <div className="navbar-end flex gap-2">
                    <Link className="navbar-item" to='/'>
                        Home
                    </Link>

                    <Link className="navbar-item" to="/cv">
                        CV
                    </Link>

                    <Link className="navbar-item" to='/contact'>
                        Contact
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Portfolio
                        </a>

                        <div className="navbar-dropdown is-right is-boxed">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}