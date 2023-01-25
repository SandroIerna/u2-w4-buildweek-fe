import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { GoGlobe } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillBagDashFill } from "react-icons/bs";
import { FaPoll } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { BsChatText } from "react-icons/bs";
function ActivityModal() {
  const [show, setShow] = useState(false);
  const profileDetails = useSelector((state) => state.profile.profilename);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="post-btn">
        <Button className="btn-2" onClick={handleShow}>
          Start a post
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="activity-modal">
            <div className="activity-modal-image">
              <img src={profileDetails.image} alt="profilepicture" />
            </div>
            <div>
              <h4 className="mb-0">
                {profileDetails.name}
                {profileDetails.surname}
              </h4>
              <Button className="activity-modal-btn">
                <GoGlobe />
                Anyone
                <RiArrowDropDownLine />
              </Button>
            </div>
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="activity-text mt-3"
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="activity-modal-footer">
          <div className="activity-footer">
            <MdOutlineInsertPhoto className="activity-footer-icons" />
            <RxVideo className="activity-footer-icons" />
            <GrDocumentText className="activity-footer-icons" />
            <GiGlassCelebration className="activity-footer-icons" />
            <BsFillBagDashFill className="activity-footer-icons" />
            <FaPoll className="activity-footer-icons" />
            <Button className="icon-btn">...</Button>|
          </div>
          <div className="activity-footer">
            <div>
              <Button className="activity-footer-btn">
                <BsChatText />
                Anyone
              </Button>
            </div>
            <div>
              <Button className="btn-1" onClick={handleClose}>
                Save
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ActivityModal;