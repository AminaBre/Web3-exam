import { FC, useState, useEffect, createContext } from "react";
import { IBracelet } from "../interfaces/IBracelet";
import { BraceletContextType } from "../types/BraceletContextType";
import { BraceletService } from "../services/BraceletService";
import axios from "axios";

//Har ansvar for state
//Alt som du putter i return  her,  må defineres i types

export const BraceletContext = createContext<BraceletContextType | null>(null);

export const BraceletProvider: FC = ({ children }) => {
  const [bracelets, setBracelets] = useState<IBracelet[]>([
    {
      id: "Mockup-id",
      material: "Mockup-material",
      image: "cute-witch.png",
      name: "Mockup-name",
      brand: "Mockup-brand",
      price: 1,
    },
  ]);

  useEffect(() => {
    getBracelets();

    let newBracelet = { name: "New Bracelet", image: "cute-mummy.png" };
    axios.post("https://localhost:5001/bracelet" /*, newBracelet*/);
  }, []);

  const getBracelets = async () => {
    const _bracelets = await BraceletService.getAll();
    setBracelets(_bracelets);
    console.log(_bracelets);
  };

  return (
    <>
      <BraceletContext.Provider value={{ bracelets }}>
        {children}
      </BraceletContext.Provider>
    </>
  );
};
