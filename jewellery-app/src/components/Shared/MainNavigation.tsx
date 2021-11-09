import { FC } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../App.css";

const MainNavigation: FC = () => {
  return (
    <Navbar className="navigation-container navbar-light">
      <Container>
        <Navbar.Brand className="font-link">
          <a href="/" className="home-link">
            Jewellery
          </a>
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
          <Nav.Link as={Link} to="/rings">
            Ringer
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MainNavigation;
