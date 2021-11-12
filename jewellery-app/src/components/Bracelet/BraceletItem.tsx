import React, { FC, MouseEvent } from "react";
import { BraceletService } from "../../services/BraceletService";
import { IBracelet } from "../../interfaces/IBracelet";
import { Row, Col } from "react-bootstrap";
import "./bracelet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const BraceletItem: FC<IBracelet> = ({
  id,
  material,
  image,
  name,
  brand,
  price,
}) => {
  const deleteBracelet = () => {
    console.log("Bracelet deleted " + name);

    let strid: string = id ?? "";

    BraceletService.deleteBracelet(strid);
    window.location.reload();
  };

  const editBracelet = () => {
    console.log("Clicked bracelet " + name);
    let strid: string = id ?? "";
    let bracelet: IBracelet = {
      id: strid,
      name: "test",
      brand: "merke",
    };

    BraceletService.editBracelet(strid, bracelet);
  };

  return (
    <>
      <Row className="bracelet-item font-link p-3 my-3 mx-2">
        <Col sm={7} md={7} lg={8} xl={8}>
          <img
            className="img-fluid"
            src={`https://localhost:5001/images/${image}`}
            alt={name}
          />
        </Col>
        <Col sm={5} md={5} lg={4} xl={4}>
          <Row className="delete-icon">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={deleteBracelet}
              className="w-100"
              size="lg"
            />
          </Row>
          <Row>
            <h3>{name}</h3>
            <h5>{material}</h5>
            <h5>{brand}</h5>
            <h3>{price}</h3>
          </Row>
          <Row>
            <FontAwesomeIcon
              icon={faPencilAlt}
              size="lg"
              onClick={editBracelet}
              className="w-100"
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BraceletItem;
