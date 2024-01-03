import Tts from "react-native-tts";
import {
  View,
  StyleSheet
} from "react-native";
//@ts-ignore
import CircleButton from "react-native-circle-floatmenu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Speech = (props: any) => {

  // @ts-ignore
  const resultArray = props.context.map(item => item.p).filter(value => value !== undefined && value !== null);
  const result = resultArray.join(", ");

  const androidConfig = {
    KEY_PARAM_PAN: 0,
    KEY_PARAM_VOLUME: 1, // 0 means silence
    KEY_PARAM_STREAM: "STREAM_MUSIC"
  };

  const handlePlay = () => {
    Tts.requestInstallEngine();
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage("vi-VN");
      // @ts-ignore
      Tts.speak(result, androidConfig);
    });
  };
  const handleStop = () => {
    Tts.stop();
  };

  return (
    <View style={styles.btn_container}>
      <CircleButton buttonColor="rgba(96, 220, 43, 0.9)" position={"right"}>
        <CircleButton.Item
          position="absolute"
          buttonColor="rgba(96, 220, 43, 0.8)"
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
          onPress={() => console.log("BtnPress")}
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
