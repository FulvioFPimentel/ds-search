import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

const Stack = createStackNavigator();

import Home from './pages/Home'
import CreateRecord from './pages/CreateRecord';

export type StackParam = {
    Home: undefined;
    CreateRecord: undefined;
}

export type navigateProp = StackNavigationProp<StackParam>;

const  Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
               headerShown:false,
               cardStyle: {
                   backgroundColor: '#0B1F34'
               }
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateRecord" component={CreateRecord} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;

