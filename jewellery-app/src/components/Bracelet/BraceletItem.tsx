import { FC } from "react";
import { IBracelet } from "../../interfaces/IBracelet";

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
        width="300"
        height="300"
      />
      <h3>{name}</h3>
      <h4>{material}</h4>
      <h4>{brand}</h4>
      <h4>{price}</h4>
    </article>
  );
};

export default BraceletItem;
