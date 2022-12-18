import { Col, Container, Row } from "react-bootstrap";
import square from "../assests/icons/Group 146831.svg";
import timeSet from "../assests/icons/Group 146822.svg";
import squarePoint from "../assests/icons/Group 146836.svg";
import squarePointHalf from "../assests/icons/Group 146868.svg";
import circlePoint from "../assests/icons/Group 146826.svg";
import trianglePoint from "../assests/icons/Group 146841.svg";
import rhombusPoint from "../assests/icons/Group 146866.svg";
import rhombusPointHalf from "../assests/icons/Group 146867.svg";

function Measurement() {
  return (
    <Container fluid style={{ background: "#000", marginTop: "100px" }}>
      <Row>
        <h1
          className="fontBold text-center text-green"
          style={{ marginTop: "100px" }}
        >
          MEASUREMENT
          <br />
          TO OUR SUCCESS
        </h1>
        <div
          className="fontMedium text-white text-center"
          style={{ fontSize: "15px" }}
        >
          Our process-driven approach keeps us going
        </div>
      </Row>
      <Row className="fontMedium mt-5">
        <Col sm={4}>
          <div className="d-flex justify-content-end">
            <div>
              <img src={square} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-white ms-4 mt-1">
                TRANSPARENCY AND <br /> RELIABILITY
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center">
            <div>
              <img src={timeSet} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-white ms-4">
                REAL TIME PROJECT <br /> STATUS
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex">
            <div>
              <img src={circlePoint} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-white ms-4">
                WELL STRUCTURED <br /> COMMUNICATION
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fontMedium mt-5">
        <Col sm={4}>
          <div className="d-flex justify-content-end me-5">
            <div style={{ marginTop: "-30px", marginLeft: "50px" }}>
              <img src={squarePointHalf} alt="loading" height={70} />
            </div>
            <div>
              <h6 className="text-white mt-2">
                AGILE <br /> METHODOLOGY
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center">
            <div>
              <img src={squarePoint} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-white ms-4 mt-2">
                ONSITE <br /> COLLABORATION
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex">
            <div>
              <img src={trianglePoint} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-white ms-4 mt-1">
                INNOVATION AT
                <br />
                WORK
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fontMedium mt-5">
        <Col sm={4}>
          <div className="d-flex justify-content-end">
            <div style={{ marginTop: "-10px", marginLeft: "80px" }}>
              <img src={rhombusPoint} alt="loading" height={60} />
            </div>
            <div>
              <h6 className="text-white ms-4">
                CLIENT'S INVOLVEMENT
                <br />
                IN EACH MILESTONE
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center me-5">
            <div>
              <img src={rhombusPointHalf} alt="loading" height={60} />
            </div>
            <div>
              <h6 className="text-white ms-4 mt-2">
                DEDICATED <br /> TEAM
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}></Row>
    </Container>
  );
}

export default Measurement;
