import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import React from 'react'
import {Home} from '../screens'

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()


const MainApp = ({navigation}) => {
    return(
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen  name="Home" component={Home} />
        </BottomTab.Navigator>
    )
}

const App = () => {
    return(
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default App