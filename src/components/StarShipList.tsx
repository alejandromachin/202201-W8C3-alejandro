import { useState } from "react";
import StarShip from "./Types/StarShip";

interface StarShipListProps {
  starships: StarShip[];
}

const StarShipList = ({ starships }: StarShipListProps): JSX.Element => {
  const [numberOfStarships, setnumberOfStarships] = useState<number>(0);

  return (
    <>
      <h1>{numberOfStarships}</h1>
    </>
  );
};

export default StarShipList;
