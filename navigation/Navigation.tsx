import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Dropdown from '../screens/Dropdown';
import Main from '../screens/Main';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { MainScreenOptions, ModalScreenOptions } from './ScreenOptions';

export default function Navigation() {

    // const colorScheme = useColorScheme();
    const colorScheme = "light";

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}


const Stack = createNativeStackNavigator<RootStackParamList>();


function RootNavigator() {

    // const colorScheme = useColorScheme();
    const colorScheme = "light";


    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={Main} options={({ navigation }: RootTabScreenProps<'Main'>) => MainScreenOptions(colorScheme, navigation)} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={Dropdown} options={({ navigation }: RootTabScreenProps<'Modal'>) => ModalScreenOptions(colorScheme, navigation)} />
            </Stack.Group>
        </Stack.Navigator>
    );
}