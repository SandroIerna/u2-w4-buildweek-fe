import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { GoGlobe } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillBagDashFill } from "react-icons/bs";
import { FaPoll } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { BsChatText } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { makePostAction } from "../redux/actions";

const AddingPost = () => {
  const user = useSelector((state) => state.profile.profilename);
  const userID = user._id;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [post, setPost] = useState("");

  const postToSend = {
    text: post,
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makePostAction(postToSend, userID));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        backgroundColor: "white",
        marginTop: "20px",
        borderRadius: "0.8rem",
        display: "flex",
      }}
    >
      <div className="post-card-homepage">
        <div>
          {" "}
          <img src={user.image} alt="profileimage" className="post-pic-main" />
        </div>
        <div>
          <Button
            onClick={handleShow}
            style={{
              borderRadius: "50px",
              height: "55px",
              width: "350px",
              marginTop: "10px",
              border: "1px lightgrey solid",
              backgroundColor: "white",
              color: "#5E5E5E",
              bordercolor: "5E5E5E",
            }}
          >
            What do you want to post?
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="activity-modal">
            <div className="activity-modal-image">
              <img src={user.image} alt="profilepicture" />
            </div>
            <div>
              <h4 className="mb-0">
                {user.name}
                {user.surname}
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
                onChange={(e) => onChangeHandler(e.target.value, setPost)}
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
              <Button
                className="btn-1"
                onClick={(e) => {
                  handleClose();
                  handleSubmit(e);
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddingPost;
