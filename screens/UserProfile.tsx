import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  ToastAndroid,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { ImagesAssets } from "../assets/img/ImagesAssets";
import { nameValidator } from "../helpers/nameValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { equaPassAndRepeatPass } from "../helpers/equalPassAndRepeatPass";
import { updateUserProfile } from "../apiCalls/updateUserProfile";
import { changePass } from "../apiCalls/changePass";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UserProfile: React.FC = ({ navigation }: any) => {
    const Router = useRoute();
    const [currentUser, setCurrentUser] = useState<any>(null);
    const user = useSelector((state: any) => state.userObj);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [oldPass, setOldPass] = useState<string>("");
    const [newPass, setNewPass] = useState<string>("");
    const [repeatPass, setRepeatPass] = useState<string>("");
    const [nextStepCode, setNextStepCode] = useState(false);
    useEffect(() => {
      setCurrentUser(user);
      setEmail(user.email);
      setName(user.fullName);
    }, [user, navigation]);
    const handleChangePassword = async () => {
      const oldPassError = passwordValidator(oldPass);
      const newPassError = passwordValidator(newPass);
      const repeatPassError = passwordValidator(repeatPass);
      const checkEqualError = equaPassAndRepeatPass(newPass, repeatPass);

      if (oldPassError) {
        ToastAndroid.showWithGravity(
          oldPassError,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        return;
      } else if (newPassError) {
        ToastAndroid.showWithGravity(
          newPassError,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        return;
      } else if (repeatPassError) {
        ToastAndroid.showWithGravity(
          repeatPassError,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        return;
      } else if (checkEqualError) {
        ToastAndroid.showWithGravity(
          checkEqualError,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        return;
      }
      const userObject = {
        email: email,
        password: oldPass,
        newPassword: newPass
      };
      setIsLoading(true);
      try {
        const response = await changePass({
          username: user.email,
          password: user.password,
          account: userObject
        });
        switch (response.data.body){
          case "Old password incorrect" : {
            setIsLoading(false);
            ToastAndroid.showWithGravity(
              "Mật khẩu cũ không chính xác",
              ToastAndroid.LONG,
              ToastAndroid.CENTER
            );
          }
          case "Password changed successfully" : {
            setIsLoading(false);
            ToastAndroid.showWithGravity(
              "Đổi mật khẩu thành công",
              ToastAndroid.LONG,
              ToastAndroid.CENTER
            );
          }
        }
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    };
    const handleSave = async () => {
      const nameError = nameValidator(name);
      if (nameError) {
        ToastAndroid.showWithGravity(
          nameError,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
        return;
      }
      const userObject = {
        fullName: name,
        email: email
      };
      setIsLoading(true);
      try {
        const response = await updateUserProfile({
          accountId: user.id,
          username: user.email,
          password: user.password,
          account: userObject
        });
        if (response.status === 200) {
          setIsLoading(false);
          ToastAndroid.showWithGravity(
            "Cập nhật thành công",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
        } else {
          setIsLoading(false);
          ToastAndroid.showWithGravity(
            "Có lỗi trong quá trình cập nhật",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
        }
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    };
    return (
  <View style={styles.container}>
    {isLoading &&
      <View style={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight,
        width: windowWidth,
        zIndex: 1000,
        backgroundColor: "rgba(148,148,148,0.3)"
      }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>}
        <Image source={ImagesAssets.user} style={styles.avatar} />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Nhập địa chỉ email"
          keyboardType="email-address"
          editable={false}
        />
        <Text style={styles.label}>Họ tên:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nhập tên người dùng"
        />

        <Text style={styles.label}>Mật khẩu cũ:</Text>
        <TextInput
          style={styles.input}
          value={oldPass}
          onChangeText={setOldPass}
          placeholder="Nhập mật khẩu cũ"
        />
        <Text style={styles.label}>Mật khẩu mới:</Text>
        <TextInput
          style={styles.input}
          value={newPass}
          onChangeText={setNewPass}
          placeholder="Nhập mật khẩu mới"
        />
        <Text style={styles.label}>Nhập lại mật khẩu mới:</Text>
        <TextInput
          style={styles.input}
          value={repeatPass}
          onChangeText={setRepeatPass}
          placeholder="Nhập lại mật khẩu mới"
        />

        <Text style={{ marginBottom: 10 }} />
        <Button title="Đổi mật khẩu" onPress={handleChangePassword} />
        <Text style={{ marginBottom: 10 }} />
        <Button title="Lưu thông tin" onPress={handleSave}/>
      </View>
    );
  }
;

const styles = StyleSheet.create({
  container: {
    padding: 16

  },
  avatar: {
    alignSelf: "center",
    width: 140,
    height: 140,
    borderRadius: 40, // Đặt bo tròn hình ảnh (nửa chiều rộng)
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 2,
    color: "black"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16
  },
  roleContainer: {
    marginBottom: 16
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  radioButtonLabel: {
    fontSize: 16,
    marginLeft: 8
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  }
});

export default UserProfile;
