import axios from "axios";
import { globalUrl } from "./globalUrl";

export const lockUser = async (props: any) => {
  const url = `http://${globalUrl}:8080/api/users/lock/${props.id}`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  try {
    const response = await axios.put(url, {}, {
      headers: authHeader
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
