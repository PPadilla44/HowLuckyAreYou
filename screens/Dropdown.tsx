import { Platform, StyleSheet,TouchableOpacity } from 'react-native';
import { View, Text, Icon } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { OddsItemInterface, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import ModalForm from '../components/ModalForm';
import { BaseButton, FlatList } from "react-native-gesture-handler"
import { Separator } from '../components/UI';
import OddsItem from '../components/OddsItem';


const Dropdown = ({ }: RootTabScreenProps<"Modal">) => {

    const data: OddsItemInterface[] = [
        { id: "1", name: "Lottery", odds: "1/42 BIL" },
        { id: "2", name: "Hair Loss", odds: "2/3" },
        { id: "3", name: "Random", odds: "1.02%" },
        { id: "4", name: "My Odds", odds: "1/4" }
    ]

    return (
        <View style={styles.container} darkColor="#252525">
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

            <ModalForm />

            <FlatList
                data={data}
                renderItem={({ item }) => <OddsItem item={item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Separator />} />

            <TouchableOpacity
            onPress={() => alert("Settings")}
            style={{
                backgroundColor: "black",
                width: 50,
                height: 50,
                borderRadius: 20,
                position: "absolute",
                right: 10,
                bottom: 35,
                alignItems: "center",
                justifyContent: "center"
            }} >

                <Icon
                    name='dashboard-customize'
                    // type=''
                    size={40}
                    color={'white'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})