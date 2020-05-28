import {AsyncStorage} from 'react-native';

const getcart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            //console.log('we have data');
            //console.log(value);
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
        //console.log('we dont have data');
        return [];
        // Error retrieving data
      }
}
export default getcart;