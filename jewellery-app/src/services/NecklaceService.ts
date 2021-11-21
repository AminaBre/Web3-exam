import axios from "axios";
import { INecklace } from "../interfaces/INecklace";

export const NecklaceService = (function () {
  const urlToNecklaceController = "https://localhost:5001/necklace";
  const urlToImageUploadController =
    "https://localhost:5001/ImageUpload/SaveImage";

  //GET

  const getAll = async () => {
    const result = await axios.get(urlToNecklaceController);
    return result.data as INecklace[];
  };

  const getSingle = async (id: string) => {
    const result = await axios.get(urlToNecklaceController + "/" + id);
    console.log(result.data);
  };

  //CREATE

  const postNewNecklace = (newNecklace: INecklace, image: File) => {
    let formData = new FormData();
    formData.append("file", image);

    axios.post(urlToNecklaceController, newNecklace);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  //UPDATE
  const editNecklace = (id: string, necklace: INecklace) => {
    console.log("edited: " + necklace.name);
    axios.put(urlToNecklaceController + "/" + id, necklace);
  };

  //DELETE

  const deleteSelectedNecklace = (id: string) => {
    axios.delete(urlToNecklaceController + "/" + id);
    console.log("deleted: " + id);
  };

  return {
    getAll,
    postNewNecklace,
    deleteSelectedNecklace,
    getSingle,
    editNecklace,
  };
})();
