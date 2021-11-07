import axios from "axios";
import { IRing } from "../interfaces/IRing";

export const RingService = (function () {
  const urlToRingController = "https://localhost:5001/ring";

  const getAll = async () => {
    const result = await axios.get(urlToRingController);
    return result.data as IRing[];
  };

  const postNewRing = async (newRing: IRing) => {
    const result = await axios.post(urlToRingController, newRing);
    return result.data as IRing;
  };

  //putRing og deleteRing

  return {
    getAll,
    postNewRing,
  };
})();
