import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { RingContext } from "../../contexts/RingContext";
import { RingContextType } from "../../types/RingContextType";
import { IRing } from "../../interfaces/IRing";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { RingService } from "../../services/RingService";
import { useHistory } from "react-router-dom";
import "../../components/Shared/cards.css";

const RingDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { deleteRing, getRingById } = useContext(
    RingContext
  ) as RingContextType;

  const history = useHistory();

  const [ring, newRing] = useState<IRing>({
    id: "",
    name: "",
    material: "",
    brand: "",
    image: "",
    price: 0,
  });

  useEffect(() => {
    const _ring = getRingById(id);
    console.log("getting ring with id: ", id);
    newRing(_ring);
  }, []);

  const deleteSelectedRing = () => {
    console.log("Ring deleted " + ring?.name);
    RingService.deleteSelectedRing(id);
    deleteRing(ring);
    history.push("/rings");
  };

  const goBack = () => {
    history.push("/rings");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    switch (name) {
      case "name":
        var { value } = event.target;
        newRing({
          ...ring,
          name: value,
        });
        break;
      case "brand":
        var { value } = event.target;
        newRing({
          ...ring,
          brand: value,
        });
        break;
      case "material":
        var { value } = event.target;
        newRing({
          ...ring,
          material: value,
        });
        break;
      case "price":
        var { value } = event.target;
        newRing({
          ...ring,
          price: parseInt(value),
        });
        break;
    }
  };

  const editRing = () => {
    RingService.editRing(id, ring);
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
              src={`https://localhost:5001/images/${ring?.image}`}
              alt={ring?.name}
            />
          </Col>
          <Col sm={5}>
            <Row className="mx-2">
              <input
                onChange={handleChange}
                placeholder={"Navn: " + ring?.name}
                name="name"
                type="text"
                className="form-control shadow-none my-3"
              />
              <input
                onChange={handleChange}
                placeholder={"Materiale: " + ring?.material}
                name="material"
                type="text"
                className="form-control shadow-none my-3"
              />
              <input
                onChange={handleChange}
                placeholder={"Merke: " + ring?.brand}
                name="brand"
                type="text"
                className="form-control shadow-none my-3"
              />
              <input
                onChange={handleChange}
                placeholder={"Pris: " + ring?.price}
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
                  onClick={editRing}
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
                  onClick={deleteSelectedRing}
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

export default RingDetails;
