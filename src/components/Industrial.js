import { Col, Container, Row } from "react-bootstrap";
import videoCd from "../assests/icons/Group 146891.svg";
import health from "../assests/icons/Group 146905.svg";
import hospital from "../assests/icons/Group 146909.svg";
import carts from "../assests/icons/Group 146914.svg";
import education from "../assests/icons/Group 146919.svg";
import plane from "../assests/icons/Group 146891 (1).svg";
import mobile from "../assests/icons/Group 146926.svg";
import building from "../assests/icons/Group 146929.svg";
import arc from "../assests/icons/Group 146932.svg";
function Industrial() {
  return (
    <Container fluid style={{ background: "#EDEDED" }}>
      <Row>
        <h1
          className="fontBold text-center text-dark"
          style={{ marginTop: "100px" }}
        >
          WE ARE WORKING
          <br />
          WITH THESE INDUSTRIES
        </h1>
      </Row>
      <Row className="fontMedium mt-5">
        <Col sm={4}>
          <div className="d-flex justify-content-end">
            <div>
              <img src={videoCd} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-dark ms-4 mt-1">
                MEDIA & <br /> ENTERTAINMENT
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center">
            <div>
              <img src={health} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-dark ms-4">
                HEALTH CARE & <br /> WELLNESS
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex">
            <div>
              <img src={hospital} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-dark ms-4">
                HOSPITALITY & <br /> REAL ESTATE
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fontMedium mt-5">
        <Col sm={4}>
          <div className="d-flex justify-content-end">
            <div style={{ marginTop: "-15px" }}>
              <img src={carts} alt="loading" height={70} />
            </div>
            <div>
              <h6 className="text-dark me-4">
                RETAIL & <br /> E COMMERCE
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center">
            <div>
              <img src={education} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-dark ms-4 mt-2">
                EDUCATION & <br /> LEARNING
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex">
            <div>
              <img src={plane} alt="loading" height={50} />
            </div>
            <div>
              <h6 className="text-dark ms-4 mt-1">
                TRAVEL &
                <br />
                TRANSPORT
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fontMedium mt-5">
        <Col sm={4}>
          <div className="d-flex justify-content-end">
            <div>
              <img src={mobile} alt="loading" height={60} />
            </div>
            <div>
              <h6 className="text-dark mt-3" style={{ marginRight: "60px" }}>
                MOBILE &
                <br />
                TELECOM
              </h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex justify-content-center me-5">
            <div>
              <img src={building} alt="loading" height={60} />
            </div>
            <div>
              <h6 className="text-dark ms-4 mt-4">IT & ITES</h6>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="d-flex">
            <div>
              <img src={arc} alt="loading" height={60} />
            </div>
            <div>
              <h6 className="text-dark ms-3 mt-3">AGRITECH</h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "100px" }}></Row>
    </Container>
  );
}

export default Industrial;
