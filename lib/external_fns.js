import axios from "axios";
import { getRandomPriceFormat, getRandomRating } from "../utils/helpers_fns";
export async function getProducts() {
  const env = process.env.NODE_ENV;
  const useLocal = process.env.USE_LOCAL_DATA;
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=shoes&per_page=20`,
      {
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    const data = response.data.results.map((record, index) => ({
      ...record,
      price: getRandomPriceFormat(),
      productName: `Product ${index + 1}`,
      rating: getRandomRating(),
    }));
    return data;
  } catch (err) {
    console.log(err);
  }
}
