import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import "../App.css";

const Home: FC = () => {
  return (
    <Col>
      <section>
        <Row>
          <Col lg={6}>
            <img
              src={require("../assets/images/main-image1.jpeg").default}
              className="d-inline-block align-top mw-100"
              alt="Female model with earrings"
            />
          </Col>
          <Col md={6} className="d-none d-lg-block">
            <img
              src={require("../assets/images/main-image2.jpeg").default}
              width="500"
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
