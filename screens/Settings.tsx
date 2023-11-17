/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const Settings: React.FC = () => {

  const [notificationSwitch, setNotificationSwitch] = useState<boolean>(false);
  const [darkModeSwitch, setDarkModeSwitch] = useState<boolean>(false);

  const onNotificationSwitchChange = () => {
    setNotificationSwitch(!notificationSwitch);
  };

  // Function to handle dark mode switch change
  const onDarkModeSwitchChange = () => {
    setDarkModeSwitch(!darkModeSwitch);
    // Add logic for handling dark mode setting change
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* Settings options */}
      <View style={styles.settingOption}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationSwitch}
          onValueChange={onNotificationSwitchChange}
        />
      </View>

      <View style={styles.settingOption}>
        <Text>Dark Mode</Text>
        <Switch value={darkModeSwitch} onValueChange={onDarkModeSwitchChange} />
      </View>

      {/* Add more setting options as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default Settings;
