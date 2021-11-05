import { FC, useContext } from "react";
import { IBracelet } from "../../interfaces/IBracelet";
import BraceletItem from "./BraceletItem";
import BraceletList from "./BraceletList";
import { BraceletContext } from "../../contexts/BraceletContext";
import { BraceletContextType } from "../../types/BraceletContextType";
import { useState, ChangeEvent } from "react";

const CreateBracelet: FC = () => {
  const [newBracelet, setNewBracelet] = useState("");

  const handleChange = (event: any) => {
    const title = event.target.value;
    setNewBracelet(title);
  };

  const addBracelet = () => {};

  return (
    <section>
      <p>Design ditt eget armbånd</p>
      <p>{newBracelet}</p>
      <div>
        <label>Navn</label>
        <input type="text" onChange={handleChange} />
        <label>Merke</label>
        <input type="text" onChange={handleChange} />
        <label>Materiale</label>
        <input type="text" onChange={handleChange} />
        <label>Pris</label>
        <input type="text" onChange={handleChange} />
      </div>
      <input type="button" value="Legg til armbånd" onClick={addBracelet} />
    </section>
  );
};

export default CreateBracelet;
