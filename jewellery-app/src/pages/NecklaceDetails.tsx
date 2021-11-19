import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { NecklaceContext } from "../contexts/NecklaceContext";
import { NecklaceContextType } from "../types/NecklaceContextType";
import { INecklace } from "../interfaces/INecklace";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NecklaceService } from "../services/NecklaceService";
import { useHistory } from "react-router-dom";

const NecklaceDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const deleteNecklace = () => {
    console.log("Necklace deleted " + necklace?.name);
    NecklaceService.deleteNecklace(id);
    history.push("/necklaces");
  };

  const [necklace, newNecklace] = useState<INecklace>({
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

  const { getNecklaceById } = useContext(
    NecklaceContext
  ) as NecklaceContextType;

  useEffect(() => {
    if (id) {
      const _necklace = getNecklaceById(id);
      newNecklace(_necklace);
    }
  }, []);

  return (
    <>
      <Row className="product-card-detail font-link p-3 my-3 mx-2">
        <Col sm={7} md={7} lg={8} xl={8}>
          <img
            className="img-fluid w-75"
            src={`https://localhost:5001/images/${necklace?.image}`}
            alt={necklace?.name}
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
                onClick={deleteNecklace}
                size="lg"
                className="delete-icon"
              />
            </Col>
          </Row>
          <Row>
            <input
              onChange={handleChange}
              placeholder={necklace?.name}
              name="name"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              onChange={handleChange}
              placeholder={necklace?.material}
              name="material"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              onChange={handleChange}
              placeholder={necklace?.brand}
              name="brand"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              onChange={handleChange}
              placeholder="Forslag til pris"
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
        </Col>
      </Row>
    </>
  );
};

export default NecklaceDetails;
