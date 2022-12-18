import { Container } from "react-bootstrap";
import LandingCoverImg from "./LandingCoverImg";
import NavBarComponent from "./NavBarComponent";


function HeroSecion() {

    const style = {
        position: "absolute",
        opacity: 1,
        marginTop: "-400px",
        marginLeft: "350px",
        zIndex: 12,
        fontSize: "60px",
      };
    
      const style1 = {
        position: "absolute",
        opacity: 1,
        marginTop: "-250px",
        marginLeft: "350px",
        zIndex: 12,
        fontSize: "20px",
      };

      
  return (
    <Container fluid className="landing">
        <NavBarComponent />
        <LandingCoverImg />
        <h1 className="fontHeavy" style={style}>
          INNOVATION DIGITAL <br /> TECHNOLOGY
        </h1>
        <p className="fontBold" style={style1}>
          everything we do is the consumer, imagination and you.
        </p>
      </Container>
  )
}

export default HeroSecion