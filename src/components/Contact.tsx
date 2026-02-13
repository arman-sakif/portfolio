import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>CV/Resume</h1>
 
          <div className="button-group">
            <a href="https://arman-sakif.github.io/CV/" target="_blank" rel="noopener noreferrer">
              <Button variant="contained" size="large" className="download-button">CV</Button>
            </a>
            <a href="https://arman-sakif.github.io/Resume/" target="_blank" rel="noopener noreferrer">
              <Button variant="contained" size="large" className="download-button">Resume</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;