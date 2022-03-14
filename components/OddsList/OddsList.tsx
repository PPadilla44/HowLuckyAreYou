import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { OddsItemInterface } from '../../types'
import OddsItem from '../OddsItem'

interface Props {
    data: OddsItemInterface[];
}

const OddsList: FC<Props> = ({ data }) => {

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