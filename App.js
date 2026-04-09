import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClienteServicio } from './src/Services/ClienteServicio';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ClienteServicio>
      <NavigationContainer>
        <StackActions.Navigator>
          <StackActions.Screen name="Home" component={HomeScreen} />
          <StackActions.Screen name="ClienteScreen" component={ClienteScreen} />
          <StackActions.Screen name="ClienteForm" component={ClienteForm} />
        </StackActions.Navigator>
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