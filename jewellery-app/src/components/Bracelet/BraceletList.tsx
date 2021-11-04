import { FC, useContext } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";

const BraceletList: FC = () => {
  const { bracelets } = useContext(BraceletContext) as BraceletContextType;

  const createBraceletList = () => {
    return bracelets.map((bracelet: IBracelet, key: number) => {
      //For hvert monster vi finner...
      return (
        <BraceletItem
          key={key}
          id={bracelet.id}
          material={bracelet.material}
          image={bracelet.image}
          name={bracelet.name}
          brand={bracelet.brand}
          price={bracelet.price}
        />
      );
    });
  };

  return (
    <section>
      <h3>Bracelet-liste</h3>
      <section>{createBraceletList()}</section>
    </section>
  );
};

export default BraceletList;
