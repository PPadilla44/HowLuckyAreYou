import { Text as DefaultText, View as DefaultView, TouchableOpacity as DefaultTouchableOpacity  } from 'react-native';
import { Icon as DefaultIcon, IconProps as DefaultIconProps } from 'react-native-elements';

import Colors from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';

export const useThemeColor = (
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) => {
    // const theme = useColorScheme();
    const theme = "light";

    const colorFromProps = props[theme];
    
    return colorFromProps ? colorFromProps : Colors[theme][colorName]
}

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];
export type IconProps = ThemeProps & DefaultIconProps;

export const Text = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor}, "text");

    return <DefaultText style={[{color}, style]} {...otherProps} />
}

export const View = (props: ViewProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return <DefaultView style={[{backgroundColor}, style]}  {...otherProps} />
}

export const TouchableOpacity = (props: TouchableOpacityProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "button");
    return <DefaultTouchableOpacity style={[{backgroundColor}, style]} {...otherProps} />
}

export const Icon = (props: IconProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "icon");
    return <DefaultIcon tvParallaxProperties={undefined} color={color} {...otherProps}  />
}