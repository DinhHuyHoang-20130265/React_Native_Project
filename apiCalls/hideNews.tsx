import axios from "axios";
import { globalUrl } from "./globalUrl";

export const hideNews = async (props: any) => {
  const url = `http://${globalUrl}/api/news/hidden/${props.id}`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  try {
    return await axios.put(url, {}, {
      headers: authHeader
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};