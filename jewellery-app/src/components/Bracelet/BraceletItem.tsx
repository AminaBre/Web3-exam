import { FC } from "react";
import { BraceletService } from "../../services/BraceletService";
import { IBracelet } from "../../interfaces/IBracelet";
import { Row, Col } from "react-bootstrap";

const deleteBracelet = () => {
  console.log("Deleted");
};

const BraceletItem: FC<IBracelet> = ({
  id,
  material,
  image,
  name,
  brand,
  price,
}) => {
  return (
    <Col className="p-3 bg-danger my-3">
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
          <h4>{material}</h4>
          <h4>{brand}</h4>
          <h4>{price}</h4>
          <input type="button" value="Edit"></input>
          <input type="button" value="Delete" onClick={deleteBracelet}></input>
        </Col>
      </Row>
    </Col>
  );
};

export default BraceletItem;
