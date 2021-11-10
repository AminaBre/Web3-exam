import { FC } from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "994843041026-bdtk85kiqdgj23emjstr68m36qlml5vk.apps.googleusercontent.com";

const Login: FC = () => {
  const onSuccess = (res: any) => {
    console.log("[Login success] currentUser:", res.profileObj);
    alert(`✨Du er nå logget inn ${res.profileObj.name}, velkommen!✨`);
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log("[Loginfailed] res:", res);
    alert(`Oops, her gikk noe galt 😢`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <button
            type="button"
            className="btn btn-outline-light"
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
    </div>
  );
};

export default Login;
