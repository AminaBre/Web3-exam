import { FC } from "react";
import { NecklaceProvider } from "../contexts/NecklaceContext";
import NecklaceList from "../components/Necklace/NecklaceList";

const Necklaces: FC = () => {
  return (
    <section>
      <h2>Armbånd</h2>
      <NecklaceProvider>
        <NecklaceList />
      </NecklaceProvider>
    </section>
  );
};

export default Necklaces;
