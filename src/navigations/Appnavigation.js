import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcomepage from '../screens/Welcomepage'
import Home from '../screens/Home'
import SearchPage from '../screens/SearchPage'
import ProfilePage from '../screens/ProfilePage'
import EditProfile from '../screens/EditProfile'
import SongPage from '../screens/SongPage'

const Stack = createNativeStackNavigator();

const Appnavigation = () =>{

    
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcomepage" component={Welcomepage}/>
                <Stack.Screen name="SearchPage" component={SearchPage}/>
                <Stack.Screen name="ProfilePage" component={ProfilePage}/>
                <Stack.Screen name="EditPage" component={EditProfile}/>
                <Stack.Screen name="SongPage" component={SongPage}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigation;