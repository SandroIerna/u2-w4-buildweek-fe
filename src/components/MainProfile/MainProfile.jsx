import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsFillCameraFill } from "react-icons/bs";
import { SiCampaignmonitor } from "react-icons/si";
import SecondSection from "../MainProfile/SecondSection";
import AnalyticsSection from "./AnalyticsSection";
import ResourceSection from "./ResourceSection";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions";
import Activity from "./Activity";
import Experience from "./Experience";
import SkillsComponent from "./SkillsComponent";
import Interest from "./Interests";
import ModalComponent from "./ModalComponent";
import JobPreferencesModal from "./JobPreferencesModal";
import FirstModal from "../UploadPhoto/FirstModal";
export default function MainProfile() {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profile.profilename);

  console.log(profileDetails);
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <Container className="">
      <div className="section-1">
        <Card className="section-profile">
          <div className="top-side">
            <div></div>
            <div className="take-picture mt-4 mr-4">
              <BsFillCameraFill className="take-picture-icon" />
            </div>
          </div>
          <Card.Body>
            <div className="profile-info">
              <FirstModal />
              <div className="profile-panic">
                <ModalComponent />
              </div>
              <div className="profile-name d-flex">
                <div className="profile-details">
                  <h4 className="mb-0">
                    {profileDetails.name}
                    {profileDetails.surname}
                  </h4>

                  <p className="mb-0">{profileDetails.title}</p>
                  <p className="mb-0">{profileDetails.bio}</p>
                  <p className="mb-0">
                    {profileDetails.area} | <a href="#">Contact Info</a>
                  </p>
                  <p className="mb-0">
                    <a href="#">30 connections</a>
                  </p>

                  <div className="profile-buttons">
                    <Button className="btn-1">Open to</Button>
                    <Button className="btn-2">Add profile Section</Button>
                    <Button className="btn-3">more</Button>
                  </div>
                  <JobPreferencesModal />
                </div>

                <div className="profile-job-details">
                  <div>
                    <SiCampaignmonitor />
                  </div>
                  <div>Epicode</div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="section-2">
        <SecondSection />
      </div>
      <div className="section-3">
        <AnalyticsSection />
      </div>
      <div className="section-4">
        <ResourceSection />
      </div>
      <div className="section-4">
        <Activity />
      </div>
      <div className="section-4">
        <Experience />
      </div>
      <div className="section-4">
        <SkillsComponent />
      </div>
      <div className="section-4">
        <Interest />
      </div>
    </Container>
  );
}
