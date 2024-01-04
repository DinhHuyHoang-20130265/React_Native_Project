import React, { useState } from "react";
import { View, Text, TextInput, Switch, StyleSheet, Button, Alert, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { ImagesAssets } from "../../assets/img/ImagesAssets";

interface UserModifyProps {
  // Định nghĩa các props nếu cần
}

const UserModify: React.FC<UserModifyProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [status, setStatus] = useState<boolean>(false);

  const handleSave = () => {
    // Xử lý lưu thông tin người dùng tại đây
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Status:", status);
    // Thêm logic lưu vào cơ sở dữ liệu hoặc gửi request API nếu cần
  };

  const handleDelete = () => {
    // Xử lý xóa tài khoản người dùng tại đây
    Alert.alert("Xác nhận xóa", "Bạn có chắc chắn muốn xóa tài khoản không?", [
      { text: "Hủy", style: "cancel" },
      { text: "Xóa", style: "destructive", onPress: () => console.log("Xóa tài khoản") }
    ]);
    // Thêm logic xóa tài khoản tại đây khi triển khai
  };

  const handleChangePassword = () => {
    // Xử lý khi người dùng nhấn nút "Đổi mật khẩu"
    Alert.alert("Thông báo", "Chức năng đổi mật khẩu sẽ được triển khai trong tương lai.");
    // Thêm logic đổi mật khẩu tại đây khi triển khai
  };

  return (
    <View style={styles.container}>
      <Image source={ImagesAssets.user} style={styles.avatar} />

      <Text style={styles.label}>Họ tên:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nhập tên người dùng"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Nhập địa chỉ email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Vai trò:</Text>
      <View style={styles.roleContainer}>
        <RadioButton.Group onValueChange={(value) => setRole(value)} value={role}>
          <View style={styles.radioButtonContainer}>
            <RadioButton.Android value="user" />
            <Text style={styles.radioButtonLabel}>Người dùng</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton.Android value="admin" />
            <Text style={styles.radioButtonLabel}>Admin</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Trạng thái:</Text>
        <Switch value={status} onValueChange={setStatus} />
      </View>

      <Button title="Cập nhật mật khẩu mới" onPress={handleChangePassword} />
      <Text style={{ marginBottom: 10 }} />
      <Button title="Lưu" onPress={handleSave}  />
      <Text style={{ marginBottom: 10 }} />
      <Button title="Xóa tài khoản" onPress={handleDelete} color={"red"} />
    </View>
  );
};

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

export default UserModify;
