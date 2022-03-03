import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import { Icon } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Dropdown from '../screens/Dropdown';
import Main from '../screens/Main';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {

    // const colorScheme = useColorScheme();
    const colorScheme = "dark";

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
    const colorScheme = "dark";


    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={Main}
                options={({ navigation }: RootTabScreenProps<'Main'>) => ({
                    headerTitle: "",
                    headerStyle: { backgroundColor: Colors[colorScheme].background },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <Icon
                                name='gear'
                                type='evilicon'
                                size={40}
                            />
                        </Pressable>
                    ),
                })}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={Dropdown} options={{ headerTitle: "", headerStyle: { backgroundColor: Colors[colorScheme].background }, headerShadowVisible: false }} />
            </Stack.Group>
        </Stack.Navigator>
    );
}