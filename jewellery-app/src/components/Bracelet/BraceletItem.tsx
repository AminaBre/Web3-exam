import React, { FC, MouseEvent } from "react";
import { BraceletService } from "../../services/BraceletService";
import { IBracelet } from "../../interfaces/IBracelet";
import { Row, Col } from "react-bootstrap";
import "./bracelet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <Link to={`/bracelet-details/${id}`}>
        <Row className="bracelet-item font-link p-3 my-3 mx-2">
          <Col sm={7} md={7} lg={8} xl={8}>
            <img
              className="img-fluid"
              src={`https://localhost:5001/images/${image}`}
              alt={name}
            />
          </Col>
          <Col sm={5} md={5} lg={4} xl={4} className="mt-4">
            <h3>{name}</h3>
            <h5>{material}</h5>
            <h5>{brand}</h5>
            <h3>{price}</h3>
          </Col>
        </Row>
      </Link>
    </>
  );
};

export default BraceletItem;
