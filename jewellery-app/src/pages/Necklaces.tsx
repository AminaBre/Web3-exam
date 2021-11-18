import { FC } from "react";
import { NecklaceProvider } from "../contexts/NecklaceContext";
import NecklaceList from "../components/Necklace/NecklaceList";
import "../components/Shared/cards.css";

const Necklaces: FC = () => {
  return (
    <section className="font-link pt-5">
      <h1>Kjeder</h1>
      <NecklaceProvider>
        <NecklaceList />
      </NecklaceProvider>
    </section>
  );
};

export default Necklaces;
