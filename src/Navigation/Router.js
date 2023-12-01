import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
const Router = () => {
  const ScreenOptions = {headerShown: false};
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
export default Router