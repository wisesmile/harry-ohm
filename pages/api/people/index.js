import { people } from "../../../data/star-wars";

export default function handler(req, res) {
  res.status(200).json(people);
}
