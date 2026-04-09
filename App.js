
import ClienteScreen from './src/Screen/ClienteScreen';
import HomeScreen from './src/Screen/HomeScreen';
import { ClienteServicio } from './src/Services/ClienteServicio';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ClienteServicio>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ClienteScreen" component={ClienteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ClienteServicio>
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