import { FC, useContext, useEffect, useState } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import { BraceletService } from "../../services/BraceletService";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";
import CreateBraceletForm from "./CreateBraceletForm";
import { Container, Row, Col } from "react-bootstrap";

const BraceletList: FC = () => {
  const [bracelets, setBracelets] = useState<IBracelet[]>();

  useEffect(() => {
    getAllBracelets();
  }, []);

  const getAllBracelets = async () => {
    const result = await BraceletService.getAll();
    setBracelets(result);
  };

  const createStateBraceletList = () => {
    return bracelets?.map((bracelet: IBracelet, key: number) => {
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
          <p>Antall armbånd: </p>
        </section>
      </Row>

      <h3>State-utskrift</h3>
      <Row>{createStateBraceletList()}</Row>
      <Row>
        <CreateBraceletForm />
      </Row>
    </>
  );
};

export default BraceletList;
