import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcomepage from '../screens/Welcomepage'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

const Appnavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Welcomepage" component={Welcomepage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigation;