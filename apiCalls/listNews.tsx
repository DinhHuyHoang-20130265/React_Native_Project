import axios from "axios";
import { globalUrl } from "./globalUrl";

export const listNews = async (id: any) => {
  const listNewsEndpoint = `http://${globalUrl}/api/news/cate/${id}`;

  try {
    const response = await axios.get(listNewsEndpoint, {
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
