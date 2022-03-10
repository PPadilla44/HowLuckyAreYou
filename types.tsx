import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface OddsItemInterface {
    id: string
    name: string
    odds: string
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;


export type RootTabParamList = {
    Main: undefined;
    Modal: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = NativeStackScreenProps<RootStackParamList>;
