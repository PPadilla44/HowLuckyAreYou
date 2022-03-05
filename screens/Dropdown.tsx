import { Platform, StyleSheet } from 'react-native';
import { View, Text, Icon, ScrollView, TouchableOpacity } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { OddsItemInterface, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import ModalForm from '../components/ModalForm';
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
        <View style={styles.container}  darkColor="#252525">
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

            <ScrollView darkColor="#252525" >

                <ModalForm />

                {
                    data.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <OddsItem item={item} />
                                <Separator />
                            </React.Fragment>
                        )
                    })
                }
                {/* Empty Space */}
                <OddsItem item={{ id: "999", name: "", odds: "" }} />

            </ScrollView>

            <TouchableOpacity
                lightColor='white'
                darkColor={Colors.dark.modal}
                onPress={() => alert("Settings")}
                style={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderRadius: 15,
                }}
                containerStyle={{
                    width: 50,
                    height: 50,
                    position: "absolute",
                    right: 10,
                    bottom: "5%",
                    alignItems: "center",
                    justifyContent: "center"
                }} >

                <Icon
                    name='tune'
                    size={40}
                    lightColor={Colors.dark.modal}
                    darkColor='white'
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