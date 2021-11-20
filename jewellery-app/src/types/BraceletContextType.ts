import { IBracelet } from "../interfaces/IBracelet";

export type BraceletContextType = {
  bracelets: IBracelet[];
  addBracelet: (bracelet: IBracelet) => void;
  //editBracelet: (bracelet: IBracelet) => void;
  deleteBracelet: (bracelet: IBracelet) => void;
  getBraceletById: (id: string) => IBracelet;
};
