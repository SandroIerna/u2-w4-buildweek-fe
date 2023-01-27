import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import "../CssFolder/homepage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RightHompageSidebar() {
  const profileDetails = useSelector((state) => state.profile.profilename);
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <h2 className="mb-0">LinkedIn News</h2>
            <span>
              <BsInfoSquareFill />
            </span>
          </Card.Title>
        </Card.Body>
        <div>
          <ul>
            <li className="rightside-ul">Meet the Uk's top voice in tech </li>
            <span>Top news . 3,146 readers</span>
          </ul>
        </div>
        <div>
          <ul className="rightside-ul">
            <li>'Finfluencers' to face regulations</li>
            <span>51m ago</span>
          </ul>
        </div>
        <div>
          <ul>
            <li className="rightside-ul">
              Ditch the 'we' in you job interviews
            </li>
            <span>6h ago .24,873 readers</span>
          </ul>
        </div>
        <div>
          <ul>
            <li className="rightside-ul">20 big ideas that will shape 2023</li>
            <span>6h ago . 48,692 readers</span>
          </ul>
        </div>
        <div>
          <ul>
            <li className="rightside-ul">Staff stressed over cost of living</li>
            <span>6h ago . 6,845 readers</span>
            <Button className="left-side-btn">
              Show more
              <BiChevronDown />
            </Button>
          </ul>
        </div>
      </Card>
      <a>
        <Card style={{ width: "18rem" }} className="right-profile mt-2">
          <div className="modal-button">
            <span>Ad</span>
            <span className="btn">...</span>
          </div>
          <h2 className="rightside-h2">
            {profileDetails.name}, follow ECOMMPAY to know more about fintech &
            e-commerce
          </h2>
          <div className="rightside-image ">
            <div>
              <Link to={"/profile/" + profileDetails._id}>
                <img
                  src={profileDetails.image}
                  alt="profileImage"
                  className="righthome-image"
                />
              </Link>
            </div>
            <Card.Img
              variant="top"
              src="image3.jpg"
              className="righthome-imag"
            />
          </div>
          <h2 className="rightside-h2">
            Grow your business with insights from
          </h2>
          <span>ECOMMPAY</span>
          <Button className="follow-btn mb-2">Follow</Button>
        </Card>
      </a>
      <div className="footer mt-1">
        <div className="sidebar-footer">
          <span>
            <a href="#">About</a>
          </span>
          <span>
            <a href="#">Accessibility</a>
          </span>
          <span>
            <a href="#">Help Center</a>
          </span>
        </div>
        <div className="sidebar-footer">
          <span>
            <a href="#">Privacy & Terms </a>
            <BiChevronDown />
          </span>
          <span>
            {" "}
            <a href="#">Ad Choices</a>
          </span>
        </div>

        <div className="sidebar-footer">
          <span>
            <a href="#">Advertising</a>
          </span>
          <span>
            <a href="#">
              Business Services <BiChevronDown />
            </a>
          </span>
        </div>

        <div className="sidebar-footer">
          <span>
            <a href="#">Get the Linkedin app</a>
          </span>
          <span>
            <a href="#">More</a>
          </span>
        </div>
        <div className="corporation">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
            alt="linkedin logo"
            className="corporation-image"
          />
          <span>Linkedin Corporation</span>
          <span>©{new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  );
}
