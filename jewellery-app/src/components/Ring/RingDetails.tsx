import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { RingContext } from "../../contexts/RingContext";
import { RingContextType } from "../../types/RingContextType";
import { IRing } from "../../interfaces/IRing";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { RingService } from "../../services/RingService";
import { Link, useHistory } from "react-router-dom";
import "../../components/Shared/cards.css";

const RingDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const deleteRing = () => {
    console.log("Ring deleted " + ring?.name);
    RingService.deleteRing(id);
    history.push("/rings");
  };

  const [ring, newRing] = useState<IRing>({
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
  };

  const { getRingById } = useContext(RingContext) as RingContextType;

  useEffect(() => {
    if (id) {
      const _ring = getRingById(id);
      newRing(_ring);
    }
  }, []);

  return (
    <>
      <Row className="product-card-detail font-link p-3 my-3 mx-2">
        <Col sm={7} md={7} lg={8} xl={8}>
          <img
            className="img-fluid w-75"
            src={`https://localhost:5001/images/${ring?.image}`}
            alt={ring?.name}
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
                onClick={deleteRing}
                size="lg"
                className="delete-icon"
              />
            </Col>
          </Row>
          <Row>
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
          <Row>
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
        </Col>
      </Row>
    </>
  );
};

export default RingDetails;
