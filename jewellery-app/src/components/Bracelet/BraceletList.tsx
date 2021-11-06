import { FC, useContext } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";
import { Container, Row, Col } from "react-bootstrap";

const BraceletList: FC = () => {
  const { bracelets } = useContext(BraceletContext) as BraceletContextType;

  const createBraceletList = () => {
    return bracelets.map((bracelet: IBracelet, key: number) => {
      //For hvert armbånd vi finner...
      return (
        <Col md={6} lg={6} xl={3} key={key}>
          <BraceletItem
            id={bracelet.id}
            material={bracelet.material}
            image={bracelet.image}
            name={bracelet.name}
            brand={bracelet.brand}
            price={bracelet.price}
          />
        </Col>
      );
    });
  };

  return (
    <>
      <Row>
        <section>
          <p>Antall armbånd: {bracelets.length}</p>
        </section>
      </Row>
      <Row>{createBraceletList()}</Row>
    </>
  );
};

export default BraceletList;
