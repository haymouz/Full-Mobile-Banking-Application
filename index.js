/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/HomeScreen';
// import BarcodeScanner from './src/barcodeScanner';
// import HomeScreen from './src/HomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
