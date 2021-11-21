import { FC } from "react";
import RingList from "../components/Ring/RingList";
import "../components/Shared/cards.css";

const Rings: FC = () => {
  return (
    <section className="font-link pt-5">
      <h1>Ringer</h1>
      <RingList />
    </section>
  );
};

export default Rings;
