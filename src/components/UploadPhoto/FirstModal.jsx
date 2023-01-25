import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";
import SecondModal from "./SecondModal";

function FirstModal() {
  const profileDetails = useSelector((state) => state.profile.profilename);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="profile-picture">
        <img
          src={profileDetails.image}
          alt="profilepicture"
          onClick={() => setLgShow(true)}
        />
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="moda-body text-white">
          <Modal.Title id="example-modal-sizes-title-lg">
            Profile Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="moda-body">
          <div className="profile-image-modal">
            <img
              src={profileDetails.image}
              alt="profilepicture"
              className="uplaod-image"
            />
          </div>
          <div>
            <Button className="activity-footer-btn">
              <AiFillEye />
              Anyone
            </Button>
          </div>
        </Modal.Body>
        <Modal.Body className="modal-body-icon moda-body">
          <div className="icons-div-modal">
            <div className="modal-icon-upload text-white">
              <span>
                <BiPencil />
              </span>
              Edit
            </div>
            <SecondModal />
            <div className="modal-icon-upload text-white">
              <span>
                <BsImageFill />
              </span>
              <span>Frames</span>
            </div>
          </div>
          <div className="modal-icon-upload text-white">
            <span>
              <AiFillDelete />
            </span>
            <span>Delete</span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FirstModal;
