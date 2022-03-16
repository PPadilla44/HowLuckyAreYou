import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import { OddsItemInterface } from '../../types'
import RightSwipe from './RightSwipe'
import LeftSwipe from './LeftSwipe/LeftSwipe';
import { Text, TouchableOpacity } from "../Themed"
import Colors from '../../constants/Colors'
import AsyncStorage from "@react-native-async-storage/async-storage"

interface Props {
    item: OddsItemInterface
}

const deleteItem = async (id: string) => {
    try {
        await AsyncStorage.removeItem(id)
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}

const OddsItem: FC<Props> = ({ item }) => {
    return (
        <Swipeable
            renderLeftActions={() => <LeftSwipe callback={() => console.log("LEFTSWIPE")} />}
            renderRightActions={() => <RightSwipe callback={() => deleteItem(item.id)} />}
        >
            <TouchableOpacity testID='oddsItemBtn' lightColor='white' darkColor={Colors.dark.modal} onPress={() => console.log("Pressed")} style={styles.item} containerStyle={styles.itemContainer} activeOpacity={.8}>
                <Text style={styles.baseTxt}>{item.title}</Text>
                <Text style={styles.baseTxt}>{item.displayOdds} </Text>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default OddsItem

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    baseTxt: {
        fontSize: 24
    }
})