import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAsyncStorageVal = async (key: string) => {
  try {
    const response = await AsyncStorage.getItem(key);
    return await JSON.parse(response);
  } catch (e) {
    // read error
    console.log(e);
  }

  console.log("Done.");
};

export const setAsyncStorageVal = async (key: string, payload: string) => {
  try {
    await AsyncStorage.setItem(key, payload);
  } catch (e) {
    // save error
    console.log(e);
  }

  console.log("Done.");
};

export const removeAsyncStorageVal = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};
