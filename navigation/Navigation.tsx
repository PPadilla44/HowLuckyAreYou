import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import Dropdown from '../screens/Dropdown';
import Main from '../screens/Main';
import NotFoundScreen from '../screens/NotFoundScreen';
import Settings from '../screens/Settings';
import { RootStackParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { MainScreenOptions, ModalScreenOptions, SettingsScreenOptions } from './ScreenOptions';

export default function Navigation() {

    const colorScheme = useColorScheme();

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

    const colorScheme = useColorScheme();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={Main} options={({ navigation }: RootTabScreenProps<'Main'>) => MainScreenOptions(colorScheme, navigation)} />
            <Stack.Screen name="Settings" component={Settings} options={({ navigation }: RootTabScreenProps<'Settings'>) => SettingsScreenOptions(colorScheme, navigation)} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={Dropdown} options={({ navigation }: RootTabScreenProps<'Modal'>) => ModalScreenOptions(colorScheme, navigation)} />
            </Stack.Group>
        </Stack.Navigator>
    );
}