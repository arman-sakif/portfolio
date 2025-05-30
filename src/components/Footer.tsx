import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/arman-sakif" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/arman-sakif-09/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <a href="https://github.com/arman-sakif/" target="_blank" rel="noreferrer">Arman Sakif Chowdhury</a>
    </footer>
  );
}

export default Footer;