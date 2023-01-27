import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLinkedin, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {
  RiGroupFill,
  RiMessage2Fill,
  RiNotification3Fill,
} from "react-icons/ri";
// import img from "./avatar-1.jpg";
import { useEffect, useState } from "react";
import EachProfile from "./EachProfile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarLinked = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRes, setShowRes] = useState(false);
  const user = useSelector((state) => state.profile.profilename);

  useEffect(() => {
    saveData();
  }, [searchQuery]);

  const saveData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_PROD_URL}/users/?name=/^${searchQuery}/i&limit=5`
      );
      if (response.ok) {
        let data = await response.json();
        setProfiles(data);
        console.log("profiles:", data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    setShowRes(!showRes);
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ padding: "0px", height: "48px", zIndex: "20" }}
      >
        <Container>
          <Link to="/">
            <div>
              <BsLinkedin style={{ fontSize: "35px", color: "#0A66C2" }} />
            </div>
          </Link>
          <div className="d-flex flex-column">
            <InputGroup className="ml-2" style={{ width: "350px" }}>
              {/* <ImSearch /> */}
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search"
                onClick={handleClick}
              />
            </InputGroup>
            {showRes && (
              <div className="ml-2">
                <div
                  style={{
                    width: "480px",
                    height: "260px",
                    border: "1px solid black",
                    borderRadius: "4px",
                    overflow: "auto",
                    top: "48px",
                    backgroundColor: "white",
                  }}
                  className="d-flex flex-column align-items-start position-absolute search"
                >
                  <p style={{ marginLeft: "20px", marginTop: "10px" }}>
                    Try searching for
                  </p>
                  {profiles
                    .filter((n) => n.name.toLowerCase().includes(searchQuery))
                    .map((elements) => (
                      <Link
                        to={"/profile/" + elements._id}
                        onClick={handleClick}
                      >
                        <EachProfile
                          style={{
                            marginLeft: "20px",
                            fontWeight: "bold",
                            zIndex: "20",
                          }}
                          profile={elements}
                        />
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="/"
                className="d-flex flex-column align-items-center"
              >
                <div>
                  <AiFillHome style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Home</div>
              </Nav.Link>
              <Nav.Link
                href="#myNetwork"
                className="d-flex flex-column align-items-center"
              >
                <div>
                  <RiGroupFill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>My Network</div>
              </Nav.Link>
              <Nav.Link
                href="#jobs"
                className="d-flex flex-column align-items-center"
              >
                <div>
                  <BsFillBriefcaseFill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Jobs</div>
              </Nav.Link>
              <Nav.Link
                href="#messaging"
                className="d-flex flex-column align-items-center"
              >
                <div>
                  <RiMessage2Fill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Messaging</div>
              </Nav.Link>
              <Nav.Link
                href="#notifications"
                className="d-flex flex-column align-items-center"
              >
                <div>
                  <RiNotification3Fill style={{ fontSize: "20px" }} />
                </div>
                <div style={{ fontSize: "13px" }}>Notifications</div>
              </Nav.Link>

              <div className="d-flex flex-column align-items-center">
                <img
                  src={user.image}
                  alt="..."
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    marginTop: "11px",
                    padding: "0",
                  }}
                  className="align-self-center"
                />
                <NavDropdown
                  title="Me"
                  id="basic-nav-dropdown"
                  style={{ fontSize: "13px" }}
                  align="end"
                >
                  <NavDropdown.Item>
                    <Link to="/profile/me">
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={user.image}
                            alt="..."
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                              padding: "0",
                            }}
                            className="align-self-center mr-2"
                          />
                        </div>
                        <div>
                          <div>{`${user.name} ${user.surname}`}</div>
                          <div>{user.title}</div>
                        </div>
                      </div>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLinked;
