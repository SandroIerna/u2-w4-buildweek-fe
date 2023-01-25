import { AiFillEye } from "react-icons/ai";
import React from "react";
import { Button, Card } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ImAddressBook } from "react-icons/im";
import SuggestedModal from "./SuggestedModal";

export default function SecondSection() {
  const now = 30;
  return (
    <div className="wrapper mt-2">
      <Card>
        <Card.Body>
          <div>
            <h4 className="mb-0">Suggested for you</h4>
            <p className="second-section-p">
              <AiFillEye className="icon" />
              Private to you
            </p>
            <div>Intermediate</div>
            <div className="second-section-progressive">
              <ProgressBar now={now} label={`${now}%`} />
            </div>
            <div>
              Complete 1 step to achieve <a href="#">All-star</a>
            </div>
          </div>
          <div className="add-sumary-div mt-3">
            <div className="add-sumary-section">
              <div>
                <ImAddressBook className="icon-summary" />
                <span className="t-bold">
                  Write a sumaary to highlight your personality or work experice
                </span>
              </div>
              <div>
                Members who include a summary receive up to 3.9 times as many
                profile views.
                <SuggestedModal />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
