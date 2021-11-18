import { INecklace } from "../interfaces/INecklace";

export type NecklaceContextType = {
  necklaces: INecklace[];
  getNecklaceById: (id: string) => INecklace;
};
