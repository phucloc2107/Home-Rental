import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, StatusBar, Text, Pressable } from 'react-native';
import COLORS from '../../consts/colors';
import HomeScreen from './HomeScreen';

const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor={COLORS.tranparent} />
            <Image
                source={require('../../assets/onboardImage.jpg')}
                style={style.image}
            />

            <View style={style.indicatorContainer}>
                <View style={style.indicator}></View>
                <View style={style.indicator}></View>
                <View style={[style.indicator, style.indicatorActive]}></View>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <Text style={style.title}>Find your</Text>
                <Text style={style.title}>Sweet home</Text>

                <View style={{ marginTop: 10 }}>
                    <Text style={style.textStyle}>Schedule visits in just a few click</Text>
                    <Text style={style.textStyle}>visit in just a few click</Text>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                <Pressable onPress={() => navigation.navigate("HomeScreen")}>
                    <View style={style.btn}>
                        <Text style={{ fontSize: 18, color: COLORS.white }}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100
    },
    indicatorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        flexDirection: 'row'
    },
    indicator: {
        height: 3,
        backgroundColor: COLORS.grey,
        width: 30,
        marginHorizontal: 5,
        borderRadius: 5
    },
    indicatorActive: {
        backgroundColor: COLORS.dark
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.dark
    },
    textStyle: {
        fontSize: 16
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.dark,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 20
    }
});

export default OnBoardScreen;