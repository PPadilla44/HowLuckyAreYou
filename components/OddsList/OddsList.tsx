import React, { FC } from 'react'
import { ActivityIndicator, View } from 'react-native';
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
                            <View style={{ backgroundColor: "black", width: "80%", height: 1, alignSelf: "center" }} />
                            <OddsItem item={item} />
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default OddsList