import axios from "axios";
import { IBracelet } from "../interfaces/IBracelet";

export const BraceletService = (function () {
  const urlToBraceletController = "https://localhost:5001/bracelet";

  const getAll = async () => {
    const result = await axios.get(urlToBraceletController);
    return result.data as IBracelet[];
  };

  const postNewBracelet = async (newBracelet: IBracelet) => {
    const result = await axios.post(urlToBraceletController, newBracelet);
    return result.data as IBracelet;
  };

  //putBracelet og deleteBracelet

  return {
    getAll,
    postNewBracelet,
  };
})();
