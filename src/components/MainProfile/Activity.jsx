import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import ActivityModal from "./ActivityModal";
export default function Activity() {
  return (
    <div className="wrapper-analytic mt-2">
      <Card>
        <Card.Body>
          <Card.Title className="activity">
            <div className="activity-followers">
              <h2 className="mb-0">Activity</h2>
              <p>
                <a href="#" className="follower">
                  14 followers
                </a>
              </p>
            </div>
            <ActivityModal />
          </Card.Title>
          <Card.Subtitle className="second-section-p"></Card.Subtitle>
          <div className="profile-resourcs-section">
            <div className="activity-post">
              <h2 className="mb-0">You haven't posted lately</h2>
              <div>
                Recent posts you share or comment on will be displayed here.
              </div>
            </div>
          </div>
        </Card.Body>
        <ListGroup.Item className="text-center">
          <a href="#">
            Show all activity
            <BiRightArrowAlt className="icon" />
          </a>
        </ListGroup.Item>
      </Card>
    </div>
  );
}
