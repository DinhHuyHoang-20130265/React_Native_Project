import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalUrl } from "./globalUrl";

export const loginUser = async (username: string, password: string) => {
  const url = `http://${globalUrl}:8080/api/auth/login`;
  const requestBody = {
    email: username,
    password: password
  };

  try {
    const response = await axios.post(url, requestBody);

    if (response.status === 200) {
      await AsyncStorage.setItem("userObj", JSON.stringify(response.data.body));
      console.log("Login successful!");
    } else {
      console.error("Login failed. Status code:", response.status);
    }
  } catch (error) {
    console.error("Error during loginUser:", error);
    throw error;
  }
};