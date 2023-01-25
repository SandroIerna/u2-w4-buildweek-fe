import React from "react";
import { Card, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
export default function SkillsComponent() {
  return (
    <div className="wrapper-analytic mt-2">
      <Card>
        <Card.Body>
          <Card.Title className="activity">
            <div className="activity-followers">
              <h2 className="mb-0">Skills</h2>
            </div>
            <div className="experience-add">
              <div>
                <Button className="btn-2">Demonstrate skills</Button>
              </div>
              <div>
                <AiOutlinePlus className="experice-icon" />
              </div>
              <div>
                <BiPencil className="experice-icon" />
              </div>
            </div>
          </Card.Title>
          <div className="skills">
            <div className="skill-work">
              <h3>Project Management</h3>
            </div>
            <div className="skill-work">
              <h3>Business Development</h3>
            </div>
            <div>
              <h3>SAP Seccessfactors</h3>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
