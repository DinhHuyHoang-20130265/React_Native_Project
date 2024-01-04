import axios from "axios";
import { globalUrl } from "./globalUrl";

export const addUser = async (props: any) => {
  const url = `http://${globalUrl}:8080/api/users`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  const body = {
    fullName: props.fullName,
    email: props.email,
    password: props.password,
    status: props.status,
    isAdmin: props.isAdmin
  };
  try {
    const response = await axios.post(url, body, {
      headers: authHeader
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};