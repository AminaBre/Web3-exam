import React, { FC, MouseEvent } from "react";
import { BraceletService } from "../../services/BraceletService";
import { IBracelet } from "../../interfaces/IBracelet";
import { Row, Col, Button } from "react-bootstrap";
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
      <Col className="bracelet-item font-link p-3 my-3">
        <Row>
          <Col sm={8} md={8} lg={6} xl={6}>
            <img
              className="img-fluid"
              src={`https://localhost:5001/images/${image}`}
              alt={name}
            />
          </Col>
          <Col sm={4} md={4} lg={6} xl={6}>
            <h3>{name}</h3>
            <h5>{material}</h5>
            <h5>{brand}</h5>
            <h3>{price}</h3>
            <FontAwesomeIcon icon={faTimes} onClick={deleteBracelet} />
            <FontAwesomeIcon icon={faPencilAlt} onClick={editBracelet} />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default BraceletItem;
