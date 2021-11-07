import { FC } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const MainNavigation: FC = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img
            src={require(`../../assets/images/jewellery-logo.png`).default}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Jewellery-logo"
          />
          Jewellery
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Hjem
          </Nav.Link>
          <Nav.Link as={Link} to="/bracelets">
            Armbånd
          </Nav.Link>
          <Nav.Link as={Link} to="/necklaces">
            Kjeder
          </Nav.Link>
          <Nav.Link as={Link} to="">
            Ringer
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MainNavigation;
