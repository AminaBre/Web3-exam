import { FC, useState, useEffect, createContext } from "react";
import { IBracelet } from "../interfaces/IBracelet";
import { BraceletContextType } from "../types/BraceletContextType";
import { BraceletService } from "../services/BraceletService";
import axios from "axios";

//Alt som du putter i return  her,  må defineres i types

export const BraceletContext = createContext<BraceletContextType | null>(null);

export const BraceletProvider: FC = ({ children }) => {
  //INITIAL  STATE
  const [bracelets, setBracelets] = useState<IBracelet[]>([
    {
      id: "",
      material: "",
      image: "",
      name: "",
      brand: "",
      price: 0,
    },
  ]);

  useEffect(() => {
    getBracelets();
  }, []);

  const getBracelets = async () => {
    const _bracelets = await BraceletService.getAll();
    setBracelets(_bracelets);
  };

  const getBraceletById = (id: string) => {
    return bracelets.find((bracelet) => bracelet.id === id) as IBracelet;
    //if-else om vi  finner objekter
  };

  return (
    <>
      <BraceletContext.Provider value={{ bracelets, getBraceletById }}>
        {children}
      </BraceletContext.Provider>
    </>
  );
};
