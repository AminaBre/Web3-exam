import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import "../App.css";

const Home: FC = () => {
  return (
    <Col>
      <section>
        <Row className="mt-4">
          <Col sm={6} md={6}>
            <img
              src={require("../assets/images/main-image1.jpeg").default}
              className="d-inline-block align-top mw-100"
              alt="Female model with earrings"
            />
          </Col>
          <Col md={6} className="d-none d-sm-block">
            <img
              src={require("../assets/images/main-image2.jpeg").default}
              className="d-inline-block align-top mw-100"
              alt="Female model with rings and bracelets"
            />
          </Col>
        </Row>
      </section>
    </Col>
  );
};

export default Home;
