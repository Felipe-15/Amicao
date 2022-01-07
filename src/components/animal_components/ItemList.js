import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import CustomText from "../CustomText";
import ImageAnimal from "../animal_components/ImageAnimal";

const ItemList = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.openDetails(props.id)}
            style={styles.container}
            activeOpacity={0.6}
        >
            {props.discount ? (
                <View style={styles.discountContainer}>
                    <View style={styles.discountCircle}>
                        <CustomText
                            font={"anson"}
                            text={`${props.discount}%`}
                            style={styles.discount}
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <CustomText
                            font={"anson"}
                            text={`${props.price}`}
                            style={styles.oldPrice}
                        />
                        <CustomText
                            font={"anson"}
                            text={`,${props.cents}`}
                            style={styles.oldCents}
                        />
                    </View>
                </View>
            ) : null}
            {props.newAnimal ? (
                <View style={styles.newsContainer}>
                    <CustomText
                        font={"anson"}
                        style={styles.newsText}
                        text={"Novo"}
                    />
                </View>
            ) : null}
            <ImageAnimal
                style={{ resizeMode: "contain", height: 185, width: 185 }}
                directory={props.nameimg}
            />
            <CustomText font={"anson"} text={props.name} style={styles.name} />
            <View style={{ flexDirection: "row" }}>
                <CustomText
                    font={"anson"}
                    text={`R$ ${
                        props.discount
                            ? parseInt(
                                  (
                                      props.price -
                                      (props.price / 100) * props.discount
                                  ).toString()
                              )
                            : props.price
                    }`}
                    style={styles.price}
                />
                <CustomText
                    font={"anson"}
                    text={`,${props.cents}`}
                    style={styles.cents}
                />
            </View>
        </TouchableOpacity>
    );
};

export default ItemList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: Dimensions.get("screen").height * 0.42,
        borderBottomWidth: 1,
        borderBottomColor: "#a3a3a3",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    price: {
        fontSize: 32,
        color: "#24538C",
    },
    oldPrice: {
        fontSize: 15,
        color: "#777",
        textDecorationLine: "line-through",
    },
    cents: {
        fontSize: 11,
        color: "#24538C",
    },
    oldCents: {
        fontSize: 8,
        color: "#777",
        textDecorationLine: "line-through",
    },
    name: {
        fontSize: 37,
    },
    discountContainer: {
        position: "absolute",
        right: 20,
        top: 15,
        height: 60,
        alignItems: "center",
    },
    discountCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#24538C",
        justifyContent: "center",
        alignItems: "center",
    },
    discount: {
        fontSize: 20,
        color: "#fff",
        transform: [{ rotate: "30deg" }],
    },
    newsContainer: {
        position: "absolute",
        left: 15,
        top: 15,
        backgroundColor: "#24538C",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        borderRadius: 5,
    },
    newsText: {
        color: "#fff",
        fontSize: 25,
    },
});
