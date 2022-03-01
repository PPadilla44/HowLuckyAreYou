import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const Main = () => {

    return (
        <View style={styles.container}>
            <View style={styles.wrapper} >
                <Icon
                
                    name='chevron-down'
                    type='evilicon'
                    color='#517fa4'
                    tvParallaxProperties={undefined}
                />
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Times Clicked</Text>
                    <Text style={styles.clickAmnt}>100</Text>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Test Your Luck</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Probability</Text>
                    <Text style={styles.probText} >16.9%</Text>
                </View>
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
        justifyContent: "space-between",
        height: "80%",
    },
    subContainer: {
        alignItems: "center",
        justifyContent: "center"
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
    btnText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    title: {
        color: "#FBF8F1",
        fontWeight: "bold",
        fontSize: 24
    },
    clickAmnt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 64,
    },
    probText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 48,
    }
})