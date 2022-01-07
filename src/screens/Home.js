import React, { Component } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { FontAwesome, MaterialIcons, Foundation } from "@expo/vector-icons";
import tips from "../../assets/images/tips/1.png";

import { getDate } from "../funcs";

import axios from "axios";

import { connect } from "react-redux";
import { setData } from "../store/actions/animalActions";

import { server } from "../common";

import CustomText from "../components/CustomText";
import CustomStatusBar from "../components/CustomStatusBar";
//import OpenScreen from "./OpenScreen"
import MiniItemList from "../components/home_components/MiniItemList";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            animals: [],
            promotions: [],
            news: [],
            loaded: true,
        };
    }

    // componentDidMount = async () => {
    //     await this.props.onLoad()
    //     this.setState({loaded: true})
    // }

    loadData = async () => {
        const res = await axios.get(`${server}/animals`);
        const promotions = res.data.filter((element) => element.discount);
        const news = res.data.filter(
            (animal) => this.getDate(animal.date) <= 14
        );
        news.forEach((animal) => (animal.newDays = this.getDate(animal.date)));
        news.sort((first, next) => first.newDays - next.newDays);
        this.setState({
            animals: res.data.reverse(),
            promotions: promotions.reverse(),
            news,
            loaded: true,
        });
        // this.setState({news: res.data.filter(animal => this.getDate(animal.date)),loaded: true})
    };

    // loadData = async () => {
    //     data = await axios.get(`${server}/animals`)
    //     this.props.onLoad(data)
    //     this.setState(
    //         {news: this.props.allAnimals.filter(animal => this.getDate(animal.date)),
    //          promotions: this.props.allAnimals.filter(animal => animal.discount)
    //     })
    // }

    openDetails = (animalId, price) => {
        let data = null;
        if (price) {
            data = {
                ...this.props.promotions
                    .concat(this.props.news)
                    .filter((animal) => animal.id == animalId)[0],
            };
        }
        this.props.navigation.navigate("Details", { ...data, home: true });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomStatusBar hidden={false} default={true} />
                {this.state.loaded ? (
                    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
                        {this.props.navigation.setOptions({
                            tabBarVisible: true,
                        })}
                        <View style={styles.containerTitle}>
                            <CustomText
                                font={"anson"}
                                text={"Início"}
                                style={{ color: "#24538C", fontSize: 45 }}
                            />
                        </View>
                        <View style={styles.promoContainer}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: 120,
                                    paddingLeft: -5,
                                }}
                            >
                                <MaterialIcons
                                    name={"attach-money"}
                                    color={"#24538C"}
                                    size={30}
                                />
                                <CustomText
                                    font={"anson"}
                                    style={styles.promoTitle}
                                    text={"Promocões"}
                                />
                            </View>
                            <FlatList
                                horizontal={true}
                                data={this.props.promotions}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => (
                                    <MiniItemList
                                        {...item}
                                        cents={90}
                                        openDetails={this.openDetails}
                                    />
                                )}
                            />
                        </View>
                        <View style={styles.newsContainer}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: 140,
                                    paddingLeft: -5,
                                }}
                            >
                                <Foundation
                                    name={"burst-new"}
                                    color={"#24538C"}
                                    size={35}
                                />
                                <CustomText
                                    font={"anson"}
                                    style={styles.newsTitle}
                                    text={"Novidades"}
                                />
                            </View>
                            <FlatList
                                horizontal={true}
                                data={this.props.news}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => (
                                    <MiniItemList
                                        {...item}
                                        newAnimal
                                        cents={90}
                                        openDetails={this.openDetails}
                                    />
                                )}
                            />
                        </View>
                    </View>
                ) : (
                    <View style={{ flex: 1 }}>
                        {this.props.navigation.setOptions({
                            tabBarVisible: false,
                        })}
                        <OpenScreen />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTitle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        borderBottomWidth: 1,
        borderColor: "#a3a3a3",
        marginBottom: 5,
        paddingBottom: 1,
    },
    promoContainer: {
        flex: 5,
        paddingLeft: 3,
    },
    promoTitle: {
        color: "#24538C",
        fontSize: 30,
    },
    newsContainer: {
        flex: 5,
        paddingLeft: 3,
    },
    newsTitle: {
        color: "#24538C",
        fontSize: 30,
    },
});

const mapStateToProps = ({ animals }) => {
    return {
        news: animals.news,
        promotions: animals.promotions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(setData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
