import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import HomeScreen from '@/Screen/Home';
import ExploreScreen from '@/Screen/Explore';
import FeaturedScreen from '@/Screen/Featured';
import TrendingScreen from '@/Screen/Trending';
import NewArrivalScreen from '@/Screen/NewArriaval';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'magnify';
          } else if (route.name === 'Featured') {
            iconName = 'gift';
          } else if (route.name === 'Trending') {
            iconName = 'chart-line';
          } else if (route.name === 'New Arrival') {
            iconName = 'plus-box';
          }
          return <IconButton icon={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Featured" component={FeaturedScreen} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="New Arrival" component={NewArrivalScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
