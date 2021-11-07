import { FC, useState, useEffect, createContext } from "react";
import { INecklace } from "../interfaces/INecklace";
import { NecklaceContextType } from "../types/NecklaceContextType";
import { NecklaceService } from "../services/NecklaceService";
import axios from "axios";

//Har ansvar for state
//Alt som du putter i return  her,  må defineres i types

export const NecklaceContext = createContext<NecklaceContextType | null>(null);

export const NecklaceProvider: FC = ({ children }) => {
  const [necklaces, setNecklaces] = useState<INecklace[]>([
    {
      id: "",
      material: "",
      image: "",
      name: "",
      brand: "",
      price: 1,
    },
  ]);

  useEffect(() => {
    getNecklaces();

    let newNecklace = { name: "New Necklace", image: "cute-mummy.png" };
    axios.post("https://localhost:5001/necklace" /*, newNecklace*/);
  }, []);

  const getNecklaces = async () => {
    const _necklaces = await NecklaceService.getAll();
    setNecklaces(_necklaces);
    console.log(_necklaces);
  };

  return (
    <>
      <NecklaceContext.Provider value={{ necklaces }}>
        {children}
      </NecklaceContext.Provider>
    </>
  );
};
