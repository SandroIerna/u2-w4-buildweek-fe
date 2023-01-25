import { Container, Row, Col,} from "react-bootstrap";
import Footer from "./Footer"
import MainProfile from "./MainProfile/MainProfile"
import Sidebar from "./Sidebar"
import Sidebar2 from "./Sidebar2"

const ProfileView = () => {
    return ( 
        <Container className="main-con">
        <Row className="main-con-row">
          <Col md={6}>
            <MainProfile />
          </Col>
          <Col md={2}>
            <Container className="placeholder2">
              <Sidebar />
            </Container>
            <Container className="placeholder3 mt-3">
              <Sidebar2 />
            </Container>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
     );
}
 
export default ProfileView;