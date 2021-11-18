import { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../../utils/refreshToken";
import "./UserProfile.css";

const clientId =
  "994843041026-bdtk85kiqdgj23emjstr68m36qlml5vk.apps.googleusercontent.com";

const Login: FC = () => {
  const onSuccess = (res: any) => {
    console.log("[Login success] currentUser:", res.profileObj);
    alert(`✨Du er nå logget inn ${res.profileObj.name}, velkommen!✨`);
    refreshTokenSetup(res);

    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("Bilde");

  const onFailure = (res: any) => {
    console.log("[Loginfailed] res:", res);
    alert(`Oops, her gikk noe galt 😢`);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <button
            type="button"
            className="btn btn-outline-light mt-3"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Logg inn
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
      <div className="user-info-card mt-5">
        <Row className="p-5">
          <Col>
            <h3>Brukernavn: {name}</h3>
            <h3>Email: {email}</h3>
          </Col>
          <Col>
            <img className="w-50" src={url} alt={name} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
