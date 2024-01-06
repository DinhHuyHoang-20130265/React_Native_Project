import axios from "axios";
import { globalUrl } from "./globalUrl";

export const addNews = async (props: any) => {
  const url = `http://${globalUrl}:8080/api/news`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  const body = {
    title: props.title,
    description: props.desc,
    image: props.img,
    content: props.content,
    createdBy: props.name,
    idCategories: props.cates
  };
  try {
    return await axios.post(url, body, {
      headers: authHeader
    });
  } catch (error) {
    console.error("Error fetching cates:", error);
    throw error;
  }
};
