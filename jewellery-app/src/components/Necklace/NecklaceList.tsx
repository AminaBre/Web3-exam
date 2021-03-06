import { FC, useContext, useState } from "react";
import { INecklace } from "../../interfaces/INecklace";
import NecklaceItem from "./NecklaceItem";
import CreateNecklaceForm from "./CreateNecklaceForm";
import { Row, Col } from "react-bootstrap";
import "../Shared/cards.css";
import { NecklaceContext } from "../../contexts/NecklaceContext";
import { NecklaceContextType } from "../../types/NecklaceContextType";

const NecklaceList: FC = () => {
  const { necklaces } = useContext(NecklaceContext) as NecklaceContextType;
  const [searchTerm, setSearchTerm] = useState("");

  const createStateNecklaceList = () => {
    return necklaces
      ?.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      })
      .map((necklace: INecklace, key: number) => {
        return (
          <Col sm={12} md={6} lg={6} xl={6} key={key} className="product-card">
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
      <Col>
        <Row>
          <Col>
            <p>Totalt antall kjeder: {necklaces?.length}</p>
          </Col>
          <Col>
            <div className="input-group">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Søk etter kjede..."
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
        <Row>{createStateNecklaceList()}</Row>
        <Row>
          <CreateNecklaceForm />
        </Row>
      </Col>
    </>
  );
};

export default NecklaceList;
