import { AsyncStorage } from '@react-native-async-storage/async-storage';

async function storeData() {
    console.log("In storeData");

    try {
        await AsyncStorage.setItem('@storage_Key', 'stored value')
    } catch (e) {
        // saving error
    }
}


async function getData() {
    console.log("In getData");
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            // value previously stored
            console.log("value is", value);
        }
    } catch (e) {
        // error reading value
    }
}

async function removeData() {
    console.log("In removeData");

    try {
        await AsyncStorage.removeItem('@MyApp_key')
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}


export { storeData, getData, removeData };