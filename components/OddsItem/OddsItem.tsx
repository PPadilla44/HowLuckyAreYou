import { StyleSheet } from 'react-native'
import React, { FC, useRef } from 'react'
import { Swipeable } from 'react-native-gesture-handler'
import { OddsItemInterface } from '../../types'
import RightSwipe from './RightSwipe'
import LeftSwipe from './LeftSwipe/LeftSwipe';
import { Text, TouchableOpacity } from "../Themed"
import Colors from '../../constants/Colors'
import { removeItem } from '../../store/utils/thunkerFunctions'
import { useOddsItems } from '../contexts/useOddsItems'

interface Props {
    item: OddsItemInterface
}


const OddsItem: FC<Props> = ({ item }) => {

    const { state, dispatch } = useOddsItems();
    const ref = useRef<Swipeable>(null)

    const deleteItem = async (id: string) => {
        removeItem(state, dispatch, id);
        ref.current?.state.dragX.setValue(0)
        ref.current?.state.rowTranslation.setValue(0);
    }

    return (
        <Swipeable
            ref={ref}
            renderLeftActions={() => <LeftSwipe callback={() => console.log("LEFTSWIPE")} />}
            renderRightActions={() => <RightSwipe callback={() => deleteItem(item.id)} />}
            overshootRight={false}
            overshootLeft={false}
        >
            <TouchableOpacity testID='oddsItemBtn' lightColor='white' darkColor={Colors.dark.modal} onPress={() => console.log("Pressed")} style={styles.item} containerStyle={styles.itemContainer} activeOpacity={.8}>
                <Text style={styles.baseTxt}>{item.title}</Text>
                <Text style={styles.baseTxt}>{item.oddsString} </Text>
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