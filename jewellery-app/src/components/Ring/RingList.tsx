import { FC, useContext } from "react";
import { IRing } from "../../interfaces/IRing";
import RingItem from "./RingItem";
import { RingContext } from "../../contexts/RingContext";
import { RingContextType } from "../../types/RingContextType";
import { Container, Row, Col } from "react-bootstrap";

const RingList: FC = () => {
  const { rings } = useContext(RingContext) as RingContextType;

  const createRingList = () => {
    return rings.map((ring: IRing, key: number) => {
      //For hvert armbånd vi finner...
      return (
        <Col md={6} lg={6} xl={3} key={key}>
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
      <Row>
        <section>
          <p>Antall armbånd: {rings.length}</p>
        </section>
      </Row>
      <Row>{createRingList()}</Row>
    </>
  );
};

export default RingList;
