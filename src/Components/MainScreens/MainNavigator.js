import React from 'react';
import {createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import {Dimensions} from 'react-native';
import Home from './Home';
import Auth from '../Auth/AuthNavigator';
import MaterialList from '../MainScreens/MaterialList';
import Description from './Description';
import DrawerMenu from './drawerMenu';
import Addmoney from './paytm';

const MainNavigator = createStackNavigator({
  Home:Home,
  MaterialList:MaterialList,
  Description:Description,
  paytm:Addmoney
}, {
  headerMode:'none'
}
)

const MNavigator = createAppContainer(MainNavigator);

const Drawer = createDrawerNavigator(
  {
    MNavigator,
  },
  {
    contentComponent:DrawerMenu
  }
)

const DrawerNavigator = createAppContainer(Drawer);


const SNavigator = createSwitchNavigator({
  Auth: Auth,
  MainNavigator:DrawerNavigator,
})

const SwitchNavigator = createAppContainer(SNavigator)
export default SwitchNavigator;