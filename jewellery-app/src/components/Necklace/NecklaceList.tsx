import { FC, useContext } from "react";
import { INecklace } from "../../interfaces/INecklace";
import NecklaceItem from "./NecklaceItem";
import { NecklaceContext } from "../../contexts/NecklaceContext";
import { NecklaceContextType } from "../../types/NecklaceContextType";
import { Container, Row, Col } from "react-bootstrap";

const NecklaceList: FC = () => {
  const { necklaces } = useContext(NecklaceContext) as NecklaceContextType;

  const createNecklaceList = () => {
    return necklaces.map((necklace: INecklace, key: number) => {
      //For hvert armbånd vi finner...
      return (
        <Col md={6} lg={6} xl={3} key={key}>
          <NecklaceItem
            id={necklace.id}
            material={necklace.material}
            image={necklace.image}
            name={necklace.name}
            brand={necklace.brand}
            price={necklace.price}
          />
        </Col>
      );
    });
  };

  return (
    <>
      <Row>
        <section>
          <p>Antall armbånd: {necklaces.length}</p>
        </section>
      </Row>
      <Row>{createNecklaceList()}</Row>
    </>
  );
};

export default NecklaceList;
