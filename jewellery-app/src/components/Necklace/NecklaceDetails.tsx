import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { NecklaceContext } from "../../contexts/NecklaceContext";
import { NecklaceContextType } from "../../types/NecklaceContextType";
import { INecklace } from "../../interfaces/INecklace";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NecklaceService } from "../../services/NecklaceService";
import { useHistory } from "react-router-dom";
import "../../components/Shared/cards.css";

const NecklaceDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { deleteNecklace, getNecklaceById } = useContext(
    NecklaceContext
  ) as NecklaceContextType;

  const history = useHistory();

  const [necklace, newNecklace] = useState<INecklace>({
    id: "",
    name: "",
    material: "",
    brand: "",
    image: "",
    price: 0,
  });

  useEffect(() => {
    const _necklace = getNecklaceById(id);
    console.log("getting necklace with id: ", id);
    newNecklace(_necklace);
  }, []);

  const deleteSelectedNecklace = () => {
    console.log("Necklace deleted " + necklace?.name);
    NecklaceService.deleteSelectedNecklace(id);
    deleteNecklace(necklace);
    history.push("/necklaces");
  };

  const goBack = () => {
    history.push("/necklaces");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    switch (name) {
      case "name":
        var { value } = event.target;
        newNecklace({
          ...necklace,
          name: value,
        });
        break;
      case "brand":
        var { value } = event.target;
        newNecklace({
          ...necklace,
          brand: value,
        });
        break;
      case "material":
        var { value } = event.target;
        newNecklace({
          ...necklace,
          material: value,
        });
        break;
      case "price":
        var { value } = event.target;
        newNecklace({
          ...necklace,
          price: parseInt(value),
        });
        break;
    }
  };

  const editNecklace = () => {
    NecklaceService.editNecklace(id, necklace);
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
              src={`https://localhost:5001/images/${necklace?.image}`}
              alt={necklace?.name}
            />
          </Col>
          <Col sm={5}>
            <Row className="mx-2">
              <input
                onChange={handleChange}
                placeholder={"Navn: " + necklace?.name}
                name="name"
                type="text"
                className="form-control shadow-none my-3"
              />
              <input
                onChange={handleChange}
                placeholder={"Materiale: " + necklace?.material}
                name="material"
                type="text"
                className="form-control shadow-none my-3"
              />
              <input
                onChange={handleChange}
                placeholder={"Merke: " + necklace?.brand}
                name="brand"
                type="text"
                className="form-control shadow-none my-3"
              />
              <input
                onChange={handleChange}
                placeholder={"Pris: " + necklace?.price}
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
                  onClick={editNecklace}
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
                  onClick={deleteSelectedNecklace}
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

export default NecklaceDetails;
