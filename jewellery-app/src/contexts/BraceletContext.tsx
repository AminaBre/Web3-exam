import { FC, useState, useEffect, createContext } from "react";
import { IBracelet } from "../interfaces/IBracelet";
import { BraceletContextType } from "../types/BraceletContextType";
import { BraceletService } from "../services/BraceletService";

//Har ansvar for state
//Alt som du putter i return  her,  må defineres i types

export const BraceletContext = createContext<BraceletContextType | null>(null);

export const BraceletProvider: FC = ({ children }) => {
  const [bracelets, setBracelets] = useState<IBracelet[]>([
    {
      id: "test",
      material: "Gold",
      image: "cute-witch.png",
      name: "TestBracelet",
      brand: "Maanesten",
      price: 199,
    },
  ]);

  useEffect(() => {
    getBracelets();
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
