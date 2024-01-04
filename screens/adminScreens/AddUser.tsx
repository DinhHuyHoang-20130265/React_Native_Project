import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, Button, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { ImagesAssets } from "../../assets/img/ImagesAssets";

interface AddUserProps {
  // Định nghĩa các props nếu cần
}

const AddUser: React.FC<AddUserProps> = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('user');
  const [status, setStatus] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleSave = () => {
    // Xử lý lưu thông tin người dùng tại đây
    console.log('Họ tên:', name);
    console.log('Email:', email);
    console.log('Vai trò:', role);
    console.log('Trạng thái:', status);
    console.log('Mật khẩu:', password);
    // Thêm logic lưu vào cơ sở dữ liệu hoặc gửi request API nếu cần
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

      <Text style={styles.label}>Mật khẩu:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
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



      <Button title="Tạo tài khoản" onPress={handleSave} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 2,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    width: '100%',
  },
  roleContainer: {
    marginBottom: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioButtonLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatar: {
    alignSelf: "center",
    width: 140,
    height: 140,
    borderRadius: 40, // Đặt bo tròn hình ảnh (nửa chiều rộng)
    marginBottom: 16
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default AddUser;
