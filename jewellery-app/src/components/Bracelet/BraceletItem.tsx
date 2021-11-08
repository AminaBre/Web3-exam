import { FC } from "react";
import { BraceletService } from "../../services/BraceletService";
import { IBracelet } from "../../interfaces/IBracelet";

const deleteBracelet = () => {
  console.log("Deleted");
};

const BraceletItem: FC<IBracelet> = ({
  id,
  material,
  image,
  name,
  brand,
  price,
}) => {
  return (
    <article>
      <img
        className="img-fluid"
        src={`https://localhost:5001/images/${image}`}
        alt={name}
        width="300"
        height="300"
      />
      <h3>{name}</h3>
      <h4>{material}</h4>
      <h4>{brand}</h4>
      <h4>{price}</h4>
      <input type="button" value="Edit"></input>
      <input type="button" value="Delete" onClick={deleteBracelet}></input>
    </article>
  );
};

export default BraceletItem;
