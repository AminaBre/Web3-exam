import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const clientId =
  "994843041026-bdtk85kiqdgj23emjstr68m36qlml5vk.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Du er nå logget ut 🏃‍♀️");
    history.push("/");
  };

  const history = useHistory();

  return (
    <GoogleLogout
      clientId={clientId}
      render={(renderProps) => (
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Logg ut
        </button>
      )}
      onLogoutSuccess={onSuccess}
    />
  );
}
export default Logout;
