import { INecklace } from "../interfaces/INecklace";

export type NecklaceContextType = {
  necklaces: INecklace[];
  getNecklaceById: (id: string) => INecklace;
  deleteNecklace: (necklace: INecklace) => void;
  addNecklace: (necklace: INecklace) => void;
};
