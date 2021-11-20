import axios from "axios";
import { IRing } from "../interfaces/IRing";

export const RingService = (function () {
  const urlToRingController = "https://localhost:5001/ring";
  const urlToImageUploadController =
    "https://localhost:5001/ImageUpload/SaveImage";

  //GET

  const getAll = async () => {
    const result = await axios.get(urlToRingController);
    return result.data as IRing[];
  };

  const getSingle = async (id: string) => {
    const result = await axios.get(urlToRingController + "/" + id);
    console.log(result.data);
  };

  //CREATE

  const postNewRing = (newRing: IRing, image: File) => {
    let formData = new FormData();
    formData.append("file", image);

    axios.post(urlToRingController, newRing);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  //UPDATE
  const editRing = (id: string, ring: IRing) => {
    console.log("edited: " + ring.name);
    axios.put(urlToRingController + "/" + id, ring);
  };

  //DELETE

  const deleteRing = (id: string) => {
    axios.delete(urlToRingController + "/" + id);
    console.log("deleted: " + id);
  };

  return {
    getAll,
    postNewRing,
    deleteRing,
    getSingle,
    editRing,
  };
})();
