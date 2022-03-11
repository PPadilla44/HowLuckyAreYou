import { StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import { Input, View } from '../Themed';
import TwoButtonGroup from '../TwoButtonGroup';
import SaveTryButtons from '../SaveTryButtons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useClicker } from '../contexts/useClicker';
import PercentInput from './PercentInput';
import FractionInput from './FractionInput';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const ModalForm: FC<Props> = ({ navigation }) => {

    const { state, dispatch } = useClicker();

    const [formData, setFormData] = useState({
        oddsString: state.oddsString,
        title: state.title,
        denominator: `${state.fraction.denominator}`,
        numerator: `${state.fraction.numerator}`,
        isValid: false
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const percentButton = "Percentage";
    const fractionButton = "Fraction";
    const buttons = [percentButton, fractionButton];


    const handleChanges = (data: {}) => {
        const tempForm = { ...formData, ...data };
        const { oddsString, title } = tempForm;

        if (parseFloat(oddsString) > 100) {
            return
        }
        if (oddsString.length > 0 && title.length > 0) {
            setFormData({ ...tempForm, isValid: true })
        } else {
            setFormData({ ...tempForm, isValid: false })
        }
    }

    const handleFractionChanges = (data: { denominator?: string, numerator?: string }) => {
        const tempForm = { ...formData, ...data };
        const { denominator, numerator, title } = tempForm;

        if (denominator.length > 0 && numerator.length > 0 && title.length > 0) {
            setFormData({ ...tempForm, isValid: true })
        } else {
            setFormData({ ...tempForm, isValid: false })
        }
    }

    const handleTry = () => {
        if (buttons[selectedIndex] == percentButton) {
            const payload = {
                title: formData.title,
                oddsString: formData.oddsString
            }
            dispatch!({ type: "UPDATE_PERCENT", payload })
        } else {
            const payload = {
                title: formData.title,
                denominator: parseFloat(formData.denominator),
                numerator: parseFloat(formData.numerator),
            }
            dispatch!({ type: "UPDATE_FRACTION", payload })
        }
        setFormData(d => ({ ...d, isValid: false }))
        navigation.goBack();
    }

    const handleSave = () => {
        console.log("Running SAVE");
        console.log(formData);
        setFormData(d => ({ ...d, isValid: false }))
    }

    return (
        <View style={styles.container}>

            <View style={styles.topRow}>
                {
                    buttons[selectedIndex] === percentButton ?
                        <PercentInput oddsString={formData.oddsString} changeText={handleChanges} />
                        :
                        <FractionInput denominator={formData.denominator} numerator={formData.numerator} handleChanges={handleFractionChanges} />
                }

            </View>

            <TwoButtonGroup buttons={buttons} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

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