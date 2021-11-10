import axios from "axios";
import { IBracelet } from "../interfaces/IBracelet";

export const BraceletService = (function () {
  const urlToBraceletController = "https://localhost:5001/bracelet";
  const urlToImageUploadController =
    "https://localhost:5001/ImageUpload/SaveImage";

  //GET

  const getAll = async () => {
    const result = await axios.get(urlToBraceletController);
    return result.data as IBracelet[];
  };

  const getSingle = async (id: string) => {
    const result = await axios.get(urlToBraceletController + "/" + id);
    console.log(result.data);
  };

  //CREATE

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

  //UPDATE
  const editBracelet = (id: string, bracelet: IBracelet) => {
    console.log("edited: " + bracelet.name);
    console.log("edited id: " + id);
    axios.put(urlToBraceletController + "/" + id, bracelet);
  };

  //DELETE

  const deleteBracelet = (id: string) => {
    axios.delete(urlToBraceletController + "/" + id);
    console.log("deleted: " + id);
  };

  return {
    getAll,
    postNewBracelet,
    deleteBracelet,
    getSingle,
    editBracelet,
  };
})();
