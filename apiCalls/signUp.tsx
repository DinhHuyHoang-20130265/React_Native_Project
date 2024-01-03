import axios from "axios";
import { globalUrl } from "./globalUrl";

export const signUp = async (name: string, email: string, password: string) => {
  const url = `http://${globalUrl}:8080/api/auth/register`;
  const requestBody = {
    fullName: name,
    password: password,
    email: email
  };

  try {
    const response = await axios.post(url, requestBody);

    if (response.status === 200) {
      console.log("Sign Up Successful!");
    } else {
      console.error("Sign up failed because :", response.data.body);
    }
  } catch (error) {
    console.error("Error during signUp:", error);
    throw error;
  }
};