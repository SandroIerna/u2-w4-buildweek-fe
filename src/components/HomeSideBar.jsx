import React, { useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../CssFolder/homepage.css";
import { getProfile } from "../components/redux/actions";
import { GiGoldBar } from "react-icons/gi";
import { RiBookmarkFill } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MainPageProfile() {
  const profileDetails = useSelector((state) => state.profile.profilename);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  console.log(profileDetails);
  return (
    <>
      <Card className="profile-card-container">
        <div className="homepage-profile">
          <Link to="/profile/me" className="name-link">
            <img
              src={profileDetails.image}
              alt="profileimage"
              className="homepage-pic"
            />
          </Link>
        </div>
        <Card.Body>
          <div className="text-center mt-2">
            <Link to="/profile/me" className="name-link">
              <h3 className="homeprofile-name mb-1">
                {profileDetails.name}
                {profileDetails.surname}
              </h3>
            </Link>
            <p className="mb-0">{profileDetails.title}</p>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div>
              <div className="d-flex justify-content-between">
                <span className="connection">Connections</span>
                <a>
                  <span className="connection-number">15</span>
                </a>
              </div>
              <span className="grow-network mb-0">Grow your network</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3 className="homepage-h3">Access exclusive tools & insights</h3>
            <div className="d-flex">
              <GiGoldBar className="icons gold" />
              <a href="#">
                <span className="underline">
                  Get Hired Fast, try
                  <br />
                  Premium Free
                </span>
              </a>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="my-items">
            <span>
              <RiBookmarkFill />
            </span>
            <span>My items</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className="profile-card-2 mt-2">
        <Card.Body>
          <Card.Text>
            <a>
              <span className="discover-span">Group</span>
            </a>
            <div className="discover-event">
              <a>
                <span className="discover-span">Events</span>
                <span>
                  <Button className="discover-btn">
                    {" "}
                    <BsPlus className="icons" />
                  </Button>
                </span>
              </a>
            </div>

            <span className="discover-span">Followed Hashtags</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">Discover more</Card.Footer>
      </Card>
    </>
  );
}
