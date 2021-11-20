import { FC, useContext, useState, ChangeEvent } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import { BraceletService } from "../../services/BraceletService";
import { Row, Col, Form } from "react-bootstrap";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";

const CreateBraceletForm: FC = () => {
  const { bracelets, addBracelet } = useContext(
    BraceletContext
  ) as BraceletContextType;

  const [newBracelet, setNewBracelet] = useState<IBracelet>({
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
        if (value.length === 0) {
          console.log("Fyll ut pris");
        } else {
          setNewBracelet({
            ...newBracelet,
            price: parseInt(value),
          });
        }
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
    if (newBracelet.name?.length === 0) {
      alert("Du må gi smykket et navn ✨");
    } else if (newBracelet.brand?.length === 0) {
      alert("Du må gi smykket et merke 🌟");
    } else if (newBracelet.material?.length === 0) {
      alert("Du må gi smykket et materiale 👑");
    } else if (newBracelet.image?.length === 0) {
      alert("Du må gi smykket et bilde 💎");
    } else if (newBracelet.price === 0) {
      alert("Du må gi smykket en pris 💰");
    } else {
      BraceletService.postNewBracelet(newBracelet, newImage as File);
      addBracelet(newBracelet);
    }
  };

  return (
    <Col className="create font-link mx-3 p-4">
      <Row>
        <h4>Design ditt eget armbånd</h4>
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
            onClick={postNewBracelet}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default CreateBraceletForm;
