import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
} from "react-native";

import { makeID } from "../../funcs";

import CustomText from "../../components/CustomText";
import CustomSVG from "../../components/CustomSVG";
import CustomStatusBar from "../../components/CustomStatusBar";
import ImageAnimal from "../../components/animal_components/ImageAnimal";
import OptionsToBuy from "./OptionsToBuy";

import { connect } from "react-redux";
import {
    addAnimalBadge,
    cancelAddedAnimal,
} from "../../store/actions/animalActions";

import { FontAwesome5 } from "@expo/vector-icons";

class Details extends Component {
    constructor() {
        super();
        this.state = {
            showOptionsToBuy: false,
            statusShopCar: false,
            animation: false,
            showCar: true,
            opacityAnimation: 1,
        };
    }

    openModal = () => {
        this.setState({ showOptionsToBuy: true });
    };

    onBuy = (data) => {
        if (!this.state.statusShopCar) {
            let id = makeID(this.props.animalBadge);
            data[0].idShopCar = id;
            this.props.onAdd(data);
        }
    };

    toggleStatusCar = (data) => {
        //Alert.alert("Antes",`${this.props.animalBadge.length}`)
        let id = "";
        let cont = 0;
        let test = false;
        if (!this.state.statusShopCar) {
            this.setState({ animation: true, showCar: false });
            setTimeout(() => {
                let loop = () => {
                    this.state.opacityAnimation -= 0.1;
                    if (!this.state.opacityAnimation) {
                        clearInterval(loop);
                    }
                };
                setInterval(loop, 50);
                this.setState({ animation: false, showCar: true });
            }, 500);
            if (this.props.animalBadge.length >= 1) {
                id = makeID(this.props.animalBadge);
            } else {
                id = (Math.random() * 100).toString(36).replace(".", "");
            }
            data[0].idShopCar = id;
            this.props.onAdd(data);
        } else {
            this.props.onCancel();
        }
        /*setTimeout(() => 
            {
                Alert.alert("Depois",`${this.props.animalBadge.length}`)
        }, 2000)*/
        this.setState({ statusShopCar: !this.state.statusShopCar });
    };

    render() {
        const data = { ...this.props.route.params };

        return (
            <View style={styles.container}>
                <CustomStatusBar hidden={false} default={true} />
                <OptionsToBuy
                    {...data}
                    isVisible={this.state.showOptionsToBuy}
                    onCancel={() => this.setState({ showOptionsToBuy: false })}
                />
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FontAwesome5
                            name={"arrow-left"}
                            size={30}
                            color={"#24538C"}
                        />
                        <View style={{ flexDirection: "row", paddingLeft: 5 }}>
                            <CustomText
                                font={"anson"}
                                text={"Detalhes"}
                                style={styles.title}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.detailsContainer}>
                    <View style={{ alignItems: "center" }}>
                        <ImageAnimal
                            style={{
                                resizeMode: "contain",
                                height: 250,
                                width: 250,
                            }}
                            directory={data.nameimg}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <CustomText
                            text={"Descrição:"}
                            style={styles.descTitles}
                        />
                        <CustomText
                            font={"bariol"}
                            text={data.desc}
                            style={styles.desc}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {data.discount ? (
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CustomText
                                            font={"anson"}
                                            text={`R$ ${data.price}`}
                                            style={styles.oldPrice}
                                        />
                                        <CustomText
                                            font={"anson"}
                                            text={",90"}
                                            style={styles.oldCents}
                                        />
                                    </View>
                                ) : null}
                                <View style={{ flexDirection: "row" }}>
                                    <CustomText
                                        font={"anson"}
                                        text={`R$ ${
                                            data.discount
                                                ? parseInt(
                                                      (
                                                          data.price -
                                                          (data.price / 100) *
                                                              data.discount
                                                      ).toString()
                                                  )
                                                : data.price
                                        }`}
                                        style={styles.price}
                                    />
                                    <CustomText
                                        font={"anson"}
                                        text={",90"}
                                        style={styles.cents}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            with: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 15,
                        }}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.6}
                            onPress={() => this.onBuy(Array(1).fill(data))}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <CustomText
                                    text={"Comprar"}
                                    font={"anson"}
                                    style={styles.buttonText}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={
                                !this.state.animation
                                    ? styles.addToCar
                                    : [
                                          styles.addedToCar,
                                          {
                                              opacity:
                                                  this.state.opacityAnimation,
                                          },
                                      ]
                            }
                            onPress={() =>
                                this.toggleStatusCar(Array(1).fill(data))
                            }
                        >
                            {this.state.showCar ? (
                                <View style={{ flex: 1 }}>
                                    <View
                                        style={{
                                            position: "absolute",
                                            top: 1,
                                            right: 1,
                                        }}
                                    >
                                        <CustomSVG
                                            type={"icons"}
                                            source={
                                                !this.state.statusShopCar
                                                    ? "add"
                                                    : "checked"
                                            }
                                            width={8}
                                            height={8}
                                        />
                                    </View>
                                    <CustomSVG
                                        type={"icons"}
                                        source={"detailsCar"}
                                        width={50}
                                        height={50}
                                    />
                                </View>
                            ) : (
                                <CustomSVG
                                    type={"icons"}
                                    source={"whiteChecked"}
                                    height={55}
                                    width={50}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9e9e9",
    },
    header: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#a3a3a3",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: 50,
        paddingBottom: 3,
        paddingLeft: 3,
    },
    detailsContainer: {
        backgroundColor: "#fafafa",
    },
    textContainer: {
        paddingLeft: 10,
        textAlign: "justify",
    },
    title: {
        fontSize: 30,
        color: "#24538C",
    },
    descTitles: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#24538C",
    },
    desc: {
        fontSize: 16,
        textAlign: "justify",
    },
    price: {
        fontSize: 35,
        color: "#24538C",
    },
    oldPrice: {
        fontSize: 20,
        color: "#777",
        textDecorationLine: "line-through",
    },
    cents: {
        fontSize: 14,
        color: "#24538C",
    },
    oldCents: {
        fontSize: 10,
        color: "#777",
        textDecorationLine: "line-through",
    },
    button: {
        width: 150,
        height: 50,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#24538C",
        borderRadius: 15,
        marginRight: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 30,
    },
    addToCar: {
        borderWidth: 3,
        borderColor: "#24538C",
        height: 60,
        width: 60,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    addedToCar: {
        borderWidth: 3,
        borderColor: "#24538C",
        height: 60,
        width: 60,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#24538C",
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (animalBadge) => dispatch(addAnimalBadge(animalBadge)),
        onCancel: () => dispatch(cancelAddedAnimal()),
    };
};

const mapStateToProps = ({ animals }) => {
    return {
        animalBadge: animals.animalBadge,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
