import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Contact from './src/screens/Conatct';
import { Feather } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
       options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="home"
            size={24}
            color={focused ? "#131313" : "#d6d6d6"}
          />
        ),
        tabBarLabel: "Home",
        tabBarActiveTintColor: "#131313",
        tabBarInactiveTintColor: "#777",
      }} />

        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#d6d6d6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#777",
        }}/>

        <Tab.Screen name="Contact" component={Contact}
        options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="phone"
            size={24}
            color={focused ? "#131313" : "#d6d6d6"}
          />
        ),
        tabBarLabel: "Perfil",
        tabBarActiveTintColor: "#131313",
        tabBarInactiveTintColor: "#777",
        tabBarBadge: 3,
      }}/>
      </Tab.Navigator>

      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
