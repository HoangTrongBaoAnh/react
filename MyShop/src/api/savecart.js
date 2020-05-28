import {AsyncStorage} from 'react-native';

const savecart = async (cartarray) => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cartarray));
};

export default savecart;