import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSpotify, faAmazon, faSoundcloud, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";


function Footer() {
  const iconStyle = {
    fontSize: '2rem',
    margin: '0 5px', // Reduce margin for smaller screens
    color: 'white',
  };

  // Spotify artist page link
  const spotifyLink = 'https://open.spotify.com/artist/5ko9WbO7mp7lfabFD5Q6h2?si=HclYSg2YSKKUNowKqUsQyQ';

  return (
    <footer className="bg-light text-dark py-4 footer">
      <Container>
        <div className="d-flex justify-content-center mb-3">
          <a href="https://www.facebook.com/CarolineBellaMusic/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" style={iconStyle} />
          </a>
          <a href="https://youtube.com/channel/UC5R6A1bZXoEraZ8sxJKvjpg?si=GP8jtkIRo8DfXP-V" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon" style={iconStyle} />
          </a>
          <a href="https://www.instagram.com/carolinebella7music" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" style={iconStyle} />
          </a>
          <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} className="icon" style={iconStyle} />
          </a>
          <a href="https://music.amazon.co.uk/artists/B0826XHDTR?ref=dm_sh_NpKQDA07SacCLyTilekEZ6A2w" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAmazon} className="icon" style={iconStyle} />
          </a>
          <a href="https://soundcloud.com/carolinebellamusic" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSoundcloud} className="icon" style={iconStyle} />
          </a>
          <a href="https://twitter.com/carolinebella7?s=11&t=klZ5nLjf4tCDJxnJE4123Q" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="icon" style={iconStyle} />
          </a>
          <a href="mailto:cazbella@myyahoo.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" style={iconStyle} />
          </a>
        </div>
        <p className="text-center text-muted mb-0 copyright">© 2024 C. B. Web Design</p>
      </Container>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => (
//   <footer className="footer">
//     <div className="container">
//       <p>Follow us on social media</p>
//       <ul className="social-links">
//         <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
//         <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
//         <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
//       </ul>
//     </div>
//   </footer>
// );

// export default Footer;
