import axios from "axios";
import { globalUrl } from "./globalUrl";

export const sendForgotCode = async (props: any) => {
  console.log(props);
  const url = `http://${globalUrl}:8080/api/auth/forgot-password`;

  const requestBody = {
    email: props.email
  };
  try {
    return await axios.post(url, requestBody);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
