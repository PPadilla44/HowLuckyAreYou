import { StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import { Input, View } from '../Themed';
import TwoButtonGroup from '../TwoButtonGroup';
import SaveTryButtons from '../SaveTryButtons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OddsItemInterface, RootStackParamList } from '../../types';
import { useClicker } from '../contexts/useClicker';
import PercentInput from './PercentInput';
import FractionInput from './FractionInput';
import { useOddsItems } from '../contexts/useOddsItems';
import { addItem } from '../../store/utils/thunkerFunctions';

export function generateUUID(digits = 15) {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
    let uuid = [];
    for (let i = 0; i < digits; i++) {
        uuid.push(str[Math.floor(Math.random() * str.length)]);
    }
    return uuid.join('');
}

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const ModalForm: FC<Props> = ({ navigation }) => {

    const { state, dispatch } = useClicker();
    const { state: oState, dispatch: oDispatch } = useOddsItems();

    const [formData, setFormData] = useState({
        oddsString: state.oddsString,
        title: state.title,
        denominator: `${state.fraction.denominator}`,
        numerator: `${state.fraction.numerator}`,
        isValid: false,
        multiplier: state.multiplier,
    });

    const percentButton = "Percentage";
    const fractionButton = "Fraction";
    const buttons = [percentButton, fractionButton];

    const clearForm = () => {
        const clearedForm = {
            oddsString: "50",
            title: formData.title,
            numerator: "1",
            denominator: "2",
            multiplier: "1",
            isValid: true,
        }
        setFormData(clearedForm)
        return clearedForm;
    }

    const handleChanges = (data: { oddsString?: string, title?: string }) => {

        const tempForm = { ...formData, ...data };
        const { oddsString, title } = tempForm;

        if (oddsString.length > 0 && title.length > 0) {
            if (isNaN(parseFloat(oddsString)) || parseFloat(oddsString) > 100) {
                return
            }

            setFormData({ ...tempForm, isValid: true })
        } else {
            setFormData({ ...tempForm, isValid: false })
        }
    }

    const handleFractionChanges = (data: { denominator?: string, numerator?: string, multiplier?: string }) => {

        const tempForm = { ...formData, ...data };
        const { denominator, numerator, title } = tempForm;

        if (denominator.length > 0 && numerator.length > 0 && title.length > 0) {
            if (isNaN(parseFloat(denominator)) || isNaN(parseFloat(numerator))) {
                return
            }
            if (denominator.length < 5 && numerator.length < 3) {
                setFormData({ ...tempForm, isValid: true })
            }
        } else {
            setFormData({ ...tempForm, isValid: false })
        }
    }

    const handleTry = () => {
        if (state.fractionPref) {
            const payload = {
                title: formData.title,
                denominator: parseFloat(formData.denominator),
                numerator: parseFloat(formData.numerator),
                multiplier: formData.multiplier
            }
            dispatch!({ type: "UPDATE_FRACTION", payload })
        } else {
            const payload = {
                title: formData.title,
                oddsString: formData.oddsString,
                multiplier: formData.multiplier
            }
            dispatch!({ type: "UPDATE_PERCENT", payload })
        }
        setFormData(d => ({ ...d, isValid: false }))
        navigation.goBack();
    }

    const handleSave = async () => {
        const payload: OddsItemInterface = {
            id: `OddsItem-${generateUUID()}`,
            title: formData.title,
            multiplier: formData.multiplier,
            fraction: {
                denominator: formData.denominator,
                numerator: formData.numerator,
            },
            fractionPref: "1",
        }
        if (state.fractionPref) {
            await addItem(oState, oDispatch, payload)
        } else {
            await addItem(oState, oDispatch, {
                ...payload,
                fraction: undefined,
                oddsString: formData.oddsString
            })
        }

        setFormData(d => ({ ...d, isValid: false }))
    }

    return (
        <View testID='modalForm' style={styles.container}>

            <View style={styles.topRow}>
                {
                    state.fractionPref ?
                        <FractionInput
                            denominator={formData.denominator}
                            numerator={formData.numerator}
                            multiplier={formData.multiplier}
                            handleChanges={handleFractionChanges}
                        />
                        :
                        <PercentInput
                            oddsString={formData.oddsString}
                            changeText={handleChanges} />
                }
            </View>

            <TwoButtonGroup clearForm={clearForm} buttons={buttons} />

            <View style={styles.titleContainer}>
                <Input
                    placeholder='Title'
                    style={[styles.input, { fontSize: 24 }]}
                    inputContainerStyle={styles.inputContainer}
                    keyboardType='ascii-capable'
                    maxLength={30}
                    value={formData.title}
                    onChangeText={title => handleChanges({ title })}
                />
            </View>

            <SaveTryButtons showTry={formData.isValid} handleTry={handleTry} handleSave={handleSave} />

        </View>
    )
}

export default ModalForm

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        backgroundColor: "transparent"
    },
    topRow: {
        height: 52,
        marginBottom: 20,
        flexDirection: "row",
        marginHorizontal: 10,
        backgroundColor: "transparent"
    },
    percentWrapper: {
        flex: 1,
        backgroundColor: "transparent"
    },
    input: {
        borderRadius: 15,
        fontSize: 48,
        fontWeight: "bold",
        fontFamily: "Futura",
        textAlign: "center",
        height: 52,
    },
    percentIconContainer: {
        height: 52,
        marginLeft: 10,
        backgroundColor: "transparent"
    },
    inputContainer: {
        borderBottomWidth: 0,
    },
    titleContainer: {
        marginHorizontal: 10,
        height: 52,
        marginBottom: 25,
        backgroundColor: "transparent"
    }

})