import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import { OddsItemInterface } from '../../types'
import RightSwipe from './RightSwipe'
import LeftSwipe from './LeftSwipe/LeftSwipe';
import { Text, TouchableOpacity } from "../Themed"
import Colors from '../../constants/Colors'

interface Props {
    item: OddsItemInterface
}

const OddsItem: FC<Props> = ({ item }) => {
    return (
        <Swipeable
            renderLeftActions={() => <LeftSwipe />}
            renderRightActions={() => <RightSwipe />}
            onSwipeableRightOpen={() => alert('Swipe from right')}
            onSwipeableLeftOpen={() => alert('Swipe from left')}
        >
            <TouchableOpacity lightColor='white' darkColor={Colors.dark.modal} onPress={() => alert("Pressed")}  style={styles.item} activeOpacity={.8}>
                <Text style={styles.baseTxt}>{item.name}</Text>
                <Text style={styles.baseTxt}>{item.odds} </Text>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default OddsItem

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    baseTxt: {
        fontSize: 24
    }
})