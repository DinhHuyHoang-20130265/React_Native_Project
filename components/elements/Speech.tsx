import Tts from "react-native-tts";
import {
  View,
  StyleSheet, ToastAndroid
} from "react-native";
//@ts-ignore
import CircleButton from "react-native-circle-floatmenu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { addBookmark } from "../../apiCalls/addBookmark";

const Speech = (props: any) => {
  // @ts-ignore
  const resultArray = props.context.map(item => item.p).filter(value => value !== undefined && value !== null);
  const result = resultArray.join(", ");

  const androidConfig = {
    KEY_PARAM_PAN: 0,
    KEY_PARAM_VOLUME: 1,
    KEY_PARAM_STREAM: "STREAM_MUSIC"
  };

  const handlePlay = () => {
    console.log(result);
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage("vi-VN").then(r => console.log("sucess"));
      // @ts-ignore
      Tts.speak(result, androidConfig);
    });
  };
  const handleStop = () => {
    Tts.stop();
  };
  const handleSave = async () => {
      try {
        const response = await addBookmark({
          userId: props.user.id,
          newId: props.item.id,
          username: props.user.email,
          password: props.user.password
        });
        switch (response.data) {
          case "Add bookmark success": {
            ToastAndroid.showWithGravity(
              "Thêm vào tin tức đã lưu thành công",
              ToastAndroid.LONG,
              ToastAndroid.CENTER
            );
            break;
          }
          case "News already bookmark": {
            ToastAndroid.showWithGravity(
              "Tin tức đã được lưu trước đó",
              ToastAndroid.LONG,
              ToastAndroid.CENTER
            );
            break;
          }
          default: {
            ToastAndroid.showWithGravity(
              "Có lỗi trong quá trình xử lý",
              ToastAndroid.LONG,
              ToastAndroid.CENTER
            );
            break;
          }

        }
      } catch (error){
        console.error("Error while saving news:", error);
      }
    }
  ;

  return (
    <View style={styles.btn_container}>
      <CircleButton buttonColor="rgba(96, 220, 43, 0.9)" position={"right"}>
        <CircleButton.Item
          position="absolute"
          buttonColor="rgba(96, 220, 43, 1)"
          title="Play"
          onPress={handlePlay}
        >
          <Icon
            name="play"
            style={styles.circleButtonIcon}
          />
        </CircleButton.Item>
        <CircleButton.Item
          position="absolute"
          buttonColor="rgba(96, 220, 43, 0.8)"
          title="Stop"
          onPress={handleStop}
        >
          <Icon name="stop" style={styles.circleButtonIcon} />
        </CircleButton.Item>
        <CircleButton.Item
          position="absolute"
          buttonColor="rgba(96, 220, 43, 0.8)"
          title="Bookmark"
          onPress={props.user ? handleSave : () => {
            ToastAndroid.showWithGravity(
              "Bạn cần đăng nhập để thực hiện chức năng này",
              ToastAndroid.LONG,
              ToastAndroid.CENTER
            );
          }}
        >
          <Icon
            name="bookmark"
            style={styles.circleButtonIcon}
          />
        </CircleButton.Item>
      </CircleButton>
    </View>
  );
};
const styles = StyleSheet.create({
  btn_container: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  circleButtonIcon: {
    fontSize: 20,
    height: 25,
    color: "rgb(255,204,204)"
  }
});

export default Speech;
