import {AsyncStorage} from 'react-native';

const gettoken = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        if (value !== null) {
            //console.log('we have data');
            //console.log(value);
            return value;
        }
        return '';
    } catch (error) {
        //console.log('we dont have data');
        return '';
        // Error retrieving data
      }
}
export default gettoken;