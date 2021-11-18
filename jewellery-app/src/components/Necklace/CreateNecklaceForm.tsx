import { FC, useContext, useState, ChangeEvent } from "react";
import { INecklace } from "../../interfaces/INecklace";
import { NecklaceService } from "../../services/NecklaceService";
import { Row, Col, Form } from "react-bootstrap";

const CreateNecklaceForm: FC = () => {
  const [newNecklace, setNewNecklace] = useState<INecklace>({
    id: "",
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
        setNewNecklace({
          ...newNecklace,
          name: value,
        });
        break;
      case "brand":
        var { value } = event.target;
        setNewNecklace({
          ...newNecklace,
          brand: value,
        });
        break;
      case "material":
        var { value } = event.target;
        setNewNecklace({
          ...newNecklace,
          material: value,
        });
        break;
      case "price":
        var { value } = event.target;
        if (value.length === 0) {
          console.log("Fyll ut pris");
        } else {
          setNewNecklace({
            ...newNecklace,
            price: parseInt(value),
          });
        }
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewNecklace({ ...newNecklace, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
    }
  };

  const postNewNecklace = () => {
    if (newNecklace.name?.length === 0) {
      alert("Du må gi smykket et navn ✨");
    } else if (newNecklace.brand?.length === 0) {
      alert("Du må gi smykket et merke 🌟");
    } else if (newNecklace.material?.length === 0) {
      alert("Du må gi smykket et materiale 👑");
    } else if (newNecklace.image?.length === 0) {
      alert("Du må gi smykket et bilde 💎");
    } else if (newNecklace.price === 0) {
      alert("Du må gi smykket en pris 💰");
    } else {
      NecklaceService.postNewNecklace(newNecklace, newImage as File);
    }
  };

  return (
    <Col className="create font-link mx-3 p-4">
      <Row>
        <h4>Design ditt eget kjede</h4>
      </Row>
      <Row>
        <Col sm={6}>
          <input
            onChange={handleChange}
            placeholder="Navn på smykke..."
            name="name"
            type="text"
            className="form-control shadow-none my-3"
          />
          <input
            onChange={handleChange}
            placeholder="Materiale..."
            name="material"
            type="text"
            className="form-control shadow-none my-3"
          />
          <input
            onChange={handleChange}
            placeholder="Designet av..."
            name="brand"
            type="text"
            className="form-control shadow-none my-3"
          />
        </Col>
        <Col sm={6}>
          <input
            onChange={handleChange}
            placeholder="Pris på smykke..."
            name="price"
            type="text"
            className="form-control shadow-none my-3"
          />
          <Form.Control type="file" name="image" onChange={handleChange} />

          <input
            type="button"
            className="btn btn-outline-light my-3 w-100"
            value="Lagre design"
            onClick={postNewNecklace}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default CreateNecklaceForm;
