import { StyleSheet } from 'react-native'
import React from 'react'
import { OddsItemInterface } from '../../types'
import OddsItem from '../OddsItem'

const OddsList = () => {

    const data: OddsItemInterface[] = [
        { id: "1", name: "Lottery", odds: "1/42 BIL" },
        { id: "2", name: "Hair Loss", odds: "2/3" },
        { id: "3", name: "Random", odds: "1.02%" },
        { id: "4", name: "My Odds", odds: "1/4" }
    ]

    return (
        <>
            {
                data.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <OddsItem item={item} />
                        </React.Fragment>
                    )
                })
            }
            {/* Empty Space */}
            <OddsItem item={{ id: "999", name: "", odds: "" }} />
        </>
    )
}

export default OddsList

const styles = StyleSheet.create({})