import { Container, Row, Col, Button } from "react-bootstrap";
import ShowPosts from "./showposts";
import Footer from "../Footer";
import MainPageProfile from "../HomeSideBar";
import RightHompageSidebar from "../RightHompageSidebar";
import AddingPost from "./AddingPost";
import { HiRefresh } from "react-icons/hi";
import { getPostsAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Mainfeed = () => {
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={2}>
            <MainPageProfile />
        </Col>
        <Col md={4} className="mx-5">
          <AddingPost />
          <div
            id="refresh"
            onClick={() => {
              dispatch(getPostsAction());
            }}
          >
            <HiRefresh /> Refresh Comments
          </div>
          <ShowPosts />
          <Row className="justify-content-center">
            <button id="up-btn" type="button" onClick={scrollToTop}>
              <BsFillArrowUpCircleFill />
            </button>
          </Row>
        </Col>
        <Col md={2}>
          <RightHompageSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Mainfeed;
