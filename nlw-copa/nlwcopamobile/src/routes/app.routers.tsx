
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import { Find } from '../screens/Find';
import { Details } from '../screens/Details';

import { Platform } from 'react-native';
import { PlusCircle, SoccerBall } from 'phosphor-react-native'

const { Navigator, Screen } = createBottomTabNavigator();



export function AppRouters() {
  return (
    <Navigator screenOptions={{
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: 'yellow',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        position: 'absolute',
        height: 70,
        backgroundColor: 'gray',
        borderTopWidth: 0,

      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -10 : 0
      }
    }}

    >

      <Screen
        name="new"
        component={New}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} />,
          tabBarLabel: 'Novo Bolão'
        }}
      />
      <Screen
        name="pools"
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} />,
          tabBarLabel: 'Meus Bolões'
        }}
      />
      <Screen
        name="find"
        component={Find}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}