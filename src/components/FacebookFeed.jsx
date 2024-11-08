import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FacebookFeed = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="fb-page"
            data-href="https://www.facebook.com/harlequinskiss"
            data-tabs="timeline"
            data-width="500"  // Adjust width as needed
            data-height="600" // Adjust height as needed
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/harlequinskiss" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/harlequinskiss">Harlequin's Kiss</a>
            </blockquote>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FacebookFeed;
