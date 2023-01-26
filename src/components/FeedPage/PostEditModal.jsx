import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { editPostAction, getPostsAction } from "../redux/actions";

const PostEditModal = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const postid = props.post._id;

  const changedPost = {
    text: text,
  };

  useEffect(() => {
    setText(props.post.text);
  }, [props.post]);

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editPostAction(postid, changedPost));
  };
  const [image, setImage] = useState(null);
  const postImage = async (e) => {
    const postimage = new FormData();

    postimage.append("post", image);

    const options = {
      method: "POST",
      body: postimage,
      headers: {},
    };

    try {
      let response = await fetch(
        `https://localhost:3001/post/${postid}`,
        options
      );
      if (response.ok) {
        console.log(response);
        dispatch(getPostsAction());
        alert("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              onSubmitHandler(e);
              props.close();
              postImage();
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                rows={5}
                value={text}
                onChange={(e) => onChangeHandler(e.target.value, setText)}
              />
            </Form.Group>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostEditModal;
