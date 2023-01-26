import React from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  ListGroup,
  Container,
  Row,
} from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil, BiBuildings } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getExperienceAction } from "../redux/actions";
import { postExperienceAction } from "../redux/actions";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const dispatch = useDispatch();
  const [show, setToShow] = useState(false);
  const [showModal, setModal] = useState(false);
  const user = useSelector((state) => state.profile.profilename);
  const userID = user._id;
  const experiences = useSelector((state) => state.profile.experience);

  useEffect(
    () => {
      dispatch(getExperienceAction(userID));
      setTimeout(() => {
        setToShow(true);
      }, 300);
    },
    [userID],
    [experiences]
  );

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    user_id: userID,
  });

  const onChangeHandler = (value, fieldToSet) => {
    setExperience({
      ...experience,
      [fieldToSet]: value,
    });
  };

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const handleSubmit = (e) => {
    dispatch(postExperienceAction(experience, userID));
    e.preventDefault();
    setTimeout(() => {
      handleClose();
    }, 300);
  };

  return (
    <div className="wrapper-analytic mt-2">
      <Card>
        <Card.Body>
          <Card.Title className="activity">
            <div className="activity-followers">
              <h2 className="mb-0">Experience</h2>
            </div>
            <div className="experience-add">
              <div>
                <AiOutlinePlus onClick={handleShow} className="experice-icon" />
              </div>
            </div>
          </Card.Title>
          <div className="experience-note">
            <Row>
              <div className="experience">
                <BiBuildings className="experice-icon" />
              </div>
            </Row>

            <Container fluid>
              <ListGroup variant="flush">
                {experiences &&
                  experiences.length > 0 &&
                  experiences.map((i) => (
                    <ExperienceCard data={i} id={i._id} key={i._id} />
                  ))}
              </ListGroup>
              {/* <h2 className="mb-0">Junior Business Analyst</h2>
              <div>JAY DEE LOGISTICS LTD.FULL-TIME</div> */}
            </Container>
          </div>
        </Card.Body>
      </Card>

      <>
        <Modal
          show={showModal}
          onHide={handleClose}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* role, company, startDate, endDate, description, area */}
            <Form
              onSubmit={(e) => {
                handleClose();
                handleSubmit(e);
              }}
            >
              <Form.Group>
                <Form.Label>What was your role?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Technical Manager, Retail Assistant, etc."
                  onChange={(e) => onChangeHandler(e.target.value, "role")}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Microsoft, Google, McDonald's..."
                  onChange={(e) => onChangeHandler(e.target.value, "company")}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where did you work? Country, city name etc"
                  onChange={(e) => onChangeHandler(e.target.value, "area")}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => onChangeHandler(e.target.value, "startDate")}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  End Date (Leave blank if you still work here)
                </Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => onChangeHandler(e.target.value, "endDate")}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What were your duties?"
                  onChange={(e) =>
                    onChangeHandler(e.target.value, "description")
                  }
                />
                <hr />
                <div className="mt-3 d-flex flex-row-reverse">
                  <Button
                    onClick={handleClose}
                    variant="secondary"
                    className="ml-2"
                  >
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
