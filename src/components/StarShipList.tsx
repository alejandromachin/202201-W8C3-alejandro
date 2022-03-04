import { useEffect } from "react";
import { useState } from "react";
import ResponseApi from "./Types/ResponseApi";
import StarShip from "./Types/StarShip";

interface StarShipListProps {
  starships: StarShip[];
}

const StarShipList = ({ starships }: StarShipListProps): JSX.Element => {
  const [numberOfStarships, setnumberOfStarships] = useState<number>(0);
  const [starShips, setStarShips] = useState<StarShip[]>([]);

  const callApi = async () => {
    const response: Response = await fetch("https://swapi.dev/api/starships/");
    const starShipsAPI: StarShip[] = await response.json();
    setStarShips(starShipsAPI);
  };

  useEffect(() => {
    callApi();
  });

  return (
    <>
      <h1>{numberOfStarships}</h1>
    </>
  );
};

export default StarShipList;
