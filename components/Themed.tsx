import { Text as DefaultText, View as DefaultView, ScrollViewProps as dScrollViewProps } from 'react-native';
import { Icon as DefaultIcon, IconProps as DefaultIconProps, Input as DefaultInput, InputProps as DefaultInputProps, ButtonGroup as DButtonGroup, ButtonGroupProps as DButtonGroupProps } from 'react-native-elements';
import { ScrollView as DefaultScrollView, NativeViewGestureHandlerProps, TouchableOpacity as DefaultTouchableOpacity } from "react-native-gesture-handler";

import Colors from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';

export const useThemeColor = (
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) => {
    // const theme = useColorScheme();
    const theme = "dark";

    const colorFromProps = props[theme];

    return { colorFromProps: colorFromProps ? colorFromProps : Colors[theme][colorName], theme }
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
export type ScrollViewProps = ThemeProps & NativeViewGestureHandlerProps & dScrollViewProps;
export type ButtonGroupProps = ThemeProps & DButtonGroupProps;

export const Text = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text").colorFromProps;

    return <DefaultText style={[{ color, fontFamily: "Futura" }, style]} {...otherProps} />
}

export const View = (props: ViewProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background").colorFromProps;
    const shadowColor = useThemeColor({  }, "text").colorFromProps;
    return <DefaultView style={[{ backgroundColor, shadowColor }, style]}  {...otherProps} />
}

export const TouchableOpacity = (props: TouchableOpacityProps) => {
    const { style, containerStyle, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "button").colorFromProps;
    const oppositeColor = useThemeColor({ }, "text").colorFromProps;
    return <DefaultTouchableOpacity style={[{ backgroundColor, borderColor: oppositeColor, shadowColor: oppositeColor }, style]} containerStyle={[{ backgroundColor, borderColor: oppositeColor }, containerStyle]} {...otherProps} />
}

export const Icon = (props: IconProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "icon").colorFromProps;
    return <DefaultIcon tvParallaxProperties={undefined} color={color} {...otherProps} />
}

export const Input = (props: InputProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const { colorFromProps, theme } = useThemeColor({ light: lightColor, dark: darkColor }, "input");
    const backgroundColor = colorFromProps;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text").colorFromProps;
    return (

        <>
            <DefaultInput
                style={[{ backgroundColor: "transparent", color }, style]}
                keyboardAppearance={theme}
                {...otherProps}
            />
            <View style={{ backgroundColor, width: "100%", height: "100%", opacity: .5, position: "absolute", borderRadius: 15, zIndex: -10 }} />
        </>
    )
    // return <DefaultInput style={[{backgroundColor: "transparent", color }, style]} keyboardAppearance={theme} {...otherProps} />
}

export const ScrollView = (props: ScrollViewProps) => {
    const { style, darkColor, lightColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background").colorFromProps;
    return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
}

export const ButtonGroup = (props: ButtonGroupProps) => {
    const { containerStyle, darkColor, lightColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "input").colorFromProps;
    
    return <DButtonGroup containerStyle={[{ backgroundColor: color, borderColor: color }, containerStyle]}  {...otherProps} />
}