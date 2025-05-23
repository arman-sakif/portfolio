import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="My Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/arman-sakif" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arman-sakif-09/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Arman Sakif</h1>
          <p>Data Scientist | Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/arman-sakif" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arman-sakif-09/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
