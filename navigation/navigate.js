import react from 'react';
import SignUp from '../screens/SignUp';
import LoginScreen from '../screens/login';
import ForgotPasswordScreen from '../screens/ForgotPassword';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: False }} />
            <Stack.screen name="SignUp" component={SignUp} options={{ headerShown: False }} />
       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: False }}/>
        </Stack.Navigator>
    )
}

export default MyStack;