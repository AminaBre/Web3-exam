import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { FC } from "react";
import Routing from "./routing.js/Routing";
import { BraceletProvider } from "./contexts/BraceletContext";
import { NecklaceProvider } from "./contexts/NecklaceContext";
import { RingProvider } from "./contexts/RingContext";

const App: FC = () => {
  return (
    <div className="main-container">
      <RingProvider>
        <NecklaceProvider>
          <BraceletProvider>
            <Routing />
          </BraceletProvider>
        </NecklaceProvider>
      </RingProvider>
    </div>
  );
};

export default App;
