import { FC, useContext, useState, ChangeEvent } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import { BraceletService } from "../../services/BraceletService";

const CreateBraceletForm: FC = () => {
  const [newBracelet, setNewBracelet] = useState<IBracelet>({
    name: "",
    material: "",
    brand: "",
    image: "",
    price: 0,
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    switch (name) {
      case "name":
        var { value } = event.target;
        setNewBracelet({
          ...newBracelet,
          name: value,
        });
        break;
      case "brand":
        var { value } = event.target;
        setNewBracelet({
          ...newBracelet,
          brand: value,
        });
        break;
      case "material":
        var { value } = event.target;
        setNewBracelet({
          ...newBracelet,
          material: value,
        });
        break;
      case "price":
        var { value } = event.target;
        setNewBracelet({
          ...newBracelet,
          price: parseInt(value),
        });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewBracelet({ ...newBracelet, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
    }
  };

  const postNewBracelet = () => {
    console.log(newBracelet);
    console.log(newImage);

    BraceletService.postNewBracelet(newBracelet, newImage as File);
  };

  return (
    <section>
      <p>Design ditt eget armbånd</p>
      <div>
        <label>Navn</label>
        <input onChange={handleChange} name="name" type="text" />
        <label>Materiale</label>
        <input onChange={handleChange} name="material" type="text" />
        <label>Designet av</label>
        <input onChange={handleChange} name="brand" type="text" />
        <label>Pris</label>
        <input onChange={handleChange} name="price" type="text" />
        <label>Bilde</label>
        <input onChange={handleChange} name="image" type="file" />
      </div>
      <input type="button" value="Lagre design" onClick={postNewBracelet} />
    </section>
  );
};

export default CreateBraceletForm;
