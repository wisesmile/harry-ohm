import { people } from "./star-wars";

export default function handler(req, res) {
  res.status(200).json(people);
}
