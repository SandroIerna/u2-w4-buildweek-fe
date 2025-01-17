import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { Button } from "react-bootstrap";

function SecondModal() {
  const profileDetails = useSelector((state) => state.profile.profilename);
  const [lgShow, setLgShow] = useState(false);
  const [showImage, setShowImage] = useState(null);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", showImage);

    const options = {
      method: "POST",
      body: data,
    };

    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_PROD_URL}/users/${process.env.REACT_APP_PROFILE_ID}/picture`,
        options
      );
      if (response.ok) {
        console.log(response);
        window.location.reload();
        alert("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="modal-icon-upload text-white"
        onClick={() => setLgShow(true)}
      >
        <span>
          <MdOutlinePhotoCamera />
        </span>
        <span>Add Photo</span>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Profile Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="second-modal-body">
          <h2 className="text-center">
            {profileDetails.name}, help others recognize you!
          </h2>
          <div className="profile-image-modal">
            <img
              src={profileDetails.image}
              alt="profilepicture"
              className="uplaod-image"
            />
          </div>
          <div className="mt-5">
            <span>
              On LinkedIn, we require members to use their real identities, so
              take or upload a photo of yourself. Then crop, filter, and adjust
              it to perfection.
            </span>
          </div>
        </Modal.Body>
        <Modal.Body>
          <form onSubmit={uploadImage}>
            <input
              type="file"
              onChange={(e) => setShowImage(e.target.files[0])}
            />
            <Button
              variant="primary"
              onClick={handleClose2}
              type="submit"
              className="btn-3"
            >
              Upload photo
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SecondModal;
