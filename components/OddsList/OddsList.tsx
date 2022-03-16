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
            <OddsItem item={{ id: "999", title: "", displayOdds: "", multiplier: "1" }} />
        </>
    )
}

export default OddsList