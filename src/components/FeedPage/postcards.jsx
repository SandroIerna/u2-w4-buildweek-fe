import {
  Container,
  Row,
  Col,
  Card,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import { deletePostAction } from "../redux/actions";
import { HiDotsHorizontal } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import PostEditModal from "./PostEditModal";

const Postcard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profilename);
  const userID = user._id;
  const formatDate = (d) => new Date(d).toISOString().substring(0, 10);
  if (props.data.user !== null) {
    return (
      <>
        <Container className="post-card">
          <Row>
            <div className="d-flex">
              <div className="comment-img-con">
                <img
                  src={props.data.user.image ? props.data.user.image : ""}
                  alt="user"
                />
              </div>
              <Col>
                <Row className="ml-1">
                  <div className="comment-header">
                    <span
                      style={{ fontSize: "0.8rem" }}
                      className="font-weight-bold"
                    >
                      <Link to={"/profile/" + props.data.user._id}>
                        {props.data.user.name} {props.data.user.surname}
                      </Link>
                    </span>
                  </div>
                  <div className="comment-subheader">
                    <span style={{ fontSize: "0.7rem" }}>
                      {props.data.user.title}
                    </span>
                  </div>
                </Row>
              </Col>
              <div className="dropdown-div">
                {userID === props.data.user._id ? (
                  <DropdownButton
                    variant=""
                    id="dropdown-basic-button"
                    className="dropdown-custom-col"
                    title={<HiDotsHorizontal />}
                  >
                    <Dropdown.Item
                      onClick={() => {
                        dispatch(deletePostAction(props.data._id));
                        alert("Post deleted!");
                      }}
                    >
                      <BsFillTrashFill /> Delete Post
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}>
                      <BsPencilFill /> Edit Post
                    </Dropdown.Item>
                  </DropdownButton>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Row>
          <div id="date" className="mt-3 text-muted">
            Posted on: {formatDate(props.data.createdAt)}
          </div>
          <div className="mt-2">
            <p>{props.data.text}</p>
            <Row className="justify-content-center">
              <span>
                <img
                  src={
                    props.data.image
                      ? props.data.image
                      : "https://picsum.photos/400/400"
                  }
                  className="comment-image img-fluid"
                />
              </span>
            </Row>
          </div>
          <hr />
          <div className="icons-div-comment">
            <div className="comment-icon btn">
              <span>
                <AiOutlineLike />
              </span>
              <span>Like</span>
            </div>
            <div className="comment-icon btn">
              <span>
                <BsChatText />
              </span>
              <span>Comment</span>
            </div>
            <div className="comment-icon btn">
              <span>
                <BiRepost />
              </span>
              <span>Repost</span>
            </div>
            <div className="comment-icon btn">
              <span>
                <TbSend />
              </span>
              <span>Send</span>
            </div>
          </div>
        </Container>
        <PostEditModal show={show} close={handleClose} post={props.data} />
      </>
    );
  }
};

export default Postcard;
