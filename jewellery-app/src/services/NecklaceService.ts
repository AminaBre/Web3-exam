import axios from "axios";
import { INecklace } from "../interfaces/INecklace";

export const NecklaceService = (function () {
  const urlToNecklaceController = "https://localhost:5001/necklace";

  const getAll = async () => {
    const result = await axios.get(urlToNecklaceController);
    return result.data as INecklace[];
  };

  const postNewNecklace = async (newNecklace: INecklace) => {
    const result = await axios.post(urlToNecklaceController, newNecklace);
    return result.data as INecklace;
  };

  //putNecklace og deleteNecklace

  return {
    getAll,
    postNewNecklace,
  };
})();
