import axios from "axios";
import { globalUrl } from "./globalUrl";

export const allNews = async () => {
  const url = `http://${globalUrl}:8080/api/news`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
