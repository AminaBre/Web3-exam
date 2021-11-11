import { FC } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";


const Profile: FC = () => {
  return (
    <section className="font-link">
      <h3>Din Profil</h3>
		  <Login />

      <Logout />
    </section>
  );
};

export default Profile;
