import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsScreen from '../screens/Details';
import LoginScreen from '../screens/login';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;