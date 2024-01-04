import axios from "axios";
import { globalUrl } from "./globalUrl";

export const listCate = async () => {
  const url = `http://${globalUrl}:8080/api/cate/all`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
