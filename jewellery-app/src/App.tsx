import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FC } from "react";
import Routing from "./routing.js/Routing";

const App: FC = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;
