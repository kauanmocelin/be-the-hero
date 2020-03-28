import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Details from './pages/Details';

export default function Routes() {
    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions={{ headerShown: false }}>
                <appStack.Screen name="Incidents" component={Incidents} />
                <appStack.Screen name="Details" component={Details} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}