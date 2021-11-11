import { FC } from "react";
import "../App.css";

const Error: FC = () => {
  return (
    <section className="error-page">
      <h1>The page you're looking for does not exist.</h1>
      <img
        src={require("../assets/images/error-woman.gif").default}
        className="errorWoman mw-100"
        alt="Confused woman with a laptop"
      />
    </section>
  );
};

export default Error;
