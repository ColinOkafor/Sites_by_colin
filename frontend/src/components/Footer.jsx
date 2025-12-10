import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /><a href="+!3653362529"></a>
                <a href="https://www.facebook.com/colin.okafor.2025/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/colin-okafor-54aa95332/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://wa.me/13653362629" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                </a>
            </div>
            <hr />
            <p>&copy; 2025 sites by colin</p>
        </div>
    )
}

export default Footer