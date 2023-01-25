import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const EachProfile = ({ profile }) => {
  return (
    <>
      <Container className="d-flex">
        <Row>
          <Col className="my-2" style={{ fontWeight: "bold" }}>
            <BiSearch className="mr-4" />
            <Link to={"/profile/" + profile._id}>{profile.name} {profile.surname}</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EachProfile;
