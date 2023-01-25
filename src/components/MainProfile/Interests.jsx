import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrCheckmark } from "react-icons/gr";
export default function Interest() {
  return (
    <div className="wrapper-analytic mt-2 mb-2">
      <Card>
        <Card.Body>
          <div className="interested-companies">
            <h2 className="mb-0">Interests</h2>
          </div>
          <div className="interest-btn">
            <Button>Companies</Button>
          </div>
        </Card.Body>
        <ListGroup>
          <div>
            <div className="interested-companies">
              <div className="companies-info mb-2">
                <div>
                  <img src="http://placekitten.com/200/200" alt="companies" />
                </div>
                <div className="company-name-follower">
                  <h3 className="mb-0">3Squared</h3>
                  2,389 follower
                  <Button className="btn-3">
                    <GrCheckmark />
                    Following
                  </Button>
                </div>
              </div>
              <div className="companies-info mb-2">
                <div>
                  <img src="http://placekitten.com/200/200" alt="companies" />
                </div>
                <div className="company-name-follower">
                  <h3 className="mb-0">PRA Health Sciences</h3>
                  460,389 follower
                  <Button className="btn-3">
                    <GrCheckmark />
                    Following
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <ListGroup.Item className="text-center">
            <a href="#">
              Show all 26 companies
              <BiRightArrowAlt className="icon" />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
