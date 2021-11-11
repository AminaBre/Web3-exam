import { FC, useContext, useEffect, useState } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import { BraceletService } from "../../services/BraceletService";
import CreateBraceletForm from "./CreateBraceletForm";
import { Row, Col } from "react-bootstrap";
import "./bracelet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BraceletList: FC = () => {
  const [bracelets, setBracelets] = useState<IBracelet[]>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllBracelets();
  }, []);

  const getAllBracelets = async () => {
    const result = await BraceletService.getAll();
    setBracelets(result);
  };

  const createStateBraceletList = () => {
    return bracelets
      ?.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((bracelet: IBracelet, key: number) => {
        //For hvert armbånd vi finner...
        return (
          <Col sm={12} md={6} lg={6} xl={6} key={key} className="user">
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
            <p>Antall armbånd: {bracelets?.length}</p>
          </Col>
          <Col>
            <div className="input-group search-bar">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Søk etter armbånd..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <span className="input-group-addon fa-lg p-2">
                <i className="fa fa-search " />
              </span>
            </div>
          </Col>
        </Row>
        <Row></Row>
        <Row>{createStateBraceletList()}</Row>
        <Row>
          <CreateBraceletForm />
        </Row>
      </Col>
    </>
  );
};

export default BraceletList;
