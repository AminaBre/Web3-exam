import { IBracelet } from "../interfaces/IBracelet";

export type BraceletContextType = {
  bracelets: IBracelet[];
  getBraceletById: (id: string) => IBracelet;
};
