import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import SeaService from './pages/SeaService';
import Education from './pages/Education';
import Allottee from './pages/Allottee';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="SeaService" component={SeaService} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Allottee" component={Allottee} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

