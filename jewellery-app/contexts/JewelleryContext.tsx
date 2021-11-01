import { FC, useState, useEffect, createContext } from "react";
import { IJewellery } from "../interfaces/IJewellery";
import { JewelleryContextType } from "../types/JewelleryContextType";
import { jewelleryService } from "../services/JewelleryService";

export const jewelleryContext = createContext<JewelleryContextType | null>(
  null
);

export const JewelleryProvider: FC = ({ children }) => {
  const [jewellerys, setjewellerys] = useState<IJewellery[]>([
    { id: "test", name: "Testjewellery", image: "cute-witch.png" },
  ]);

  return (
    <>
      <jewelleryContext.Provider value={{ jewellerys }}>
        {children}
      </jewelleryContext.Provider>
    </>
  );
};
