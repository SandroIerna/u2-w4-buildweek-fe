import { Row, Container, Col } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCog } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <img
            className="footer-logo"
            src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
            alt="LinkedIn Logo"
          />
        </Col>
      </Row>
      <Row className="footer-con">
        <Col md={3}>
          <ul className="footer-list">
            <li>About</li>
            <li>Community Guidelines</li>
            <li>Privacy & Terms</li>
            <li>Sales Solutions</li>
            <li>Safety Center</li>
          </ul>
        </Col>
        <Col md={2}>
          <ul className="footer-list">
            <li>Accessibility</li>
            <li>Careers</li>
            <li>Ad Choices</li>
            <li>Mobile</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul className="footer-list">
            <li>Talent Solutions</li>
            <li>Marketing Solutions</li>
            <li>Advertising</li>
            <li>Small Business</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul className="footer-list">
            <li>
              <Container>
                <Row>
                  <Col md={2}>
                  <span id="footer-icon"><AiFillQuestionCircle /></span>
                  </Col>
                  <Col md={9}>
                    Questions?
                    <br />
                    Visit our Help Center.
                  </Col>
                </Row>
              </Container>
            </li>
            <li>
              <Container>
                <Row>
                  <Col md={2}>
                    <span id="footer-icon"><FaCog /></span>
                  </Col>
                  <Col md={9}>
                    Manage your account and privacy.
                    <br />
                    Go to your settings.
                  </Col>
                </Row>
              </Container>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ marginLeft: "40px" }}>LinkedIn Corporation © 2022</Row>
    </Container>
  );
};

export default Footer;
