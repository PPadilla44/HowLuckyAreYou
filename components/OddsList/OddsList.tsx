import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native';
import { OddsListState } from '../../store/oddsItems';
import OddsItem from '../OddsItem'

interface Props {
    data: OddsListState;
}

const OddsList: FC<Props> = ({ data }) => {

    if (data.fetching || !data.data) {
        return <ActivityIndicator size={"large"} />
    }

    return (
        <>
            {
                data.data.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <OddsItem item={item} />
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default OddsList