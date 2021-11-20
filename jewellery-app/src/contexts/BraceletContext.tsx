import { FC, useState, useEffect, createContext } from "react";
import { IBracelet } from "../interfaces/IBracelet";
import { BraceletContextType } from "../types/BraceletContextType";
import { BraceletService } from "../services/BraceletService";

export const BraceletContext = createContext<BraceletContextType | null>(null);

export const BraceletProvider: FC = ({ children }) => {
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

  const addBracelet = (newBracelet: IBracelet) =>
    setBracelets((bracelets) => [...bracelets, newBracelet]);

  const deleteBracelet = (deletedBracelet: IBracelet) =>
    setBracelets((bracelets) => [...bracelets, deletedBracelet]);

  const getBracelets = async () => {
    const _bracelets = await BraceletService.getAll();
    setBracelets(_bracelets);
  };

  const getBraceletById = (id: string) => {
    return bracelets.find((bracelet) => bracelet.id === id) as IBracelet;
  };

  return (
    <>
      <BraceletContext.Provider
        value={{
          bracelets,
          addBracelet,
          deleteBracelet,
          getBraceletById,
        }}
      >
        {children}
      </BraceletContext.Provider>
    </>
  );
};
