import { FC, useState, useEffect, createContext } from "react";
import { INecklace } from "../interfaces/INecklace";
import { NecklaceContextType } from "../types/NecklaceContextType";
import { NecklaceService } from "../services/NecklaceService";

export const NecklaceContext = createContext<NecklaceContextType | null>(null);

export const NecklaceProvider: FC = ({ children }) => {
  const [necklaces, setNecklaces] = useState<INecklace[]>([
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
    getNecklaces();
  }, []);

  const addNecklace = (newNecklace: INecklace) =>
    setNecklaces((necklaces) => [...necklaces, newNecklace]);

  const deleteNecklace = (deletedNecklace: INecklace) => {
    necklaces.forEach((necklace, index) => {
      if (necklace.id === deletedNecklace.id) {
        necklaces.splice(index, 1);
      } else {
        return;
      }
      setNecklaces(necklaces);
    });
  };

  const getNecklaces = async () => {
    const _necklaces = await NecklaceService.getAll();
    setNecklaces(_necklaces);
  };

  const getNecklaceById = (id: string) => {
    return necklaces.find((necklace) => necklace.id === id) as INecklace;
    //if-else om vi  finner objekter
  };

  return (
    <>
      <NecklaceContext.Provider
        value={{ necklaces, getNecklaceById, addNecklace, deleteNecklace }}
      >
        {children}
      </NecklaceContext.Provider>
    </>
  );
};
