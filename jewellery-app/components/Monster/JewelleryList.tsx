import { FC, useContext } from "react";
import { IJewellery } from "../../interfaces/IJewellery";
import JewelleryItem from "./JewelleryItem";
import { jewelleryContext } from "../../Contexts/JewelleryContext";
import { JewelleryContextType } from "../../types/JewelleryContextType";

const JewelleryList: FC = () => {
  const { jewellerys } = useContext(jewelleryContext) as JewelleryContextType;

  return (
    <section>
      <h3>Jewelleryliste</h3>
    </section>
  );
};

export default JewelleryList;
