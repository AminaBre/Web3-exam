import { FC } from "react";
import { BraceletProvider } from "../contexts/BraceletContext";
import BraceletList from "../components/Bracelet/BraceletList";
import "../components/Bracelet/bracelet.css";

const Bracelets: FC = () => {
  return (
    <section className="font-link pt-5">
      <h1>Armbånd</h1>
      <BraceletProvider>
        <BraceletList />
      </BraceletProvider>
    </section>
  );
};

export default Bracelets;
