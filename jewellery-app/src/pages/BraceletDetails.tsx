import { FC, useContext, useEffect, useState } from "react";
import { BraceletContext } from "../contexts/BraceletContext";
import { BraceletContextType } from "../types/BraceletContextType";
import { IBracelet } from "../interfaces/IBracelet";
import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BraceletService } from "../services/BraceletService";

const BraceletDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [oldBracelet, newBracelet] = useState<IBracelet[]>();

  const deleteBracelet = () => {
    console.log("Bracelet deleted " + bracelet?.name);

    //let strid: string = id ?? "";

    //BraceletService.deleteBracelet(strid);
    //window.location.reload();
  };

  const editBracelet = () => {
    console.log("Edited bracelet " + bracelet?.name);

    //let strid: string = id ?? "";
    /*let editedBracelet: IBracelet = {
      id: strid,
      name: "test",
      brand: "merke",
    };*/

    //BraceletService.editBracelet(strid, editedBracelet);
  };

  const { getBraceletById } = useContext(
    BraceletContext
  ) as BraceletContextType;

  const [bracelet, setBracelet] = useState<IBracelet>();

  useEffect(() => {
    if (id) {
      const _bracelet = getBraceletById(id);
      setBracelet(_bracelet);
    }
  }, []);

  return (
    <>
      <Row className="bracelet-item font-link p-3 my-3 mx-2">
        <Col sm={7} md={7} lg={8} xl={8}>
          <img
            className="img-fluid w-75"
            src={`https://localhost:5001/images/${bracelet?.image}`}
            alt={bracelet?.name}
          />
        </Col>
        <Col sm={5} md={5} lg={4} xl={4}>
          <Row className="delete-icon">
            <Col>
              <h2>Rediger</h2>
            </Col>
            <Col>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={deleteBracelet}
                size="lg"
              />
            </Col>
          </Row>
          <Row>
            <input
              placeholder={bracelet?.name}
              name="name"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              placeholder={bracelet?.material}
              name="name"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              placeholder={bracelet?.brand}
              name="name"
              type="text"
              className="form-control shadow-none my-3"
            />
            <input
              placeholder="Forslag til pris"
              name="name"
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
              />
            </Col>
            <Col xs={2}>
              <FontAwesomeIcon icon={faPencilAlt} size="lg" className="my-4" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BraceletDetails;
