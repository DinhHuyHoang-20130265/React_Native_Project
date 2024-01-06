import axios from "axios";
import { globalUrl } from "./globalUrl";

export const updatePassword = async (props: any) => {
  const url = `http://${globalUrl}:8080/api/users/update-password/${props.id}`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  try {
   return  await axios.put(url,{}, {
      headers: authHeader
    });


  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};