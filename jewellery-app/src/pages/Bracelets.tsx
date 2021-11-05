import { FC } from "react";
import { BraceletProvider } from "../contexts/BraceletContext";
import BraceletList from "../components/Bracelet/BraceletList";

const Bracelets: FC = () => {
  return (
    <section>
      <h1>Bracelet-oversikt</h1>
      <BraceletProvider>
        <BraceletList />
      </BraceletProvider>
    </section>
  );
};

export default Bracelets;
