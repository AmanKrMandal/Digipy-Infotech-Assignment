import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarComponent() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="fontHeavy"
          style={{ fontSize: "30px" }}
        >
          DESIGN<div className="fontMedium">AGENCY</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fontMedium">
              Specialize in
            </Nav.Link>
            <Nav.Link href="#action2" className="fontMedium">
              Case Study
            </Nav.Link>
            <Nav.Link href="#" className="fontMedium">
              Process
            </Nav.Link>
            <Nav.Link href="#" className="fontMedium">
              Industries
            </Nav.Link>
          </Nav>
          <div className="d-flex fontMedium">
            <div className="buttonBlack text-white me-2">
              <div className="text-center" style={{ marginTop: "12px" }}>
                Schedule A Call
              </div>
            </div>
            <div className="buttonWhite text-dark">
              <div className="text-center" style={{ marginTop: "12px" }}>
                We are Hiring
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
