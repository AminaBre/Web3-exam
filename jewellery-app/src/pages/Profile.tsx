import { FC } from "react";
import { Row } from "react-bootstrap";
import Login from "../components/UserProfile/Login";
import Logout from "../components/UserProfile/Logout";

const Profile: FC = () => {
  return (
    <section className="font-link">
      <Row className="mt-3">
        <Login />
      </Row>
      <Row className="mt-5">
        <Logout />
      </Row>
    </section>
  );
};

export default Profile;
