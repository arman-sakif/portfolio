import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
  <div id="contact">
    <div className="items-container">
      <div className="contact_wrapper">
        <h1>CV/Resume</h1>
        <p>Last Updated: May 23, 2025</p>
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
