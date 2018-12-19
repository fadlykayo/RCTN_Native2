import {
  Platform,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const isIphoneX = Platform.OS === 'ios' && screenHeight === 812 ? true : false;

export default {isIphoneX, screenWidth, screenHeight};
