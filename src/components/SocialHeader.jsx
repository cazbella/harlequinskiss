import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSpotify, faAmazon, faSoundcloud, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialHeader.css';

function SocialHeader() {
  return (
    <footer className="social-header">
      <Container>
        <div className="social-header-icons d-flex justify-content-center mb-3">
          <a href="https://www.facebook.com/CarolineBellaMusic/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://youtube.com/channel/UC5R6A1bZXoEraZ8sxJKvjpg?si=GP8jtkIRo8DfXP-V" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/carolinebella7music" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://open.spotify.com/artist/5ko9WbO7mp7lfabFD5Q6h2?si=HclYSg2YSKKUNowKqUsQyQ" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} className="social-icon" />
          </a>
          <a href="https://music.amazon.co.uk/artists/B0826XHDTR?ref=dm_sh_NpKQDA07SacCLyTilekEZ6A2w" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAmazon} className="social-icon" />
          </a>
          <a href="https://soundcloud.com/carolinebellamusic" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSoundcloud} className="social-icon" />
          </a>
          <a href="https://twitter.com/carolinebella7?s=11&t=klZ5nLjf4tCDJxnJE4123Q" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a href="mailto:cazbella@myyahoo.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default SocialHeader;

