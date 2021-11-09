import { FC, useContext, useState, ChangeEvent } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import { BraceletService } from "../../services/BraceletService";
import { Row, Col } from "react-bootstrap";

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
    <Col className="bg-danger p-4">
      <Row><h4>Design ditt eget armbånd</h4></Row>
      <Row>
      <Col sm={6} md={6} lg={6} xl={6}>
        <input onChange={handleChange} placeholder="Navn på smykke..." name="name" type="text" />
        <input onChange={handleChange} placeholder="Materiale..." name="material" type="text" />
        <input onChange={handleChange} placeholder="Designet av..." name="brand" type="text" />
        </Col>
        <Col sm={6} md={6} lg={6} xl={6}>
        <input onChange={handleChange} placeholder="Pris på smykke..." name="price" type="text" />
        <input onChange={handleChange} placeholder="Last opp bilde" name="image" type="file" />
    </Col>
    <Row className="mt-4 px-4"><input type="button" value="Lagre design" onClick={postNewBracelet} /></Row>
    </Row>
    </Col>
  );
};

export default CreateBraceletForm;
