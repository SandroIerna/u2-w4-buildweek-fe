import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
const PeopleCards = (props) => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            {" "}
            <img
              className="people-icon my-auto"
              src={props.image ? props.image : "https://via.placeholder.com/50"}
              alt=""
            />
          </Col>
          <Col md={10}>
            <Container className="d-flex flex-column">
              <Container className="peopleCard">
                  <div className="title-text">
                    <Link to={"/profile/" + props.userid}><span id="name-text">{props.name} • 1st</span></Link>
                  </div>
                  <div className="location-text"> {props.location}</div>
              </Container>
            </Container>
          </Col>
          <Button
            id="people-btn"
            className="my-auto mx-auto"
            variant="outline-secondary"
          >
            <span id="btn-icon">
              <IoIosPersonAdd />
            </span>
            Connect
          </Button>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default PeopleCards;
