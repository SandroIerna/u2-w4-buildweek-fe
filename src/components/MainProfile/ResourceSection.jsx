import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaSatelliteDish } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { BiRightArrowAlt } from "react-icons/bi";
export default function ResourceSection() {
  return (
    <div className="wrapper-analytic mt-2">
      <Card>
        <Card.Body>
          <Card.Title>
            <h2 className="mb-0">Resources</h2>
          </Card.Title>
          <Card.Subtitle className="second-section-p">
            <AiFillEye className="icon" />
            Private to you
          </Card.Subtitle>
          <div className="profile-resourcs-section">
            <div className="resource-mode mt-2">
              <div>
                <FaSatelliteDish className="icon" />
              </div>
              <div className="mb-2">
                <h2 className="d-flex mb-0">
                  Creator mode
                  <Button className="btn-4">Off</Button>
                </h2>
                Get discovered, showcase content on your profile, and get access
                to creator tools
              </div>
            </div>
            <div className="resource-mode-2">
              <div className="mt-3">
                <SlPeople className="icon" />
              </div>
              <div className="mt-3">
                <h2 className="mb-0">My network</h2>
                See and manage your connections and interests.
              </div>
            </div>
          </div>
        </Card.Body>
        <ListGroup.Item className="text-center">
          <a href="#">
            Show all 5 resources
            <BiRightArrowAlt className="icon" />
          </a>
        </ListGroup.Item>
      </Card>
    </div>
  );
}
