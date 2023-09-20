import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = {
    key: process.env.GOOGLE_MAPS_API_KEY,
    place_id: "ChIJizEoVl6NGGAR2hZeOrG5pDE",
    region: "jp",
    language: "ja",
  };

  const url = "https://maps.googleapis.com/maps/api/place/details/json";

  try {
    const response = await axios.get(url, { params });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json("Error: ");
  }
}
