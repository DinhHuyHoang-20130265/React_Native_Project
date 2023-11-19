import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/elements/Background";
import Button from "../components//elements/Button";
import TextInput from "../components/elements/TextInput";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { theme } from "../components/elements/theme";
import { ImagesAssets } from "../assets/img/ImagesAssets";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }]
    });
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} style={undefined}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
          <Text style={styles.link}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});
