import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/ui/IconButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
            headerRight: ({ tintColor}) => {
              return <IconButton
                icon='add'
                size={24}
                color={tintColor}
                onPress={() => navigation.navigate('AddPlace')}
              />
            }
          })} />
          <Stack.Screen name='AddPlace' component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
