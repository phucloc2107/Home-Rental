import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, ImageBackground, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const DetailsScreen = ({ navigation, route }) => {
    const house = route.params;

    const InteriorImage = ({ image }) => {
        return (
            <Image
                source={image}
                style={style.interiorImage} />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={style.backgroundImageContainer}>
                    <ImageBackground style={style.backgroundImage} source={house.image}>
                        <View style={style.header}>
                            {/* Button go back */}
                            <View style={style.headerBtn}>
                                <Icon
                                    name='arrow-back-ios'
                                    size={20}
                                    onPress={navigation.goBack}
                                    color='black'
                                />
                            </View>
                            {/* trai ♥ */}
                            <View style={style.headerBtn}>
                                <Icon name='favorite' size={20} color={COLORS.red} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={style.virtualTag}>
                        <Text style={{ color: COLORS.white }}>Virtual Tour</Text>
                    </View>
                </View>

                <View style={style.detailsContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{house.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={style.ratingTag}>
                                <Text style={{ color: COLORS.white }}>4.8</Text>
                            </View>
                            <Text style={{ fontSize: 13, marginLeft: 5, color: 'black' }}>155 ratings</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 16, color: COLORS.grey }}>
                        {house.location}
                    </Text>
                    {/* Icon */}
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={style.facility}>
                            <Icon name='hotel' size={18} />
                            <Text style={style.facilityText}>2</Text>
                        </View>

                        <View style={style.facility}>
                            <Icon name='bathtub' size={18} />
                            <Text style={style.facilityText}>2</Text>
                        </View>

                        <View style={style.facility}>
                            <Icon name='aspect-ratio' size={18} />
                            <Text style={style.facilityText}>100m area</Text>
                        </View>
                    </View>
                    {/* detail */}
                    <Text style={{ marginTop: 20, color: COLORS.grey }}>{house.details}</Text>
                    {/* InteriorImage  */}
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={house.interiors}
                        renderItem={({ item }) => <InteriorImage image={item} />}
                    />
                    <View style={style.footer}>
                        <View>
                            <Text style={{ color: COLORS.blue, fontWeight: 'bold', fontSize: 18 }}>
                                $1500
                            </Text>
                            <Text style={{ color: COLORS.grey, fontWeight: 'bold', fontSize: 12 }}>
                                Total price
                            </Text>
                        </View>

                        <View style={style.bookNowBtn}>
                            <Text style={{ color: COLORS.white }}>Book Now</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        height: 350,
        marginTop: 20,
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden'
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    virtualTag: {
        top: -20,
        backgroundColor: COLORS.dark,
        height: 40,
        width: 120,
        borderRadius: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40
    },
    ratingTag: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facility: {
        marginRight: 10,
        flexDirection: 'row',
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.grey
    },
    interiorImage: {
        width: width / 3 - 20,
        height: 80,
        marginRight: 10,
        borderRadius: 10
    },
    footer: {
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookNowBtn: {
        backgroundColor: COLORS.dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        height: 50
    }
})

export default DetailsScreen;