import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

import TabBarSkeleton from './src/components/tabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeScreen from './src/screens/home/home';
import ShopScreen from './src/screens/shops/shops';
import WalletScreen from './src/screens/wallet/wallet';
import SettingsScreen from './src/screens/settings/settings';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator     
      tabBar={props => <TabBarSkeleton {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shops" component={ShopScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="More" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
