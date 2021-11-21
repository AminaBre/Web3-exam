import { FC } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const MainNavigation: FC = () => {
  const hamburgerMenu = <i className="fas fa-bars"></i>;

  return (
    <Navbar className="navigation sticky-top navbar-light pt-3">
      <Container className="navigation-container">
        <Navbar.Brand className="font-link">
          <a href="/" className="home-link">
            Jewellery
          </a>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" className="d-none d-sm-block">
            Hjem
          </Nav.Link>
          <Nav.Link as={Link} to="/bracelets" className="d-none d-sm-block">
            Armbånd
          </Nav.Link>
          <Nav.Link as={Link} to="/necklaces" className="d-none d-sm-block">
            Kjeder
          </Nav.Link>
          <Nav.Link as={Link} to="/rings" className="d-none d-sm-block">
            Ringer
          </Nav.Link>
          <Nav.Link as={Link} to="/profile" className="d-none d-sm-block">
            <FontAwesomeIcon icon={faUser} className="fa-lg" />
          </Nav.Link>
          <NavDropdown
            title="Meny"
            id="basic-nav-dropdown"
            className="d-block d-sm-none"
          >
            <NavDropdown.Item href="/bracelets" id="hamburger-link">
              Armbånd
            </NavDropdown.Item>
            <NavDropdown.Item href="/necklaces" id="hamburger-link">
              Kjeder
            </NavDropdown.Item>
            <NavDropdown.Item href="/rings" id="hamburger-link">
              Ringer
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile" id="hamburger-link">
              Profil
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MainNavigation;
