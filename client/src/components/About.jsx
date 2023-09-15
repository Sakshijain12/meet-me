import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='About' id='about'>
            <div>
                <h1>About the Project</h1>

                <p>You can call any other person using the website by sharing your unique ID with them</p>
                <p>Also talk to various random online users and make new friends</p>
                <footer className="footer">


                    <span>Sakshi Jain &copy;  All right reserved {new Date().getFullYear()}</span>
                </footer>
            </div>
        </div>
    )
}

export default About;