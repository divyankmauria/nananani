import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import CallScreen from './src/screens/CallScreen';
import LanguagesScreen from './src/screens/LanguagesScreen';
import TextChatScreen from './src/screens/TextChatScreen';
import AuntyProfileScreen from './src/screens/AuntyProfileScreen';
import AuntyDirectoryScreen from './src/screens/AuntyDirectoryScreen';
import BookSessionScreen from './src/screens/BookSessionScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator 
        initialRouteName="Signup"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#FF8C42',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Ionicons 
              name="menu" 
              size={24} 
              color="#fff" 
              style={{ marginLeft: 16 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          drawerActiveTintColor: '#FF8C42',
          drawerInactiveTintColor: '#558B2F',
          drawerStyle: {
            backgroundColor: '#F8F9FA',
            width: 280,
          },
        })}
      >
        <Drawer.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ 
            title: 'Welcome to Call a Nani',
            drawerItemStyle: { display: 'none' } // Hide from drawer
          }}
        />
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="TextChat" 
          component={TextChatScreen} 
          options={{ 
            title: 'Free Text Chat',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="AuntyDirectory" 
          component={AuntyDirectoryScreen} 
          options={{ 
            title: 'Find Nanis',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="BookSession" 
          component={BookSessionScreen} 
          options={{ 
            title: 'Book Session',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
            drawerItemStyle: { display: 'none' } // Hide from drawer, accessed via navigation
          }}
        />
        <Drawer.Screen 
          name="AuntyProfile" 
          component={AuntyProfileScreen} 
          options={{ 
            title: 'Create Nani Profile',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={size} color={color} />
            ),
            drawerItemStyle: { display: 'none' } // Hide from drawer, accessed via signup
          }}
        />
        <Drawer.Screen 
          name="Call" 
          component={CallScreen} 
          options={{ 
            title: 'Call a Nani',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Languages" 
          component={LanguagesScreen} 
          options={{ 
            title: 'Languages',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="language" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
