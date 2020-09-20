import { people } from "./people.dat";

export default function handler(req, res) {
  res.status(200).json(people);
}
