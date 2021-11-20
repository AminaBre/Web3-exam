import { FC } from "react";
import NecklaceList from "../components/Necklace/NecklaceList";
import "../components/Shared/cards.css";

const Necklaces: FC = () => {
  return (
    <section className="font-link pt-5">
      <h1>Kjeder</h1>
      <NecklaceList />
    </section>
  );
};

export default Necklaces;
