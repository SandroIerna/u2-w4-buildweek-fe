import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { AiFillEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
function JobPreferencesModal() {
  const [show, setShow] = useState(false);
  const profileDetails = useSelector((state) => state.profile.profilename);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="open-to-work mt-3" onClick={handleShow}>
        <div className="mt-2 ">
          <h3 className="mb-0">Open to work</h3>
          Business Analyst, Junior Business Analyst and Business Development
          Manager roles
          <a href="#">
            <p>See all details</p>{" "}
          </a>
        </div>

        <div>
          <BiPencil className="icon" />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job preferences</Modal.Title>
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
              <p className="mb-0">Open to work</p>
            </div>
          </div>
          <div>
            <h3>Job titles</h3>
            <p> {profileDetails.title}</p>
          </div>
          <div>
            <h3>Job locations(On-site)</h3>
            <p> {profileDetails.area}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="job-footer">
          <AiFillEye />
          Only recruiters
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JobPreferencesModal;
