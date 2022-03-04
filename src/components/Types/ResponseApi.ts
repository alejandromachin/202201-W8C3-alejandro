import StarShip from "./StarShip";

interface ResponseApi {
  count: number;
  next: string;
  previous: string | null;
  results: StarShip[];
}

export default ResponseApi;
