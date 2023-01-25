import { Container, Card, Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperienceAction, editExperienceAction, getExperienceEdit } from "../redux/actions";
import { BiPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import EditModal from "./EditExperienceModal";

const ExperienceCard = (props) => {
  const startdate = props.data.startDate;
  const enddate = props.data.endDate;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profilename);
  const userID = user._id;
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeModal = () => setModal(false)
  const showModal = () => setModal(true)

  const [details, setDetails] = useState([]);

  const formatDate = (d) => new Date(d).toISOString().substring(0, 10);

  useEffect(() => {}, []);

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Body>
            <p>
              <span className="font-weight-bold" style={{ fontSize: "25px" }}>
                {props.data.role}
                {user.username === props.data.username ? (
                  <BiPencil onClick={() => {
                    showModal()
                    dispatch(getExperienceEdit(props.data._id, userID))
                  }} className="experice-icon" />
                ) : (
                  ""
                )}
                <br />
              </span>
              <span style={{ fontSize: "18px" }}>
                {props.data.company} | {props.data.area}
              </span>
              <br />
              {formatDate(startdate)} to{" "}
              {props.data.endDate ? formatDate(enddate) : "present"}
              <br />
            </p>
            <hr />
            <p>{props.data.description}</p>
          </Card.Body>
          <Card.Footer>
            {user.username === props.data.username ? (
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(deleteExperienceAction(props.data._id, userID));
                }}
              >
                Remove
              </Button>
            ) : (
              ""
            )}
          </Card.Footer>
        </Card>
      </Container>

      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* role, company, startDate, endDate, description, area */}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              <Form.Group>
                <Form.Label>What was your role?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Technical Manager, Retail Assistant, etc."
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Microsoft, Google, McDonald's..."
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Where did you work? Country, city name etc"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  End Date (Leave blank if you still work here)
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What were your duties?"
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
        <EditModal show={modal} hide={closeModal} />
      </>
    </>
  );
};

export default ExperienceCard;
