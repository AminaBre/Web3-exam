import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";
import { IBracelet } from "../../interfaces/IBracelet";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BraceletService } from "../../services/BraceletService";
import { Link, useHistory } from "react-router-dom";
import "../../components/Shared/cards.css";

const BraceletDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const deleteBracelet = () => {
    console.log("Bracelet deleted " + bracelet?.name);
    BraceletService.deleteBracelet(id);
    history.push("/bracelets");
  };

  const [bracelet, newBracelet] = useState<IBracelet>({
    id: "",
    name: "",
    material: "",
    brand: "",
    image: "",
    price: 0,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    switch (name) {
      case "name":
        var { value } = event.target;
        newBracelet({
          ...bracelet,
          name: value,
        });
        break;
      case "brand":
        var { value } = event.target;
        newBracelet({
          ...bracelet,
          brand: value,
        });
        break;
      case "material":
        var { value } = event.target;
        newBracelet({
          ...bracelet,
          material: value,
        });
        break;
      case "price":
        var { value } = event.target;
        newBracelet({
          ...bracelet,
          price: parseInt(value),
        });
        break;
    }
  };

  const editBracelet = () => {
    BraceletService.editBracelet(id, bracelet);
  };

  const { getBraceletById } = useContext(
    BraceletContext
  ) as BraceletContextType;

  useEffect(() => {
    if (id) {
      const _bracelet = getBraceletById(id);
      newBracelet(_bracelet);
    }
  }, []);

  return (
    <>
      <Row className="product-card-detail font-link p-3 my-3 mx-2">
        <Col sm={7} md={7} lg={8} xl={8}>
          <img
            className="img-fluid w-75"
            src={`https://localhost:5001/images/${bracelet?.image}`}
            alt={bracelet?.name}
          />
        </Col>
        <Col sm={5} md={5} lg={4} xl={4}>
          <Row className="delete">
            <Col>
              <h2>Rediger</h2>
            </Col>
            <Col>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={deleteBracelet}
                size="lg"
                className="delete-icon"
              />
            </Col>
          </Row>
          <Row>
            <input
              onChange={handleChange}
              placeholder={"Navn: " + bracelet?.name}
              name="name"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              onChange={handleChange}
              placeholder={"Materiale: " + bracelet?.material}
              name="material"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              onChange={handleChange}
              placeholder={"Merke: " + bracelet?.brand}
              name="brand"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              onChange={handleChange}
              placeholder={"Pris: " + bracelet?.price}
              name="price"
              type="text"
              className="form-control shadow-none my-3"
            />
          </Row>
          <Row>
            <Col xs={10}>
              <input
                type="button"
                className="btn btn-outline-dark my-3 w-100"
                value="Oppdater smykke"
                onClick={editBracelet}
              />
            </Col>
            <Col xs={2}>
              <FontAwesomeIcon
                icon={faPencilAlt}
                size="lg"
                className="my-4 edit-icon"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BraceletDetails;
