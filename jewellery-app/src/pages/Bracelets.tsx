import { FC } from "react";
import BraceletList from "../components/Bracelet/BraceletList";
import "../components/Shared/cards.css";

const Bracelets: FC = () => {
  return (
    <section className="font-link pt-5">
      <h1>Armbånd</h1>
      <BraceletList />
    </section>
  );
};

export default Bracelets;
