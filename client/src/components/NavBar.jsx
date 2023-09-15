import React, { useState } from 'react';
import "./navbar.css";
import { FaGithubSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
// import {SiGmail} from 'react-icons/si';

const NavBar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    return (
        <>
            <nav className='main-nav' id='navbar'>
                {/* first logo part */}
                <div className='logo'>
                    <h2>
                        <span>M</span>eet
                        <span>M</span>e
                    </h2>
                </div>

                {/* second nav part */}
                <div className={hamburgerMenu ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a style={{ fontSize: 20, fontWeight: 700, color: '#fff' }} href="#users">Online Users</a>
                        </li>
                        <li>
                            <a style={{ fontSize: 20, fontWeight: 700, color: '#fff' }} href="#about">About</a>
                        </li>
                        {/* <li>
                            <a  style={{fontSize:20, fontWeight:700, color:'white'}} href="#home">Home</a>
                        </li> */}
                        {/* <li>
                            <a  style={{fontSize:20, fontWeight:700, color:'white'}} href="#call">Call</a>
                        </li> */}
                    </ul>
                </div>

                {/* social media part */}
                <div className='social-media'>
                    <ul>
                        {/* <li>
                            <a href="https://www.instagram.com/Sakshi__jain/" target="_ins" className='instagram'>
                                <FaInstagramSquare />
                            </a>
                        </li> */}
                        <li>
                            <a href="https://github.com/Sakshijain12" target="_git" className='facebook'><FaGithubSquare /></a>
                        </li>
                        {/* <li>
                            <a href="mailto:jainsakshi2019@gmail.com" className='youtube'><SiGmail /></a>
                        </li> */}
                    </ul>

                    {/* hamburger menu start */}
                    <div className='hamburger-menu' onClick={() => { setHamburgerMenu(!hamburgerMenu) }}>
                        <a href="#navbar"><GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>

            {/* <section className='hero-section' id='home'>
                <p>Welcome to</p>
                <h1>Zkype VideoCalling</h1>
                <p style={{ fontWeight: 200, fontSize: 40 }}>call someone from your browser without signup or login</p>
            </section> */}
        </>
    );
};

export default NavBar;