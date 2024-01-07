import axios from "axios";
import { globalUrl } from "./globalUrl";

export const updateNews = async (props: any) => {
  const url = `http://${globalUrl}:8080/api/news/${props.id}`;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${props.username}:${props.password}`).toString("base64")}` };
  try {
    return await axios.put(url, {
      title: props.title,
      description: props.description,
      image: props.image,
      content: props.content,
      createdBy: props.fullName,
      idCategories: props.idCategories
    }, {
      headers: authHeader
    });
  } catch (error) {
    console.error("Error fetching cates:", error);
    throw error;
  }
};
