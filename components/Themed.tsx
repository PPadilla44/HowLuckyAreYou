import { Text as DefaultText, View as DefaultView, TouchableOpacity as DefaultTouchableOpacity, ScrollViewProps as dScrollViewProps } from 'react-native';
import { Icon as DefaultIcon, IconProps as DefaultIconProps, Input as DefaultInput, InputProps as DefaultInputProps } from 'react-native-elements';
import { ScrollView as DefaultScrollView, NativeViewGestureHandlerProps } from  "react-native-gesture-handler";

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
export type InputProps = ThemeProps & DefaultInputProps;
export type ScrollViewProps = ThemeProps & NativeViewGestureHandlerProps & dScrollViewProps

export const Text = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <DefaultText style={[{ color, fontFamily: "Futura" }, style]} {...otherProps} />
}

export const View = (props: ViewProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return <DefaultView style={[{ backgroundColor }, style]}  {...otherProps} />
}

export const TouchableOpacity = (props: TouchableOpacityProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "button");
    return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />
}

export const Icon = (props: IconProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "icon");
    return <DefaultIcon tvParallaxProperties={undefined} color={color} {...otherProps} />
}

export const Input = (props: InputProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "input");
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
    return <DefaultInput style={[{backgroundColor, color }, style]} {...otherProps} />
}

export const ScrollView = (props: ScrollViewProps) => {
    const { style, darkColor, lightColor, ...otherProps  } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
    return <DefaultScrollView style={[{backgroundColor}, style]} {...otherProps} />
}