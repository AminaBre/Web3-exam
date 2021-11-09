import { FC, useContext, useEffect, useState } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import { BraceletService } from "../../services/BraceletService";
import CreateBraceletForm from "./CreateBraceletForm";
import { Row, Col } from "react-bootstrap";

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
        <Col sm={12} md={6} lg={6} xl={6} key={key}>
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
          <p>Antall armbånd: {bracelets?.length}</p>
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
