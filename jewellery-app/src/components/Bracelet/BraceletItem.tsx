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
  console.log({ name });

  return (
    <article>
      <h3>{name}</h3>
      <h4>{material}</h4>
      <img src={`https://localhost:5001/images/${image}`} />
      <h4>{brand}</h4>
      <h4>{price}</h4>
    </article>
  );
};

export default BraceletItem;
