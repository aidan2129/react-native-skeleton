import React, {useEffect} from 'react';
import {useColorScheme, Dimensions} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

import TabBarSkeleton from './src/components/tabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatScreen from './src/screens/chat/chat';
import ShopScreen from './src/screens/practices/practices';
import CalendarScreen from './src/screens/calendar/calendar';
import SettingsScreen from './src/screens/settings/settings';
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [key, setKey] = React.useState(0);
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      setKey(key + 1);
    });
    return () => subscription?.remove();
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer key={key}>
      <Tab.Navigator tabBar={props => <TabBarSkeleton {...props} />}>
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Practices" component={ShopScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
