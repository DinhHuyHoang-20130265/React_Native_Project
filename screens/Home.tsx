/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  ScrollView, Image, Button
} from "react-native";
import CateHome from "../components/elements/CateHome";
import CarouselParallax from "../components/elements/CarouselParallax";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { WebView } from "react-native-webview";

const newsCategories = [
  { id: 1, title: "Thời sự" },
  { id: 2, title: "Thể thao" },
  { id: 3, title: "Giải trí" },
  { id: 4, title: "Khoa học" }
];

const Home: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<any>(null);
  const uploadImageToImgBB = async (imageData: any) => {
    const apiKey = "9a8eabc9c88fc7c1c449ffaa0fbffc4d"; // Thay thế bằng API Key của bạn
    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    const formData = new FormData();
    formData.append("image", imageData);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const data = await response.json();
      if (data && data.data && data.data.url) {
        console.log("URL của ảnh đã upload:", data.data.url);
      } else {
        console.log("Lỗi khi upload ảnh:", data.error.message);
      }
    } catch (error) {
      console.log("Lỗi khi thực hiện yêu cầu upload:", error);
    }
  };
  const imagePicker = () => {

    // @ts-ignore
    launchImageLibrary({
      mediaType: "photo",
      includeBase64: true
    }, async (response: any) => {
      if (!response.didCancel) {
        const imageData = `${response.assets[0].base64}`;
        await uploadImageToImgBB(imageData);
        setSelectedImg(response.assets[0].uri);
      }
    });
  };


  return (
    <View style={{ minHeight: "100%" }}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 70 }}>
          {<><View style={{ width: 500 }}>
            <Image width={200} height={100}
                   source={{ uri: selectedImg }} />
          </View><Button title="click" onPress={imagePicker} /></>
          }
          <CarouselParallax />
          {
            newsCategories.map((item) => <CateHome item={item} key={item.id} />)
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
