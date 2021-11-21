import { FC, useContext, useState, ChangeEvent } from "react";
import { IRing } from "../../interfaces/IRing";
import { RingService } from "../../services/RingService";
import { Row, Col, Form } from "react-bootstrap";
import { RingContext } from "../../contexts/RingContext";
import { RingContextType } from "../../types/RingContextType";

const CreateRingForm: FC = () => {
  const { rings, addRing } = useContext(RingContext) as RingContextType;

  const [newRing, setNewRing] = useState<IRing>({
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
        setNewRing({
          ...newRing,
          name: value,
        });
        break;
      case "brand":
        var { value } = event.target;
        setNewRing({
          ...newRing,
          brand: value,
        });
        break;
      case "material":
        var { value } = event.target;
        setNewRing({
          ...newRing,
          material: value,
        });
        break;
      case "price":
        var { value } = event.target;
        if (value.length === 0) {
          console.log("Fyll ut pris");
        } else {
          setNewRing({
            ...newRing,
            price: parseInt(value),
          });
        }
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewRing({ ...newRing, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
    }
  };

  const postNewRing = () => {
    if (newRing.name?.length === 0) {
      alert("Du må gi smykket et navn ✨");
    } else if (newRing.brand?.length === 0) {
      alert("Du må gi smykket et merke 🌟");
    } else if (newRing.material?.length === 0) {
      alert("Du må gi smykket et materiale 👑");
    } else if (newRing.image?.length === 0) {
      alert("Du må gi smykket et bilde 💎");
    } else if (newRing.price === 0) {
      alert("Du må gi smykket en pris 💰");
    } else if (isNaN(newRing.price)) {
      alert("Du må skrive pris med tall");
    } else {
      RingService.postNewRing(newRing, newImage as File);
      addRing(newRing);
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
            onClick={postNewRing}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default CreateRingForm;
