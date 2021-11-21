import { FC, useContext, useEffect, useRef, useState } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import CreateBraceletForm from "./CreateBraceletForm";
import { Row, Col } from "react-bootstrap";
import "../Shared/cards.css";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";
import { BraceletService } from "../../services/BraceletService";

const BraceletList: FC = () => {
  const { bracelets } = useContext(BraceletContext) as BraceletContextType;
  const [searchTerm, setSearchTerm] = useState("");
  const [oldBracelets, setBracelets] = useState<IBracelet[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    async function getBracelets() {
      const bracelet = await BraceletService.getAll();
      setBracelets(bracelet);
    }
    getBracelets();
  }, []);

  const createStateBraceletList = () => {
    return bracelets
      ?.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((bracelet: IBracelet, key: number) => {
        return (
          <Col sm={12} md={6} lg={6} xl={6} key={key} className="product-card">
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
      <Col>
        <Row>
          <Col>
            <p>Totalt antall armbånd: {bracelets?.length}</p>
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
        <Row>{createStateBraceletList()}</Row>
        <Row>
          <CreateBraceletForm />
        </Row>
      </Col>
    </>
  );
};

export default BraceletList;
