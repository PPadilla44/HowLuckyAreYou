import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import SubContainer from '../components/SubContainer';

const Main = () => {

    let [fontsLoaded] = useFonts({
        LexendDeca_700Bold,
    });

    const [clickAmt, setClickAmt] = useState(0);
    const [chance, setChance] = useState(1 / 2);
    const [didHit, setDidHit] = useState(false);
    const [results, setResults] = useState({color: "", text: ""});

    if (!fontsLoaded) {
        return <View><Text>LOADING..</Text></View>
    }

    const handlePress = () => {
        console.log("****************");

        setClickAmt(prevCount => prevCount + 1);

        const max = 1 / (chance);

        const randomNumFromMax = Math.ceil(Math.random() * max);

        console.log(randomNumFromMax, max);

        if (randomNumFromMax === max) {
            console.log("GOT IT");
            const pressAmnt = clickAmt + 1;
            const userOdds = pressAmnt / max;

            if (userOdds < 1) {
                setResults({ color: "green", text:"YOU ARE REALLY LUCKY" });
            } else if (userOdds > 1) {
                setResults({ color: "red", text:"YOU ARE NOT LUCKY" });
            } else {
                setResults({ color: "blue", text:"YOU ARE normal" });
            }



            setDidHit(true);
        }

    }


    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.dropArrow}>

                <Icon
                    name='chevron-down'
                    type='evilicon'
                    color='white'
                    size={40}
                    tvParallaxProperties={undefined}
                />
            </TouchableOpacity>

            <View style={styles.wrapper} >

                <SubContainer
                    text={`${clickAmt}`}
                    textStyle={styles.clickAmnt}
                    title={`Times Clicked`}
                />

                {
                    didHit
                        ?
                        <View style={{ ...styles.btnDone, backgroundColor: results.color } } >
                            <Text style={styles.btnDoneText}>{results.text}</Text>
                        </View>
                        :
                        <TouchableOpacity style={styles.btn} onPress={handlePress} activeOpacity={0.7}>
                            <Text style={styles.btnText}>Test Your Luck</Text>
                        </TouchableOpacity>
                }

                <SubContainer
                    text={`${chance * 100}%`}
                    textStyle={styles.probText}
                    title={`Probability`}
                />

            </View>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#004552",
        padding: 10
    },
    wrapper: {
        justifyContent: "flex-end",
        alignItems: "center",
        height: "80%",
    },
    btn: {
        backgroundColor: "#35858B",
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    btnDone: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    btnText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        fontFamily: "LexendDeca_700Bold",
        textAlign: "center"
    },
    btnDoneText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        fontFamily: "LexendDeca_700Bold",
        textAlign: "center"

    },

    clickAmnt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 64,
        fontFamily: "LexendDeca_700Bold"
    },
    probText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 48,
        textAlign: "center",
        fontFamily: "LexendDeca_700Bold"
    },
    dropArrow: {
        backgroundColor: "black",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        position: "absolute",
        top: 50,
    }
})