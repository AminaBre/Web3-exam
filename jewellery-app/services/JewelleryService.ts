import axios from "axios";
import { IJewellery } from "../interfaces/Ijewellery";

export const jewelleryService = (function () {
  const urlToJewelleryController = "https://localhost:5001/jewellery";

  const getAll = async () => {
    const result = await axios.get(urlToJewelleryController);
    return result.data as IJewellery[];
  };

  const postNewJewellery = async (newMonster: IJewellery) => {
    const result = await axios.post(urlToJewelleryController, newMonster);
    return result.data as IJewellery;
  };

  return {
    getAll,
    postNewJewellery,
  };
})();
