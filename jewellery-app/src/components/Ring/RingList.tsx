import { FC, useContext, useState } from "react";
import { IRing } from "../../interfaces/IRing";
import RingItem from "./RingItem";
import CreateRingForm from "./CreateRingForm";
import { Row, Col } from "react-bootstrap";
import "../Shared/cards.css";
import { RingContext } from "../../contexts/RingContext";
import { RingContextType } from "../../types/RingContextType";

const RingList: FC = () => {
  const { rings } = useContext(RingContext) as RingContextType;
  const [searchTerm, setSearchTerm] = useState("");

  const createStateRingList = () => {
    return rings
      ?.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((ring: IRing, key: number) => {
        return (
          <Col sm={12} md={6} lg={6} xl={6} key={key} className="product-card">
            <RingItem
              id={ring.id}
              material={ring.material}
              image={ring.image}
              name={ring.name}
              brand={ring.brand}
              price={ring.price}
            />
          </Col>
        );
      });
  };

  return (
    <>
      <Col>
        <Row>
          <Col>
            <p>Totalt antall armbånd: {rings?.length}</p>
          </Col>
          <Col>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Søk etter armbånd..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <span className="input-group-addon fa-lg p-2">
                <i className="fa fa-search" />
              </span>
            </div>
          </Col>
        </Row>
        <Row>{createStateRingList()}</Row>
        <Row>
          <CreateRingForm />
        </Row>
      </Col>
    </>
  );
};

export default RingList;
