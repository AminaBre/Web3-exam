import { IRing } from "../interfaces/IRing";

export type RingContextType = {
  rings: IRing[];
  getRingById: (id: string) => IRing;
  addRing: (ring: IRing) => void;
  deleteRing: (ring: IRing) => void;
};
