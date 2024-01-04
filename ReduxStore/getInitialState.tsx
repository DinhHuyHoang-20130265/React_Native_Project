import AsyncStorage from "@react-native-async-storage/async-storage";

export const getInitialState = async () => {
  let userObj = null;
  let viewedlist: any = [];
  let bookmarks: any = [];

  try {
    const userString = await AsyncStorage.getItem("userObj");
    userObj = userString !== null ? JSON.parse(userString) : {
      email: "456@gmail.com",
      password: "fun123",
      fullName: "Hikkkkne",
      admin: true,
    };

    const viewedString = await AsyncStorage.getItem("viewed");
    viewedlist = viewedString !== null ? JSON.parse(viewedString) : [];

  } catch (error) {
    console.error("Error fetching initial state:", error);
  }

  return {
    userObj: userObj,
    viewedlist: viewedlist,
    bookmarks: bookmarks
  };
};
