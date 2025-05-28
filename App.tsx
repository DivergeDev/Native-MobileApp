import { GluestackUIProvider, Box, View as GView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/HomeScreen';
import { CommunitiesScreen } from './src/screens/CommunitiesScreen';
import { DivergeScreen } from './src/screens/DivergeScreen';
import { DMScreen } from './src/screens/DMScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { Home, Users, Mic2, MessageSquare, User } from 'lucide-react-native';
import Animated, { withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    elevation: 0,
    shadowOpacity: 0,
    paddingHorizontal: 16,
  },
  tabBarItem: {
    paddingVertical: 8,
  }
});

const TabBarIcon = ({ Icon, focused }: { Icon: any; focused: boolean }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(focused ? 1.1 : 1) }],
    };
  });

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      py="$3"
    >
      <Animated.View style={animatedStyle}>
        <Box>
          <Icon 
            size={24} 
            color={focused ? '#006ADC' : '#64748B'} 
            strokeWidth={focused ? 2.5 : 2}
          />
        </Box>
      </Animated.View>
      {focused && (
        <Box
          position="absolute"
          bottom="$0"
          width="$8"
          height="$1"
          backgroundColor="#006ADC"
          borderRadius="$full"
        />
      )}
    </Box>
  );
};

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarItemStyle: styles.tabBarItem,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon Icon={Home} focused={focused} />,
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Communities"
            component={CommunitiesScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon Icon={Users} focused={focused} />,
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Diverge"
            component={DivergeScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon Icon={Mic2} focused={focused} />,
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="DM"
            component={DMScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon Icon={MessageSquare} focused={focused} />,
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabBarIcon Icon={User} focused={focused} />,
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
