import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import mainhome from '../screens/mainhome.js';
import donorhome from '../screens/donorhome.js';
import doneehome from '../screens/doneehome.js';
import driverhome from '../screens/driverhome.js';

const screens = {
  mainhome: {
      screen: mainhome
  },
  donorhome: {
      screen: donorhome
  },
  doneehome: {
      screen: doneehome
  },
  driverhome: {
      screen: driverhome
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);