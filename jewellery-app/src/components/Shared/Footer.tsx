import { FC } from "react";
import { Container } from "react-bootstrap";
import "../../App.css";

const Footer: FC = () => {
  return (
    <Container className="footer my-4">
      <img
        src={require("../../assets/images/ab-logo.png").default}
        className="footer-logo"
        alt="AB initials logo"
      />
    </Container>
  );
};
export default Footer;
