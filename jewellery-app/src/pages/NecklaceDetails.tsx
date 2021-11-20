import { FC } from "react";
import "../App.css";
import NecklaceDetails from "../components/Necklace/NecklaceDetails";

const NecklaceDetail: FC = () => {
  return (
    <section className="necklace-details">
      <NecklaceDetails />
    </section>
  );
};

export default NecklaceDetail;
