import axios from "axios";
import { globalUrl } from "./globalUrl";

export const deleteAllBookMarks = async (props:any) => {
  const url = `http://${globalUrl}:8080/api/users/bookmark/${props.userId}`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  try {
    const response = await axios.delete(url, {
      headers: authHeader
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
