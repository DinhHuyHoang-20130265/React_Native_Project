import AsyncStorage from "@react-native-async-storage/async-storage";

export const getInitialState = async () => {
  let userObj = null;
  let viewedlist: any = [];
  let bookmarks: any = [];

  try {
    const userString = await AsyncStorage.getItem("userObj");
    userObj = userString !== null ? JSON.parse(userString) : null;

    const viewedString = await AsyncStorage.getItem("viewed");
    viewedlist = viewedString !== null ? JSON.parse(viewedString) : [1];

  } catch (error) {
    console.error("Error fetching initial state:", error);
  }

  return {
    userObj: userObj,
    viewedlist: viewedlist,
    bookmarks: bookmarks
  };
};
