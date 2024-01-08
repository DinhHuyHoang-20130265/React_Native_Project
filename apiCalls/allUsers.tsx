import axios from "axios";
import { globalUrl } from "./globalUrl";

export const allUsers = async (props: any) => {
  const url = `https://${globalUrl}/api/users`;

  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  try {
    const response = await axios.get(url, {
      headers: authHeader
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
