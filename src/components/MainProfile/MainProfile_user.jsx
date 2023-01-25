import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { SiCampaignmonitor } from "react-icons/si";
import SecondSection from "./SecondSection";
import AnalyticsSection from "./AnalyticsSection";
import ResourceSection from "./ResourceSection";
import { useDispatch, useSelector } from "react-redux";
import { getOtherProfile } from "../redux/actions";
import Activity from "./Activity";
import ExperienceOther from "./ExperienceOther";
import SkillsComponent from "./SkillsComponent";
import Interest from "./Interests";
import ModalComponent from "./ModalComponent";
import JobPreferencesModal from "./JobPreferencesModal";
import { useParams } from "react-router-dom";

export default function MainProfileUser() {
  const params = useParams();
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profile.otherUser);
  const userid = params.userid
  console.log("user id:", userid)
  console.log(profileDetails);
  useEffect(() => {
    dispatch(getOtherProfile(userid));
  }, [userid]);
  return (
    <Container className="">
      <div className="section-1">
        <Card className="section-profile">
          <div className="top-side">
            {/* <div className="take-picture mt-4 mr-4">
              <BsFillCameraFill className="take-picture-icon" />
            </div> */}
          </div>
          <Card.Body>
            <div className="profile-info">
              <div className="profile-picture">
                <img src={profileDetails.image} alt="profilepicture" />
                <div>
                  <ModalComponent />
                </div>
              </div>
              <div className="profile-name d-flex">
                <div className="profile-details">
                  <h4 className="mb-0">
                    {profileDetails.name}{" "}
                    {profileDetails.surname}
                  </h4>

                  <p className="mb-0">{profileDetails.title}</p>
                  <p className="mb-0"></p>
                  <p className="mb-0">
                    {profileDetails.area} | <span className="text-muted contact">Contact Info</span>
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
        <ExperienceOther />
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
