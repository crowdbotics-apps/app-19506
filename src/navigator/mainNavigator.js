import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile89794Navigator from '../features/UserProfile89794/navigator';
import Settings89793Navigator from '../features/Settings89793/navigator';
import Settings89791Navigator from '../features/Settings89791/navigator';
import SignIn289789Navigator from '../features/SignIn289789/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile89794: { screen: UserProfile89794Navigator },
Settings89793: { screen: Settings89793Navigator },
Settings89791: { screen: Settings89791Navigator },
SignIn289789: { screen: SignIn289789Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
