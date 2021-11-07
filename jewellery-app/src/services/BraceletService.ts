import axios from "axios";
import { IBracelet } from "../interfaces/IBracelet";

export const BraceletService = (function () {
  const urlToBraceletController = "https://localhost:5001/bracelet";
  const urlToImageUploadController =
    "https://localhost:5001/ImageUpload/SaveImage";

  const getAll = async () => {
    const result = await axios.get(urlToBraceletController);
    return result.data as IBracelet[];
  };

  const postNewBracelet = (newBracelet: IBracelet, image: File) => {
    let formData = new FormData();
    formData.append("file", image);

    axios.post(urlToBraceletController, newBracelet);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  //putBracelet og deleteBracelet

  return {
    getAll,
    postNewBracelet,
  };
})();
