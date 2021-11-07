import { FC } from "react";
import { IRing } from "../../interfaces/IRing";

const RingItem: FC<IRing> = ({ id, material, image, name, brand, price }) => {
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
    </article>
  );
};

export default RingItem;