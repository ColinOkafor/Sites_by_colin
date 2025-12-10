import React from 'react';
import BannerImage from '../assets/background-image.png';
import ProfileImage from '../assets/me.jpg'; // add your profile image
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${BannerImage})` }}
            >
                <div className="overlay"></div>
                <h1 className="bannerTitle">Welcome to My World</h1>
            </div>

            <div className="aboutBottom">
                <img src={ProfileImage} alt="Profile" className="profileImage" />
                <h1>About Me</h1>
                <p>
                    Hey there! My name is Colin, and I’m a dedicated student actively sharpening my web development skills while gaining real‑world experience to grow my career.
                </p>
                <blockquote className="highlight">
                    “Let’s collaborate to build something meaningful and help each other grow in our careers.”
                </blockquote>
                <p>
                    I know firsthand the challenges that small business owners face, and that’s why I’m passionate about helping them succeed. By creating fast, scalable, and mobile‑friendly websites, I can give your business the online presence it deserves — at a negotiable price that works for you.
                </p>
                <button className="ctaButton">Let’s Connect</button>
            </div>
        </div>
    );
}

export default About;