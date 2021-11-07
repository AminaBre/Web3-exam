import { FC } from "react";
import { RingProvider } from "../contexts/RingContext";
import RingList from "../components/Ring/RingList";

const Rings: FC = () => {
  return (
    <section>
      <h2>Armbånd</h2>
      <RingProvider>
        <RingList />
      </RingProvider>
    </section>
  );
};

export default Rings;
