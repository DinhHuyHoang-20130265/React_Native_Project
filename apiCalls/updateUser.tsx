import axios from "axios";
import { globalUrl } from "./globalUrl";

export const updateUser = async (props: any) => {
  const url = `http://${globalUrl}:8080/api/users/${props.id}`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  const body = {
    fullName: props.fullName,
    email: props.email,
    status: props.status,
    isAdmin: props.isAdmin
  };
  try {
    const response = await axios.put(url, body, {
      headers: authHeader
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};