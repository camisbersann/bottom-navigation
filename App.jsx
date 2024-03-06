import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Contact from './src/screens/Conatct';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
       options={{
        tabBarLabel: 'Início',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color={452831} size={32} />
        ),
      }} />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={452831} size={32} />
          ),
          
        }}/>
        <Tab.Screen name="Contact" component={Contact}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="phone" color={452831} size={32} />
          ),
          tabBarBadge: 3,
        }}/>
      </Tab.Navigator>

      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
