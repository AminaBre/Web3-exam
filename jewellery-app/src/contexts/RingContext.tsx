import { FC, useState, useEffect, createContext } from "react";
import { IRing } from "../interfaces/IRing";
import { RingContextType } from "../types/RingContextType";
import { RingService } from "../services/RingService";

export const RingContext = createContext<RingContextType | null>(null);

export const RingProvider: FC = ({ children }) => {
  const [rings, setRings] = useState<IRing[]>([
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
    getRings();
  }, [rings]);

  const addRing = (newRing: IRing) => setRings((rings) => [...rings, newRing]);

  const deleteRing = (deletedRing: IRing) => {
    rings.forEach((ring, index) => {
      if (ring.id === deletedRing.id) {
        rings.splice(index, 1);
      } else {
        return;
      }
      setRings(rings);
    });
  };

  const getRings = async () => {
    const _rings = await RingService.getAll();
    setRings(_rings);
  };

  const getRingById = (id: string) => {
    return rings.find((ring) => ring.id === id) as IRing;
  };

  return (
    <>
      <RingContext.Provider value={{ rings, getRingById, addRing, deleteRing }}>
        {children}
      </RingContext.Provider>
    </>
  );
};
