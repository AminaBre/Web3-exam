import { FC, useState, useEffect, createContext } from "react";
import { IRing } from "../interfaces/IRing";
import { RingContextType } from "../types/RingContextType";
import { RingService } from "../services/RingService";
import axios from "axios";

//Har ansvar for state
//Alt som du putter i return  her,  må defineres i types

export const RingContext = createContext<RingContextType | null>(null);

export const RingProvider: FC = ({ children }) => {
  const [rings, setRings] = useState<IRing[]>([
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
    getRings();

    let newRing = { name: "New Ring", image: "cute-mummy.png" };
    axios.post("https://localhost:5001/ring" /*, newRing*/);
  }, []);

  const getRings = async () => {
    const _rings = await RingService.getAll();
    setRings(_rings);
    console.log(_rings);
  };

  return (
    <>
      <RingContext.Provider value={{ rings }}>{children}</RingContext.Provider>
    </>
  );
};
