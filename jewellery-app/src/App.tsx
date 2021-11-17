import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { FC } from "react";
import Routing from "./routing.js/Routing";
import { BraceletProvider } from "./contexts/BraceletContext";

const App: FC = () => {
  return (
    <div className="main-container">
      <BraceletProvider>
        <Routing />
      </BraceletProvider>
    </div>
  );
};

export default App;
