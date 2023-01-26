import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { editExperienceAction, getExperienceAction } from "../redux/actions";
const EditModal = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.profile.toEdit);

  const [role, setRole] = useState(``);
  const [company, setCompany] = useState(``);
  const [area, setArea] = useState(``);
  const [startDate, setStartDate] = useState(``);
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState(``);

  const changeValues = {
    role: role,
    company: company,
    area: area,
    startDate: startDate,
    endDate: endDate,
    description: description,
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  useEffect(() => {
    setRole(post.role);
    setCompany(post.company);
    setArea(post.area);
    setStartDate(post.startDate);
    setEndDate(post.endDate);
    setDescription(post.description);
  }, [post]);

  //   const formatDate = (d) => new Date(d).toISOString().substring(0, 10);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editExperienceAction(post._id, post.user_id, changeValues));
  };

  return (
    <Modal
      show={props.show}
      onHide={props.hide}
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
            onSubmitHandler(e);
            props.hide();
          }}
        >
          <Form.Group>
            <Form.Label>What was your role?</Form.Label>
            <Form.Control
              value={role}
              onChange={(e) => onChangeHandler(e.target.value, setRole)}
              type="text"
              placeholder="Technical Manager, Retail Assistant, etc."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              value={company}
              onChange={(e) => onChangeHandler(e.target.value, setCompany)}
              type="text"
              placeholder="Microsoft, Google, McDonald's..."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={area}
              onChange={(e) => onChangeHandler(e.target.value, setArea)}
              type="text"
              placeholder="Where did you work? Country, city name etc"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              //   value={formatDate(startDate)}
              onChange={(e) => onChangeHandler(e.target.value, setStartDate)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              End Date (Leave blank if you still work here)
            </Form.Label>
            <Form.Control
              type="date"
              //   value={endDate ? formatDate(endDate) : ""}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>

            <Form.Control
              value={description}
              onChange={(e) => onChangeHandler(e.target.value, setDescription)}
              as="textarea"
              rows={3}
              placeholder="What were your duties?"
            />
            <hr />
            <div className="mt-3 d-flex flex-row-reverse">
              <Button onClick={props.hide} variant="secondary" className="ml-2">
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
  );
};

export default EditModal;
