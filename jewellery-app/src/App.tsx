import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FC } from "react";
import { BraceletProvider } from "./contexts/BraceletContext";
import BraceletList from "./components/Bracelet/BraceletList";

const App: FC = () => {
  return (
    <div>
      <h1>Bracelet-oversikt</h1>
      <BraceletProvider>
        <BraceletList></BraceletList>
      </BraceletProvider>
    </div>
  );
};

export default App;
