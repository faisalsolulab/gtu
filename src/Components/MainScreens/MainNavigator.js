import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Auth from '../Auth/AuthNavigator';
import MaterialList from '../MainScreens/MaterialList';

const MainNavigator = createStackNavigator({
  Home:Home,
  MaterialList:MaterialList,
}, {
  headerMode:'none'
}
)

const MNavigator = createAppContainer(MainNavigator);

const SNavigator = createSwitchNavigator({
  Auth: Auth,
  MainNavigator:MNavigator,
})

const SwitchNavigator = createAppContainer(SNavigator)
export default SwitchNavigator;