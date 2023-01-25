import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiPencil } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_PROFILE } from "../redux/actions";
import { updateProfile } from "../redux/actions";

function ModalComponent() {
  const editProfile = useSelector((state) => state.profile.profilename);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(``);
  const [surname, setSurname] = useState(``);
  const [area, setArea] = useState(``);
  const [email, setEmail] = useState(``);
  const [bio, setBio] = useState(``);
  const [title, setTitle] = useState(``);
  const [image, setImage] = useState(``);
  const changeVaules = {
    name: name,
    surname: surname,
    email: email,
    bio: bio,
    title: title,
    area: area,
    image: image,
  };

  useEffect(() => {
    setName(editProfile.name);
    setTitle(editProfile.title);
    setEmail(editProfile.email);
    setImage(editProfile.image);
    setBio(editProfile.bio);
    setArea(editProfile.area);
    setSurname(editProfile.surname);
  }, [editProfile]);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_PROFILE,
      payload: {
        name: name,
        surname: surname,
        email: email,
        bio: bio,
        title: title,
        area: area,
        image: image,
      },
    });
    dispatch(updateProfile(changeVaules));
    handleClose();
  };

  return (
    <>
      <div>
        {" "}
        <BiPencil
          variant="primary"
          onClick={handleShow}
          className="experice-icon"
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        * Indicates required
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => onChangeHandler(e.target.value, setName)}
              />
              <Form.Label>Surname*</Form.Label>
              <Form.Control
                type="text"
                required
                value={surname}
                onChange={(e) => onChangeHandler(e.target.value, setSurname)}
              />
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => onChangeHandler(e.target.value, setEmail)}
              />
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                required
                value={title}
                onChange={(e) => onChangeHandler(e.target.value, setTitle)}
              />
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                required
                value={area}
                onChange={(e) => onChangeHandler(e.target.value, setArea)}
              />
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                value={bio}
                onChange={(e) => onChangeHandler(e.target.value, setBio)}
              />
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => onChangeHandler(e.target.value, setImage)}
              />
            </Form.Group>
            Name pronunciation
            <p>! This can only be added using our mobile app</p>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Headlines</Form.Label>
              <Form.Control type="text" />
              <p></p>
              <h4>Current position</h4>

              <Form.Label>Postion</Form.Label>
              <Form.Control type="text" />
              <div className="mt-3 d-flex">
                <AiOutlinePlus className="experice-icon" />
                <a href="#">
                  <h3>Add new position</h3>
                </a>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmitHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;