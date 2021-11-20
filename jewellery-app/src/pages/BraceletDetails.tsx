import { FC } from "react";
import "../App.css";
import BraceletDetails from "../components/Bracelet/BraceletDetails";

const BraceletDetail: FC = () => {
  return (
    <section className="bracelet-details">
      <BraceletDetails />
    </section>
  );
};

export default BraceletDetail;
