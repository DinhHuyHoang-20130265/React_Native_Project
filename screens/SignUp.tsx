import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-paper";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { theme } from "../components/elements/theme";
import Background from "../components/elements/Background";
import TextInput from "../components/elements/TextInput";
import Button from "../components/elements/Button";
import { ImagesAssets } from "../assets/img/ImagesAssets";
import { signUp } from "../apiCalls/signUp";

export default function SignUp({ navigation }: any) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    try {
      await signUp(name.value, email.value, password.value);
      navigation.reset({
        index: 0,
        routes: [{ name: "SignUp" }]
      });
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  return (
    <Background>
      <Image source={ImagesAssets.logo} style={{ width: 100, height: 100, borderRadius: 8, marginBottom: 10 }} />
      <Text style={{
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: "bold",
        paddingVertical: 1
      }}>Nông Lâm News</Text>
      <TextInput
        label="Tên của bạn"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text: any) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: any) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: any) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Đăng ký
      </Button>
      <View style={styles.row}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});
