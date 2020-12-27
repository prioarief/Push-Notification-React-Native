import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import React from 'react'
import {Home, Login, Profile} from '../screens'
import { BottomNav } from '../components'

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()


const MainApp = ({navigation}) => {
    return(
        <BottomTab.Navigator initialRouteName="Home" tabBar={(data) => <BottomNav {...data} />}>
            <BottomTab.Screen  name="Home" component={Home} />
            <BottomTab.Screen  name="Profile" component={Profile} />
        </BottomTab.Navigator>
    )
}

const App = () => {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default App