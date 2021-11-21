import { FC } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const MainNavigation: FC = () => {
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
            title="Dropdown"
            id="basic-nav-dropdown"
            className="d-block d-sm-none"
          >
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <NavDropdown.Item href="/bracelets">Armbånd</NavDropdown.Item>
            <NavDropdown.Item href="/necklaces">Kjeder</NavDropdown.Item>
            <NavDropdown.Item href="/rings">Ringer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile">Min bruker</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MainNavigation;
