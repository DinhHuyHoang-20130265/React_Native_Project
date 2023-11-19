import React, { useState } from "react";
import { emailValidator } from "../helpers/emailValidator";
import Background from "../components/elements/Background";
import TextInput from "../components/elements/TextInput";
import Button from "../components/elements/Button";
import { Image } from "react-native";
import { ImagesAssets } from "../assets/img/ImagesAssets";
import { theme } from "../components/elements/theme";
import { Text } from "react-native-paper";

export default function ForgotPassword({ navigation }: any) {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate("Login");
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
        label="Email của bạn"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text: any) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Bạn sẽ nhận được mã code 6 số để xác minh"
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Gửi mã xác nhận
      </Button>
    </Background>
  );
}
