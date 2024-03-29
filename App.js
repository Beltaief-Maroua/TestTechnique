import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './src/Components/OnBoarding';
import Login from './src/Components/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>

   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

