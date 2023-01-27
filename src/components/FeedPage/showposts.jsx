import { getOtherProfile, getPostsAction } from "../redux/actions";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Postcard from "./postcards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Container, Spinner, Row } from "react-bootstrap";

const ShowPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.loading.loading);

  const [numToShow, setNumToShow] = useState(5);
  const newPosts = posts.slice(0, numToShow);

  const showMorePosts = (e) => {
    const num = 10;
    setNumToShow(numToShow + num);
  };

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <>
      <div>
        {loading && (
          <Row className="justify-content-center mb-3 mt-3">
            <Spinner animation="border" />
          </Row>
        )}
        {posts && newPosts.map((i) => <Postcard data={i} key={i._id} />)}

        <Row className="justify-content-center">
          <Button onClick={showMorePosts} variant="outline-primary">
            Show More
          </Button>
        </Row>
      </div>
    </>
  );
};

export default ShowPosts;
