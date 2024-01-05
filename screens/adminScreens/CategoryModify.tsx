import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const CategoryModify: React.FC = (props: any) => {
  const Router = useRoute();
  const [categoryName, setCategoryName] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSave = () => {
    // Thực hiện xử lý lưu thông tin danh mục
    console.log("Category Name:", categoryName);
    console.log("Is Active:", isActive);

    // Thêm các bước xử lý lưu dữ liệu vào cơ sở dữ liệu hoặc gọi API tại đây
  };
  const handleDelete = () => {
    Alert.alert("Xác nhận xóa", "Bạn có chắc chắn muốn xóa danh mục này không?", [
      { text: "Hủy", style: "cancel" },
      { text: "Xóa", style: "destructive", onPress: () => console.log("Xóa danh mục") }
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={categoryName}
        onChangeText={setCategoryName}
        placeholder="Nhập tên danh mục"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Trạng thái:</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>
      <Button title="Lưu" onPress={handleSave} />
      <Text style={{ marginTop: -5 }} />
      <Button title="Xóa danh mục" onPress={handleDelete} color={"red"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16

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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  }
});

export default CategoryModify;
