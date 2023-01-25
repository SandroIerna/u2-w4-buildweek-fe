import React from "react";
import { Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";

export default function AnalyticsSection() {
  return (
    <div className="wrapper-analytic mt-2">
      <Card>
        <Card.Body>
          <Card.Title>
            <h2 className="mb-0">Analytics</h2>
          </Card.Title>
          <Card.Subtitle className="second-section-p">
            <AiFillEye className="icon" />
            Private to you
          </Card.Subtitle>
          <div className="profile-view-section">
            <div className="viewed-people mt-2">
              <div>
                <SlPeople className="icon" />
              </div>
              <div>
                <h2 className="mb-0">3 profile views</h2>
                Discover who's viewed your profile.
              </div>
            </div>
            <div className="people-search mt-2">
              <div>
                <BiSearch className="icon" />
              </div>
              <div>
                <h2 className="mb-0">4 search appearances</h2>
                See how often you appear in search results.
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
