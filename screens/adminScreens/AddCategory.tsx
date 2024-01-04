import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button } from 'react-native';

const CategoryModify = () => {
  const [categoryName, setCategoryName] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSave = () => {
    // Thực hiện xử lý lưu thông tin danh mục
    console.log('Category Name:', categoryName);
    console.log('Is Active:', isActive);

    // Thêm các bước xử lý lưu dữ liệu vào cơ sở dữ liệu hoặc gọi API tại đây
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Tên danh mục</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
        }}
        placeholder="Nhập tên danh mục"
        value={categoryName}
        onChangeText={(text) => setCategoryName(text)}
      />

      <Text style={{ fontSize: 18, marginBottom: 10 }}>Trạng thái</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ marginRight: 10 }}>Khả dụng</Text>
        <Switch
          value={isActive}
          onValueChange={(value) => setIsActive(value)}
        />
      </View>

      <Button
        title="Lưu"
        onPress={handleSave}
      />
    </View>
  );
};

export default CategoryModify;
