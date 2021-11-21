import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";
import { IBracelet } from "../../interfaces/IBracelet";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BraceletService } from "../../services/BraceletService";
import { useHistory } from "react-router-dom";
import "../../components/Shared/cards.css";

const BraceletDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { deleteBracelet, getBraceletById } = useContext(
    BraceletContext
  ) as BraceletContextType;

  const history = useHistory();

  const [bracelet, newBracelet] = useState<IBracelet>({
    id: "",
    name: "",
    material: "",
    brand: "",
    image: "",
    price: 0,
  });

  useEffect(() => {
    const _bracelet = getBraceletById(id);
    console.log("getting bracelet with id: ", id);
    newBracelet(_bracelet);
  }, []);

  const deleteSelectedBracelet = () => {
    console.log("Bracelet deleted " + bracelet?.name);
    BraceletService.deleteSelectedBracelet(id);
    deleteBracelet(bracelet);
    history.push("/bracelets");
  };

  const goBack = () => {
    history.push("/bracelets");
  };

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
    alert("Dine endringer er lagret! 🌟");
  };

  return (
    <>
      <Col className="product-card-detail font-link p-3 my-3 mx-2">
        <Row className="edit">
          <Col>
            <h2>Rediger</h2>
          </Col>
          <Col>
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={goBack}
              size="lg"
              className="edit-icon"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <img
              className="img-fluid w-75"
              src={`https://localhost:5001/images/${bracelet?.image}`}
              alt={bracelet?.name}
            />
          </Col>
          <Col sm={5}>
            <Row className="mx-2">
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
            <Row className="mx-1">
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
            <Row className="mx-1">
              <Col xs={10}>
                <input
                  type="button"
                  className="btn btn-outline-dark my-3 w-100"
                  value="Slett dette smykke"
                  onClick={deleteSelectedBracelet}
                />
              </Col>
              <Col xs={2}>
                <FontAwesomeIcon
                  icon={faTimes}
                  size="lg"
                  className="my-4 edit-icon"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default BraceletDetails;
