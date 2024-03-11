import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcomepage from '../screens/Welcomepage'
import Home from '../screens/Home'
import SearchPage from '../screens/SearchPage'

const Stack = createNativeStackNavigator();

const Appnavigation = () =>{

    
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home} screenOptions={{headerShown:true}}/>
                <Stack.Screen name="Welcomepage" component={Welcomepage}/>
                <Stack.Screen name="SearchPage" component={SearchPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigation;