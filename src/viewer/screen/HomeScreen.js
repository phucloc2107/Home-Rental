import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, ScrollView, TextInput, Dimensions, Pressable, FlatList } from 'react-native';
import COLORS from '../../consts/colors';
import houses from '../../consts/houses';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
        const categoryList = ['Popular', 'Recommended', 'Nearest'];
        return (
            <View style={style.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <Text style={[
                            style.categoryListText,
                            index == selectedCategoryIndex && style.activeCategoryListText,
                        ]}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </View>
        );
    };

    const ListOptions = () => {
        const optionsList = [
            { title: 'Buy a Home', img: require('../../assets/house1.jpg') },
            { title: 'Rent a Home', img: require('../../assets/house2.jpg') },
        ];

        return (
            <View style={style.optionListContainer}>
                {optionsList.map((option, index) => (
                    <View style={style.optionCard} key={index}>
                        {/* House image */}
                        <Image source={option.img} style={style.optionCardImage} />

                        {/* Option title */}
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                            {option.title}
                        </Text>
                    </View>
                ))}
            </View>
        )
    }

    const Card = ({ houses }) => {
        return (
            <Pressable onPress={() => navigation.navigate('DetailsScreen', houses)}>
                <View style={style.card}>
                    <Image source={houses.image} style={style.cardImage} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{houses.title}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.blue }}>$1,500</Text>
                    </View>
                    <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>{houses.location}</Text>
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
                            <Text style={style.facilityText}>100m</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle='dark-content' />
            <View style={style.header}>
                <View>
                    <Text style={{ color: COLORS.grey }}>Location</Text>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 20 }}>Canada</Text>
                </View>
                <Image
                    source={require('../../assets/person.jpg')}
                    style={style.profileImage}
                />
            </View>

            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={style.searchInputContainer}>
                        <Icon name="search" color={COLORS.grey} size={25} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>
                    <View style={style.sortBtn}>
                        <Icon name='tune' size={25} color={"white"} />
                    </View>
                </View>

                {/* Render list options */}
                <ListOptions />

                {/* Render categories */}
                <ListCategories />

                {/* Render Card */}
                <FlatList
                    contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={houses}
                    renderItem={({ item }) => <Card houses={item} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12
    },
    sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    optionListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
    },
    optionCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    optionCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey
    },
    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    card: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        borderRadius: 20,
        padding: 15
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15
    },
    facility: {
        marginRight: 10,
        flexDirection: 'row',
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.grey
    }
})

export default HomeScreen;