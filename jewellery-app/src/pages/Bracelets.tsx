import { FC } from "react";
import { BraceletProvider } from "../contexts/BraceletContext";
import BraceletList from "../components/Bracelet/BraceletList";

const Bracelets: FC = () => {
  return (
    <section>
      <h2>Armbånd</h2>
      <BraceletProvider>
        <BraceletList />
      </BraceletProvider>
    </section>
  );
};

export default Bracelets;
